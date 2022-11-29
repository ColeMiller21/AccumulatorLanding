import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Accumulate = () => {
  return (
    <div className="min-w-screen bg-[#47b5fb] min-h-[80vh] flex flex-col md:flex-row items-center">
      <div className="w-[90%] md:w-[50%] flex flex-col items-center py-[2rem]">
        <img src="/Shimmer-logo.png" alt="Accumulator Squirrel" />
        <img
          src="/Shimmer-logoText.png"
          alt="Accumulator Squirrel"
          className="w-[70%] mt-[1rem]"
        />
      </div>
      <div className="w-full h-full md:w-[50%] flex flex-col items-center py-[4rem]">
        <h1 className="font-vcr text-[3.5rem] md:text-[6rem] font-[900] main-heading text-[#0f70d7]">
          ACCUMULATE
        </h1>
        <fieldset className="w-[90%] md:w-[75%] p-[2rem] flex flex-col items-center">
          <legend align="center">
            <img
              src="/images/acorns/Acorns-Landing-Sections 2.png"
              alt="Acorn Yeild"
            />
          </legend>
          <p className="w-[100%] w-[60%] text-center">
            Purchase ACCU and create LP to strengthen your position
          </p>
          <a className="flex flex-col text-center my-2">
            I WANT TO ACCUMULATE <span>(COMING SOON)</span>
          </a>
        </fieldset>
      </div>
    </div>
  );
};

export default Accumulate;
