import React from "react";
import { motion } from "framer-motion";
const Stake = () => {
  return (
    <div className="min-w-screen bg-[#ebf0ee] flex flex-col items-center">
      <div className="w-[90%] flex justify-center">
        <div className="w-full h-full md:w-[50%] flex flex-col items-center py-[4rem]">
          <motion.h1
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "easeIn", duration: 0.6 }}
            className="font-vcr text-[3.5rem] md:text-[5.25rem] xl:text-[6rem] font-[900] main-heading text-[#0f70d7]"
          >
            STAKE
          </motion.h1>
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "easeIn", duration: 0.6 }}
            src="/images/acorns/Acorns-Landing-Sections 3.png"
            alt="Acorn Yeild"
            className="my-[1.5rem]"
          />

          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "easeIn", duration: 0.6 }}
            className="w-[100%] md:w-[75%] text-center"
          >
            Stake your ACCU LP and earn great APY and governance rights
          </motion.p>
          <motion.a
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "easeIn", duration: 0.6 }}
            className="flex flex-col text-center my-2"
          >
            {" "}
            STASH FOR GAINS AND VOTING <span>(COMING SOON)</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Stake;
