import React,{useState} from 'react';
import Logo from '../assets/Logo.svg';
import {Link} from 'react-router-dom';

export default function Navbar() {
    const [selectItem, setSelectItem] = useState('');
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

  return (
    <div className='block mx-0'>
        <div className="hidden lg:flex lg:justify-between lg:items-center bg-blue-900">
            <Link className="flex items-center py-2 px-3 text-gray-100 font-bold text-3xl">
                <img src={Logo} alt="LOGO" width={40} className='me-3'/>
                Kicks Me
            </Link>
            <ul className='flex justify-between items-center'>
                <li className="mx-2">
                    <Link 
                        to="/" 
                        onClick={()=>{setSelectItem('Home')}}
                        className={`${selectItem === 'Home' ? 'lg:bg-blue-600' : ''} hover:bg-blue-600 hover:underline text-gray-200 hover:text-gray-100 text-lg px-2 py-1 rounded-md`}>
                        Home
                    </Link>
                </li>
                <li className="mx-2">
                    <Link to="/product" onClick={()=>{setSelectItem('Products')}} className={`${selectItem === 'Products' ? 'lg:bg-blue-600' : ''} hover:bg-blue-600 hover:underline hover:text-gray-50 text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Products
                    </Link>
                </li>
                <li className="mx-2">
                    <Link to="/service" onClick={()=>{setSelectItem('Services')}} className={`${selectItem === 'Services' ? 'lg:bg-blue-600' : ''} hover:bg-blue-600 hover:underline hover:text-gray-50 text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Services
                    </Link>
                </li>
                <li className="mx-2">
                    <Link to="/education" onClick={()=>{setSelectItem('Education')}} className={`${selectItem === 'Education' ? 'lg:bg-blue-600' : ''} hover:bg-blue-600 hover:underline hover:text-gray-50 text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Education
                    </Link>
                </li>
                <li className="mx-2">
                    <Link to="/experience" onClick={()=>{setSelectItem('Experience')}} className={`${selectItem === 'Experience' ? 'lg:bg-blue-600' : ''} hover:bg-blue-600 hover:underline hover:text-gray-50 text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Experience
                    </Link>
                </li>
                <li className="mx-2">
                    <Link to="/award"onClick={()=>{setSelectItem('Awards')}} className={`${selectItem === 'Awards' ? 'lg:bg-blue-600' : ''} hover:bg-blue-600 hover:underline hover:text-gray-50 text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Awards
                    </Link>
                </li>
            </ul>
        </div>

        {/* mobile */}
        <div className="block lg:hidden bg-blue-900">
            <div className='flex justify-between items-center bg-blue-950'>
                <Link className="flex items-center p-3 text-gray-100 font-bold text-3xl">
                    <img src={Logo} alt="LOGO" width={40} className='me-3'/>
                    Phonesai Dev
                </Link>
                <div className='w-10 rounded-md me-3 hover:cursor-pointer p-1' onClick={()=>handleMenu()}>
                    <div className='h-0.5 bg-gray-100'></div>
                    <div className='h-0.5 bg-gray-100 my-2.5'></div>
                    <div className='h-0.5 bg-gray-100'></div>
                </div>
            </div>
            <ul className={showMenu ? 'block py-3' : 'hidden'}>
                <li className="mx-2 my-1">
                    <Link 
                        to="/" 
                        onClick={()=>handleMenu()}
                        className={`hover:bg-blue-600 hover:underline text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Home
                    </Link>
                </li>
                <li className="mx-2 my-1">
                    <Link to="/product"onClick={()=>handleMenu()} className={`hover:bg-blue-600 hover:underline text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Products
                    </Link>
                </li>
                <li className="mx-2 my-1">
                    <Link to="/service" onClick={()=>handleMenu()} className={` hover:bg-blue-600 hover:underline text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Services
                    </Link>
                </li>
                <li className="mx-2 my-1">
                    <Link to="/education" onClick={()=>handleMenu()} className={`hover:bg-blue-600 hover:underline text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Education
                    </Link>
                </li>
                <li className="mx-2 my-1">
                    <Link to="/experience" onClick={()=>handleMenu()} className={` hover:bg-blue-600 hover:underline text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Experience
                    </Link>
                </li>
                <li className="mx-2 mt-1">
                    <Link to="/award" onClick={()=>handleMenu()} className={` hover:bg-blue-600 hover:underline text-gray-200 text-lg px-2 py-1 rounded-md`}>
                        Awards
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
