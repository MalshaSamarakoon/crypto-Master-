'use client';
import clsx from 'clsx';
import Head from 'next/head';
import * as React from 'react';
import useLoaded from '@/hooks/useLoaded';
import CourseList from '@/app/pages/courses/CourseList';

export default function ServicesPage() {
  const isLoaded = useLoaded();

  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>

       <section
        className={clsx(
          ' min-h-main -mt-20 mb-10 flex flex-col justify-center',
          isLoaded && 'fade-in-start'
        )}
      >
      <section className='relative'>
    <div className='layout mt-4 flex min-h-screen flex-col py-1'>
        <div className="flex flex-wrap md:flex-nowrap md:mt-40">
            <h1
                className='text-white  md:text-5xl md:leading-snug flex-1'
                data-fade='2'
            >
                Our Services
            </h1>
            <p
                className={clsx(
                    'mt-4 max-w-4xl text-center text-neutral-400 md:mt-10 flex-1',
                    'md:text-lg 2xl:text-xl'
                )}
                data-fade='3'
            >
                We offer a range of services to help you achieve financial success in life
            </p>
        </div>
    </div>
</section>

      </section>
    </main>
  );
}
