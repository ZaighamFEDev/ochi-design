import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";


function LandingPage() {
  return (
    
      <div data-scroll data-scroll-section data-scroll-speed="-.6" className="w-full h-screen bg-zinc-900 text-white pt-1">
        <div className="textstructure mt-[10vw] ms-16">
          {["We Create", "eye-opening", "presentations"].map((item,index) => (
           <div className="masker font-['a'] ">
            <div className="w-fit flex items-baseline">
            { index === 1 && (<motion.div initial={{width:0}} animate={{width:"9.5vw"}} transition={{ease:[0.22, 1, 0.36, 1], duration:1.3}} className="w-[9.5vw] h-[6vw] rounded-[10px] overflow-hidden me-[2vw]">
              <img className="h-full w-full object-cover" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
            </motion.div>)}
              <h1 className="uppercase text-[9.5vw] leading-[7.5vw] font-thin">
                {item}
              </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-zinc-700 mt-20 flex items-center justify-between px-16 py-5">
         {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
             <p>{item}</p>
         ))}
         <div className="flex items-center gap-2">
          <div className="border border-zinc-700 rounded-full py-1 px-3 text-sm font-thin">START THE PROJECT</div>
          <div className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center">
           <span className="rotate-45"> 
           <FaArrowUpLong/>
           </span>
            </div>
         </div>
        </div>
      </div>
  );
}

export default LandingPage;
