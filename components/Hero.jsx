import React from "react";
import Button from "./Button";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="h-[70vh] bg-[url(/assets/img/hero/bg.jpg)] bg-no-repeat bg-cover bg-center relative">
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3, type: "spring", bounce: 0.5 }}
          className="container mx-auto h-full flex items-center"
        >
          <div className="z-20 text-white max-w-[608px] text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start">
            <h1 className="h1 text-white mb-4">
              <span className="text-[#ffca3b]">Building </span> robust lasting
              solutions
            </h1>
            <p className="mb-9">
              From concept to completiong, we ensure every details is optimized
              for strength and endurance, creating solutions that inspire
              confidence and stand firm for years.
            </p>
            {/* Call to Action Button */}
            <div>
              <Button text="See our work" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
