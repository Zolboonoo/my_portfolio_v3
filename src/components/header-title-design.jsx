"use client";
import React from 'react';

const PageHeader = (props) => {
  return (
    <>
      <a href={props.link} className='page-header-title'>
      {props.content}
      <style jsx>{`
        .page-header-title {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          background-color: ; /* Default grey background */
          color: ; /* Default text color */
          transition: background-color 0.3s, color 0.3s; /* Smooth transition */
        }
        
        .page-header-title:hover {
          background-color: #FFFFFF; /* White background on hover */
          color: #000000; /* Black text color on hover */
        }
      `}</style>
    </a>
    </>
  );
};

export default PageHeader;