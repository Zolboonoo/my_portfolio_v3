// pages/index.tsx
import React from 'react';
import Layout from '@/components/layout-structure';


export default function IndexPage(){
  return (
    <React.StrictMode>
      <Layout>
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mt-8 text-red-700">Main Content is here</h1>
        </div>
      </Layout>
    </React.StrictMode>
  );
};
