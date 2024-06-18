// components/ResponsiveComponent.tsx
"use client";
import React from 'react';

export default function ResponsiveComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2">Content 1</div>
      <div className="w-full sm:w-1/2">Content 2</div>
    </div>
  );
};

