"use client";
import React from "react";
import Image from "next/image";
import "@/styles/main.css";
import "@/styles/mediaquery.css";
// import MyLightImage from "/assets/cal_logo.png";
// import MyDarkImage from "/assets/cal_logo_dark.png";

import { NavigationMenuDemo } from "@/components/navigation-menu";

function Header() {
  return (
    <React.StrictMode>
      <div className='header h-16 max-auto sticky rounded-lg pl-2 items-center bg-zinc-100 dark:bg-zinc-950'>
        <div className="header h-16 max-auto top-2 sticky rounded-lg px-2 bg-zinc-100 dark:bg-zinc-950">
          <Image
            className="hidden dark:block"
            src="/assets/cal_logo_dark.png"
            alt="dark-mode-image"
            width={200}
            height={100}
          />
          <Image
            className="block dark:hidden"
            src="/assets/cal_logo.png"
            alt="light-mode-image"
            width={200}
            height={100}
          />
        </div>
        <a href="/" className="top-2 py-2 px-2"></a>
        <div className="header h-16 max-auto top-2 sticky rounded-lg px-2 py-2 bg-zinc-100 dark:bg-zinc-950 ">
          <NavigationMenuDemo/>
        </div>
      </div>
    </React.StrictMode>
  );
};

// function Header(){
//   return (
//     <React.StrictMode>
//       <Menubar>
//         <MenubarMenu>
//           <MenubarTrigger>File</MenubarTrigger>
//           <MenubarContent>
//             <MenubarItem>
//               New Tab <MenubarShortcut>⌘T</MenubarShortcut>
//             </MenubarItem>
//             <MenubarItem>New Window</MenubarItem>
//             <MenubarSeparator />
//             <MenubarItem>Share</MenubarItem>
//             <MenubarSeparator />
//             <MenubarItem>Print</MenubarItem>
//           </MenubarContent>
//         </MenubarMenu>
//       </Menubar>
//     </React.StrictMode>
//   );
// };


export default Header;