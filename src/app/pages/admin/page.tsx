'use client';
import clsx from 'clsx';
import Head from 'next/head';
import * as React from 'react';
import useLoaded from '@/hooks/useLoaded';


export default function HomePage() {
  const isLoaded = useLoaded();

  return (
    <main>
      <Head>
        <title>Admin | Moon Education</title>
      </Head>

      <section>
        <section className='mx-auto mt-20 max-w-4xl rounded-md p-6 shadow-md dark:bg-gray-800'>
          <h1 className='text-xl font-bold capitalize text-white dark:text-white'>
            Account settings
          </h1>
          <form>
            <div className='mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2'>
              <div>
                <label
                  className='text-white dark:text-gray-200'
                  htmlFor='username'
                >
                  Username
                </label>
                <input
                  id='username'
                  type='text'
                  className='mt-2 block w-full rounded-md border border-gray-300 bg-neutral-900 px-4 py-2 text-gray-200 focus:border-amber-500 focus:outline-none'
                />
              </div>

              <div>
                <label
                  className='text-white dark:text-gray-200'
                  htmlFor='emailAddress'
                >
                  Email Address
                </label>
                <input
                  id='emailAddress'
                  type='email'
                  className='mt-2 block w-full rounded-md border border-gray-300 bg-neutral-900 px-4 py-2 text-gray-200 focus:border-amber-500 focus:outline-none'
                />
              </div>

              <div>
                <label
                  className='text-white dark:text-gray-200'
                  htmlFor='password'
                >
                  Password
                </label>
                <input
                  id='password'
                  type='password'
                  className='mt-2 block w-full rounded-md border border-gray-300 bg-neutral-900 px-4 py-2 text-gray-200 focus:border-amber-500 focus:outline-none'
                />
              </div>

              <div>
                <label
                  className='text-white dark:text-gray-200'
                  htmlFor='passwordConfirmation'
                >
                  Password Confirmation
                </label>
                <input
                  id='passwordConfirmation'
                  type='password'
                  className='mt-2 block w-full rounded-md border border-gray-300 bg-neutral-900 px-4 py-2 text-gray-200 focus:border-amber-500 focus:outline-none'
                />
              </div>

              <div>
                <label
                  className='text-white dark:text-gray-200'
                  htmlFor='passwordConfirmation'
                >
                  Select
                </label>
                <select className='mt-2 block w-full rounded-md border border-gray-300 bg-neutral-900 px-4 py-2 text-gray-200 focus:border-amber-500 focus:outline-none'>
                  <option>Surabaya</option>
                  <option>Jakarta</option>
                  <option>Tangerang</option>
                  <option>Bandung</option>
                </select>
              </div>
 
              <div>
                <label
                  className='text-white dark:text-gray-200'
                  htmlFor='passwordConfirmation'
                >
                  Date
                </label>
                <input
                  id='date'
                  type='date'
                  className='mt-2 block w-full rounded-md border border-gray-300 bg-neutral-900 px-4 py-2 text-gray-200 focus:border-amber-500 focus:outline-none'
                />
              </div>
              <div>
                <label
                  className='text-white dark:text-gray-200'
                  htmlFor='passwordConfirmation'
                >
                  Text Area
                </label>
                <textarea
                  id='textarea'
                  className='mt-2 block w-full rounded-md border border-gray-300 bg-neutral-900 px-4 py-2 text-gray-200 focus:border-amber-500 focus:outline-none'
                ></textarea>
              </div>
              <div>
                <label className='block text-sm font-medium text-white'>
                  Image
                </label>
                <div className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pb-6 pt-5'>
                  <div className='space-y-1 text-center'>
                    <svg
                      className='mx-auto h-12 w-12 text-white'
                      stroke='currentColor'
                      fill='none'
                      viewBox='0 0 48 48'
                      aria-hidden='true'
                    >
                      <path
                        d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                    <div className='flex text-sm text-gray-600'>
                      <label
                        htmlFor='file-upload'
                        className='relative cursor-pointer rounded-md font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
                      >
                        <span className=''>Upload a file</span>
                        <input
                          id='file-upload'
                          name='file-upload'
                          type='file'
                          className='sr-only'
                        />
                      </label>
                      <p className='pl-1 text-white'>or drag and drop</p>
                    </div>
                    <p className='text-xs text-white'>
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-6 flex justify-end'>
              <button className='transform rounded-md bg-amber-500 px-6 py-2 leading-5 text-white transition-colors duration-200 hover:bg-amber-200 focus:bg-gray-600 focus:outline-none'>
                Save
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}
