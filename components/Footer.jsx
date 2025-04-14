import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
} from "react-icons/ri";
import Socials from "./Socials";
import { motion } from "motion/react";
import { fadeIn } from "@/public/assets/variants";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="mt-16 xl:mt-32 bg-[#121315]"
    >
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[30px]">
          {/* logo and text */}
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <Image src={"/assets/logo.svg"} width={230} height={48} alt="" />
            </Link>
            <p className="text-border max-w-[270px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              ut libero pariatur voluptatum porro.
            </p>
          </div>
          {/* contact */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center mag-4">
                <RiMapPin2Fill className="text-[#ffca3b] text-xl" />
                <p>1250 Brickston Ave, US</p>
              </li>
              <li className="flex items-center mag-4">
                <RiPhoneFill className="text-[#ffca3b] text-xl" />
                <p>+1 (555) 000-0000</p>
              </li>
              <li className="flex items-center mag-4">
                <RiMailFill className="text-[#ffca3b] text-xl" />
                <p>email@urbanbuild.com</p>
              </li>
            </ul>
          </div>
          {/* newsletter */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">Newsletter</h4>
            <p className="mb-9">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              amini architecto repudiandae aliquid iusto itaque!
            </p>
            <div className="relative max-w-[370px]">
              <input
                type="text"
                placeholder="enter your email"
                className="bg-[#222427] h-16 w-full pl-7 rounded-none outline-none flex items-center"
              />
              <button className="bg-[#ffca3b] w-12 h-12 absolute right-2 top-2 bottom-2 text-[#121315] text-xl flex items-center justify-center">
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="container mx-auto xl:px-0 py-12 border-t border-border/10 flex flex-col gap-6 xl:flex-row items-center justify-between">
        <p className="text-border">
          Copyright &copy; {currentYear} UrbanBuild. All rights reserved.
        </p>
        <Socials
          containerStyles={"flex gap-6 text-white"}
          iconStyles={"hover:text-[#ffca3b] transition-all"}
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
