import React, { useState } from 'react';
import Link from '../../Link/Link';
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const routes = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Contact', path: '/contact' },
    { id: 5, name: 'NotFound', path: '*' },
  ];
  const haldleClick = ()=>{
    setOpen(!open)
  }
  
  return (
    <nav className='bg-yellow-200 p-6'>

     <div className=' md:hidden' onClick={haldleClick}>
      {
        open === true ? 
        <AiOutlineClose className='text-2xl'></AiOutlineClose> 
        :<AiOutlineMenu className='text-2xl' ></AiOutlineMenu>
      }
    
     </div>
      <ul className={`md:flex gap-8 absolute duration-1000 bg-yellow-200 px-4 ${open?
        'left-4':'-left-80'} `}>
       {
        routes.map(route=><Link key={route.id} route={route}></Link>)
       }
      </ul>
    </nav>
  );
};

export default NavBar;