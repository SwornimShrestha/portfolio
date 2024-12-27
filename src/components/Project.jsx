import React, { useEffect } from "react";
import project01 from "../assets/projects/image1.png";

import project02 from "../assets/projects/image2.png";
import project03 from "../assets/projects/image3.png";
import project04 from "../assets/projects/image4.png";
import AOS from "aos";

import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="flex flex-col gap-9 " id="projects">
      <div className="relative">
        <h3 className="mb-4   md:mt-0 text-3xl lg:text-4xl font-extrabold text-center">
          Some of my works,
        </h3>
        <p className="mb-9 underline decoration-sky-500 underline-offset-8 text-center">
          Here are some of my projects
        </p>
      </div>
      {/* Projects Card */}
      <div className=" flex flex-col gap-24 p-2 shadow-xl">
        {/* right */}
        <div className="flex flex-col md:flex-row    relative md:ml-[-10px]   md:p-2 ">
          {/* image */}
          <div
            data-aos="fade-right"
            className=" w-full md:w-[40rem]  h-64 md:h-[23rem] bg-slate-100  overflow-hidden "
          >
            <img src={project01} className="w-full h-full" alt="" />
          </div>
          {/* Description */}
          <div
            data-aos="fade-left"
            className="w-full md:w-[35rem] h-56 md:h-[23rem]  md:relative "
          >
            <div className=" flex flex-col justify-end items-end gap-2 pt-8 md:pt-24  ">
              <h3 className="text-m text-sky-400 text-xs ">Featured Project</h3>
              <h1 className="text-2xl font-extrabold text-gray-300">
                Trip With Me
              </h1>
            </div>
            <div className=" w-full md:w-[38rem]  h-56 md:h-[6rem] shadow-lg md:bg-[#0a030f]/90 absolute  md:top-40 md:right-0  p-2 md:p-4 ">
              <p className="text-sm text-gray-500">
                "Trip With Me" is a React and Tailwind CSS website that combines
                a user-friendly interface with a sleek, modern design.
              </p>
            </div>
            <div className=" top-28 relative">
              <ul className="flex gap-4 justify-end text-sm text-sky-500">
                <li>html</li>
                <li>Tailwind CSS</li>
                <li>React</li>
                <li>JS</li>
              </ul>
              <div className="flex gap-4 justify-end mt-4">
                <a
                  href="https://github.com/SwornimShrestha/TravelWIthMe"
                  target="_blank"
                >
                  <GitHubIcon sx={{ fontSize: 20, color: "skyblue" }} />
                </a>
                <a href="https://travel-w-ith-me.vercel.app/" target="_blank">
                  <OpenInNewIcon sx={{ fontSize: 20, color: "skyblue" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* left */}
        <div className="flex flex-col-reverse md:flex-row relative md:ml-[-10px]  md:p-2">
          {/* description */}
          <div className="w-full md:w-[35rem] h-56 md:h-[23rem]  md:relative ">
            <div className=" flex flex-col  justify-end md:justify-start  items-end md:items-start gap-2 pt-8 md:pt-24 ">
              <h3 className="text-m text-sky-400 text-xs ">Featured Project</h3>
              <h1 className="text-2xl font-extrabold  text-gray-300">
                Ecommerce Application
              </h1>
            </div>
            <div className=" w-full md:w-[38rem]  h-56 md:h-[6rem] shadow-lg md:bg-[#0a030f]/90 absolute  md:top-40 md:left-0  p-2 md:p-6 ">
              <p className="text-sm text-gray-500">
                Gharra is an ecommerce platform where customers can browse and
                purchase products. Designed a responsive and intuitive user
                interface to enhance user engagement
              </p>
            </div>
            <div className=" top-28 relative">
              <ul className="flex gap-4 justify-end md:justify-start text-sm text-sky-500">
                <li>html</li>
                <li>Tailwind CSS</li>
                <li>React</li>
                <li>JS</li>
                <li>FlowBite</li>
              </ul>
              <div className="flex gap-4 justify-end md:justify-start mt-4">
                <a
                  href="https://github.com/SwornimShrestha/EcommerceProject"
                  target="_blank"
                >
                  <GitHubIcon sx={{ fontSize: 20, color: "skyblue" }} />
                </a>
                <a
                  href="https://ecommerce-project-teal-iota.vercel.app/"
                  target="_blank"
                >
                  <OpenInNewIcon sx={{ fontSize: 20, color: "skyblue" }} />
                </a>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="w-full md:w-[40rem]  h-64 md:h-[23rem] bg-slate-100  overflow-hidden">
            <img src={project02} className="w-full h-full" alt="" />
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col md:flex-row    relative md:ml-[-10px]   md:p-2 ">
          {/* image */}
          <div className=" w-full md:w-[40rem]  h-64 md:h-[23rem] bg-slate-100  overflow-hidden ">
            <img src={project03} className="w-full h-full" alt="" />
          </div>
          {/* Description */}
          <div className="w-full md:w-[35rem] h-56 md:h-[23rem]  md:relative ">
            <div className=" flex flex-col justify-end items-end gap-2 pt-8 md:pt-24 ">
              <h3 className="text-m text-sky-400 text-xs ">Featured Project</h3>
              <h1 className="text-2xl font-extrabold text-gray-300">
                Todo Application
              </h1>
            </div>
            <div className=" w-full md:w-[38rem]  h-56 md:h-[6rem] shadow-lg md:bg-[#0a030f]/90 absolute  md:top-40 md:right-0  p-2 md:p-4 ">
              <p className="text-sm text-gray-500">
                Todo Application is a web based application designed to manage
                your list.
              </p>
            </div>
            <div className=" top-28 relative">
              <ul className="flex gap-4 justify-end text-sm text-sky-500">
                <li>Tailwind CSS</li>
                <li>React</li>
                <li>JS</li>
                <li>Context API</li>
              </ul>
              <div className="flex gap-4 justify-end mt-4">
                <a
                  href="https://github.com/SwornimShrestha/TodoApp"
                  target="_blank"
                >
                  <GitHubIcon sx={{ fontSize: 20, color: "skyblue" }} />
                </a>
                <a
                  href="https://todo-app-hazel-sigma-58.vercel.app/"
                  target="_blank"
                >
                  <OpenInNewIcon sx={{ fontSize: 20, color: "skyblue" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* left */}
        <div className="flex flex-col-reverse md:flex-row relative md:ml-[-10px]  md:p-2">
          {/* description */}
          <div className="w-full md:w-[35rem] h-56 md:h-[23rem]  md:relative ">
            <div className=" flex flex-col  justify-end md:justify-start  items-end md:items-start gap-2 pt-8 md:pt-24 ">
              <h3 className="text-m text-sky-400 text-xs ">Featured Project</h3>
              <h1 className="text-2xl font-extrabold  text-gray-300">
                Currency Convertor
              </h1>
            </div>
            <div className=" w-full md:w-[38rem]  h-56 md:h-[6rem] shadow-lg md:bg-[#0a030f]/90 absolute  md:top-40 md:left-0  p-2 md:p-6 ">
              <p className="text-sm text-gray-500">
                {" "}
                The Currency Converter application is developed using React and
                Tailwind CSS. It fetches live exchange rates from an API to help
                users convert currencies in real-time.
              </p>
            </div>
            <div className=" top-28 relative">
              <ul className="flex gap-4 justify-end md:justify-start text-sm text-sky-500">
                <li>html</li>
                <li>Tailwind CSS</li>
                <li>React</li>
                <li>JS</li>
              </ul>
              <div className="flex gap-4 justify-end md:justify-start mt-4">
                <a
                  href="https://github.com/SwornimShrestha/CurrencyConvertor"
                  target="_blank"
                >
                  <GitHubIcon sx={{ fontSize: 20, color: "skyblue" }} />
                </a>
                <a
                  href="https://currency-convertor-sand.vercel.app/"
                  target="_blank"
                >
                  <OpenInNewIcon sx={{ fontSize: 20, color: "skyblue" }} />
                </a>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="w-full md:w-[40rem]  h-64 md:h-[23rem] bg-slate-100  overflow-hidden">
            <img src={project04} className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
