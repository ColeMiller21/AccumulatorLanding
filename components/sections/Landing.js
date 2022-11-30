import React, { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import HModal from "../HModal";

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div
      id="main"
      className="min-full-page w-min-screen flex flex-col landing-background items-center"
    >
      <div
        id="content-wrapper"
        className="mt-[30%] md:mt-[10%] flex flex-col w[90%] md:w-[50%] items-center"
      >
        <h1 className="font-vcr text-[3rem] md:text-[5.25rem] xl:text-[6rem] font-[900] main-heading text-[#0f70d7]">
          ACCUMULATOR
        </h1>
        <p className="text-center w-[90%]">
          We auto-compound your LP tokens to generate EVEN MORE LP tokens. Just
          deposit, sit back, and EARN!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="main-button my-6"
          onClick={toggleModal}
        >
          How it works!
        </motion.button>
        <HModal isOpen={isModalOpen} toggleOpen={toggleModal} />
      </div>
      <div className=" text-black absolute bottom-[2%] text-[4rem] text-white text-center">
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
