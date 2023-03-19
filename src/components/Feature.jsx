import React from "react";
import { features } from "../data/dummy";
const Feature = () => {
  return (
    <div className="w-full h-auto px-5 lg:px-[72px] flex flex-col gap-5 mt-4">
      <h1 className="font-bold text-[16px] lg:text-[20px] text-orange">
        3 STPES QUICK
      </h1>
      <h1 className="font-bold text-2xl lg:text-[30px]">
        Claim Your Better Health
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {features.map((item, i) => {
          return (
            <div
              className="flex flex-col gap-3 justify-center items-center col-span-1 "
              key={i}
            >
              <div className="w-[300px] h-[300px]">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-[16px] lg:text-[20px] font-bold">
                {item.title}
              </h1>
              <p className="text-center text-text text-[16px] lg:text-[20px] max-w-[400px]">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feature;
