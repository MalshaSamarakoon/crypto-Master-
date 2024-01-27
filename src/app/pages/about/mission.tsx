import React from 'react';
import Accent from '@/app/components/Accent';

export default function Mission() {
  return (
<div className='mt-8 h-full w-full md:mt-0' dir="rtl">
  <h2 className='text-4xl md:text-6xl text-right'>
    <Accent className='inline decoration-clone leading-snug dark:leading-none'>
      Mission
    </Accent>
  </h2>
  <div className='mt-4 text-base text-gray-100 md:text-lg text-right'>
  To lead the way in transforming lives through cutting-edge knowledge,
    fostering prosperity, and opening doors to new technological and industrial
    opportunities that empower individuals to achieve financial well-being
  </div>
</div>


  );
}

