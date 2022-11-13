import React from "react";

const Stake = () => {
  return (
    <div className="min-w-screen bg-[#ebf0ee] flex flex-col items-center">
      <div className="w-[90%] flex justify-center">
        <div className="w-full h-full md:w-[50%] flex flex-col items-center py-[4rem]">
          <h1 className="font-vcr text-[3.5rem] md:text-[6rem] font-[900] main-heading text-[#0f70d7]">
            STAKE
          </h1>
          <img
            src="/images/acorns/Acorns-Landing-Sections 3.png"
            alt="Acorn Yeild"
            className="mb-4"
          />
          <p className="w-[90%] w-[60%] text-center">
            Stake your ACC LP and earn great APY and governance rights
          </p>
          <a className="flex flex-col text-center my-2">
            {" "}
            STASH FOR GAINS AND VOTING <span>(COMING SOON)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stake;
