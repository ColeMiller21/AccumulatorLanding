import React from "react";
import { motion } from "framer-motion";

const Yield = () => {
  return (
    <div className="min-w-screen bg-[#ebf0ee] flex flex-col md:flex-row items-center min-h-[80vh] ">
      <div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 0.6 }}
        className="w-[90%] md:w-[50%] flex flex-col items-center py-[4rem]"
      >
        <motion.h1
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "easeIn", duration: 0.6 }}
          className="font-vcr text-[3.5rem] md:text-[5.25rem] xl:text-[6rem] font-[900] main-heading text-[#0f70d7]"
        >
          YIELD
        </motion.h1>

        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "easeIn", duration: 0.6, delay: 0.1 }}
          src="/images/acorns/Acorns-Landing-Sections 1.png"
          alt="Acorn Yeild"
          className="my-[1.5rem]"
        />
        <motion.p
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "easeIn", duration: 0.6, delay: 0.15 }}
          className="w-[100%] md:w-[75%] text-center"
        >
          Save time and money auto-compounding your favorite projects in our
          vaults
        </motion.p>
        <motion.a
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "easeIn", duration: 0.6, delay: 0.2 }}
          className="flex flex-col text-center my-2"
        >
          LAUNCH THE VAULTS <span>(COMING SOON)</span>
        </motion.a>
      </div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "easeIn", duration: 0.6 }}
        className="w-[90%] md:w-[50%] flex justify-center pb-[4rem] md:pb-0 blob1-bg"
      >
        <img
          src="/squirrelandnuts.png"
          alt="Accumulator Squirrel"
          className="h-[70%] w-[80%]"
        />
      </motion.div>
    </div>
  );
};

export default Yield;
