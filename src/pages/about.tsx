import React from 'react';
// import Layout from '@/components/layout-structure';
import Layout from '@/components/layout-structure';

const AboutPage: React.FC = () => {
  return (
    <React.StrictMode>
      <Layout>
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum velit eu neque
            consectetur, non ultricies nibh dictum. Integer nec ipsum et lectus bibendum tristique. Donec
            elementum sapien ut erat pretium condimentum. Sed volutpat auctor dui, vel efficitur odio
            consequat et.
          </p>
        </div>
      </Layout>
    </React.StrictMode>
  );
};

export default AboutPage;
