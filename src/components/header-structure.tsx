"use client";
import React from "react";
import Image from "next/image";
import "@/styles/main.css";
import "@/styles/media-query.css";
// import MyLightImage from "/assets/cal_logo.png";
// import MyDarkImage from "/assets/cal_logo_dark.png";

import { NavigationMenuDemo } from "@/components/navigation-menu";

function Header() {
  return (
    <React.StrictMode>
      <div className='header h-16 max-auto sticky rounded-lg pl-2 items-center bg-zinc-100 dark:bg-zinc-950'>
        <a href="/" className="header h-16 max-auto top-2 sticky rounded-lg px-2 bg-zinc-100 dark:bg-zinc-950">
          <Image
            className="hidden dark:block object-fill w-[200]"
            src="/assets/cal_logo_dark.png"
            alt="dark-mode-image"
            width={200}
            height={100}
          />
          <Image
            className="block dark:hidden object-fill w-[200]"
            src="/assets/cal_logo.png"
            alt="light-mode-image"
            width={200}
            height={100}
          />
        </a>
        <a href="/" className="top-2 py-2 px-2"></a>
        <div className="header h-16 max-auto top-2 sticky rounded-lg px-2 py-2 bg-zinc-100 dark:bg-zinc-950 ">
          <NavigationMenuDemo/>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Header;