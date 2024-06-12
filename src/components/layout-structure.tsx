// app/posts/layout.tsx
"use client";
import React from "react";
import Header from "./header-structure";
import Footer from "./footer-structure";
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-1 inline">
          {children}
        </main>
        <Footer/>
      </div>
    </React.StrictMode>
  );
}
