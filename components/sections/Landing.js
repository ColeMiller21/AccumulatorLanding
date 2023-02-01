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
      className="relative min-h-[150vh] w-min-screen flex flex-col bg-[#97CAFF] items-center overflow-y-visible"
    >
      <div
        id="content-wrapper"
        className="mt-[30%] md:mt-[10%] flex flex-col w[90%] md:w-[50%] items-center"
      >
        <h1 className="font-vcr text-[3rem] md:text-[5.25rem] xl:text-[6rem] font-[900] main-heading text-stroke">
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
      <img src="/images/lander.png" className="w-full h-[100vh]" />
    </div>
  );
};

export default Landing;
