import { HERO } from "../constants";
import mypic from "../assets/hero.png";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
const Hero = () => {
  const openResume = () => {
    window.open("/public/SwornimCV (1).pdf", "_blank");
  };
  return (
    <section className="flex min-h-screen flex-wrap items-center justify-evenly  mb-40 md:mb-14">
      <div className="flex justify-center">
        <motion.img
          initial={{ opacity: 0.0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={mypic}
          className="rounded-3xl hover:rotate-0  w-80 h-72 md:w-[420px] md:h-[380px] "
          alt=""
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 "
      >
        <h2 className="text-4xl md:text-6xl font-bold p-2 my-3 lg:text-[4rem]">
          {HERO.name}
        </h2>

        <p className="px-2 text-xl  italic -tracking-tighter">{HERO.greet}</p>
        <p className="mb-8 p-2">{HERO.description}</p>
        <div className="flex gap-10">
          <ul className="flex gap-3 px-2 ">
            <li>
              <a href="https://github.com/SwornimShrestha" target="_blank">
                <GitHubIcon sx={{ fontSize: 30 }} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/swornim-shrestha-04a8a0238"
                target="_blank"
              >
                <LinkedInIcon sx={{ fontSize: 30 }} />
              </a>
            </li>
            <li>
              <InstagramIcon sx={{ fontSize: 30 }} />
            </li>

            <li>
              <FacebookIcon sx={{ fontSize: 30 }} />
            </li>
          </ul>
          <Button color="secondary" variant="outlined" onClick={openResume}>
            Resume
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
