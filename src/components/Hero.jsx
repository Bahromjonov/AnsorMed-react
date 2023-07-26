import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#0EB4C1]'>
      <div className='containerr flex justify-between'>
        <div className='max-w-[520px] pt-32  '>
          <h2 className='text-white mb-4 text-3xl font-bold condensed leading-10'>Tabiiy davolash usullari yordamida kasalliklardan xalos bo’ling.</h2>
          <p className='text-lg font-normal text-white w-full max-w-[440px] mb-9'>Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar eng ko’p uchraydigan kasalliklarni yengishda yordam beradi. Sog’ligingizni o’z ishining professionallariga ishonib topshiring.
          </p>
          {/* Hero button */}
          <button className='bg-[#DE2E54] py-3 border-transparent duration-500  px-6 rounded-lg border-red border-2 text-lg text-white hover:bg-white  hover:border-red-500 hover:text-red-500'>QABULGA YOZILISH</button>
        </div>
          {/* Bratan */}
          <div className='pt-8'>
          <img className='max-w-[423px] max-h-[504px]' src="./img/doktor_svg.svg" alt="Bratan" />
          </div>
      </div>
    </div>
  )
}

export default Hero