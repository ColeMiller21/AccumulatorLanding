import React from "react";

const Landing = () => {
  return (
    <div className="min-full-page w-min-screen flex flex-col landing-background items-center">
      <div
        id="content-wrapper"
        className="mt-[30%] md:mt-[10%] flex flex-col w[90%] md:w-[50%] items-center"
      >
        <h1 className="font-vcr text-[3.5rem] md:text-[6rem] font-[900] main-heading text-[#0f70d7]">
          ACCUMULATOR
        </h1>
        <p className="text-center">
          We auto-compound your LP tokens to generate EVEN MORE LP tokens. Just
          deposit, sit back, and EARN!
        </p>
      </div>
    </div>
  );
};

export default Landing;
