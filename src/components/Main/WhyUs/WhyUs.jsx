import React from "react";
import data from "../../../Data/WhyUs.json";

const WhyUs = () => {
  return (
    <div className="w-[1300px] mx-auto py-[4%]">

      <div className="flex items-start gap-20">
        <div className="w-[50%]">
          <span className="text-[1rem] font-normal text-blue uppercase">{data.title}</span>
          <h2 className="text-[4rem] font-bold leading-snug text-main mb-2">{data.heading}</h2>
          <p className="text-[1.1rem] font-medium text-gray mb-8">{data.description}</p>
          <a href={data.link.href} className="bg-main text-white px-5 py-3 rounded-full hover:bg-blue transition-all duration-200 ease-linear">{data.link.text}</a>
        </div>

        <div className="w-[50%] grid grid-cols-auto-fit-18rem gap-6">
          {data.features.map((feature, index) => (
          <div className="p-5 rounded-3xl bg-graylight" key={index}>
            <img src={require(`../../../assets/${feature.image}`)} alt={feature.title} className="w-[130px]"/>
            <h3 className="text-[1.5rem] font-semibold mt-5">{feature.title}</h3>
          </div>
          ))}
        </div>
      </div>
      

    </div>
  );
};

export default WhyUs;
