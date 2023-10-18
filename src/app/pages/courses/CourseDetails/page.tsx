'use client';
import React from 'react';
import clsx from 'clsx';
import YoutubeVideo from '@/app/components/YoutubeVideo';
import useLoaded from '@/hooks/useLoaded';

export default function CourseDetails() {
  const isLoaded = useLoaded();

  return (
    <main>
      <section
        className={clsx(
          ' min-h-main flex flex-col justify-center',
          isLoaded && 'fade-in-start'
        )}
      >
        <section className=' relative'>
          <div className='layout flex min-h-screen flex-col py-1'>
            <h1
              className='mb-20 text-white md:mt-40 md:text-5xl md:leading-snug'
              data-fade='2'
            >
              Crypto Master A-Z Course
            </h1>
            <div className=' mb-20 grid grid-cols-2 gap-80'>
              <div className=' col-span-1 mt-10 text-xl leading-relaxed text-gray-200 opacity-80 md:text-lg'>
                <p>
                  We are a passionate team of educators and experts dedicated to
                  guiding individuals on their journey to financial success.
                  Committed to democratizing knowledge, we provide accessible
                  resources and training, ensuring that everyone has the
                  opportunity to harness the power of new technologies and
                  industries to build wealth and achieve their dreams.
                </p>
                <br />
                <p>
                  Dedicated to democratizing knowledge, we empower financial
                  success through accessible resources and practical guidance.
                </p>
              </div>

              <div className='col-span-1 '>
                <div className='mt-10 text-gray-200'>
                  <p className='mb-10 text-3xl font-bold'>LKR 18000 </p>
                  <p className='text-2xl '>Duration : 3 Months </p>
                  <p className='text-s mb-20 mt-3'>
                    {' '}
                    Can make the payment in 3 Installments <br /> (LKR 6000 Per
                    Month)
                  </p>
                </div>
                <div className='mt-8'>
                  <button className='h-12 w-80 rounded-md bg-amber-500 text-lg font-semibold text-white transition duration-300 ease-in-out hover:bg-amber-600'>
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='layout py-6'>
            <div className=' mb-20 grid grid-cols-2 gap-28'>
              <div className='mt-40'>
                <div className='h-full w-full '>
                  <YoutubeVideo url='https://www.youtube.com/watch?v=q7MSBZpYw-Y&t=4s' />
                </div>
              </div>

              <div className=' col-span-1 text-xl leading-relaxed text-gray-200 opacity-80 md:text-lg'>
                <h1 className='text-4xl md:text-6xl'>
                  <div className='inline decoration-clone leading-snug dark:leading-none'>
                    Course Content
                  </div>
                </h1>

                <ul className='prose dark:prose-invert mt-10 text-gray-200'>
                  <li className='text-1xl mb-2'>
                    Introduction to cryptocurrency
                  </li>
                  <li className='text-1xl mb-2'>How to make your charts</li>
                  <li className='text-1xl mb-2'>
                    How to use indicators in charts
                  </li>
                  <li className='text-1xl mb-2'>Indicators deep dive</li>
                  <li className='text-1xl mb-2'>
                    How to use tools in charts (Fibonacci Retracement and Fib
                    Circles / Elliott Wave)
                  </li>
                  <li className='text-1xl mb-2'>Trading patterns deep dive</li>
                  <li className='text-1xl mb-2'>Overview of Binance</li>
                  <li className='text-1xl mb-2'>Spot trading</li>
                  <li className='text-1xl mb-2'>Futures trading</li>
                  <li className='text-1xl mb-2'>Millionaire making coins</li>
                  <li className='text-1xl mb-2'>Metaverse Projects</li>
                  <li className='text-1xl mb-2'>SMC concepts</li>
                  <li className='text-1xl mb-2'>Risk Management</li>
                </ul>
              </div>
            </div>

            <div className='mb-4 text-xl leading-relaxed text-gray-200 opacity-80 md:text-lg'>
              <div>
                <p
                  className='mb-5'
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <span
                    className='mr-2 text-amber-500'
                    style={{ marginRight: '0.5rem' }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      className='bi bi-check-circle'
                      viewBox='0 0 16 16'
                      width='20'
                      height='20'
                    >
                      <path d='M0 0h16v16H0z' fill='none' />
                      <path d='M8 0a.5.5 0 0 1 .5.5V14a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z' />
                      <path
                        d='M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 2.207 2.354 7.854a.5.5 0 1 1-.708-.708l6-6z'
                      />
                    </svg>
                  </span>
                  Get extra practice sessions and learn technical analysis
                  skills for various financial markets.
                </p>
                <p
                  className='mb-5'
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <span
                    className='mr-2 text-amber-500'
                    style={{ marginRight: '0.5rem' }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      className='bi bi-check-circle'
                      viewBox='0 0 16 16'
                      width='20'
                      height='20'
                    >
                      <path d='M0 0h16v16H0z' fill='none' />
                      <path d='M8 0a.5.5 0 0 1 .5.5V14a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z' />
                      <path
                        d='M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 2.207 2.354 7.854a.5.5 0 1 1-.708-.708l6-6z'
                      />
                    </svg>
                  </span>
                  Enjoy free, lifetime membership in a VIP signal group.
                </p>

                <p
                  className='mb-5'
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <span
                    className='mr-2 text-amber-500'
                    style={{ marginRight: '0.5rem' }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      className='bi bi-check-circle'
                      viewBox='0 0 16 16'
                      width='20'
                      height='20'
                    >
                      <path d='M0 0h16v16H0z' fill='none' />
                      <path d='M8 0a.5.5 0 0 1 .5.5V14a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z' />
                      <path
                        d='M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 2.207 2.354 7.854a.5.5 0 1 1-.708-.708l6-6z'
                      />
                    </svg>
                  </span>
                  Ability to apply learnt technical analysis for forex and stock market trading
                </p>
                <p
                  className='mb-5'
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <span
                    className='mr-2 text-amber-500'
                    style={{ marginRight: '0.5rem' }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      className='bi bi-check-circle'
                      viewBox='0 0 16 16'
                      width='20'
                      height='20'
                    >
                      <path d='M0 0h16v16H0z' fill='none' />
                      <path d='M8 0a.5.5 0 0 1 .5.5V14a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z' />
                      <path
                        d='M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 2.207 2.354 7.854a.5.5 0 1 1-.708-.708l6-6z'
                      />
                    </svg>
                  </span>
                  Continuous support from Moon Education for your questions.{' '}
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
