import React, { useEffect, useState } from "react";

function Eyes() {

    let [rotate, setrotate] = useState(0)
useEffect(()=>{

    window.addEventListener("mousemove",(e)=>{
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let deltaX = mouseX - window.innerWidth/2;
        let deltaY = mouseY - window.innerHeight/2;

        let angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
        setrotate(angle-180)
    })
})

  return (
    <div className='eyes w-full h-screen  bg-zinc-200 overflow-hidden'>

       <div  data-scroll data-scroll-section data-scroll-speed="-.8" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10">

            <div  className="h-[15vw] w-[15vw] bg-white rounded-full relative">
            <div  className="h-[63%] w-[63%] bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium">PLAY</span>
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className="w-full h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-5 m-1 bg-white rounded-full"></div>
            </div>

            </div>
            </div>



            <div className="h-[15vw] w-[15vw] bg-white rounded-full relative">
            <div className="h-[63%] w-[63%] bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium">PLAY</span>
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}  className="w-full h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-5 m-1 bg-white rounded-full"></div>
            </div>
            </div>
            </div>


        </div>
       </div>

    </div>
  );
}

export default Eyes;
