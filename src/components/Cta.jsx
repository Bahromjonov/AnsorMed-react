import React from 'react'

const Cta = () => {
  return (
    <div className='bg-[#0EB4C1]'>
      <div className='xizmatlar-container py-16 '>
        <p className="text-center text-white text-3xl font-bold leading-[43.20px] mb-10">Qabulga ro’yxatdan o’ting</p>
        <div className='flex justify-center'>
          <button className='bg-transparent border-2 border-white py-3 px-6 rounded-lg duration-500 text-white font-bold mr-10 hover:border-transparent hover:bg-[#DE2E54]
'>QO'NG'IROQ QILISH</button>

          <button className='bg-transparent border-2 border-white py-3 px-6 rounded-lg duration-500 text-white font-bold uppercase hover:border-transparent hover:bg-[#DE2E54]
'>Telegramdan yozish</button>

        </div>

      </div>
    </div>
  )
}

export default Cta