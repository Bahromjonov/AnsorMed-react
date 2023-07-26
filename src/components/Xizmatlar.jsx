import React from 'react'

const Xizmatlar = () => {
    return (
        <main className='xizmatlar-container py-32'>
            {/* Xizmatlar */}
            <h2 className='text-center text-4xl font-bold mb-16'>Xizmatlar</h2>
            <div className='space-y-20'>
                {/* 1 */}
                <div className='flex items-center'>
                    <img className='w-52 h-52 mr-16' src="./img/image1.svg" alt="xijoma" />
                    <div>
                        <h3 className='text-2xl font-bold mb-6 condensed'>Hijoma</h3>
                        <p className='text-[#444] text-[16px] leading-6'>Imom Termiziy Abdulloh ibn Abbos raziyallohu anhumodan rivoyat qilgan hadisda rasululloh sallallohu alayhi va sallam dedilar: «Sizlar hijoma qiladigan kunlaringizning eng yaxshisi 17, 19 va 21-kunlardir» (bu kunlar hijrij-kamariy hisobdagi oylar kunlaridir).</p>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex items-center'>
                    <img className='w-52 h-52 mr-16' src="./img/image2.svg" alt="xijoma" />
                    <div>
                        <h3 className='text-2xl font-bold mb-6 condensed'>Manual terapiya</h3>
                        <p className='text-[#444] text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac metus placerat, pellentesque enim ac, rhoncus lectus. Maecenas et posuere lorem. Fusce sed massa sit amet elit viverra hendrerit.</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex items-center'>
                    <img className='w-52 h-52 mr-16' src="./img/image3.svg" alt="xijoma" />
                    <div>
                        <h3 className='text-2xl font-bold mb-6 condensed'>Zuluk bilan davolash</h3>
                        <p className='text-[#444] text-[16px] leading-6'>Girudoterapiya (lot. hirūdō — «zuluk» va qad. yun. θεραπεία — «davolash») — ma’lum kasalliklarni dorivor zuluklar (Hirudo medicinalis) yordamida davolash usuli. Fizioterapevtik muolaja, muqobil tibbiyotga oid sanaladi. Bunday zuluklar ushbu kichik sinf chuvchalchanglariga oid yagona tur hisoblanadi, qolganlari shifobaxsh ta’sir ko’rsatmaydi.</p>
                    </div>
                </div>
                {/* 4 */}
                <div className='flex items-center'>
                    <img className='w-52 h-52 mr-16' src="./img/image3(1).svg" alt="xijoma" />
                    <div>
                        <h3 className='text-2xl font-bold mb-6 condensed'>Tabiiy dori vositalari</h3>
                        <p className='text-[#444] text-[16px] leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac metus placerat, pellentesque enim ac, rhoncus lectus. Maecenas et posuere lorem. Fusce sed massa sit amet elit viverra hendrerit.</p>
                    </div>
                </div>
                <div className='flex justify-center '>
                    <button className='w-full max-w-[189px] bg-[#DE2E54] py-3 condensed px-6 rounded-lg border-transparent border-red border-2 text-[15px] font-semibold leading-6 text-white hover:bg-white  hover:border-red-500 hover:text-red-500 duration-500 '>QABULGA YOZILISH</button>
                </div>

            </div>
        </main>
    )
}

export default Xizmatlar