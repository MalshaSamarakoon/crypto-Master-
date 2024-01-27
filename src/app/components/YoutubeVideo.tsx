'use client';

import React from 'react';

interface YoutubeVideoProps {
  title?: string;
  url: string;
}

export default function YoutubeVideo(props: YoutubeVideoProps) {
  const { title, url } = props;
  const videoHash = extractVideoHashFromUrl(url);
  const srcDoc = `
    <div class="flex flex-col h-full w-full overflow-hidden">
      <a href="https://www.youtube.com/embed/${videoHash}?autoplay=1" class="relative w-full h-full">
        <img class="absolute w-full h-full top-0 left-0 object-cover" src="https://img.youtube.com/vi/${videoHash}/hqdefault.jpg" alt='${title || ''}'>
      </a>
    </div>
  `;

  return (
    <div className="flex relative rounded-xl overflow-hidden">
      <iframe 
        width="1000" 
        height="500" 
        src="https://www.youtube.com/embed/q7MSBZpYw-Y" 
        srcDoc={srcDoc}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
    </div>
  );
}

function extractVideoHashFromUrl(url: string) {
  const videoHashQueryParamKey = 'v';
  const searchParams = new URL(url).search;
  return new URLSearchParams(searchParams).get(videoHashQueryParamKey);
}
