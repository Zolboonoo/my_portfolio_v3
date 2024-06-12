import React from 'react';
import RootLayout from '@/app/layout';

const HirePage: React.FC = () => {
  return (
    <RootLayout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Hire Me</h1>
        <p className="text-lg">
          If you're interested in working with me or have any questions, please feel free to get in touch using the
          form below or email me at <a href="mailto:your@email.com" className="text-blue-500">your@email.com</a>.
        </p>
        {/* Add a contact form or any other relevant information here */}
      </div>
    </RootLayout>
  );
};

export default HirePage;
