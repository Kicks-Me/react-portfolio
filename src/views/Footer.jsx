import React from 'react'
import { Link } from 'react-router-dom'
import { MdLocationPin } from "react-icons/md";

function Footer() {
  return (
    <div className='bg-gray-900 p-2 lg:px-8 lg:py-4 '>
        <div className='hidden lg:flex justify-between pb-5 text-lg'>
            <div className='flex flex-col w-2/5 text-gray-200'>
            <h2 className='mb-4 text-3xl text-gray-500'>Address</h2>
                <MdLocationPin size="2rem"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, tempore ea? Autem ut dicta asperiores, quasi accusantium nulla nemo minus.</p>
                <div className='py-5'>
                    <p>Mobile: +856 (20) 7846-9859</p>
                    <p className='mt-2'>E-Mail: phonesaiy@gamil.com</p>
                </div>
            </div>
            <div className='grid columns-3'>
                <h2 className='mb-4 text-3xl text-gray-500'>Menu</h2>
            <ul className="block">
                <li className="mx-2 my-1">
                    <Link 
                        to="/" 
                        className={`hover:bg-blue-600 hover:underline text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Home
                    </Link>
                </li>
                <li className="mx-2 my-1">
                    <Link to="/product" className={`hover:bg-blue-600 hover:underline text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Products
                    </Link>
                </li>
                <li className="mx-2 my-1">
                    <Link to="/service" className={` hover:bg-blue-600 hover:underline text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Services
                    </Link>
                </li>
                <li className="mx-2 my-1">
                    <Link to="/education" className={`hover:bg-blue-600 hover:underline text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Education
                    </Link>
                </li>
                <li className="mx-2 my-1">
                    <Link to="/experience" className={` hover:bg-blue-600 hover:underline text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Experience
                    </Link>
                </li>
                <li className="mx-2 mt-1">
                    <Link to="/award" className={` hover:bg-blue-600 hover:underline text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Awards
                    </Link>
                </li>
            </ul>
            </div>
            <div className='flex flex-col'>
                <h2 className='mb-4 text-3xl text-gray-500'>Follow</h2>
                <ul className="text-gray-200">
                    <li>
                        <Link className='text-lg hover:underline' target='_blank' to="https://www.facebook.com/profile.php?id=100009241370042">
                            Facebook
                        </Link>
                    </li>
                    <li className='my-2'>
                        <Link className='text-lg hover:underline' target='_blank' to="https://www.youtube.com/channel/UCiZqiGYkBF-W7YeYNxG4k0Q?sub_confirmation=1">
                            YouTube
                        </Link>
                    </li>
                    <li>
                        <Link className='text-lg hover:underline' target='_blank' to="https://www.tiktok.com/@johny.yang">
                            TikTok
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex justify-center items-center text-gray-500 lg:border-t border-gray-500 lg:pt-3'>
            &copy; Alright Reserved
        </div>
    </div>
  )
}

export default Footer