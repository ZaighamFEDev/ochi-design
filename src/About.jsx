import React from "react";

function About() {
  return (
    <div className="w-full h-[18  0vh] bg-[#CDEA68] py-16">
      <h2 className="py-8 px-16 text-[4vw] leading-none text-zinc-900 -tracking-[0.09vw]">
        Ochi is a strategic partner for fast-growning tech businesses that need
        to raise funds, sell prodducts, exxplain complex ideas, and hire great
        peopple.
      </h2>

      <div className="border-t border-b border-zinc-600 px-16 text-zinc-900 pt-5 flex justify-between w-full">
        <div className="w-1/2">
          <p>What you can expect:</p>
        </div>
        <div className="w-1/2 flex items-center justify-between pb-16">
          <div className="w-[70%] pe-[10vw] ">
            <p >
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="py-10">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="flex flex-col w-[30%]">
            S:
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
            <a href="#">Facebook</a>
            <a href="#">Linkedin</a>
          </div>
        </div>
      </div>

      <div className="px-16 pt-5 pb-10 w-full flex justify-between">
        <div className="w-1/2 text-zinc-900">
          <h1 className="text-[3.8vw] text-zinc-800 leading-none">Our approach:</h1>
            <button className="py-4 px-6 mt-6 bg-zinc-900 rounded-full text-zinc-200 flex items-center gap-7 text-md font-medium uppercase">Read more
              <div className="h-2 w-2 bg-white rounded-full"></div>
            </button>
        </div>

        <div className="w-1/2">
          <img className="rounded-xl h-[6-vh] w-[55vw]" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="img" />
        </div>
      </div>
    </div>
  );
}

export default About;
