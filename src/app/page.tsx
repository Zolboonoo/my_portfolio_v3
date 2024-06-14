// pages/index.tsx
"use client";
import React from 'react';
import Layout from '@/components/layout-structure';
import Image from 'next/image'


export default function IndexPage(){
  return (
    <React.StrictMode>
      <Layout>
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mt-8 text-red-700">Main Content is here</h1>
          <Image
            src="/assets/profilePic.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </Layout>
    </React.StrictMode>
  );
};
