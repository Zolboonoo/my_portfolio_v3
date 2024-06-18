"use client";

import React, { useState,useEffect } from 'react';
import Layout from '@/components/layout-structure';
import Image from 'next/image'
import LoadingMainPic from '@/components/loading';


export default function IndexPage(){

  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  return (
    <React.StrictMode>
      <Layout>
        {loading? <LoadingMainPic/> : 
        <div className="container mx-auto">
          <Image
            src="/assets/profilePic.jpg"
            className='h-[250px] w-[250px] rounded-2xl mt-3'
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <h1 className="text-2xl font-bold mt-8">Hi, I am Zolboo.</h1>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reiciendis consequuntur veritatis, incidunt illo debitis labore temporibus nostrum sit delectus fuga dolorem impedit quod maiores cum repellat magnam. Temporibus, exercitationem.</p>
        </div>}
      </Layout>
    </React.StrictMode>
  );
};
