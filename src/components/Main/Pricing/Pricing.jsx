import React from "react";
import data from "../../../Data/Pricing.json";

const Pricing = () => {
  return (
    <div className="max-w-[1300px] mx-auto py-[4%] text-center">
        <div className="mb-6">
            <span className="text-blue font-medium uppercase">{data.section.title}</span>
            <h2 className="text-main font-bold text-[3.5rem] leading-snug mb-6" dangerouslySetInnerHTML={{__html: data.section.heading}}/>
        </div>

        <div className="flex justify-center gap-10">
            {data.plans.map((plan, index) => (
                <div
                key={index}
                className={`w-[100%] h-[600px] p-5 rounded-3xl flex flex-col justify-center ${ index === 1 ? 'bg-blue' : 'bg-graylight'}`}
                >
                <span className={`text-[1.1rem] font-medium ${index === 1 ? 'text-white': 'text-blue'}`}>{plan.name}</span>
                <h4 className={`text-[4rem] font-bold mb-3 ${index === 1 ? 'text-white' : 'text-blue'}`}>{plan.price}</h4>

                {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`list-none mb-[1.5rem] text-[1.1rem] ${index === 1 ? 'text-white' : 'text-blue'}`}>{feature}</li>
                ))}

                <a href={plan.buttonLink} className={`text-[1.2rem] font-bold w-[100%] p-3 rounded-full mt-10 inline-grid text-white transition-all duration-200 ${index === 1 ? 'bg-main hover:bg-gray' : 'bg-blue hover:bg-main'}`}>{plan.buttonText}</a>

                </div>
            ))}

        </div>
    </div>
  );
};

export default Pricing;
