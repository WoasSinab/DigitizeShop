const FilterMobile = () => {
  return (
    <div className='md:hidden flex items-center justify-between px-4 gap-x-4 mb-9'>
      <div className='bg-white w-1/2 rounded flex items-center justify-start p-4 '>
        <div>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-orange-600">
         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
         </svg>

        </div>
        <span className='text-sm font-medium text-slate-800 mr-1'>محبوب ترین</span>
      </div>

      <div className='bg-white w-1/2 rounded flex items-center justify-start p-4 '>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-5 h-5 stroke-gray-300'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z'
            />
          </svg>
        </div>
        <span className='text-sm font-medium text-slate-800 mr-2'>فیلتر : اپل</span>
      </div>
    </div>
  );
};

export default FilterMobile;