import { useState } from 'react';
import Link from 'next/link';
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { ModeToggle } from './mode-toggle';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gray-900 text-white">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <p className="text-xl font-bold">Your Logo</p>
        </Link>
        <nav className="space-x-4">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/about">
            <p>About Me</p>
          </Link>
          <Link href="/works">
            <p>My Works</p>
          </Link>
        </nav>
      </div>
      <div>
        <button
          className="inline-flex items-center justify-center p-2 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none"
          onClick={toggleDarkMode}
        >
          {darkMode ? <SunIcon className="w-6 h-6 text-yellow-500" /> : <MoonIcon className="w-6 h-6 text-gray-300" />}
        </button>
        <Link href="/hire">
          <p className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Hire Me</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
