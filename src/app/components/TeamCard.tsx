import React from 'react';

export default function TeamCard() {
  return (
    <div className="bg-bg-dark rounded-[15px] shadow-xl border-[2px] border-[#d9b157] text-[#E7F1FB] relative w-[250px] max-w-full text-center flex flex-col items-center pt-8 pb-8">
      <div className="-mt-20">
        <img className="border-[2px] border-[#d9b157] rounded-full w-[100px] h-[100px] object-cover p-1" 
             src="/images/udara_rajapaksha.jpg" 
             alt="Udara Rajapaksha" />
      </div>
      <h4 className="mt-5 mb-5 text-[#E7F1FB] relative w-[250px] " >Udara Rajapaksha</h4>
      <h3 className="mt-1 mb-1 uppercase p-1 text-gold " >Managing Director</h3>
      <p className="text-sm leading-[21px] p-4">Bachelor of Science (Sp) Honours in Computer Science and Technology</p>
    </div>
  );
}
