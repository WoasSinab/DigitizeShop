const Navbar = () => {
  return (
    <main>
      {/* 📱 Mobile Navbar */}
      <div className='md:hidden flex items-center justify-between mt-5 px-4 mb-6'>
        {/* 🍎 Logo */}
        <div>
          Digitize
        </div>
        {/* ⏰ Smart Watch Title */}
        <div className='text-lg font-bold text-slate-800'>ساعت هوشمند</div>
        {/* 🔍 Search Icon */}
        <div className='h-7 w-7 shadow-lg rounded-md bg-white flex items-center justify-center'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5 stroke-slate-800'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' />
          </svg>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
