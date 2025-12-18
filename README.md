# 🚀 Tomas Castro - Portfolio

Modern and responsive personal portfolio website showcasing my projects, skills, and professional experience as a Full-Stack Developer.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://tomas-castro.vercel.app)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-purple)](https://vitejs.dev/)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and professional design with smooth animations
- 🌓 **Dark/Light Mode** - Toggle between themes with system preference detection
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 📧 **Contact Form** - Integrated with Resend API for serverless email functionality
- 💬 **WhatsApp Integration** - Direct contact button with pre-filled message
- 🔍 **SEO Optimized** - Meta tags, structured data, and noscript content for crawlers
- 🚀 **Multi-page Navigation** - React Router for seamless page transitions
- 🎯 **iOS Compatible** - Legacy browser support with polyfills
- ⚡ **Fast Performance** - Optimized bundle with code splitting

## 🛠️ Built With

### Frontend
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.4** - Build tool
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **Framer Motion 12.23.25** - Animation library
- **React Router DOM 7.11.0** - Client-side routing
- **Lucide React 0.555.0** - Icon library

### Backend/Services
- **Resend 6.5.2** - Email API for contact form
- **Vercel** - Hosting and serverless functions

### DevOps & Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes
- **Terser** - JavaScript minification
- **React Snap** - Pre-rendering for SEO

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm/yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/tomcasss/tomasPortfolio.git
   cd tomasPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   
   Create a `.env` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```
   
   Get your API key from [Resend](https://resend.com/api-keys)

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build with pre-rendering (for SEO)
npm run build:snap

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
tomasPortfolio/
├── api/                      # Serverless functions
│   └── send-email.js         # Resend email handler
├── public/                   # Static assets
│   ├── hero.png              # Profile image
│   ├── portfolio.png         # Portfolio project image
│   ├── resume.pdf            # CV/Resume
│   └── rythme.jpg            # Project image
├── src/
│   ├── components/           # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── WhatsAppButton.tsx
│   ├── contexts/             # React contexts
│   │   └── ThemeContext.tsx
│   ├── pages/                # Page components
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── ExperiencePage.tsx
│   │   ├── HomePage.tsx
│   │   ├── ProjectsPage.tsx
│   │   └── SkillsPage.tsx
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── .env.example              # Environment variables template
├── vercel.json               # Vercel configuration
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"

2. **Add Environment Variables**
   - In Vercel Dashboard → Settings → Environment Variables
   - Add `RESEND_API_KEY` with your API key

3. **Deploy**
   ```bash
   git push origin main
   ```
   Vercel will automatically deploy on push

### Alternative Deployment
```bash
# Build the project
npm run build

# The dist/ folder is ready to deploy
```

## 🌐 Live Demo

Check out the live version: [https://tomas-castro.vercel.app](https://tomas-castro.vercel.app)

## 📄 Pages

- **Home** (`/`) - Hero section with introduction
- **About** (`/about`) - Personal background and what I bring
- **Skills** (`/skills`) - Technical skills categorized by type
- **Experience** (`/experience`) - Professional experience timeline
- **Projects** (`/projects`) - Portfolio of recent work
- **Contact** (`/contact`) - Contact form and information

## 🎨 Features in Detail

### Dark Mode
- System preference detection
- Manual toggle with floating button
- Persistent across sessions (localStorage)
- Smooth transitions between themes

### Contact Form
- Serverless email functionality via Resend API
- Form validation
- Loading states and feedback messages
- Fallback to direct email if JavaScript disabled

### SEO Optimization
- Meta tags (title, description, keywords)
- Open Graph tags for social media
- Twitter Card support
- Structured data (JSON-LD)
- Noscript fallback for crawlers
- Pre-rendering support with react-snap

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Touch-friendly navigation
- Optimized images for different screen sizes

## 🔧 Configuration

### Vite Config
- Legacy plugin for iOS 10+ support
- Polyfills for older browsers
- CSS target: Chrome 61+
- Code splitting optimization

### Tailwind Config
- Dark mode: class strategy
- Custom breakpoints
- Extended color palette

### TypeScript Config
- Strict mode enabled
- ES2020 target
- Module resolution: bundler

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari 10+
- Edge (latest)
- iOS Safari 10+
- Android Chrome (latest)

## 🤝 Contact

**Tomas Castro** - Junior Full-Stack Developer

- 📧 Email: [tomasce2004@gmail.com](mailto:tomasce2004@gmail.com)
- 💼 LinkedIn: [tomas-castro04](https://www.linkedin.com/in/tomas-castro04)
- 💻 GitHub: [tomcasss](https://github.com/tomcasss)
- 📱 WhatsApp: [+506 8573-3208](https://wa.me/50685733208)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by Tomas Castro © 2025
