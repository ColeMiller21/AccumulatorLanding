import React from "react";

const Accumulate = () => {
  return (
    <div className="min-w-screen bg-[#47b5fb] flex flex-col md:flex-row items-center">
      <div className="w-[90%] md:w-[50%] flex justify-center h-full">
        <img src="/images/omnomn.png" alt="Accumulator Squirrel" />
      </div>
      <div className="w-full h-full md:w-[50%] flex flex-col items-center py-[4rem]">
        <h1 className="font-vcr text-[3.5rem] md:text-[6rem] font-[900] main-heading text-[#0f70d7]">
          ACCUMULATE
        </h1>
        <img
          src="/images/acorns/Acorns-Landing-Sections 2.png"
          alt="Acorn Yeild"
          className="mb-4"
        />
        <p className="w-[90%] w-[60%] text-center">
          Purchase ACC and create LP to strengthen your position
        </p>
        <a className="flex flex-col text-center my-2">
          I WANT TO ACCUMULATE <span>(COMING SOON)</span>
        </a>
      </div>
    </div>
  );
};

export default Accumulate;
