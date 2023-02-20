import React from 'react'
import { useState } from "react";
import {Link} from "react-scroll";
import {CgMenuRightAlt} from "react-icons/cg"
import {FaTimes, FaReact} from "react-icons/fa"


const NavBar = () => {
    const [nav, setNav] = useState(false);
    const links = [
      {
        id: 1,
        link:"ABOUT US"
      },
      {
        id: 2,
        link:"CLUB OFFICERS"
      },
      {
        id: 3,
        link:"CONTACT US"
      },
    ];

  return (
    <div className=' fixed px-4 flex justify-between items-center w-full h-20 bg-purple-900 shadow-xl z-10 shadow-green-500'>

                <div>
                <a href='/' smooth duration={500}> <FaReact size={60} className='text-green-500'/></a>
                </div>
{/*
<ul className='float-right gap-10 hidden lg:flex'>

                <li className='text-2xl cursor-pointer text-green-500 hover:scale-110 duration-200 '>
                 <Link href='/' smooth duration={500}> ABOUT US </Link>
                </li>

                <li className='text-2xl cursor-pointer text-green-500 hover:scale-110 duration-200 '>
                 <Link href='/' smooth duration={500}> CLUB OFFICERS </Link>
                </li>


                <li className='text-2xl cursor-pointer text-green-500 hover:scale-110 duration-200 '>
                 <Link href='/' smooth duration={500}> CONTACT US </Link>
                </li>
                
                <li className='text-2xl cursor-pointer text-green-500 hover:scale-110 duration-200 '>
                 <Link href='/' smooth duration={500}> PROJECTS </Link>
                </li>
            </ul>


*/}
             <ul className='gap-10 hidden lg:flex'>
                {links.map(({id,link}) => (
                <li key={id} className='text-2xl cursor-pointer text-green-500 hover:scale-110 duration-200 '>
                 <Link to={link} smooth duration={500}>{link}</Link>
                </li>

                ))}
            </ul>
            <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-green-500 lg:hidden hover:scale-110 duration-200 '>
                { nav ? <FaTimes size={60} /> : <CgMenuRightAlt size={60} /> }
          </div>



            { nav && (
                <ul className='gap-20 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-blue-900 to-purple-900'>
                    {links.map(({id,link}) => (
                <li key={id} className='text-5xl cursor-pointer hover:scale-110 duration-200 text-green-500'>
                 <Link onClick= {()=>setNav(!nav)}to={link}  smooth duration={500} >{link}</Link>
                </li>

                ))}
                </ul>
                      )}         
       </div>
  )
}

export default NavBar


