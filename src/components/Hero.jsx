import React from "react";
import Navbar from "../components/Navbar";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import mainImg from "../assets/mainimg.svg";
import curveBg from "../assets/curve-bg.svg";
const Hero = () => {
  return (
    <div className="flex flex-col relative gap-6 bg-[url('./assets/bg-vector.svg')  bg-mylinear h-screen md:h-[90vh]">
      <img
        className="hiddem md:hidden lg:block absolute opacity-90 -top-20  opacity-3 z-[10] left-[40%] w-[200px] h-[200px] md:w-[650px] md:h-[650px]"
        src={curveBg}
        alt="curve"
      />

      <div>
        <Navbar />
      </div>

      <div className="flex justify-between items-center  gap-2 px-20 py-4">
        <div className="w-full md:w-[70%] flex flex-col gap-6">
          <div className="flex max-w-max items-center justify-between pl-2 pr-10 py-1 gap-4 bg-indigo-300">
            <div className="bg-myGray rounded-sm w-4 h-4"></div>
            <span className="uppercase text-white leading-2 tracking-widest">
              Lead Management
            </span>
          </div>
          <h1 className="text-5xl font-bold">
            Welcome to your <p className="text-mainText">Facebook.</p>
          </h1>
          <h3 className="text-base text-[#555555] font-light">
            Far far away, behind the word mountains, far from the countries{" "}
            <p>Vokalia and Consonantia, there live the blind texts.</p>
          </h3>

          <Button
            title="Try It Now"
            icon={
              <ArrowRight
                className="bg-white rounded-full text-mainText"
                size={16}
              />
            }
            customeStyle="flex items-center gap-2 max-w-max bg-btnColor text-sm px-6 py-4 font-semibold text-white rounded-[5px] outline-none"
          />
        </div>

        <div className="hidden md:hidden lg:block w-[30%]">
          <img
            className="w-[450px] h-[330px] object-contain"
            src={mainImg}
            alt="mainimg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
