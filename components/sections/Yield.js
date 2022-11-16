import React from "react";

const Yield = () => {
  return (
    <div className="min-w-screen bg-[#ebf0ee] flex flex-col-reverse md:flex-row items-center">
      <div className="w-[90%] md:w-[50%] flex flex-col items-center py-[4rem]">
        <h1 className="font-vcr text-[3.5rem] md:text-[5.25rem] xl:text-[6rem] font-[900] main-heading text-[#0f70d7]">
          YIELD
        </h1>
        <img
          src="/images/acorns/Acorns-Landing-Sections 1.png"
          alt="Acorn Yeild"
          className="mb-4"
        />
        <p className="w-[90%] w-[60%] text-center">
          Save time and money auto-compounder your favorite projects in our
          vaults
        </p>
        <a className="flex flex-col text-center my-2">
          LAUNCH THE VAULTS <span>(COMING SOON)</span>
        </a>
      </div>
      <div className="w-[90%] md:w-[50%] flex justify-center">
        <img src="/images/omnomn.png" alt="Accumulator Squirrel" />
      </div>
    </div>
  );
};

export default Yield;
