import React from 'react';
import CourseTag from '@/app/components/CourseTag';
import Button from '@/components/buttons/Button';
import Link from 'next/link';

export default function CourseCard() {
  return (
<div className='bg-bg-dark relative items-center rounded-[15px] border-[2px] border-[#d9b157] pb-8 text-center text-[#E7F1FB] shadow-xl'>
      <img
        className='h-[150px] w-full rounded-t-[15px] object-cover object-top'
        src='/images/course-crypto.jpeg'
        alt='course-crypto'
      />
      <CourseTag />
      <h3 className='relative mb-5 mt-5 text-[#E7F1FB]'>
        Crypto Master A-Z Course
      </h3>
      <p className='p-4 text-sm leading-[21px] mb-10'>
        A cryptocurrency course that helps you to make money from Cryptocurrency
        and give a super update to Life. 
      </p>
      <Link href="/pages/courses/CourseDetails">
      <Button
        className='absolute bottom-4 right-4 border border-amber-400 text-amber-400 hover:bg-neutral-700 dark:hover:bg-neutral-700' 
        variant='outline'
      >
        More Details
      </Button>
      </Link>
    </div>
  );
}
