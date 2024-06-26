// // pages/index.tsx
// import React from 'react';
// import Header from '@/components/header-structure';
// import { ModeToggle } from '@/components/mode-toggle';
// // import { Header } from 'next/dist/lib/load-custom-routes';

// const IndexPage: React.FC = () => {
//   return (
//     <div className="container mx-auto">
//       <h1 className="text-2xl font-bold mt-8">Welcome to Next.js with Tailwind CSS and TypeScript!</h1>
//       {/* <ModeToggle></ModeToggle> */}
//       <Header></Header>
//     </div>
//   );
// };

// export default IndexPage;


// pages/index.tsx
import React from 'react';
import Header from '@/components/header-structure';
import Layout from '@/components/layout-structure';

const IndexPage: React.FC = () => {

  return (
    <React.StrictMode>
      <Layout>
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mt-8">Welcome to Next.js with Tailwind CSS and TypeScript!</h1>
        </div>
      </Layout>
    </React.StrictMode>
  );
};

export default IndexPage;