import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const About = () => {
  return (
    <section className="bg-teal-800">
      <div
        id="about"
        className="px-4  py-10 mx-auto sm:max-w-xl md:max-w-full pt-10 lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <h1 className="text-4xl font-semibold text-center   py-10 text-white">
          About <span className="text-violet-300">Md. Mahadi Hasan</span>
        </h1>
        <div className="grid gap-10 lg:grid-cols-2 pb-20">
          <div>
            <img
              className="object-cover w-full rounded shadow-lg sm:h-96 shadow-gray-400"
              src="https://i.ibb.co/QJCQN2L/Picsart-22-04-08-14-32-52-891-1.jpg"
              alt=""
            />
          </div>
          <div className="lg:pl-10 mt-10">
            <div className="mb-6 text-gray-100">
              <p className="mb-4">
                Hi ! I'm Md. Mahadi Hasan. I am Front-end Developer, I have
                about One years of working experience on this field. If I
                describe myself in one sentence then it will be "I am a quick
                learner." I love to learn new things.
              </p>

              <p className="mt-6">
                I started my coding journey since I was join my Diploma
                Engineering . Coding is like a passion for me. I love to code
                all day long, while my code works then I feel proud of me
              </p>
              <p className="mt-6">
                My vision is to teach programming to all people free of cost and
                make the world a better place. And I will prove that money is
                not a problem to learn.
              </p>
            </div>
            <hr className="mb-5 border-gray-300" />
            <div className="flex items-center space-x-4 lg:justify-start justify-center">
              <a
                href="https://www.facebook.com/mahadi.loneliness/"
                target="blank"
              >
                <AiFillFacebook className="text-gray-100 text-4xl transition-colors duration-300 hover:text-teal-400"></AiFillFacebook>
              </a>
              <a
                href="https://www.instagram.com/loneliness_mahadi/"
                target="blank"
              >
                <AiFillInstagram className="text-gray-100 text-4xl transition-colors duration-300 hover:text-teal-400"></AiFillInstagram>
              </a>
              <a href="https://twitter.com/loneli_mahadi/" target="blank">
                <AiFillTwitterSquare className="text-gray-100 text-4xl transition-colors duration-300 hover:text-teal-400"></AiFillTwitterSquare>
              </a>
              <a
                href="https://www.linkedin.com/in/loneliness-mahadi/"
                target="blank"
              >
                <AiFillLinkedin className="text-gray-100 text-4xl transition-colors duration-300 hover:text-teal-400"></AiFillLinkedin>
              </a>
              <a
                href="https://www.linkedin.com/in/loneliness-mahadi/"
                target="blank"
              >
                <AiFillGithub className="text-gray-100 text-4xl transition-colors duration-300 hover:text-teal-400"></AiFillGithub>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=8801792205520&text=I%20am%20a%20front-end%20developer"
                target="blank"
              >
                <AiOutlineWhatsApp className="text-gray-100 text-4xl transition-colors duration-300 hover:text-teal-400"></AiOutlineWhatsApp>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
