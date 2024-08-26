import React from 'react'
import { categorei } from '../Data/Data'

function Categories() {
  return (
    <div className='flex  justify-center -mt-[260px] space-x-[20px] mb-[100px] mx-auto main__container '>
      {categorei.map((item, id) => (
        <div key={id}> 
           <img className='' src={item.img} alt="" />
           <a className='absolute uppercase -mt-[165px] text-[#1e1e27] text-[22px] bg-white py-[10px] ml-[90px] w-[200px] text-center font-semibold'  href="#">{item.title}</a> 
        </div>
      ))}
    </div>
  )
}

export default Categories