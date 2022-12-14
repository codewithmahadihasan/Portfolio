import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contract = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xnqfkh8",
        "template_dvf2sbk",
        form.current,
        "taR4zxvD5_k9leIxs"
      )
      .then(
        (result) => {
          Swal.fire("Thank you so much", "You clicked the button!", "success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contract">
      <section className="py-6  bg-gray-200 ">
        <h1 className="text-4xl font-semibold text-center py-6">
          Contract From
        </h1>
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6  mt-20 md:py-0 md:px-6 text-">
            <h1 className="text-4xl font-bold">Contract With Me</h1>
            <p className="pt-2 pb-4">Put your message and send</p>
            <div className="space-y-4">
              <p className="flex items-center">
                <a href="https://goo.gl/maps/ELsDFekbkA1WBbVo7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6 hover:text-teal-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a target="blank" href="https://goo.gl/maps/ELsDFekbkA1WBbVo7">
                  <span className="hover:underline hover:text-teal-700">
                    Mirpur-12 ,Dhaka, Bangladesh
                  </span>
                </a>
              </p>
              <p className="flex items-center">
                <a href="tel:8801792205520" target="blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6  hover:text-teal-700"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </a>
                <a target={"blank"} href="tel:8801792205520">
                  <span className="hover:underline hover:text-teal-700">
                    +8801792205520
                  </span>
                </a>
              </p>
              <p className="flex items-center">
                <a href="mailto:mahadi.hasan33@hotmail.com" target="blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                <a target={"blank"} href="mailto:mahadi.hasan33@hotmail.com">
                  <span className="hover:underline hover:text-teal-700">
                    mahadi.hasan33@hotmail.com
                  </span>
                </a>
              </p>
            </div>
          </div>
          <form
            onSubmit={sendEmail}
            ref={form}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Leroy Jenkins"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                name="email"
                required
                placeholder="leroy@jenkins.com"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                data-temp-mail-org="0"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                required
                name="message"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              ></textarea>
            </label>
            <button
              type="submit"
              className="self-center px-8 py-2 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-teal-400 text-gray-900 focus:ring-teal-400  hover:ring-teal-400"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contract;
