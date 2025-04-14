import React from "react";
import Button from "./Button";
import { motion } from "motion/react";
import { fadeIn } from "@/public/assets/variants";

const Hero = () => {
  return (
    <section className="h-[70vh] bg-[url(/assets/img/hero/bg.jpg)] bg-no-repeat bg-cover bg-center relative">
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10">
        <div className="container mx-auto h-full flex items-center">
          <div className="z-20 text-white max-w-[608px] text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
              className="h1 text-white mb-4"
            >
              <span className="text-[#ffca3b]">Building </span> robust lasting
              solutions
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
              className="mb-9"
            >
              From concept to completiong, we ensure every details is optimized
              for strength and endurance, creating solutions that inspire
              confidence and stand firm for years.
            </motion.p>
            {/* Call to Action Button */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
            >
              <Button text="See our work" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
