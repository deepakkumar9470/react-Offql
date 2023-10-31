import React, { useState } from "react";
import Button from "./Button";
import logo from "../assets/Logo.svg";
const Navbar = () => {
  const [active, setActive] = useState(0);
  const links = [
    {
      link: "Products",
    },
    {
      link: "solution",
    },
    {
      link: "Industries",
    },
    {
      link: "Pricing",
    },
    {
      link: "Resource",
    },
  ];
  return (
    <div className="flex z-70 items-center justify-between gap-20 bg-white rounded-sm py-6 px-10 mx-20 mt-14">
      <div>
        <img className="sm:text-center" src={logo} alt="logo" />
      </div>
      <nav className="hidden md:hidden lg:block z-40 flex items-center gap-4">
        <ul className="flex items-center gap-10">
          {links.map((item, index) => (
            <li
              key={index}
              onClick={() => setActive(index)}
              className={`text-base ${
                active === index ? "text-textBlack" : "text-textColor"
              }`}
            >
              <a href="#">{item.link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden md:block lg:block">
        <Button
          title="Book a Demo"
          customeStyle="bg-btnColor text-base px-10 py-4 font-light text-white rounded-[5px] outline-none cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
