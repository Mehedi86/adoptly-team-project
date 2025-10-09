"use client"
import useAuth from '@/hooks/useAuth';
import useUser from '@/hooks/useUser/useUser';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';
import { MdDarkMode, MdSunny } from 'react-icons/md';

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const pathname = usePathname()
    const [isTheme, setIsTheme] = useState(false);
    const { user, loading, logoutSystem } = useAuth();
    const [userData, userRefetch, userLoading] = useUser();

    console.log('checking userData', userData);


    const navgicaton = [
        {
            "id": 1,
            "name": "Home",
            "path": "/"
        },
        {
            "id": 2,
            "name": "Adoption List",
            "path": "/adoption_list"
        },
        {
            "id": 3,
            "name": "About Us",
            "path": "/about"
        },
        {
            "id": 4,
            "name": "Services",
            "path": "/services"
        },
        {
            "id": 5,
            "name": "Contact",
            "path": "/contact"
        },
        {
            "id": 6,
            "name": "Blog",
            "path": "/blog"
        },
        {
            "id": 7,
            "name": "Contributor",
            "path": "/contributor"
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

    // Toogle dark mode and light
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        const dark = savedTheme === "dark";
        setIsTheme(dark);
        document.documentElement.classList.toggle("dark", dark);
    }, [])


    const handleToggleDarkAndLight = () => {
        const newTheme = isTheme ? "light" : "dark";
        console.log("checking newTheme", newTheme);
        setIsTheme(!isTheme);
        document.documentElement.classList.toggle("dark", !isTheme);
        localStorage.setItem("theme", newTheme);
    }


    return (
        <div className={` ${isSticky ? "sticky top-0 z-50 bg-[#ffffffb9] dark:bg-[#0d1b2aab]  shadow-xl backdrop-blur-lg transition-all duration-300 opacity-100" : "bg-white dark:bg-[#0d1b2a]"}`}>
            <nav className={` z-50 w-full lg:px-32 px-3 flex justify-between py-3 font-truculenta font-[200]`}>
                <div className='flex items-center gap-20'>
                    <h1 className='text-3xl dark:text-[#cfcfcf]'>Adoptly</h1>
                    <ul className='hidden lg:flex items-center gap-5 text-[16px] font-[400]'>
                        {
                            navgicaton.map((navi) => (
                                <Link key={navi.id} className={`${pathname == navi.path ? "text-[#e76f51] dark:text-[#e76f51] border-b-2 border-[#e76f51]" : "dark:text-[#cfcfcf]"} hover:text-[#e76f51]`} href={navi.path}>
                                    <li className='font-truculenta'>{navi.name}</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex items-center gap-5 text-[19px]'>
                    {/* Toggle dark and light */}
                    <div>
                        <label className="swap swap-rotate">
                            {/* this hidden checkbox controls the state */}
                            <input
                                type="checkbox"
                                checked={isTheme}
                                onClick={handleToggleDarkAndLight}
                                readOnly
                                className="theme-controller text-white" value="synthwave" />
                            {/* moon icon */}
                            <MdSunny
                                className="text-[#ffa700] dark:text-[#ffa700]  swap-off h-10 w-8 fill-current"
                            />
                            {/* sun icon */}
                            <MdDarkMode
                                className="text-white  dark:text-white swap-on h-10 w-8 fill-current"
                            />
                        </label>
                    </div>
                    {
                        user ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-14 rounded-full">
                                        <Image
                                            src={`${userData?.photo ? userData?.photo : "https://i.ibb.co.com/0VpT31Vw/user.png"}`}
                                            width={500}
                                            height={300}
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-md dropdown-content bg-white dark:bg-[#0d1b2a] text-black dark:text-[#cfcfcf]  rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    {
                                        userData?.role === 'user' && (
                                            <li className=''>
                                                <Link href={"/userDashboard"} className="justify-between">
                                                    Dashboard
                                                </Link>
                                            </li>
                                        )
                                    }
                                    {
                                        userData?.role === 'admin' && (
                                            <li className=''>
                                                <Link href={"/adminDashboard"} className="justify-between">
                                                    Dashboard
                                                </Link>
                                            </li>
                                        )
                                    }
                                    <li><a>Settings</a></li>
                                    <li onClick={logoutSystem}><a>Logout</a></li>
                                </ul>
                            </div>
                        ) : (
                            <Link href={"/login"}>
                                <button className='btn w-20 focus:outline-0 border-0 rounded-sm bg-[#e76f51] text-white'>Login</button>
                            </Link>
                        )
                    }
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