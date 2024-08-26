  import dealImg from '../assets/deal_ofthe_week.png'
  import React, { useState, useEffect } from 'react';

  function Deal() {
    const [timeLeft, setTimeLeft] = useState(5 * 24 * 60 * 60);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }, []);

    const days = Math.floor(timeLeft / (24 * 60 * 60));
    const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = timeLeft % 60;

    return (
      <div className=" bg-[#f3f3f3]">
          <div className='main__container mx-auto flex items-center justify-between'>
              <div>
                  <img src={dealImg} alt="img" />
              </div>
              <div className='text-center'>
                  <h2 className='text-[40px] font-bold mb-[70px]'>Deal Of The Week</h2>
                  <div className='flex justify-center text-center leading-[23px] space-x-[10px]'>
                      <div className='w-[120px] h-[120px] bg-white rounded-[50%] pt-[35px]'>
                          <span className='text-[48px] text-[#fe4c50] font-semibold pt-[12px]'>0{days}</span>
                          <div className='text-[18px] font-medium text-[#51545f] pb-[12px]'>Days</div>
                      </div>
                      <div className='w-[120px] h-[120px] bg-white rounded-[50%] pt-[35px]'>
                          <span className='text-[48px] text-[#fe4c50] font-semibold pt-[12px]'>{hours}</span>
                          <div className='text-[18px] font-medium text-[#51545f] pb-[12px]'>Hours</div>
                      </div>
                      <div className='w-[120px] h-[120px] bg-white rounded-[50%] pt-[35px]'>
                          <span className='text-[48px] text-[#fe4c50] font-semibold pt-[12px]'>{minutes}</span>
                          <div className='text-[18px] font-medium text-[#51545f] pb-[12px]'>Mins</div>
                      </div>
                      <div className='w-[120px] h-[120px] bg-white rounded-[50%] pt-[35px]'>
                          <span className='text-[48px] text-[#fe4c50] font-semibold pt-[12px]'>{seconds}</span>
                          <div className='text-[18px] font-medium text-[#51545f] pb-[12px]'>Sec</div>
                      </div>
                  </div>
                  <button className='bg-[#1e1e27] text-white rounded-[3px] py-[10px] px-[25px] uppercase text-sm font-medium mt-[32px] mt-[52px] hover:bg-gray-800'>shop now</button>
              </div>
          </div>
      </div>
    );
  }

  export default Deal;