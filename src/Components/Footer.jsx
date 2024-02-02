import React from 'react'

const Footer = () => {
  return (
    <div className='py-12 bg-black text-white'>
      <div className='items-center py-8'>
        <h1 className='lg:text-2xl md:text-2xl sm:text-xl text-white uppercase px-4'>Noiceland
        <span className='text-gray-500 text-sm px-4'>© 2018 NOICELAND™, ALL RIGHTS RESERVED</span>
        </h1>
      </div>
      <hr />

      <div>
        <h4 className='text-gray-500 py-4 lowercase px-3'>CATEGORIES</h4>
        <div className='md:grid gap-5 grid-cols-6 px-3 items-center justify-center'>
          <div className="item">
            <h2 className='p-4'>Animation</h2>
            <h2 className='p-4'>Interactive Design</h2>
          </div>
          <div className="item">
            <h2 className='p-4'>Architecture</h2>
            <h2 className='p-4'>Miscellaneous</h2>
          </div>
          <div className="item">
            <h2 className='p-4'>Graphic Design</h2>
            <h2 className='p-4'>Photography</h2>
          </div>
          <div className="item">
            <h2 className='p-4'>Illustration</h2>
            <h2 className='p-4'>Product Design</h2>
          </div>
          <div className='md:flex w-full h-8 col-span-2 items-center flex-col md:flex-row'>
            <input type="text" placeholder='Enter the Email Address'className="rounded p-3 w-[100%]"/>
            <a href="#" type='submit' className='md:p-3 bg-blue-500 text-center rounded w-[100%] mt-4 md:mt-0 md:w-[50%]'>Submit</a>
          </div>
        </div>
      </div>
      <div className='md:grid gap-5 grid-cols-6 px-3 items-center justify-center mt-4 text-center'>
          <div className="item">
          <h4 className='text-gray-500 py-4 lowercase px-3 text-center'>INFORMATION</h4>
            <h2 className='p-4 text-sm'>about</h2>
            <h2 className='p-4 text-sm'>contact</h2>
            <h2 className='p-4 text-sm'>terms</h2>
          </div>
          <div className="item">
          <h4 className='text-gray-500 py-4 lowercase px-3 text-center'>FOLLOW US</h4>
            <h2 className='p-4 text-sm'>instagram</h2>
            <h2 className='p-4 text-sm'>facebook</h2>
            <h2 className='p-4 text-sm'>twitter</h2>
          </div>
          <div className="item">
          <h4 className='text-gray-500 py-4 lowercase px-3 text-center'>TEMPLATE</h4>
            <h2 className='p-4 text-sm'>Image License Info</h2>
            <h2 className='p-4 text-sm'>Powered by Webflow</h2>
          </div>
      </div>
    </div>
  )
}

export default Footer;