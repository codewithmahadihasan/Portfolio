import React from "react";
import groovyWalkAnimation from "./banner.gif";
import { BsChevronBarDown } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { TbPlayerStop } from "react-icons/tb";
import About from "../About/About";
import Skill from "../Skill/Skill";
import Contract from "../Contract/Contract";
import Typical from "react-typical";
import Projects from "../Projects/Projects";

const Header = () => {
  return (
    <div id="home">
      <section
        style={{
          background: `url(${groovyWalkAnimation})`,
        }}
      >
        <div className="relative  bg-gray-900 bg-opacity-60">
          {" "}
          <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col-reverse  mt-20 items-center justify-between w-full mb-10 lg:flex-row ">
              <div className="mb-16 mt-10 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <div></div>
                  <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl sm:leading-none max-w-lg mb-6">
                    <span> Hello I'm</span>
                    <br className="hidden md:block" />
                    <span className="inline-block text-yellow-500 pt-2">
                      Md. Mahadi Hasan
                    </span>
                  </h2>
                  <p className="text-xl text-white font-semibold flex">
                    I am{" "}
                    <Typical
                      className="text-xl font-semibold text-orange-400 ml-2"
                      steps={[
                        "MERN-stack Developer",
                        1000,
                        "Front-end Developer",
                        1000,
                        "Web Developer",
                        1000,
                        "Full-Stack Developer",
                        1000,
                      ]}
                      loop={Infinity}
                      wrapper="p"
                    />
                  </p>
                  <p className="lg:flex items-center mt-4 text-lg text-white font-semibold "></p>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://drive.google.com/file/d/1X_uIsfSnkTPdw9fxo5SaopUBxvC2Jyt_/view?usp=share_link"
                    target="blank"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-amber-700 hover:bg-amber-900 focus:shadow-outline focus:outline-none"
                  >
                    Download Resume
                    <BsChevronBarDown className="text-xl font-bold ml-2"></BsChevronBarDown>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/loneliness-mahadi/ "
                    target="blank"
                    aria-label=""
                    className="inline-flex items-center font-semibold text-gray-100 transition-colors duration-200 hover:text-amber-700"
                  >
                    Hire Me
                    <IoIosArrowForward className="text-xl font-bold ml-2"></IoIosArrowForward>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center lg:w-1/2">
                <img
                  className="w-9/12 rounded-xl"
                  src="https://i.ibb.co/z4CZFBr/Picsart-22-11-23-20-16-47-391-2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <About id="about"></About>
      <Skill></Skill>
      <Projects></Projects>
      <Contract></Contract>
    </div>
  );
};

export default Header;
