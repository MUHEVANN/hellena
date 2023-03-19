import React from "react";
import Slider from "react-slick";
import { sakit } from "../data/dummy";
const Penyakit = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1390,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="h-auto w-full px-5 lg:px-[72px] my-8 flex flex-col gap-5">
      <h1 className="font-bold text-[16px] lg:text-[20px] text-orange">
        SECURE YOUR HEART
      </h1>
      <h1 className="text-[24px] lg:text-[30px] font-bold">Our Best Doctor</h1>
      <Slider {...settings}>
        {sakit.map((item, i) => {
          return (
            <div key={i} className=" p-2">
              <div className="w-full  h-[250px] mb-3">
                <img src={item.image} alt="" className=" h-full w-full" />
              </div>
              <div className="">
                <h1 className="font-bold">{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Penyakit;
