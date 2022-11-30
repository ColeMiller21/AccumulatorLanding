import { motion } from "framer-motion";

const Accumulate = () => {
  return (
    <div className="min-w-screen bg-[#47b5fb] min-h-[80vh] flex flex-col md:flex-row items-center">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "easeIn", duration: 0.6 }}
        className="w-[90%] md:w-[50%] flex flex-col items-center pt-[4rem] md:pt-0"
      >
        <img src="/Shimmer-logo.png" alt="Accumulator Squirrel" />
        <img
          src="/Shimmer-logoText.png"
          alt="Accumulator Squirrel"
          className="w-[70%] mt-[1rem]"
        />
      </motion.div>
      <div className="w-full h-full md:w-[50%] flex flex-col items-center py-[4rem]">
        <motion.h1
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "easeIn", duration: 0.6 }}
          className="font-vcr text-[3.5rem] md:text-[6rem] font-[900] main-heading text-[#0f70d7]"
        >
          ACCUMULATE
        </motion.h1>

        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "easeIn", duration: 0.6 }}
          src="/images/acorns/Acorns-Landing-Sections 2.png"
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
          Purchase ACCU and create LP to strengthen your position
        </motion.p>
        <motion.a
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "easeIn", duration: 0.6 }}
          className="flex flex-col text-center my-2"
        >
          I WANT TO ACCUMULATE <span>(COMING SOON)</span>
        </motion.a>
      </div>
    </div>
  );
};

export default Accumulate;
