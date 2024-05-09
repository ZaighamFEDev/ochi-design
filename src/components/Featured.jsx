import React from 'react'

function Featured() {
  return (
    <div
    className='w-full bg-zinc-600'>
        <div className='w-full h-[30vh] px-16 py-10 flex items-end border-b border-zinc-700'>
        <h1 className='text-[4vw] tracking-tight leading-none font-light'>Featured projects</h1>
        </div>

        <div className="relative w-full h-screen flex items-center justify-between gap-5 px-16">
            <div className="cards-container relative z-[2] w-1/2 h-[80vh] bg-green-400 rounded-xl">
                <h1 className='text-6xl font-semibold text-[#cff34e] absolute -translate-y-1/2 -translate-x-1/2 left-full z[9] top-1/2'>FYDE</h1>
                <div className="card h-full w-full bg-red-200 rounded-xl overflow-hidden">
                    <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"/>
                </div>
                </div>
            <div className=" cards-container relative z-[2] w-1/2 h-[80vh] bg-green-400 rounded-xl ">
            <h1 className='text-6xl font-semibold text-[#cff34e] absolute -translate-y-1/2 translate-x-1/2 right-full z[9] top-1/2'>VISE</h1>
                <div className="card h-full w-full bg-red-200 rounded-xl overflow-hidden">
                    <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" />
                </div>
                </div>
        </div>
    </div>
  )
}

export default Featured