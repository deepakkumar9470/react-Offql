import React from "react";
import hand from "../assets/hand.svg";
import gullak from "../assets/gullak.svg";
import home from "../assets/home.svg";
import moneyHand from "../assets/money-hand.svg";
import routeMap from "../assets/route-map.svg";
import party from "../assets/party.svg";
import cloud1 from "../assets/cloud-1.svg";
import line from "../assets/line.svg";
import flower1 from "../assets/flower-1.svg";
import flower2 from "../assets/flower-2.svg";
import flower3 from "../assets/flower-3.svg";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
const Home = () => {
  return (
    <div className="relative">
      <img className="absolute left-10 w-20 h-20" src={cloud1} alt="cloud1" />
      <img
        className="absolute top-40 left-80 w-20 h-20"
        src={cloud1}
        alt="cloud1"
      />
      <img
        className="absolute top-40 left-[50%] w-20 h-20"
        src={cloud1}
        alt="cloud1"
      />
      <img
        className="absolute top-36 left-[65%] w-20 h-20"
        src={cloud1}
        alt="cloud1"
      />
      <img
        className="absolute top-30 left-[65%] w-20 h-20"
        src={cloud1}
        alt="cloud1"
      />
      <img
        className="absolute top-20 left-[70%] w-20 h-20"
        src={cloud1}
        alt="cloud1"
      />
      <img
        className="absolute top-80 left-[90%] overflow-x-hidden w-20 h-20"
        src={cloud1}
        alt="cloud1"
      />
      <img
        className="absolute top-[51%] left-[5%] overflow-x-hidden w-[200px] h-[200px]"
        src={flower1}
        alt="flower"
      />
      <img
        className="absolute top-[80%] left-[5%] overflow-x-hidden w-[250px] h-[250px]"
        src={flower2}
        alt="flower"
      />
      <img
        className="absolute top-[86%] left-[75%] overflow-x-hidden w-[250px] h-[250px]"
        src={flower3}
        alt="flower"
      />

      <div className="flex items-center justify-center py-4 mt-4">
        <h2 className="text-4xl md:text-3xl font-semibold text-mainText">
          Why Choose Our Wxyz <p>Management Software</p>
        </h2>
      </div>

      <div className="relative">
        <div className="flex w-full justify-between items-center px-12  md:px-40 mt-40">
          <div className="flex w-full md:w-[60%] flex-col gap-6">
            <p className="text-3xl text-mainText font-semibold">
              Teamwork Made Easier
            </p>
            <span className="md:w-[500px] text-sm">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit Neque porro quisquam est qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit
            </span>
          </div>

          <div className="hidden md:hidden lg:block flex w-[40%]">
            <img
              className="w-72 h-72 object-contain"
              src={hand}
              alt="handgroup"
            />
          </div>
        </div>

        <div className="flex justify-between items-center gap-14 flex-row-reverse  px-12  md:px-40 mt-10">
          <div className="flex w-full md:w-[60%] flex-col gap-6">
            <p className="text-3xl text-mainText font-semibold">
              Budget Friendly
            </p>
            <span className="md:w-[500px] text-sm">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit Neque porro quisquam est qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit
            </span>
          </div>

          <div className="hidden md:hidden lg:block flex w-[40%]">
            <img
              className="w-72 h-72 object-contain"
              src={gullak}
              alt="gullak"
            />
          </div>
        </div>

        <div className="flex justify-between items-center gap-14   px-12  md:px-40 mt-10">
          <div className="flex w-full md:w-[60%] flex-col gap-6">
            <p className="text-3xl text-mainText font-semibold">
              Higher sales productivity from
              <p>all your teams</p>
            </p>
            <span className="md:w-[500px] text-sm">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit
            </span>
          </div>

          <div className="hidden md:hidden lg:block flex w-[40%]">
            <img className="w-72 h-72 object-contain" src={home} alt="home" />
          </div>
        </div>

        <div className="flex justify-between items-center gap-14 flex-row-reverse  px-12  md:px-40 mt-10">
          <div className="flex w-full md:w-[60%] flex-col gap-6">
            <p className="text-3xl text-mainText font-semibold">
              Grows as Your Business Grows
            </p>
            <span className="md:w-[500px] text-sm">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit Neque porro quisquam est qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit
            </span>
          </div>

          <div className="hidden md:hidden lg:block flex w-[40%]">
            <img
              className="w-72 h-72 object-contain"
              src={moneyHand}
              alt="moneyHand"
            />
          </div>
        </div>

        <div className="flex justify-between items-center gap-14 px-12  md:px-40 mt-10">
          <div className="flex w-full md:w-[60%] flex-col gap-6">
            <p className="text-3xl text-mainText font-semibold">
              From leads to successful sales
            </p>
            <span className="md:w-[500px] text-sm">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit
            </span>
          </div>

          <div className="hidden md:hidden lg:block flex w-[40%]">
            <img
              className="w-72 h-72 object-contain"
              src={routeMap}
              alt="routeMap"
            />
          </div>
        </div>

        <div className="flex justify-between items-center gap-14 flex-row-reverse px-12  md:px-40 mt-10 mb-10">
          <div className="flex w-full md:w-[60%] flex-col gap-6">
            <p className="text-3xl text-mainText font-semibold">
              Best Support which you desire for
            </p>
            <span className="md:w-[500px] text-sm">
              If you are looking for the best support, you have come to the
              right place. We are here to provide you with the assistance you
              need
            </span>
          </div>

          <div className="hidden md:hidden lg:block flex w-[40%]">
            <img className="w-72 h-72 object-contain" src={party} alt="party" />
          </div>
        </div>

        <img
          className="hidden md:hidden lg:block absolute -z-10 top-[10%] left-[30%] w-[400px]"
          src={line}
          alt="line"
        />
      </div>

      <Button
        title="Try It Now"
        icon={
          <ArrowRight
            className="bg-white rounded-full text-mainText"
            size={16}
          />
        }
        customeStyle="flex items-center justify-center mx-auto gap-2 max-w-max bg-btnColor 
         text-sm px-4 py-4 font-semibold text-white rounded-[4px] outline-none"
      />
    </div>
  );
};

export default Home;
