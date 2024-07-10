// import Header from '@/components/header';
// import React from 'react';
// import { Outlet } from 'react-router-dom';

// const AppLayout = () => {
//   return (
//     <div>
//       <main className='min-h-screen container '>
//         <Header/>
//         <Outlet />
//       </main>
      
//       <div className='p-10 text-center bg-gray-800 mt-10'>
//         <h1>All Rights Reserved 2024</h1>
//         Created By Aryan Hedaoo
//       </div>
//     </div>
//   );
// };

// export default AppLayout;
import Header from '@/components/header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const AppLayout = () => {
  return (
    <div>
      <main className='min-h-screen container'>
        <Header />
        <Outlet />
      </main>
      
      <div className='p-10 text-center bg-gray-800 mt-10'>
        <h1>All Rights Reserved 2024</h1>
        <p>Created By Aryan Hedaoo</p>
        <div className='flex justify-center gap-4 mt-4'>
          <a href="https://www.linkedin.com/in/aryan-hedaoo-93325b22b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-white text-2xl hover:text-blue-500' />
          </a>
          <a href="https://www.instagram.com/_aryan_hedaoo_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='text-white text-2xl hover:text-pink-500' />
          </a>
          <a href="https://github.com/aa0962" target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-white text-2xl hover:text-gray-500' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
