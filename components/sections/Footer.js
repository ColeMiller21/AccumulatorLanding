import React from "react";

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
const Footer = () => {
  return (
    <div className="w-min-screen py-14 flex flex-col items-center">
      <h4 className="mb-4">WANT MORE?</h4>
      <ul className="flex flex-col md:flex-row">
        {links.map((link, i) => {
          return (
            <li key={`${link.text}-${i}`} className="mx-2 text-center">
              {link.text}
            </li>
          );
        })}
      </ul>{" "}
    </div>
  );
};

export default Footer;
