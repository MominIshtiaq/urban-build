"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";
import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import Pretitle from "./Pretitle";
import { motion } from "motion/react";

const serviceData = [
  {
    name: "constructions",
    icon: <PiWallFill />,
    title: "Construction Services",
    description:
      "We build with precision and innovation, ensuring that every structure is strong, reliable, and built to last. From foundations to finishing touches, our expertise transforms ideas into reality.",
    serviceList: [
      "Residential Builds",
      "Structural Design",
      "Site Prep",
      "Concrete Work",
      "Framing & Roofing",
      "Interior Finish",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" },
    ],
  },
  {
    name: "renovation",
    icon: <PiPaintRollerFill />,
    title: "Renovation Services",
    description:
      "Revitalizing spaces with modern designs and high-quality craftsmanship. Whether upgrading a home or remodeling an office, we bring fresh life to every project.",
    serviceList: [
      "Kitchen Remodel",
      "Basement Finish",
      "Flooring",
      "Energy Upgrades",
      "Carpentry",
      "Painting",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "restorations",
    icon: <PiWrenchFill />,
    title: "Restoration Services",
    description:
      "Bringing damaged or aging structures back to life. We specialize in restoring historical landmarks, fire-damaged buildings, and water-damaged properites with meticulous care.",
    serviceList: [
      "Historic Restore",
      "Water Damage",
      "Fire Repair",
      "Structural Fix",
      "Mold Removal",
      "Roof Restore",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-4.jpg" },
      { url: "/assets/img/services/thumb-5.jpg" },
    ],
  },
  {
    name: "consulting",
    icon: <PiUserGearFill />,
    title: "Consulting Services",
    description:
      "Consultong services about damaged or aging structures. We specialize in consulting about historical landmarks, buildings, and properites with meticulous care.",
    serviceList: [
      "Project Plans",
      "Costing",
      "Site Management",
      "permits",
      "Sustainability",
      "Roof Restore",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-6.jpg" },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("constructions");
  return (
    <motion.section
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
        type: "tween",
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      viewport={{ once: true, amount: 0.4 }}
      className="pt-16 xl:pt-32"
      id="services"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mb-20 mx-auto">
          <Pretitle text="Our services" center />
          <h2 className="h2 mb-3">Solutions We Provide</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Offering tailored construction solutions, from planning to
            completion, with a focus on quality and innovation.
          </p>
        </div>

        {/* tabs */}
        <Tabs
          defaultValue="constructions"
          onValueChange={(value) => setActiveTab(value)}
          className="flex flex-col xl:flex-row"
        >
          <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 xl:w-[345px] gap-[30px] h-full w-full rounded-none p-0 bg-transparent">
            {serviceData.map((item) => {
              return (
                <TabsTrigger
                  key={item.name}
                  value={item.name}
                  className="w-full rounded-none h-[100px] flex items-center relative p-0 outline-none shadow"
                >
                  <div
                    className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                      activeTab === item.name
                        ? "bg-[#121315] text-white"
                        : "bg-[#ffca3b] text-[#121315]"
                    }`}
                  >
                    <div>{item.icon}</div>
                  </div>
                  <div className="uppercase text-base font-semibold tracking-[.6px] w-[100px] ml-16">
                    {item.name}
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="flex-1 bg-white shadow-lg h-[490px] p-[30px]">
            {serviceData.map((item) => {
              return (
                <TabsContent key={item.name} value={item.name} className="m-0">
                  <div className="flex flex-col md:flex-row gap-[30px]">
                    {/* Images  */}
                    <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                        >
                          <Image src={thumb.url} fill alt="" />
                        </div>
                      ))}
                    </div>
                    {/* text and button */}
                    <div>
                      <div>
                        <h3 className="h3 mb-6">{item.title}</h3>
                        <p className="mb-10">{item.description}</p>
                        {/* service list */}
                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {item.serviceList.map((service, index) => {
                            return (
                              <li
                                key={index}
                                className="flex items-center gap-4"
                              >
                                <div className="w-[6px] h-[6px] bg-[#ffca3b]"></div>
                                <div className="capitalize font-medium text-[#121315]">
                                  {service}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                        {/* button */}
                        <Button text={"Read more"} />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Services;
