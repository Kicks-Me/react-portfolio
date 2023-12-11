import React,{useState} from 'react'
import Programmer from '../assets/Programmer.svg';
import { Link } from 'react-router-dom';

function Dashboard() {

  return (
    <div className='grid grid-cols-12 gap-4 w-full'>
      <div className="col-span-9 lg:flex p-3 lg:p-8">
        <img src={Programmer} alt="" className='w-2/6 order-first'/>
        <div className='flex flex-col order-last ms-9 me-3'>
          <p className='text-3xl text-gray-600 font-extrabold'>Hi! My name is Mr. Dev</p>
          <p className='text-lg text-red-700 mb-4 mt-8'>I am a full stack developer and Windows Application with over 5 years experience.</p>
          <p className='text-lg text-gray-600 mb-9 lg:mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque harum maxime distinctio necessitatibus ex ducimus.</p>
          <Link to='https://call.whatsapp.com/video/TyI5FDMFagobIcieTHb7Dl' target='_blank' className='bg-green-800 hover:bg-green-700 text-white font-semibold text-lg px-7 py-2 rounded-full mx-auto'>Contact</Link>
        </div>
      </div>
      <div className="col-span-3 flex flex-col pe-9 p-4">
        <p className='text-2xl mx-auto my-3 bg-blue-500 py-2 px-5 rounded-full font-semibold text-gray-50 shadow'>My Professional</p>
        <div>
          <div className="w-full my-4">
            <span className="font-bold text-lg text-blue-800">React.js</span>
            <div className="bg-blue-300 h-2 rounded-lg mt-2">
              <span className='relative block h-full w-5/6 bg-blue-600 rounded-md'>
                <span className="absolute -right-2 -top-8 bg-blue-600 text-white px-1.5 rounded-lg before:content-[''] before:absolute before:-left-0 before:-bottom-[1.5px] before:w-5 before:h-5 before:bg-blue-600 before:translate-x-2/4 before:rotate-45 before:-z-10">80%</span>
              </span>
            </div>
          </div>

          <div className="w-full my-4">
            <span className="font-bold text-lg text-blue-800">Node.js</span>
            <div className="bg-blue-300 h-2 rounded-lg mt-2">
              <span className='progress-lable delay-300 w-11/12'>
                <span className="absolute right-2 -top-7 text-blue-800">90%</span>
              </span>
            </div>
          </div>

          <div className="w-full my-4">
            <span className="font-bold text-lg text-blue-800">JavaScript</span>
            <div className="bg-blue-300 h-2 rounded-lg mt-2">
              <span className='progress-lable delay-300 w-5/6'>
                <span className="absolute right-2 -top-7 text-blue-800">80%</span>
              </span>
            </div>
          </div>
          <div className="w-full my-4">
            <span className="font-bold text-lg text-blue-800">PHP</span>
            <div className="bg-blue-300 h-2 rounded-lg mt-2">
              <span className='progress-lable delay-200 w-11/12'>
                <span className="absolute right-2 -top-7 text-blue-800">90%</span>
              </span>
            </div>
          </div>
          <div className="w-full my-4">
            <span className="font-bold text-lg text-blue-800">HTML</span>
            <div className="bg-blue-300 h-2 rounded-lg mt-2">
              <span className='progress-lable delay-100 w-full'>
                <span className="absolute right-2 -top-7 text-blue-800">100%</span>
              </span>
            </div>
          </div>
          <div className="w-full my-4">
            <span className="font-bold text-lg text-blue-800">CSS</span>
            <div className="bg-blue-300 h-2 rounded-lg mt-2">
              <span className='progress-lable delay-1000 w-full'>
                <span className="absolute right-2 -top-7 text-blue-800">100%</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard