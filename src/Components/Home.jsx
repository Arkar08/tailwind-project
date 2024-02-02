import React from 'react';
import Latest from './Latest';
import Featured from './Featured';
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <div className='max-w-[1240px] w-full mx-auto bg-white h-screen py-12'>
      <div className='grid md:grid-cols-2 p-4'>
        <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48e5a3c57559300cd83d22_image-15.jpg" alt="" className='w-full'/>
        <div className="text mx-10 select-none">
          <a href="/" className='text-xs text-gray-400 font-bold mt-10'>ILLUSTRATION</a>
          <h1 className='py-8 text-5xl space-3 font-semibold'>JAPAN HOUSE OPENS IN MOUNTAINSIDE TO FOSTER PEAK CREATIVITY.</h1>
          <p className='text-gray-400 py-4'>Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad timeam accusata, hinc justo falli id eum, ferri novum molestie eos cu.</p>
          <p className='uppercase text-xs'>by <span>Reta torphy</span></p>
        </div>
      </div>
      <div className='grid md:grid-col-3 w-full gap-8 md:grid-flow-col py-10 px-10'>
        <div className='rounded'>
          <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48e52333b04e520247608a_image-14.jpg" alt="" className='w-90% rounded-md p-4' />
          <div className='text-start px-4'>
            <h3 className='text-gray-400 py-2 text-xs'>PHOTOGRAPHY</h3>
            <h1 className='font-semibold text-black text-2xl uppercase py-3'>HELMUT LANG CELEBRATES TAXI DRIVERS WORLDWIDE IN LATEST CAMPAIGN</h1>
            <p className='uppercase text-xs'>By <span>ALESSANDRA ORTIZ</span></p>
          </div>
        </div>
        <div className='rounded'>
          <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48e443b9f372cb2a21aea7_image-13.jpg" alt="" className='w-90% rounded-md p-4' />
          <div className='text-start px-4'>
            <h3 className='text-gray-400 py-2 text-xs'>PHOTOGRAPHY</h3>
            <h1 className='font-semibold text-black text-2xl uppercase py-3'>BOWLCUT LAUNCH A NEW SUMMER COLLECTION THAT PAYS HOMAGE TO “UK LEGENDS”</h1>
            <p className='uppercase text-xs'>By <span>ALESSANDRA ORTIZ</span></p>
          </div>
        </div>
        <div className='rounded'>
          <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48e3a5c575599d9ad83c1b_image-12.jpg" alt="" className='w-90% rounded-md p-4' />
          <div className='text-start px-4'>
            <h3 className='text-gray-400 py-2 text-xs'>PHOTOGRAPHY</h3>
            <h1 className='font-semibold text-black text-2xl uppercase py-3'>THOUSANDS OF PREVIOUSLY UNSEEN PHOTOGRAPHS BY ANDY WARHOL WILL BE MADE PUBLIC THIS AUTUMN</h1>
            <p className='uppercase text-xs'>By <span>ALESSANDRA ORTIZ</span></p>
          </div>
        </div>
      </div>
      <div className='grid md:grid-col-3 w-full gap-8 md:grid-flow-col py-10 px-10'>
        <div className='rounded'>
          <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48e3149918eadd57ae153d_image-11.jpg" alt="" className='w-90% rounded-md p-4' />
          <div className='text-start px-4'>
            <h3 className='text-gray-400 py-2 text-xs'>INTERACTIVE DESIGN</h3>
            <h1 className='font-semibold text-black text-2xl uppercase py-3'>LONDON-BASED YINKA ILORI’S STORYTELLING FURNITURE</h1>
            <p className='uppercase text-xs'>By <span>ANNIE LUEILWITZ</span></p>
          </div>
        </div>
        <div className='rounded'>
          <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48de54b9f372bd1c21ab80_image-10.jpg" alt="" className='w-90% rounded-md p-4' />
          <div className='text-start px-4'>
            <h3 className='text-gray-400 py-2 text-xs'>GRAPHIC DESIGN</h3>
            <h1 className='font-semibold text-black text-2xl uppercase py-3'>ANONYMOUS ISRAELI ART COLLECTIVE BROKEN FINGAZ DIRECT MUSIC VIDEO FOR U2 AND BECK</h1>
            <p className='uppercase text-xs'>By <span>SIMEON BREKKE</span></p>
          </div>
        </div>
        <div className='rounded'>
          <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48d4b28d2f84340af39762_image-9.jpg" alt="" className='w-90% rounded-md p-4' />
          <div className='text-start px-4'>
            <h3 className='text-gray-400 py-2 text-xs'>ARCHITECTURE</h3>
            <h1 className='font-semibold text-black text-2xl uppercase py-3'>SUZANNE SAROFF’S METICULOUSLY ARRANGED PHOTOGRAPHS ALTER PERCEPTIONS</h1>
            <p className='uppercase text-xs'>By <span>RETA TORPHY</span></p>
          </div>
        </div>
      </div>
      <Latest />
      <Featured />
      <Footer />
    </div>
    </>
  )
}

export default Home;