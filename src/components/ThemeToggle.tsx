import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <Moon className="text-gray-800" size={24} />
        ) : (
          <Sun className="text-yellow-400" size={24} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
