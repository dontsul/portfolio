'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiSun, FiMoon } from 'react-icons/fi';

export const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    const newTheme = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');

    // Добавьте этот код для применения класса стиля для темы
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  };

  return (
    <div
      className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-gray-200 dark:bg-blue-gray-900"
      onClick={handleToggle}
    >
      {!isDarkMode ? (
        <FiSun className="text-gray-900" />
      ) : (
        <FiMoon className="text-gray-600 dark:text-gray-300" />
      )}
    </div>
  );
};
