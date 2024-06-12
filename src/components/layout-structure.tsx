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
      <div style={{ border: '1px solid #ccc', padding: '10px' }} >
        <Header></Header>
        {children}
        <Footer></Footer>
      </div>
    </React.StrictMode>
  );
}
