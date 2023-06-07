'use client';

import { useState, useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FiSun, FiMoon } from 'react-icons/fi';

export const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  useLayoutEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('dark-theme');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('dark-theme');
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    const newTheme = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');

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
