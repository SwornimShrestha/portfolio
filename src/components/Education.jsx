import * as React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Education = () => {
  return (
    <section id="education">
      <div className="text-[#f5f4f4]  ">
        <h1 className=" text-center text-3xl lg:text-4xl font-extrabold  mb-16 ">
          <span className=" ">Education </span>
        </h1>
        <div className=" flex flex-col md:flex-row  justify-between gap-20">
          <div className="">
            <h1 className="text-lg underline  decoration-sky-600 underline-offset-8 decoration-1 font-extralight">
              Bsc.CSIT
            </h1>
            <h1 className="text-blue-400"> Academia International College</h1>
            <h3 className="text-xs text-[#f5f4f4af] my-3 font-semibold">
              2019 - 2024{" "}
              <span>
                <LocationOnIcon sx={{ fontSize: 20 }} />
                Gwarko
              </span>
            </h3>
          </div>
          <div className="">
            <h1 className="text-lg underline  decoration-sky-600 underline-offset-8 decoration-1 font-extralight">
              +2 In Science
            </h1>
            <h1 className="text-blue-400">
              {" "}
              Golden Gate International College
            </h1>
            <h3 className="text-xs text-[#f5f4f4af] my-3 font-semibold">
              2017 - 2019{" "}
              <span>
                <LocationOnIcon sx={{ fontSize: 20 }} />
                Batisputali
              </span>
            </h3>
          </div>
          <div className="">
            <h1 className="text-lg underline  decoration-sky-600 underline-offset-8 decoration-1 font-extralight">
              SEE
            </h1>

            <h1 className="text-blue-400">
              {" "}
              Enshrine National English Sec School
            </h1>
            <h3 className="text-xs text-[#f5f4f4af] my-3 font-semibold">
              2017{" "}
              <span>
                <LocationOnIcon sx={{ fontSize: 20 }} />
                Lalitpur
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
