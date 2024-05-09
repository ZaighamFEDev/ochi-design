import { motion } from "framer-motion"
import React from "react";

const Marquee = () => {
    
  return (
    <div className="w-full h-[70vh] bg-[#004D43] pt-[8vw] rounded-tr-3xl rounded-tl-3xl">
      <div className="flex gap-10 whitespace-nowrap border-t-2 border-b border-zinc-500 ">
        <motion.h1  initial={{x: 0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className="uppercase text-[26vw] font-[a] leading-none -mt-[4vw]">
          we are ochi
        </motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity ,duration:10}} className="uppercase text-[26vw] font-[a] leading-none -mt-[4vw]">
          we are ochi
        </motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity ,duration:10}} className="uppercase text-[26vw] font-[a] leading-none -mt-[4vw]">
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
