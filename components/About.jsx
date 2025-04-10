import React from "react";
import Pretitle from "./Pretitle";
import Image from "next/image";
import Button from "./Button";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.section
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        type: "tween",
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      viewport={{ once: true, amount: 0.4 }}
      className="pt-16 xl:pt-32"
      id="about"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl-gap:0 xl:flex-row xl:items-center">
          <div className="flex-1">
            <div className="max-w-[540px]">
              <Pretitle text="About us" />
              <h2 className="h2 mb-6">
                Focused on Excellence In Every Project
              </h2>
              <p className="mb-11">
                Our unweavering commitment to excellence drives every project we
                undertake. From concept to completion, we meticulously craft
                solutions that embody quality, precision and innovation.
              </p>
              <div className="w-max flex flex-col text-right mb-10">
                <Image
                  src="/assets/img/about/signature.svg"
                  alt="image"
                  width={154}
                  height={38}
                />
                <p>Company CEO</p>
              </div>
              <Button text="Contact us" />
            </div>
          </div>
          <div className="flex-1 hidden xl:flex xl:justify-center">
            <motion.div
              whileHover="hover"
              className="w-full xl:w-[444px] xl:h-[493px] relative"
            >
              <motion.div
                variants={{
                  hover: {
                    translateX: 16,
                    translateY: 16,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
                className="hidden xl:flex w-[444px] h-[493px] bg-[#ffca3b] absolute -top-4 -left-4 -z-10"
              ></motion.div>
              <motion.img
                src="/assets/img/about/img.jpg"
                alt="Img"
                width={444}
                height={492}
                style={{ width: "100%", height: "492px", objectFit: "cover" }}
                variants={{
                  hover: {
                    translateX: -16,
                    translateY: -16,
                    zIndex: 10,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
