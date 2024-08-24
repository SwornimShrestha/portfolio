import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import contact from "../assets/contact2.png";
// import { Button, TextField } from "@mui/material";
const Contact = () => {
  return (
    <section className="pt-20 " id="contact">
      <h2 className="mb-9 text-center text-3xl lg:text-4xl">Contact</h2>
      <h3 className="mb-4 text-center text-3xl lg:text-4xl font-extrabold">
        Let's get in touch
      </h3>
      <p className="mb-9 text-center ">
        Leave your details and a short message below.
      </p>
      <div className="flex flex-col md:flex-row ">
        {/* Image */}
        <div className=" w-full h-full mx-auto  bg-white-300">
          <img src={contact} className="p-6" />
        </div>
        <div>
          <h1 className=" text-2xl font-extrabold md:mb-10 mb-20">
            Have You Any Projects? Please Drop a Message
          </h1>
          <div className="flex flex-col gap-10">
            <h3 className="text-sm font-extrabold">
              Address:<br></br>
              <span className="text-sm  font-medium text-gray-400">
                Tikathali,Lalitpur
              </span>
            </h3>
            <h3 className="text-sm font-extrabold">
              <PhoneIcon sx={{ fontSize: 20 }} />
              Phone: <br></br>
              <span className="text-sm  font-medium text-gray-400">
                (+977) 9869348462
              </span>
            </h3>
            <h3 className="text-sm font-extrabold">
              Email:<br></br>
              <span className="text-sm  font-medium text-gray-400">
                swornim@academiacollege.edu.np swornimshrestha639@gmail.com
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
