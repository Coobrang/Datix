import React from "react";
import data from "../../../Data/Social.json";

const Social = () => {
  return (
    <div className="max-w-[1300px] mx-auto py-[4%]">
      <div className="flex items-center">
        <div className="w-[50%] grid grid-cols-auto-fit-18rem gap-5">
          {data.metrics.map((metric, index) => (
          <div key={index}>
            <h4 className="text-blue text-[3.5rem] font-bold mb-1">{metric.value}</h4>
            <span className="text-gray">{metric.label}</span>
          </div>
          ))}
        </div>

        <div className="w-[50%]">
          <span className="text-gray text-[1rem] uppercase">{data.content.sectionTitle}</span>
          <h2 className="mt-3 mb-3 text-[3.5rem] font-bold leading-snug">{data.content.heading}</h2>
          <p className="text-gray font-medium mb-8">{data.content.description}</p>
          <a href={data.content.linkHref} className="bg-main text-white px-5 py-3 rounded-full hover:bg-blue transtion-all duration-200 ease-linear">{data.content.linkText}</a>
        </div>
      </div>
    </div>
  );
};

export default Social;
