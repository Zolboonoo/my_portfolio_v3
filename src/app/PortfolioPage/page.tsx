import React from 'react';
import Layout from '@/components/layout-structure';
const PortfolioPage: React.FC = () => {
  return (
    <React.StrictMode>
      <Layout>
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">My Works</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Work Item */}
            <div className="bg-gray-200 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Work Title</h2>
              <p className="text-gray-700">Description of the work.</p>
              {/* Add more details, images, or links here */}
            </div>
            {/* Add more work items as needed */}
          </div>
        </div>
      </Layout>
    </React.StrictMode>
  );
};


export default PortfolioPage;