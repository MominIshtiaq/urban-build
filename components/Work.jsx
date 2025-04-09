import React from "react";
import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

const workData = [
  {
    img: "/assets/img/work/restoration.jpg",
    name: "restoration",
    description: "Description",
    href: "",
  },
  {
    img: "/assets/img/work/construction.jpg",
    name: "construction",
    description: "Description",
    href: "",
  },
  {
    img: "/assets/img/work/renovation.jpg",
    name: "renovation",
    description: "Description",
    href: "",
  },
  {
    img: "/assets/img/work/consulting.jpg",
    name: "consulting",
    description: "Description",
    href: "",
  },
];

const Work = () => {
  return (
    <div className="pt-16 xl:pt-32" id="projects">
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto xl:mb-20">
          <Pretitle text={"Our Work"} center />
          <h2 className="h2 mb-3">Discover Our Projects</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Providing expert services designer to deliver quality and innovation
            in every project we undertake.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {workData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-[492px] flex-1 relative overflow-hidden group/div flex justify-center"
            >
              <Image
                src={item.img}
                fill
                className="object-cover"
                alt="image"
                quality={100}
              />
              <div className="w-[90%] h-[84px] bg-[#121315] absolute bottom-4 flex justify-between items-center text-white md:translate-y-[108px] md:group-hover/div:translate-y-0 transition-all duration-500">
                <div className="pl-8">
                  <h4 className="!text-xl font-semibold tracking-[1px] uppercase">
                    {item.name}
                  </h4>
                  <div className="flex item-center gap-1">
                    <RiCheckboxCircleFill className="text-[#ffca3b] text-xl" />
                    <p>{item.description}</p>
                  </div>
                </div>
                <Link
                  href={item.href}
                  className="w-[44px] h-[44px] xl:w-[60px] xl:h-[60px] bg-[#ffca3b] text-[#121315] text-2xl flex justify-center items-center absolute right-3 group/link"
                >
                  <RiArrowRightUpLine className="group-hover/link:rotate-45 transition-all duration-200" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
