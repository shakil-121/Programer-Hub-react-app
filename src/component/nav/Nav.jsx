import React from 'react';

const Nav = () => {
    return (
        <div>
           
<nav style={{ 
    transition: '1s'}} className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 rounded">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center">
        {/* <img src="https://flowbite.com/docs/images/logo.svg"  alt="Flowbite Logo" />  */}
        <h2 className="h-8 mr-3 text-2xl font-bold">Programer HUB</h2>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="w-full md:block md:w-auto" id="navbar-solid-bg">
      <img src=''/>
    </div>
  </div>
</nav>


        </div>
    );
};

export default Nav;