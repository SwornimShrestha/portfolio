import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import contact from "../assets/contact2.png";
import point from "../assets/point3.png";
// import { Button, TextField } from "@mui/material";
const Contact = () => {
  return (
    <section className="pt-20 " id="contact">
      <h2 className="mb-9 text-center text-3xl lg:text-4xl">Contact</h2>
      <h3 className="mb-4 text-center text-3xl lg:text-4xl font-extrabold">
        Let's get in touch
      </h3>
      <p className="mb-9 text-center">
        Leave your details and a short message below.
      </p>
      <div className="flex flex-col md:flex-row  mt-20 gap-20 md:gap-0 md:mt-28 ">
        {/* Image */}
        <div className=" w-full h-full mx-auto   pl-50 flex justify-center  ">
          <img src={contact} className="" />
        </div>
        {/* description */}
        <div>
          <h1 className=" text-2xl font-extrabold md:mb-10 mb-20">
            Have Any Projects? Please Drop a Message
          </h1>
          <div className="flex flex-col gap-10">
            <h3 className="text-sm font-extrabold">
              <HomeIcon sx={{ fontSize: 15, marginRight: 1 }} />
              Address:<br></br>
              <span className="text-sm  font-medium text-gray-400">
                Tikathali,Lalitpur
              </span>
            </h3>
            <h3 className="text-sm font-extrabold">
              <PhoneIcon sx={{ fontSize: 15, marginRight: 1 }} />
              Phone: <br></br>
              <span className="text-sm  font-medium text-gray-400">
                (+977) 9869348462
              </span>
            </h3>
            <h3 className="text-sm font-extrabold">
              <SendIcon sx={{ fontSize: 15, marginRight: 1 }} />
              Email:<br></br>
              <span className="text-sm  font-medium text-gray-400">
                swornim@academiacollege.edu.np swornimshrestha639@gmail.com
              </span>
            </h3>
            <div className="flex flex-row gap-4">
              <img className="w-14" src={point} alt="" />
              <a
                href="https://mail.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-10"
                  src="https://img.icons8.com/?size=100&id=37246&format=png&color=000000"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
