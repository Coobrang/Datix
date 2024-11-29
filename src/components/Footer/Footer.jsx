import React from "react";
import data from "../../Data/Footer.json";

const Footer = () => {
  return (
    <div className="bg-main py-[6%] text-white">
      <div className="max-w[1300px] mx-auto flex flex-col gap-10 text-center">

          <div className="mb-7">
            <ul className="flex gap-32 justify-center text-[1.2rem]">
              {data.links.map((link, index) => (
                <li key={index} className="hover:text-blue transition-all duration-200 ease-linear">
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-7 flex justify-center gap-10 items-center">
              <ul className="flex justify-center gap-10 text-[1.3rem] font-bold">
                <li>{data.contactInfo.phone}</li>
                <li>{data.contactInfo.email}</li>
              </ul>

              <div>
                <ul className="flex justify-center gap-5 text-[1.3rem]">
                  {data.socialMedia.map((social, index) => (
                    <li key={index} className="hover:text-blue transition-all duration-200 ease-linear">
                      <a href={social.href}><i className={social.iconClass}></i></a>
                    </li>
                  ))}
                </ul>
              </div>
          </div>

          <div>
              <p className="text-[1.1rem]">{data.copyright}</p>
          </div>

      </div>
    </div>
  );
};

export default Footer;
