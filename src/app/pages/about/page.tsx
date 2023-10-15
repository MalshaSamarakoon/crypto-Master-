'use client';
import clsx from 'clsx';
import Head from 'next/head';
import * as React from 'react';
import useLoaded from '@/hooks/useLoaded';
import TC from '@/app/components/TC';
import Accent from '@/app/components/Accent';
import ButtonLink from '@/components/links/ButtonLink';
import { InView } from 'react-intersection-observer';
import Vision from '@/app/pages/about/vision';
import Mission from '@/app/pages/about/mission';
import TeamList from '@/app/pages/about/TeamList';

export default function AboutPage() {
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
        <section className=' relative'>
          <div className='layout mt-4 flex min-h-screen flex-col py-1'>
            <h1
              className='text-white md:mt-40 md:text-5xl md:leading-snug'
              data-fade='2'
            >
              Who we are ?
            </h1>
            <p
              className={clsx(
                'mt-4 max-w-4xl text-left text-white md:mt-10',
                'md:text-lg 2xl:text-xl'
              )}
              data-fade='3'
            >
              We are a passionate team of educators and experts dedicated to
              guiding individuals on their journey to financial success.
              Committed to democratizing knowledge, we provide accessible
              resources and training, ensuring that everyone has the opportunity
              to harness the power of new technologies and industries to build
              wealth and achieve their dreams. Dedicated to democratizing
              knowledge, we empower financial success through accessible
              resources and practical guidance.
            </p>

            <div className='mt-40'>
              <Vision />
              </div>
              <div className='mt-20'>  
              <Mission />
            </div>
            <TeamList />
          </div>
        </section>
      </section>
    </main>
  );
}
