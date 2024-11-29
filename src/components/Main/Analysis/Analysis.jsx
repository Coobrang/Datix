import React from "react";
import data from "../../../Data/Analysis.json";

const Analysis = () => {
  return (
    <div className="max-w-[1300px] mx-auto py-[4%]">
        <div className="flex items-center justify-between">
            <div>
                <img src={require(`../../../assets/${data.analysis.image.src}`)} alt="" className="w-[100%]"/>
            </div>

            <div>
                <span className="text-gray text-[1rem] uppercase">{data.analysis.title}</span>
                <h2 className="mb-3 text-[3.5rem] font-bold leading-snug">{data.analysis.heading}</h2>
                <p className="text-[1.1rem] font-medium text-gray mb-8">{data.analysis.description}</p>

                <div className="flex flex-col items-start gap-5 p-10 bg-graylight rounded-3xl">
                    {data.analysis.form.fields.map((field, index) => (
                        <input
                        key={index}
                        type={field.type}
                        placeholder={field.placeholder}
                        className="bg-white w-[100%] p-4 rounded-full"
                        />
                    ))}
                    <input
                    type={data.analysis.form.submiteButon.type}
                    value={data.analysis.form.submiteButon.value}
                    className="bg-main text-white w-[100%] p-4 rounded-full hover:bg-blue transition-all duration-200 ease-linear cursor-pointer"
                    />

                </div>
            </div>
        </div>
    </div>
  );
};

export default Analysis;
