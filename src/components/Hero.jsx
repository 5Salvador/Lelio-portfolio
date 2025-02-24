import React from "react";
import image1 from "../assets/Sem Título-8.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col container mx-auto p-4">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="justify-items-center"
      >
        <img
          src={image1}
          className="md:h-screen hover:-translate-y-10 transition-all duration-300"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Hero;
