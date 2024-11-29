import React from "react";
import data from "../../../Data/Partners.json";

const Partners = () => {
  return (
    <div className="max-w-[1300px] mx-auto py-[4%] text-center">
        <div>
            <span className="text-blue uppercase text-[1rem]">{data.section.title}</span>
            <h2 dangerouslySetInnerHTML={{__html: data.section.heading}} className="mt-[0.5rem] text-[3.5rem] font-bold heading-sung mb-[4rem]"/>
        </div>

        <div className="grid grid-cols-auto-fit-18rem gap-8 text-center items-center">
            {data.logos.map((logo, index) => (
                <div key={index} className="flex justify-center">
                    <img src={require(`../../../assets/${logo.src}`)} alt={logo.alt} className="w-[140px] hover:-translate-y-1 duration-200 ease-linear transform"/>
                </div>
           ))}
        </div>
    </div>
  );
};

export default Partners;
