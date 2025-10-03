import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEmail } from 'react-icons/fa';
import { MdOutlinePets, MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className='bg-gray-800 text-gray-300 mt-20'>
       <div className='w-11/12 mx-auto py-10'>
      <div className='grid grid-cols-1 md:grid-cols-4 '>
        <div className='space-y-5'>
          <h1 className='text-4xl font-bold'>Adoptly</h1>
          <p>Scelerisque vivamus nisi leo semper pretium sagittis lobortis luctus. Pretium efficitur sodales elit mi eros rhoncus luctus scelerisque.</p>
          <div className='flex items-center  gap-5 text-xl mt-5 text-gray-600'>
            <button className='border border-orange-400 p-3 rounded-xl  hover:bg-orange-200'><Link href='https://www.facebook.com/'><FaFacebookF className='text-orange-400 hover:text-orange-500 cursor-pointer transition' /></Link></button>
            <button className='border border-orange-400 p-3 rounded-xl  hover:bg-orange-200'><Link href='https://www.twitter.com/'><FaTwitter className='text-orange-400 hover:text-orange-500 cursor-pointer transition' /></Link></button>
            <button className='border border-orange-400 p-3 rounded-xl hover:bg-orange-200 '><Link href='https://www.instagram.com/'><FaInstagram className='text-orange-400 hover:text-orange-500 cursor-pointer transition' /></Link></button>
            <button className='border border-orange-400 p-3 rounded-xl  hover:bg-orange-200'><Link href='https://www.linkedin.com/'><FaLinkedinIn className='text-orange-400 hover:text-orange-500 cursor-pointer transition' /></Link></button>
          </div>
        </div>
        <div className='lg:pl-10 '>
          <h2 className='text-2xl font-bold uppercase '>Quick Links</h2>
          <ul>
            <li className='my-3 hover:text-orange-400 cursor-pointer transition'> <MdOutlinePets className='inline-block mr-2 text-orange-400' /> <Link href='/about'>About Us</Link></li>
            <li className='my-3 hover:text-orange-400 cursor-pointer transition'> <MdOutlinePets className='inline-block mr-2 text-orange-400' /> <Link href='/contact'>Contact Us</Link></li>
            <li className='my-3 hover:text-orange-400 cursor-pointer transition'> <MdOutlinePets className='inline-block mr-2 text-orange-400' /> <Link href='/services'>Services</Link></li>
            <li className='my-3 hover:text-orange-400 cursor-pointer transition'> <MdOutlinePets className='inline-block mr-2 text-orange-400' /> <Link href='/faq'>FAQ's</Link></li>
            <li className='my-3 hover:text-orange-400 cursor-pointer transition'> <MdOutlinePets className='inline-block mr-2 text-orange-400' /> <Link href='/partnership'>Partnership</Link></li>
          </ul>
        </div>
        <div>
          <h2 className='text-2xl font-bold uppercase'>Get Involved</h2>
          <ul>
            <li className='my-3 hover:text-orange-400 cursor-pointer transition'> <MdOutlinePets className='inline-block mr-2 text-orange-400' /> <Link href='/adopt'>Adopting Pets</Link></li>
            <li className='my-3 hover:text-orange-400 cursor-pointer transition'> <MdOutlinePets className='inline-block mr-2 text-orange-400' /> <Link href='/shelters'>Shelters & Rescues</Link></li>
            <li className='my-3 hover:text-orange-400 cursor-pointer transition'> <MdOutlinePets className='inline-block mr-2 text-orange-400' /> <Link href='/dog-adoption'>Dog Adoption</Link></li>
            <li className='my-3 hover:text-orange-400 cursor-pointer transition'> <MdOutlinePets className='inline-block mr-2 text-orange-400' /> <Link href='/cat-adoption'>Cat Adoption</Link></li>
            <li className='my-3 hover:text-orange-400 cursor-pointer transition'> <MdOutlinePets className='inline-block mr-2 text-orange-400' /> <Link href='/other-pet-adoption'>Other type of Pets</Link></li>
          </ul>

        </div>
        <div className='p-5 space-y-5 bg-gray-600 -mt-20 border-4 rounded-lg'>
          <h2 className='text-2xl font-bold uppercase'>Subscribe Newsletter</h2>
          <p>To get the latest on pet adoption and pet care, sign up for the Furrescue newsletter.</p>
          <hr />
          <form >
            <input type="email" placeholder="Enter your email" className='w-full border border-gray-300 bg-white placeholder:text-gray-300 rounded-lg p-3 mt-5 focus:outline-none focus:border-orange-400' />
            <button type="submit" className='w-full bg-orange-400 text-white rounded-lg p-3 mt-3 hover:bg-orange-500 transition'><MdAttachEmail className='inline-block mr-2' />Sign Up</button>
          </form>
        </div>
      </div>
    </div>
   </section>
  );
};

export default Footer;