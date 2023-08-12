import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const MdSidebar = () => {
  // State to manage the filter accordion
  const [isBrandExpanded, setIsBrandExpanded] = useState(false);

  return (
    <div className='bg-white p-5 rounded-xl'>
      {/* Categories */}
      <div className='mb-7'>
        <div className='text-lg font-bold mb-5 text-orange-500'>دسته بندی</div>
        <ul>
          {/* Loop through categories */}
          {categories.map((category, index) => (
            <li key={index} className={`flex items-center text-slate-400 mb-1 py-2 hover:bg-gray-50 cursor-pointer rounded-md ${category.default ? 'font-bold text-slate-800' : ''}`}>
              <span className='w-7 h-7 bg-gray-100 items-center justify-center flex rounded-full'>
                {/* Category icon */}
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-5 h-5'>
                  <path stroke-linecap='round' stroke-linejoin='round' d={category.icon} />
                </svg>
              </span>
              {/* Category title */}
              <span className='mr-2'>{category.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Filters */}
      <div>
        <div className='text-lg font-bold mb-5 text-orange-500'>فیلتر</div>
        
        {/* Brand Filter */}
        <button className='flex items-center w-full p-4 cursor-pointer hover:bg-gray-50 rounded-lg' onClick={() => setIsBrandExpanded(!isBrandExpanded)}>
          {/* Expand/Collapse icon */}
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class='w-6 h-6 mr-2'>
            <path stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
          {/* Filter label */}
          <span className='mr-2'>برند محصول</span>
        </button>
        {/* Brand Filter Content */}
        {isBrandExpanded && (
          <div className='font-semibold'>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label='اپل' />
              <FormControlLabel control={<Checkbox />} label='سامسونگ' />
              <FormControlLabel control={<Checkbox />} label='هواوی' />
              <FormControlLabel control={<Checkbox />} label='بلک بری' />
            </FormGroup>
          </div>
        )}

        {/* Color Filter */}
        <button className='flex items-center w-full p-4 cursor-pointer hover:bg-gray-50 rounded-lg'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class='w-6 h-6 mr-2'>
            <path stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
          <span className="mr-2">رنگ بندی</span>
        </button>

        {/* Hardware Filter */}
        <button className='flex items-center w-full p-4 cursor-pointer hover:bg-gray-50 rounded-lg'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class='w-6 h-6 mr-2'>
            <path stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
          <span className="mr-2">فیلتر سخت افزار</span>
        </button>
      </div>
    </div>
  );
};

// Define categories
const categories = [
  { icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3', title: 'تلفن همراه' },
  { icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z', title: 'ساعت هوشمند', default: true },
  { icon: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25', title: 'مک' }
];

export default MdSidebar;
