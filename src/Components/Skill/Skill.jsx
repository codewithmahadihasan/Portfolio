import React from "react";

const Skill = () => {
  return (
    <section
      id="skill"
      className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <h1 className="text-4xl font-bold text-center  mt-20">Skills</h1>
      <div className="p-8 ">
        <div>
          <div className="lg:w-full grid gap-x-20 gap-y-6 lg:grid-cols-2  ">
            <div>
              <h1 className="text-xl font-bold mr-4">HTML</h1>
              <div className="w-full  rounded-full bg-gray-700">
                <div className="bg-teal-500 text-xs w-[100%] font-medium text-teal-100 text-center py-3 leading-none rounded-full">
                  100%
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold mr-9">CSS</h1>
              <div className="w-full  rounded-full bg-gray-700">
                <div className="bg-teal-500 text-xs w-[95%] font-medium text-teal-100 text-center py-3 leading-none rounded-full">
                  95%
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold mr-1">Tailwind css</h1>
              <div className="w-full  rounded-full bg-gray-700">
                <div className="bg-teal-500 text-xs w-[100%] font-medium text-teal-100 text-center py-3 leading-none rounded-full">
                  100%
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold mr-9">bootstrap</h1>
              <div className="w-full  rounded-full bg-gray-700">
                <div className="bg-teal-500 text-xs w-[90%] font-medium text-teal-100 text-center py-3 leading-none rounded-full">
                  90%
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold mr-9">Javascript</h1>
              <div className="w-full  rounded-full bg-gray-700">
                <div className="bg-teal-500 text-xs w-[80%] font-medium text-teal-100 text-center py-3 leading-none rounded-full">
                  80%
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold mr-4">React</h1>
              <div className="w-full  rounded-full bg-gray-700">
                <div className="bg-teal-500 text-xs w-[93%] font-medium text-teal-100 text-center py-3 leading-none rounded-full">
                  93%
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold mr-9">Node.JS</h1>
              <div className="w-full  rounded-full bg-gray-700">
                <div className="bg-teal-500 text-xs w-[70%] font-medium text-teal-100 text-center py-3 leading-none rounded-full">
                  70%
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold mr-9">MongoDB</h1>
              <div className="w-full  rounded-full bg-gray-700">
                <div className="bg-teal-500 text-xs w-[85%] font-medium text-teal-100 text-center py-3 leading-none rounded-full">
                  85%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
