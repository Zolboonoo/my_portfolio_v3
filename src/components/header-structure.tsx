import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import "@/styles/main.css";
import "@/styles/mediaquery.css";

function Header() {
  return (
    <React.StrictMode>
      <div className='header h-16 max-auto sticky rounded-lg pl-2 items-center bg-zinc-100 dark:bg-zinc-950'>
        <a href="/IndexPage" className="top-2 py-2 px-2">Logo</a>
        <div className="flex">
          <ul className='header h-16 max-auto top-2 sticky rounded-lg px-2 py-2 bg-zinc-100 dark:bg-zinc-950 '>
            <a className="page-header-title page-header-title:hover" href="/IndexPage">Home</a>
            <a className="page-header-title page-header-title:hover" href="/AboutPage">About me</a>
            <a className="page-header-title page-header-title:hover" href="/PortfolioPage">Portfolio</a>
          </ul>
          <div className="flex px-2 py-2 content-between">
            <Link legacyBehavior href="/HirePage" className='pl-2 ml-4'>
              <Button variant="outline">Hire me</Button>
            </Link>
            <div>
              <ModeToggle/>
            </div>
          </div>
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