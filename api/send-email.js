import { Resend } from "resend";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  // Check for API key
  const apiKey = process.env.RESEND_API_KEY?.trim();
  
  console.log('Environment check:', {
    hasApiKey: !!apiKey,
    apiKeyLength: apiKey?.length,
    apiKeyPrefix: apiKey?.substring(0, 8)
  });

  if (!apiKey) {
    console.error('RESEND_API_KEY not found in environment variables');
    return res.status(500).json({ 
      success: false, 
      message: "Server configuration error: Missing API key" 
    });
  }

  const { name, email, subject, message } = req.body;

  console.log('Request body:', { name, email, hasSubject: !!subject, hasMessage: !!message });

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: "Missing required fields",
      required: ["name", "email", "message"]
    });
  }

  try {
    const resend = new Resend(apiKey);
    
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "tomasce2004@gmail.com",
      reply_to: email,
      subject: subject || "New message from your portfolio",
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('Email sent successfully:', data);
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    return res.status(500).json({ 
      success: false, 
      message: "Failed to send email",
      error: error.message,
      details: error.response?.data || error.toString()
    });
  }
}
