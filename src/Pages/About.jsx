import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const About = () => {
  return (
    <>
        <Navbar />
        <div className='max-w-[1240px] mx-auto w-full bg-white px-16'>
          <p className='text-xs font-semibold mt-10 py-16 text-gray-400'>About</p>
          <h1 className='lg:text-6xl md:text-3xl sm:text-2xl font-semibold text-black space-x-3'>CLITA INCORRUPTE AT VIX.</h1>
          <h1 className='lg:text-6xl md:text-3xl sm:text-2xl font-semibold text-black space-x-3'>NAM TE MOLESTIE IUDICABIT</h1>
          <h1 className='lg:text-6xl md:text-3xl sm:text-2xl font-semibold text-black space-x-3'> ERRORIBUS ODIO.</h1>
        </div>
        <div className='sm:p-4 p-0'>
          <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48e3149918eadd57ae153d_image-11.jpg" alt="" className='mt-5 object-cover object-center h-[250px] w-[100%]' />
        </div>
        <div className="text max-w-[1240px] mx-auto w-full bg-white py-16  px-16">
          <h1>THIS IS NOICELAND.</h1>
          <p className='py-4'>Vim et dolore eligendi voluptua, qui id unum quas omittantur, at sed justo tation eligendi. Assum accommodare an mei. Sonet propriae partiendo ad vix, ex vis epicuri constituto incorrupte. Ut vim liber recteque eloquentiam, qui te exerci forensibus. Eu pri ullum meliore tincidunt, an ius aeque paulo saperet, eum modus tation an.</p>
          <p  className='py-4'>Vix mandamus deseruisse voluptatibus in. Ei pri epicurei indoctum. Aeterno oportere at his. Nam prompta recteque dissentias id. Aperiam atomorum iudicabit sed id, malis dicit pericula at vis.</p>
          <p  className='py-4'>At sea scripta nostrud facilisis, his at nihil ubique sententiae, aeque menandri urbanitas eu quo. Fastidii qualisque cum id. Tollit convenire adversarium duo te. Te vim dictas virtute iudicabit, tibique omittam cum ut, clita decore lucilius nec ei. Sit facer docendi ex, laoreet deserunt pro eu, eum putent virtute vivendum te. Purto interpretaris signiferumque te eam, at mel saperet voluptua.</p>
          <p className='text-xs font-semibold mt-10 py-16 px-0 text-gray-400'>CONTACT US</p>
          <hr />
        </div>
        <div  className="text max-w-[1240px] mx-auto w-full bg-white py-16  px-16 border-b">
          <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-semibold text-bl'>Our team</h1>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
              <div  className='mt-16'>
                <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48f8699918ea591dae296c_1.jpg" alt="" className='w-[100%]' />
                <div>
                  <h2 className='text-xl text-black pt-4'>Simeon Peterson</h2>
                  <p className='text-gray-400 text-xs'>COFOUNDER, EDITOR IN CHIEF</p>
                </div>
              </div>
              <div  className='mt-16'>
                <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48f8b933b04e4011477043_2.jpg" alt="" className='w-[100%]' />
                <div>
                  <h2 className='text-xl text-black pt-4'>Simeon Brekke</h2>
                  <p className='text-gray-400 text-xs'>COFOUNDER, PARTNER</p>
                </div>
              </div>
              <div  className='mt-16'>
                <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48f8ddb9f3728c2f220b6c_3.jpg" alt="" className='w-[100%]' />
                <div>
                  <h2 className='text-xl text-black pt-4'>Annie Lueilwitz</h2>
                  <p className='text-gray-400 text-xs'>MANAGING EDITOR</p>
                </div>
              </div>
              <div  className='mt-16'>
                <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48f8fe71d09921a13565d4_4.jpg" alt="" className='w-[100%]' />
                <div>
                  <h2 className='text-xl text-black pt-4'>Reta Torphy</h2>
                  <p className='text-gray-400 text-xs'>MANAGING EDITOR</p>
                </div>
              </div>
              <div  className='mt-16'>
                <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48f91671d09980fc3565dd_5.jpg" alt="" className='w-[100%]' />
                <div>
                  <h2 className='text-xl text-black pt-4'>Leo Bartell</h2>
                  <p className='text-gray-400 text-xs'>EDITOR</p>
                </div>
              </div>
              <div  className='mt-16'>
                <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48f93e68e07c3cb35bccb6_6.jpg" alt="" className='w-[100%]' />
                <div>
                  <h2 className='text-xl text-black pt-4'>Clem Onojeghuo</h2>
                  <p className='text-gray-400 text-xs'>SENIOR WRITER</p>
                </div>
              </div>
              <div  className='mt-16'>
                <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48f970bd7420202eef60e6_7.jpg" alt="" className='w-[100%]' />
                <div>
                  <h2 className='text-xl text-black pt-4'>Michal Legros</h2>
                  <p className='text-gray-400 text-xs'>SENIOR WRITER</p>
                </div>
              </div>
              <div  className='mt-16'>
                <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48f995d955431b3f1a9f72_8.jpg" alt="" className='w-[100%]' />
                <div>
                  <h2 className='text-xl text-black pt-4'>Rosanna Ondricka</h2>
                  <p className='text-gray-400 text-xs'>WRITER</p>
                </div>
              </div>
              <div  className='mt-16'>
                <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48f9ad71d099024235661b_9.jpg" alt="" className='w-[100%]' />
                <div>
                  <h2 className='text-xl text-black pt-4'>Alessandra Ortiz</h2>
                  <p className='text-gray-400 text-xs'>WRITER</p>
                </div>
              </div>
              <div  className='mt-16'>
                <img src="https://assets.website-files.com/5b47286ba09814724c5a5ff4/5b48f9c568e07c30c85bcd01_10.jpg" alt="" className='w-[100%]' />
                <div>
                  <h2 className='text-xl text-black pt-4'>Coby Gottlieb</h2>
                  <p className='text-gray-400 text-xs'>WRITER</p>
                </div>
              </div>
          </div>
        </div>
        <div className="text max-w-[1240px] mx-auto w-full bg-white py-16  px-16">
          <h1 className='lg:text-3xl md:text-2xl sm:text-xl font-semibold text-black space-x-3'>WANNA GET IN TOUCH?</h1>
          <p className='pt-4'>Vim et dolore eligendi voluptua, qui id unum quas omittantur, at sed justo tation eligendi. Assum accommodare</p>
          <p>an mei. Sonet propriae partiendo ad vix, ex vis epicuri constituto incorrupte.</p>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 bg-white gap-4'>
            <div className='border border-black rounded-sm w-full  flex justify-start p-8 mt-8 flex-col items-center'>
                <div className='w-[80px] h-[80px] bg-black flex justify-center items-center rounded-full'>
                  <div className='text-white'>1</div>
                </div>
                <p className='text-gray-300 text-xs py-4 font-bold'>ADDRESS</p>
                <p className='text-black text-xl font-semibold'>144 N 7th St. #536</p>
                <p className='text-black text-xl font-semibold'>Brooklyn, NY 11249</p>
                <p className='text-black text-xl font-semibold'>United States</p>
            </div>
            <div className='border border-black rounded-sm w-full  flex justify-start p-8 mt-8 flex-col items-center'>
                <div className='w-[80px] h-[80px] bg-black flex justify-center items-center rounded-full'>
                  <div className='text-white'>2</div>
                </div>
                <p className='text-gray-300 text-xs py-4 font-bold'>GENERAL INQUIRIES</p>
                <p className='text-black text-xl font-semibold'>hello@noiceland.co</p>
            </div>
            <div className='border border-black rounded-sm w-full  flex justify-start p-8 mt-8 flex-col items-center'>
                <div className='w-[80px] h-[80px] bg-black flex justify-center items-center rounded-full'>
                  <div className='text-white'>3</div>
                </div>
                <p className='text-gray-300 text-xs py-4 font-bold'>PRESS INQUIRIES</p>
                <p className='text-black text-xl font-semibold'>press@noiceland.co</p>
            </div>
            <div className='border border-black rounded-sm w-full  flex justify-start p-8 mt-8 flex-col items-center'>
                <div className='w-[80px] h-[80px] bg-black flex justify-center items-center rounded-full'>
                  <div className='text-white'>4</div>
                </div>
                <p className='text-gray-300 text-xs py-4 font-bold'>POTENTIAL CONTRIBUTORS</p>
                <p className='text-black text-xl font-semibold'>collab@noiceland.co</p>
            </div>
          </div>
        </div>      
        <Footer />  
    </>
  )
}

export default About;