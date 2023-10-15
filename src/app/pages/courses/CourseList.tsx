import React from 'react';
import CourseCard from '@/app/components/CourseCard';

export default function CourseList() {
  return (
    <div className='w-full space-y-32'>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}
