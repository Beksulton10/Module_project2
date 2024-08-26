import React from 'react'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import pinterest from '../assets/pinterest.svg'



function Footer() {
  return (
    <div className='bg-[#f3f3f3] mt-[200px]'>
      <div className='main__container mx-auto'>
         <div className='flex items-center justify-between'>
           <ul className='flex space-x-[50px] text-[15px] h-[130px] pt-[75px] text-[#51545f]'>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact us</a></li>
           </ul>
           <div className='flex mt-[60px] space-x-[20px]'>
             <img src={facebook} alt="icon" className='w-5'/>
             <img src={twitter} alt="icon" className='w-5'/>
             <img src={instagram} alt="icon" className='w-5'/>
             <img src={pinterest} alt="icon" className='w-5'/>
           </div>
         </div>
         <div className='h-[130px] pt-[30px] text-[#51545f]'>
           <p>©2018 All Rights Reserverd. This template is made with  by <a href="https://quintuslabs.com/" className='text-[#fe4c50]'>Quintus Labs</a></p>
         </div>
      </div>
    </div>
  )
}

export default Footer
