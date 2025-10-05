"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const pathname = usePathname()

    const navgicaton = [
        {
            "id": 1,
            "name": "Home",
            "path": "/"
        },
        {
            "id": 2,
            "name": "About Us",
            "path": "/about"
        },
        {
            "id": 3,
            "name": "Services",
            "path": "/services"
        },
        {
            "id": 4,
            "name": "Contact",
            "path": "/contact"
        },
        {
            "id": 5,
            "name": "Blog",
            "path": "/blog"
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 150;
            setIsSticky(!isTop)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className={` ${isSticky ? "sticky top-0 z-50 bg-[#ffffffb9] shadow-xl backdrop-blur-lg transition-all duration-300 opacity-100" : "bg-white"}`}>
            <nav className={` z-50 w-full lg:px-32 px-3 flex justify-between py-3 font-truculenta font-[200]`}>
                <div className='flex items-center gap-20'>
                    <h1 className='text-3xl'>Adoptly</h1>
                    <ul className='hidden lg:flex items-center gap-5 text-[16px] font-[400]'>
                        {
                            navgicaton.map((navi) => (
                                <Link key={navi.id} className={`${pathname == navi.path && "text-[#e76f51] border-b-2 border-[#e76f51]"} hover:text-[#e76f51]`} href={navi.path}>
                                    <li className='font-truculenta'>{navi.name}</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex items-center gap-5 text-[19px]'>
                    <button className='btn w-40 rounded-xl bg-[#e76f51] text-white'>Donate Now</button>
                    <FaBars onClick={handleToggle} className='lg:hidden' />
                </div>
                <ul className={`z-50 absolute left-0 p-5 lg:hidden  bg-[#e76f51ea] backdrop-blur-sm text-white w-full flex flex-col  gap-5 text-[19px] font-[300] translate-y-14 duration-700  ${toggle ? "translate-x-0" : "-translate-x-full"}`}>
                    {
                        navgicaton.map((navi) => (
                            <Link className={`${pathname == navi.path && "text-white border-b-2 border-[#000000]"} hover:text-[#307bc4]`} key={navi.id} href={navi.path}>
                                <li className='font-truculenta'>{navi.name}</li>
                            </Link>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;