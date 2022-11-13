import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { IconContext } from "react-icons";

const links = [
  {
    link: "www.google.com",
    icon: <AiOutlineTwitter />,
  },
  {
    link: "www.google.com",
    icon: <FaDiscord />,
  },
  {
    link: "www.google.com",
    icon: <AiFillYoutube />,
  },
];

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 flex justify-center justify-between items-center bg-transparent w-screen h-[75px] px-5 md:px-20 z-10">
      <div>
        <Image width={60} height={60} src={"/acorn-logo.png"} alt="muna logo" />
      </div>
      <div className="flex">
        {links.map((link, i) => {
          return (
            <motion.a
              key={`${link.link}-${i}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={link.link}
              className="h-[45px] w-[45px] rounded-full bg-white shadow-md flex justify-center items-center cursor-pointer mx-2"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconContext.Provider value={{ className: "react-icons" }}>
                {link.icon}
              </IconContext.Provider>
            </motion.a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
