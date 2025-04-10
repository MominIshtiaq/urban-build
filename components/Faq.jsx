"use client";

import React from "react";
import Pretitle from "./Pretitle";
import { motion } from "motion/react";
import { fadeIn } from "../public/assets/variants";
import FaqItem from "./FaqItem";

const faqItemsData = [
  {
    title: "How long does a construction project usually takes?",
    description: "Timelines vary based on project size and complexity.",
  },
  {
    title: "Do I need permits for my project?",
    description: "Timelines vary based on project size and complexity.",
  },
  {
    title: "What materials do you use for your construction projects?",
    description: "Timelines vary based on project size and complexity.",
  },
  {
    title: "Can I make changes to my project after it has been completed?",
    description: "Timelines vary based on project size and complexity.",
  },
  {
    title: "How much will my construction project cost?",
    description: "Timelines vary based on project size and complexity.",
  },
  {
    title: "How do you ensure quality and safety on-site?",
    description: "Timelines vary based on project size and complexity.",
  },
];

const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => {
    return {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: index * 0.1 },
    };
  },
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center max-w-[540px] mx-auto xl:mb-20">
          <Pretitle text="Faq" center />
          <h2 className="h2 mb-3">Got Questions? We've Got you Covered</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            From project planning to final touches, we've answered the most
            common questions to help you make informed decisions.
          </p>
        </div>
        {/* faq */}
        <ul>
          {faqItemsData.map((item, index) => {
            return (
              <li key={index}>
                <FaqItem title={item.title} description={item.description} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
