import React from "react";
import PageHeader from "./header-title-design";
import Image from "next/image";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import "@/styles/main.css";

function Header() {
  return (
    <React.StrictMode>
      <div className='header h-16 max-auto sticky rounded-lg px-4 justify-between items-center flex bg-zinc-100 dark:bg-zinc-950'>
      <a href="/IndexPage" className="logo">
      <Image
      src="/public/assets/cal_logo.png"
        width={500}
        height={500}
        alt="CAL Logo"
          />
      </a>
        <ul className='header-right h-16 max-auto top-2 sticky rounded-lg px-4 py-2 justify-between items-center flex bg-zinc-100 dark:bg-zinc-950'>
          <a className="page-header-title page-header-title:hover" href="/IndexPage">Home</a>
          <a className="page-header-title page-header-title:hover" href="/AboutPage">About me</a>
          <a className="page-header-title page-header-title:hover" href="/PortfolioPage">Portfolio</a>
          <Link legacyBehavior href="/HirePage" className='p-2'>
              <Button variant="outline">Hire me</Button>
          </Link>
          <div>
            <ModeToggle/>
          </div>
        </ul>
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