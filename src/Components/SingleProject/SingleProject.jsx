import React from "react";
import { useLoaderData } from "react-router-dom";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const SingleProject = () => {
  const datas = useLoaderData();
  console.log(datas);

  return (
    <div>
      <section className="bg-white pt-20">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
              src={datas.image}
              alt=""
            />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p className="text-5xl font-semibold text-blue-500 ">“</p>

              <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl lg:w-96">
                {datas.name}
              </h1>

              <div className="max-w-lg mt-6 text-gray-500 text-gray-400 ">
                {datas?.work?.map((p) => {
                  console.log(p);
                  return (
                    <div className="flex items-center gap-7">
                      <span className="font-extrabold text-3xl">.</span>
                      <p>{p}</p>
                    </div>
                  );
                })}
              </div>

              <a
                href={`${datas?.link}`}
                target="blank"
                className="mt-6 text-lg font-medium text-blue-500"
              >
                Live Link: {datas?.name}
              </a>
              <p className="text-gray-600 ">Publish Date : {datas.date}</p>

              <div className="flex items-center flex-shrink-4 gap-6 justify-between mt-12 lg:justify-start">
                {datas?.option?.map((d) => (
                  <div>
                    <img className="w-10 rounded-lg" src={d?.image} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProject;
