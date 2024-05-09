import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-600 px-16 flex items-start justify-between gap-5 py-20 border-t border-zinc-400">
      <div className="w-1/2 bg-[#004D43] h-[65%] rounded-xl">
    
      </div>
      <div className="w-1/2 h-[65%] flex gap-5">
        <div className="w-1/2 h-full bg-black rounded-xl"></div>
        <div className="w-1/2 h-full bg-black rounded-xl"></div>
      </div>
    </div>
  );
}

export default Cards;
