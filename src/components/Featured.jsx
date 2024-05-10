import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full bg-zinc-600">
      <div className="w-full h-[30vh] px-16 py-10 flex items-end border-b border-zinc-700">
        <h1 className="text-[4vw] tracking-tight leading-none font-light">
          Featured projects
        </h1>
      </div>

      <div className="relative w-full h-screen flex items-center justify-between gap-5 px-16">
        <motion.div
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          
          className="cards-container relative  w-1/2 h-[80vh] rounded-xl"
        >
          <h1 className="flex text-6xl font-semibold overflow-hidden absolute z-50 text-[#cff34e] -translate-y-1/2 -translate-x-1/2 left-full top-1/2">
            <motion.span
              initial={{ y: "100%" }}
              animate={cards[0]}
              className="inline-block z-50"
            >
              FYDE
            </motion.span>
          </h1>
          <div className="card h-full w-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          
          className=" cards-container relative -z-0 w-1/2 h-[80vh] rounded-xl "
        >
          <h1 className="flex text-6xl overflow-hidden font-semibold text-[#cff34e] absolute -translate-y-1/2 translate-x-1/2 right-full z-20 top-1/2">
            <motion.span
               initial={{ y: "100%" }}
               animate={cards[1]}
               className="inline-block z-50"
            >
              VISE
            </motion.span>
          </h1>
          <div className="card h-full w-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full "
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Featured;
