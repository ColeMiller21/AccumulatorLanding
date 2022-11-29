import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import classNames from "classnames";
import { BsCheckLg } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import ClipLoader from "react-spinners/ClipLoader";

const links = [
  {
    link: "",
    text: "Twitter",
  },
  {
    link: "",
    text: "Discord",
  },
  {
    link: "",
    text: "Governance",
  },
  {
    link: "",
    text: "Docs",
  },
  {
    link: "",
    text: "Charts",
  },
  {
    link: "",
    text: "Stats",
  },
  {
    link: "",
    text: "Shimmer",
  },
];

const NOTIFICATION_STATES = {
  idle: <SiMinutemailer />,
  success: <BsCheckLg />,
  fail: <FaTimes />,
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [errorText, setErrorText] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState("idle");

  const emailSubmit = async (e) => {
    e.preventDefault();
    if (email === "") return;
    setIsLoading(true);
    try {
      let res = await axios.post("/api/mail", { email });
      setSubscribeStatus("success");
    } catch (err) {
      setSubscribeStatus("fail");
    }
    setIsLoading(false);
    setTimeout(() => {
      setSubscribeStatus("idle");
    }, 5000);
  };

  return (
    <div className="w-min-screen py-14 flex flex-col items-center">
      <h4 className="text-[1.25rem]">Join the mailing list!</h4>
      <label className="relative my-4">
        <input
          type="text"
          placeholder="Enter Email"
          className="h-[45px] w-[250px] md:w-[400px] border-2 border-black rounded pl-2 overflow-hidden"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className={classNames(
            "absolute top-0 bottom-0 right-0 px-4 text-white rounded",
            {
              submitButton: subscribeStatus === "idle",
              failButton: subscribeStatus === "fail",
              successButton: subscribeStatus === "success",
            }
          )}
          type="submit"
          onClick={emailSubmit}
          disabled={email === ""}
        >
          {isLoading ? (
            <ClipLoader
              color={"white"}
              size={16}
              aria-label="Loading Spinner"
            />
          ) : (
            NOTIFICATION_STATES[subscribeStatus]
          )}
        </button>
      </label>
      {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
        <input
          type="text"
          name="b_eb05e4f830c2a04be30171b01_8281a64779"
          tabIndex="-1"
          defaultValue=""
        />
      </div>
      <div className="clear">
        <input
          type="submit"
          defaultValue=""
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
        />
      </div>
      {/* END */}
      <h3 className="mb-4 text-[1.25rem]">WANT MORE?</h3>
      <ul className="flex flex-col md:flex-row">
        {links.map((link, i) => {
          return (
            <motion.li
              key={`${link.text}-${i}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mx-2 text-center cursor-pointer hover:text-[#0f70d7]"
            >
              {link.text}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
