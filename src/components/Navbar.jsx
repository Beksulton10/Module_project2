import React, { useState } from 'react';
import searche from '../assets/searche.svg';
import user from '../assets/user_icon.svg';
import bag from '../assets/shopping-bag.svg';
import cart from '../assets/cart_img.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({
    account: false,
    language: false,
    currency: false,
    cart: false
  });

  const toggleDropdown = (dropdown) => {
    setDropdowns(prev => {
      const newDropdowns = {
        account: false,
        language: false,
        currency: false,
        cart: false
      };
      newDropdowns[dropdown] = !prev[dropdown];
      return newDropdowns;
    });
  };

  return (
    <nav className='nav'>
      <div className='nav__top bg-[#1e1e27] h-[50px] p-2 fixed z-20 w-full'>
        <div className="main__container mx-auto flex items-center justify-between">
          <div className="text-[#b5aec4] text-2xl font-semibold">
            <p className='uppercase text-[13px]'>free shipping on all u.s orders over $50</p>
          </div>
          <div className="hidden md:flex space-x-4">
            <div className="relative">
              <button
                onClick={() => toggleDropdown('currency')}
                className="text-[#b5aec4] px-3 py-2 text-sm font-medium pl-7"
              >
                USD
              </button>
              {dropdowns.currency && (
                <div className="absolute dropdowns right-0 mt-2 w-20 text-black shadow-lg text-center px-2 z-10 bg-white">
                  <Link to="#" className="block px-4 py-2 text-sm hover:text-[#b5aec4] border-b">CAD</Link>
                  <Link to="#" className="block px-4 py-2 text-sm hover:text-[#b5aec4] border-b">AUD</Link>
                  <Link to="#" className="block px-4 py-2 text-sm hover:text-[#b5aec4] border-b">EUR</Link>
                  <Link to="#" className="block px-4 py-2 text-sm hover:text-[#b5aec4] border-b">GBP</Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('language')}
                className="text-[#b5aec4] px-3 py-2 text-sm font-medium border-s-[1px] pl-7"
              >
                English
              </button>
              {dropdowns.language && (
                <div className="absolute dropdowns right-0 mt-2 w-[106px] text-black shadow-lg text-center px-2 z-10 bg-white">
                  <Link to="#" className="block px-4 py-2 text-sm hover:text-[#b5aec4] border-b">French</Link>
                  <Link to="#" className="block px-4 py-2 text-sm hover:text-[#b5aec4] border-b">Italian</Link>
                  <Link to="#" className="block px-4 py-2 text-sm hover:text-[#b5aec4] border-b">German</Link>
                  <Link to="#" className="block px-4 py-2 text-sm hover:text-[#b5aec4] border-b">Spanish</Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('account')}
                className="text-[#b5aec4] px-3 py-2 text-sm font-medium border-s-[1px] pl-7"
              >
                My Account
              </button>
              {dropdowns.account && (
                <div className="absolute mt-2 w-28 text-black shadow-lg text-center px-2 z-10 bg-white ">
                  <Link to="#" className="block px-4 py-2 text-sm pl-9 hover:text-[#b5aec4] border-b signIn">Sign in</Link>
                  <Link to="#" className="block px-4 py-2 text-sm pl-9 hover:text-[#b5aec4] border-b register">Register</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="nav__bottom h-24 bg-white z-10 fixed w-full shadow-md mt-[50px]">
        <div className='main__container mx-auto flex items-center justify-between pt-7'>
          <div className='nav__bottom-logo'>
            <Link to="/" className='uppercase text-[24px] font-bold'>Fashion<span className='uppercase text-red-500'>Cube</span></Link>
          </div>
          <div className='nav__bottom-social flex items-center space-x-[60px] mr-3'>
            <ul className='flex space-x-8 font-medium uppercase text-[13px]'>
              <li><Link to="/" className="hover:text-gray-600">Home</Link></li>
              <li><Link to="/" className="hover:text-gray-600">Shop</Link></li>
              <li><Link to="/" className="hover:text-gray-600">Contact</Link></li>
            </ul>
            <div className='flex space-x-5 cursor-pointer'>
              <img src={searche} alt="search" className='w-4'/>
              <img src={user} alt="user" className='w-5'/>
              <div className="relative">
                <img
                  src={bag}
                  alt="shopping bag"
                  className='w-5 cursor-pointer'
                  onClick={() => toggleDropdown('cart')}
                />
              {dropdowns.cart && (
              <div className="absolute left-[30px] mt-2 w-[390px] text-black shadow-lg px-2 bg-white fixed -top-14 bottom-0  flex flex-col items-center justify-center z-30 h-[100vh]"> 
              <div className=" p-4 shadow-lg h-[100vh]">
                <p className="px-4 py-2 text-[30px] font-medium text-black border-b-2">Your Cart</p>
                  <h4 className='text-[#b5aec4] mb-[20px] text-[28px] mt-[100px]'>Please login to view <br /> cart</h4>
                <img src={cart} alt="" />
              </div>
              <div className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 z-10 " onClick={() => toggleDropdown('cart')}></div>
              </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;