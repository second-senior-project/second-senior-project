"use client";
import React from "react";
import Services from "../HomePage/feautred/Services";
const About = () => {
  return (
    <>
      <div id="about" className="relative bg-white overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  About me
                </h2>

                <p className="text-black">
                  Launced in 2015, Exclusive is South Asia s premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region. Exclusive
                  has more than 1 Million products to offer, growing at a very
                  fast. Exclusive offers a diverse assotment in categories
                  ranging from consumer.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://img.freepik.com/photos-gratuite/heureuses-jeunes-femmes-africaines-posant-sacs-provisions_181624-44440.jpg?t=st=1717581901~exp=1717585501~hmac=c27687158ffcd65fa1b6e10babcba4c3d04ad1603f4b17c2ff61847d6faf6fc6&w=740"
            alt="your img"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </div>
      <Services/>
    </>
  );
};

export default About;
