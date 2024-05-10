import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-600 px-16 flex items-start justify-between gap-5 py-20 border-t border-zinc-400">
      <div className="w-1/2 bg-[#004D43] h-[75%] rounded-xl flex items-center justify-center">
    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
      </div>
      <div className="w-1/2 h-[75%] flex gap-5">
        <div className="w-1/2 h-full bg-black rounded-xl flex items-center justify-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        </div>
        <div className="w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
        <img className="h-[7vw]" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />

        </div>
      </div>
    </div>
  );
}

export default Cards;
