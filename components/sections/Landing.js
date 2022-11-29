import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="min-full-page w-min-screen flex flex-col landing-background items-center">
      <div
        id="content-wrapper"
        className="mt-[30%] md:mt-[10%] flex flex-col w[90%] md:w-[50%] items-center"
      >
        <h1 className="font-vcr text-[3.5rem] md:text-[5.25rem] xl:text-[6rem] font-[900] main-heading text-[#0f70d7]">
          ACCUMULATOR
        </h1>
        <p className="text-center w-[90%]">
          We auto-compound your LP tokens to generate EVEN MORE LP tokens. Just
          deposit, sit back, and EARN!
        </p>
        <Link href="/how">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="main-button my-6"
          >
            How it works!
          </motion.button>
        </Link>
      </div>
      <div className="z-10 text-black absolute bottom-[2%] text-[4rem] text-white text-center">
        <div className="flex flex-col items-center">
          <IconContext.Provider value={{ className: "arrow" }}>
            <BsChevronDoubleDown />
          </IconContext.Provider>
          <span className="text-white text-[2rem]">Scroll Down</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
