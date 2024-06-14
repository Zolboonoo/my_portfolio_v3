"use client";
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='header h-16 max-auto sticky rounded-lg px-4 justify-between items-center flex bg-zinc-100 dark:bg-zinc-950'>
      <div className='header-right h-16 max-auto top-2 sticky rounded-lg px-4 py-2 justify-between items-center flex bg-zinc-100 dark:bg-zinc-950'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-3 text-black dark:text-white text-2xl">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-3 text-black dark:text-white text-2xl">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-3 text-black dark:text-white text-2xl">
          <FaTwitter />
        </a>
      </div>
      <p className="m-0">© 2024 CAL Corporation. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
