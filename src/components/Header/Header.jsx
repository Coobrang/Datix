import React from "react";
import logo from "../../assets/Logo.png";
import data from "../../Data/Header.json";
import roket from "../../assets/rocket-1024x1024.webp"

const Header = () => {
  return (
    <div className="relative p-8 px-[4%] background-image bg-cover bg-center h-screen">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="w-[200px]" />
        </div>

        {/* Menu Section */}
        <div>
          <ul className="flex items-center gap-9">
            {data.menus.map((item, index) => (
              <li key={index}>
                <a href={item.link}
                class="text-[1.1rem] font-semibold text-main hover:text-white transition-all duration-200 ease-linear"
                >
                {item.title}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="w-full max-w-[1300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center space-x-4">
        <div>
            <h1 className="text-[4.4rem] font-bold leading-snug mb-4">
              {data.header.title.split(' ').map((word, index) => {
                if ( word === data.header.highlight) {
                  return (
                    <span key={index} className="text-white">
                      {word} {' '}
                    </span>
                  );
                }
                return `${word} `;
              })}
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed space-y-4 mb-6" dangerouslySetInnerHTML={{__html: data.description.text}} />

            <div className="flex items-center gap-7">
              {data.buttons.map((button, index) => (
                <a href={button.link} key={index} className="bg-main text-white rounded-full py-3 px-7 text-base transition-all duration-200 ease-linear hover:bg-blue">{button.text}</a>
              ))}
            </div>
        </div>

        <div>
          <img src={roket} alt="" className="w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
