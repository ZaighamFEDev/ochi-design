import React from "react";

function Footer() {
  return (
    <div className="w-full h-[100vh] font-[a] px-16 pb-10 flex justify-between overflow-hidden">
      <div className="w-1/2 h-full pt-20 flex flex-col justify-between ">
        <div>
          <h1 className="text-9xl leading-1">EYE-</h1>
          <h1 className="text-9xl leading-2 uppercase -mt-8">opening</h1>
        </div>
        <h2 className="text-4xl">ochi</h2>
      </div>
      <div className="w-1/2">
        <h1 className="uppercase text-[10.3vw] leading-none">Presentation</h1>

        <div className="main h-full w-full font-[ccc] flex justify-between">
          <div className="left h-full w-1/2">
            <div className="flex flex-col pt-6">
            <h3 className="pb-3">S:</h3>
            <a href="#">Instagram </a>
            <a href="#">Behance</a>
            <a href="#">Facebook</a>
            <a href="#">Linkedin</a>
            </div>

             <div className="flex flex-col pt-6">
             <h3 className="pb-3"> L:</h3>
            <a href="#">202-1965 W 4th Ave</a>
            <a href="#">Vancouver, Canada</a>
            <a href="#"> 30 Chukarina St</a>
            <a href="#">Lviv, Ukraine</a>
            </div>


            <div className="flex flex-col pt-6">
             <h3 className="pb-3">  E: </h3>
             <a href="#">hello@ochi.design</a>
             </div>

          </div>

          <div className="right w-1/2 h-full  p-3">
            <div className="w-full h-full flex flex-col ps-[15vw] justify-center">
            <h3>  M:</h3>
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Our work</a>
            <a href="#">About us</a>
            <a href="#">Insights</a>
            <a href="#">Contact us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
