import React, { useState } from 'react';

const MdSortbar = () => {
  const buttons = ['محبوب ترین', 'پرفروش ترین', 'ارزان ترین', 'گران ترین'];
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className='bg-white px-4 flex items-center gap-x-4 text-gray-400 rounded-lg'>
      <div className='bg-orange-100 rounded-md p-2'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-7 h-7 stroke-orange-500'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75' />
        </svg>
      </div>
      {buttons.map((text, index) => (
        <button
          key={index}
          className={`py-4 ${activeButton === index ? 'text-black font-bold' : ''}`}
          onClick={() => setActiveButton(index)}
        >
          {activeButton === index && (
            <div className='absolute -top-2 left-1/2 transform -translate-x-1/2'>
              <div className='bg-orange-500 w-2 h-2 rounded-full'></div>
            </div>
          )}
          {text}
        </button>
      ))}
    </div>
  );
};

export default MdSortbar;
