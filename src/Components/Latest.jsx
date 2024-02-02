import React from 'react'

const UseLatest = () => {
  return (
    <>
    <hr />
    <h1 className='text-gray-400 text-xs uppercase py-4'>Latest Posts</h1>
    <div className='grid md:grid-col-4 w-full gap-8 md:grid-flow-col py-6 px-10'>
        <div className='rounded'>
          <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48e5a3c57559300cd83d22_image-15.jpg" alt="" className='w-80% rounded-md p-4' />
          <div className='text-start px-4'>
            <h3 className='text-gray-400 py-2 text-xs'>ILLUSTRATION</h3>
            <h1 className='font-semibold text-black text-xl uppercase py-3'>JAPAN HOUSE OPENS IN MOUNTAINSIDE TO FOSTER PEAK CREATIVITY.</h1>
            <p className='uppercase text-xs'>By <span>RETA TORPHY</span></p>
          </div>
        </div>
        <div className='rounded'>
          <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48e52333b04e520247608a_image-14.jpg" alt="" className='w-80% rounded-md p-4' />
          <div className='text-start px-4'>
            <h3 className='text-gray-400 py-2 text-xs'>PHOTOGRAPHY</h3>
            <h1 className='font-semibold text-black text-xl uppercase py-3'>HELMUT LANG CELEBRATES TAXI DRIVERS WORLDWIDE IN LATEST CAMPAIGN</h1>
            <p className='uppercase text-xs'>By <span>ALESSANDRA ORTIZ</span></p>
          </div>
        </div>
        <div className='rounded'>
          <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48e443b9f372cb2a21aea7_image-13.jpg" alt="" className='w-80% rounded-md p-4' />
          <div className='text-start px-4'>
            <h3 className='text-gray-400 py-2 text-xs'>PHOTOGRAPHY</h3>
            <h1 className='font-semibold text-black text-xl uppercase py-3'>BOWLCUT LAUNCH A NEW SUMMER COLLECTION THAT PAYS HOMAGE TO “UK LEGENDS”</h1>
            <p className='uppercase text-xs'>By <span>ROSANNA ONDRICKA</span></p>
          </div>
        </div>
        <div className='rounded'>
          <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48e3a5c575599d9ad83c1b_image-12.jpg" alt="" className='w-80% rounded-md p-4' />
          <div className='text-start px-4'>
            <h3 className='text-gray-400 py-2 text-xs'>PHOTOGRAPHY</h3>
            <h1 className='font-semibold text-black text-xl uppercase py-3'>THOUSANDS OF PREVIOUSLY UNSEEN PHOTOGRAPHS BY ANDY WARHOL WILL BE MADE PUBLIC THIS AUTUMN</h1>
            <p className='uppercase text-xs'>By <span>ANNIE LUEILWITZ</span></p>
          </div>
        </div>
      </div>
      <div className='grid md:grid-col-4 w-full gap-8 md:grid-flow-col py-6 px-10'>
        <div className='rounded'>
          <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48e3149918eadd57ae153d_image-11.jpg" alt="" className='w-80% rounded-md p-4' />
          <div className='text-start px-4'>
            <h3 className='text-gray-400 py-2 text-xs'>INTERACTIVE DESIGN</h3>
            <h1 className='font-semibold text-black text-xl uppercase py-3'>LONDON-BASED YINKA ILORI’S STORYTELLING FURNITURE</h1>
            <p className='uppercase text-xs'>By <span>ANNIE LUEILWITZ</span></p>
          </div>
        </div>
        <div className='rounded'>
          <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48de54b9f372bd1c21ab80_image-10.jpg" alt="" className='w-80% rounded-md p-4' />
          <div className='text-start px-4'>
            <h3 className='text-gray-400 py-2 text-xs'>GRAPHIC DESIGN</h3>
            <h1 className='font-semibold text-black text-xl uppercase py-3'>ANONYMOUS ISRAELI ART COLLECTIVE BROKEN FINGAZ DIRECT MUSIC VIDEO FOR U2 AND BECK</h1>
            <p className='uppercase text-xs'>By <span>SIMEON BREKKE</span></p>
          </div>
        </div>
        <div className='rounded'>
          <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48d4b28d2f84340af39762_image-9.jpg" alt="" className='w-80% rounded-md p-4' />
          <div className='text-start px-4'>
            <h3 className='text-gray-400 py-2 text-xs'>ARCHITECTURE</h3>
            <h1 className='font-semibold text-black text-xl uppercase py-3'>SUZANNE SAROFF’S METICULOUSLY ARRANGED PHOTOGRAPHS ALTER PERCEPTIONS</h1>
            <p className='uppercase text-xs'>By <span>RETA TORPHY</span></p>
          </div>
        </div>
        <div className='rounded'>
          <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48d429b9d114110eb233dd_image-8.jpg" alt="" className='w-80% rounded-md p-4' />
          <div className='text-start px-4'>
            <h3 className='text-gray-400 py-2 text-xs'>GRAPHIC DESIGN</h3>
            <h1 className='font-semibold text-black text-xl uppercase py-3'>ANU AMBASNA’S PLAYFUL ILLUSTRATIONS CELEBRATE CLUB CULTURE, BROWN BODIES AND PERFECT PAUNCHES</h1>
            <p className='uppercase text-xs'>By <span>LEO BARTELL</span></p>
          </div>
        </div>
      </div>
      <div className='text-center'>
      <button className='p-4 w-[250px] uppercase bg-white text-black border rounded text-xs font-semibold hover:bg-black hover:text-white mb-10'>view all latest photos</button>
      </div>
    </>
  )
}

export default UseLatest;