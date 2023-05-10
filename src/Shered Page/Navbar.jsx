import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars,FaSearch,FaShoppingBag,FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="">
            <nav className='flex jm_container lg:grid lg:grid-cols-5 justify-between items-center'>
                <Link className="lg:col-span-2" to="/">
                    <img src={logo} alt="" />
                </Link>

                <div className={`jm_nav ${open ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
                    <ul className='flex flex-col lg:flex-row gap-3 lg:gap-x-7'>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#FF3811]" : "" }>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#FF3811]" : "" } to="/statistics">About</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#FF3811]" : "" } to="/applied">Services</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#FF3811]" : "" } to="/blogs">Blog</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#FF3811]" : "" } to="/blogs">Contact</NavLink></li>
                    </ul>
                    <div className="flex items-center gap-4">
                        <div className="">
                            <FaShoppingBag/>
                        </div>
                        <div className="">
                            <FaSearch/>
                        </div>
                        <button className='btn btn-outline btn-error mt-10 lg:mt-0' > Appointment </button>
                    </div>
                </div>
                <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <FaTimes/> : <FaBars/>}</button>
            </nav>
        </div>
    );
};

export default Navbar;
