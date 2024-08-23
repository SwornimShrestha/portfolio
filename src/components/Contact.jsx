import React from "react";

import contact from "../assets/contact.png";
import { Button, TextField } from "@mui/material";
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
      <div className="flex flex-col md:flex-row gap-20">
        {/* Image */}
        <div className=" w-96 h-96 mx-auto md:w-[30rem] md:h-[30rem] bg-white-300">
          <img src={contact} className="p-6" />
        </div>
        {/* form */}
        <div>
          <form className="w-96 h-96 mx-auto md:w-[30rem] md:h-[30rem] px-4 md:px-10  flex flex-col gap-10 rounded-lg border border-stone-50/30 bg-white/5  md:py-3 py-2 backdrop-blur-lg">
            <TextField
              label="Full name"
              variant="standard"
              sx={{ input: { color: "white" }, label: { color: "white" } }}
            />
            <TextField
              label="Email"
              variant="standard"
              sx={{ input: { color: "white" }, label: { color: "white" } }}
            />
            <TextField
              label="Message"
              multiline
              rows={6}
              variant="standard"
              sx={{ input: { color: "white" }, label: { color: "white" } }}
            />
            <Button variant="contained">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
