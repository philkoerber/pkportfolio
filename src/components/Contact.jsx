import React from "react";
import { motion } from "framer-motion";

import { GoMarkGithub, GoMail } from "react-icons/go";
import { HiOutlinePhone } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io";
import { SiUpwork } from "react-icons/si";

import line from "./pics/line.png";
import pk from "./pics/pk.svg";
import ParallaxDiv from "./ParallaxDiv";

const styles =
  "flex justify-center items-center gap-2 text-xl font-semibold cursor-pointer";
const motionAnimation = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
};

function Contact(props) {
  const handleMailClick = () => {
    window.location.href = "mailto:philipp.koerber.93@gmail.com";
  };

  const handleGithubClick = () => {
    window.open("https://github.com/philkoerber", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/philipp-koerber-p1993k1312/",
      "_blank"
    );
  };

  const handleUpworkClick = () => {
    window.open("https://www.upwork.com/workwith/philippk14", "_blank");
  };

  return (
    <div className="relative h-screen w-full flex justify-center items-center">
      <div className="flex flex-col gap-10 items-center font-urbanist">
        <div className="text-5xl relative mb-10">
          Philipp Körber
          <ParallaxDiv
            className="absolute h-[200px] top-[-200%] opacity-10"
            offset={100}>
            <img src={pk} />
          </ParallaxDiv>
        </div>
        <div className={styles} style={{ cursor: "default" }}>
          <ImLocation className="text-3xl" />
          Kawaguchi, Saitama
        </div>
        <motion.div
          className={styles}
          {...motionAnimation}
          onClick={handleMailClick}>
          <GoMail className="text-3xl" />
          philipp.koerber.93@gmail.com
        </motion.div>
        <motion.div
          className={styles}
          {...motionAnimation}
          onClick={handleLinkedInClick}>
          <IoLogoLinkedin className="text-[35px]" />
          .../philipp-koerber-p1993k1312
        </motion.div>
        <motion.div
          className={styles}
          {...motionAnimation}
          onClick={handleGithubClick}>
          <GoMarkGithub className="text-3xl" />
          @philkoerber
        </motion.div>
        <motion.div
          className={styles}
          {...motionAnimation}
          onClick={handleUpworkClick}>
          <SiUpwork className="text-4xl bottom-1" />
          @Philipp K.
        </motion.div>
        <div className={styles} style={{ cursor: "default" }}>
          <HiOutlinePhone className="text-3xl" />
          080 5625 4648
        </div>
        <div className="flex flex-col justify-center items-center text-3xl font-semibold">
          <img className="w-[40%]" src={line} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
