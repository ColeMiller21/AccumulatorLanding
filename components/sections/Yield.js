import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const leftVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.75 } },
  hidden: { opacity: 0, x: "-100%" },
};

const rightVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.75 } },
  hidden: { opacity: 0, x: "100%" },
};

const Yield = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div
      className="min-w-screen bg-[#ebf0ee] flex flex-col md:flex-row items-center min-h-[80vh]"
      ref={ref}
    >
      <motion.div className="w-[90%] md:w-[50%] flex flex-col items-center py-[4rem]">
        <h1 className="font-vcr text-[3.5rem] md:text-[5.25rem] xl:text-[6rem] font-[900] main-heading text-[#0f70d7]">
          YIELD
        </h1>

        <img
          src="/images/acorns/Acorns-Landing-Sections 1.png"
          alt="Acorn Yeild"
          className="my-[1.5rem]"
        />
        <p className="w-[100%] md:w-[75%] text-center">
          Save time and money auto-compounding your favorite projects in our
          vaults
        </p>
        <a className="flex flex-col text-center my-2">
          LAUNCH THE VAULTS <span>(COMING SOON)</span>
        </a>
      </motion.div>
      <motion.div className="w-[90%] md:w-[50%] flex justify-center pb-[4rem] md:pb-0 blob1-bg">
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
