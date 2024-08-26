import React from 'react'
import { servis } from '../Data/ServiseData'

function Servis() {
  return (
    <div className='flex justify-center mx-auto items-center space-x-[1px] main__container mb-[42px]'>
      {servis.map((item, id) => (
        <div key={id} className='flex items-center bg-[#f3f3f3] h-[100px] w-[300px] pl-[25px] space-x-4'>
            <img src={item.img} alt="icon" className='w-12'/>
            <div className='leading-[18px]'>
              <h6 className='uppercase font-bold  text-[14px]'>{item.title}</h6>
              <p className='text-[13px] text-[#51545f] font-medium'>{item.descr}</p>
            </div>
        </div>
      ))}
      
    </div>
  )
}

export default Servis
