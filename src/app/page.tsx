'use client';
import clsx from 'clsx';
import * as React from 'react';
import useLoaded from '@/hooks/useLoaded';
import TC from '@/app/components/TC';
import Accent from '@/app/components/Accent';
import ButtonLink from '@/components/links/ButtonLink';
import { InView } from 'react-intersection-observer';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


export default function HomePage() {
  const isLoaded = useLoaded();

  return (
    <main>
            <Header/>

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
              Turning Knowledge into Wealth.. <br /> Your Success.. <br /> Our
              Expertise!
            </h1>
            <p
              className={clsx(
                'mt-4 max-w-4xl text-left text-white md:mt-10',
                'md:text-lg 2xl:text-xl'
              )}
              data-fade='3'
            >
              Empowering individuals with knowledge and tech solutions to
              navigate tomorrow's world.
            </p>

            <ButtonLink
              className='hover:bg-dark w-64 border border-amber-400 bg-amber-400 py-2 text-center text-white focus:outline-none md:mt-20'
              href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter/blob/main/src/styles/colors.css'
            >
              Check for Courses
            </ButtonLink>
             {/* moonadmin */}
            {/* <TC
              className={clsx(
                'absolute bottom-0 right-6',
                'translate-y-[37%] transform-gpu',
                'w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px]',
                'z-[1] opacity-70 dark:opacity-30'
              )}
            /> */}
          </div>

          <InView triggerOnce rootMargin='-40% 0px'>
            {({ ref, inView }) => (
              <section
                ref={ref}
                id='intro'
                className={clsx('mt-[-70px] py-10', inView && 'fade-in-start')}
              >
                <article
                  className={clsx(
                    'layout flex flex-col-reverse items-center md:flex-row md:justify-start',
                    'md:gap-4'
                  )}
                  data-fade='0'
                >
                  <div className='mt-8 mt-[-100px] h-full w-full py-40 md:mt-0'>
                    <h2 className='text-4xl md:text-6xl'>
                      <Accent className='inline decoration-clone leading-snug dark:leading-none'>
                        Elevate Your Journey with Our Range of Services{' '}
                      </Accent>
                    </h2>
                    <div className='mt-4 text-base text-gray-100 md:text-lg'>
                 
                      At <span>Moon Education Center </span>  our team of dedicated educators and experts is here to
                      guide you on your path to
                      <strong className='text-gray-100 '>
                        financial success.
                      </strong>
                      We are committed to making knowledge accessible to all,
                      offering a wide range of resources and training to help
                      you harness the potential of new technologies and
                      industries. Explore our services to unlock opportunities
                      and turn your dreams into reality.
                    </div>
                  </div>
                  <div className='h-full w-full'>
                    <ul className='relative h-full'>imageimage image </ul>
                  </div>
                </article>

                <article
                  className={clsx(
                    'layout flex flex-col-reverse items-center md:flex-row md:justify-start',
                    'md:gap-4'
                  )}
                  data-fade='0'
                >
                  <div className='h-full w-full'>
                    <ul className='relative h-full'>imageimage image </ul>
                  </div>
                  <div className='mt-8 h-full w-full md:mt-0'>
                    <h2 className='text-4xl md:text-6xl'>
                      <Accent className='inline decoration-clone leading-snug dark:leading-none'>
                        Discover Our Resources and Expertise
                      </Accent>
                    </h2>
                    <div className='mt-4 text-base text-gray-100 md:text-lg'>

                      At <span>Moon Education Center </span>we take pride in what we have to offer. Our arsenal
                      comprises a
                      <strong className='text-gray-100 '>
                        a wealth of valuable resources and a team of seasoned
                        experts
                      </strong>
                      who are dedicated to your success. We've curated a
                      comprehensive collection of tools, knowledge, and support
                      to empower you in navigating the ever-evolving landscape
                      of opportunities. Delve into what we have to offer and
                      turn your aspirations into achievements.
                    </div>
                  </div>
                </article>
              </section>
            )}
          </InView>
        </section>
      </section>
      <Footer/>

    </main>
  );
}
