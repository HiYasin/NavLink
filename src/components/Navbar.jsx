// import { NavLink } from "react-router-dom";
// import './Navbar.css';
// const Navbar = () => {
//     const navMenues = [
//         {child: 'Home', link: '/home'},
//         {child: 'About', link: '/about'},
//         {child: 'Contact', link: '/contact'},
//         {chile: 'Service', link: '/services'},
//         {child: 'Users', link: '/users'}
//     ];

//     return (
//         <div className="w-10/12 mx-auto flex justify-between">
//             <h1 className="text-5xl font-bold w-full">This is Header</h1>
//             <nav className="w-10/12 mx-auto flex justify-end gap-10 py-5">
//             {
//                 navMenues.map((menu, index) => (
//                     <NavLink key={index} to={menu.link}>{menu.child}</NavLink>
//                 ))
//             }
//             </nav>
//         </div>
        
//     );
// };

// export default Navbar;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import './Navbar.css';

//navbar active state change
//use NavLink instead of Link which provide an active class for NavLink
//add a css file to where declare css style for active state

const Navbar = () => {

      
    const [open, setOpen] = useState(false);


    return (
        <nav className="bg-blue-500">
            <div className="md:hidden p-6" onClick={()=>{setOpen(!open)}}>
                {
                    open? <AiOutlineClose className="cursor-pointer"/>:<AiOutlineMenu className="cursor-pointer"/>
                }
            </div>
            <ul className={`mx-auto w-full absolute bg-blue-500 duration-500
                ${open? 'left-0':'-left-full'}
                md:flex md:w-10/12 md:justify-between md:relative md:left-0`}>                
                <li className='m-0 p-0 hover:text-white hover:bg-slate-500 cursor-pointer text-center w-full py-5'>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li className='m-0 p-0 hover:text-white hover:bg-slate-500 cursor-pointer text-center w-full py-5'>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className='m-0 p-0 hover:text-white hover:bg-slate-500 cursor-pointer text-center w-full py-5'>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className='m-0 p-0 hover:text-white hover:bg-slate-500 cursor-pointer text-center w-full py-5'>
                   <NavLink to="/service">Service</NavLink>
                </li>
                <li className='m-0 p-0 hover:text-white hover:bg-slate-500 cursor-pointer text-center w-full py-5'>
                   <NavLink to="/users">Users</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;