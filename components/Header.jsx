"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { RiArrowRightUpLine } from "react-icons/ri";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

const Header = () => {
  return (
    <header className="bg-[#121315] py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />
          {/* Nav Links */}
          <nav className="hidden xl:flex items-center gap-12">
            <ul className="flex">
              {links.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="text-white text-sm uppercase font-medium tracking-[1.2px] 
                    after:content-['/'] after:mx-4 last:after:content-none after:text-[#ffca3b]"
                  >
                    <ScrollLink
                      to={link.path}
                      smooth
                      spy
                      className="cursor-pointer"
                      activeClass="text-[#ffca3b]"
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>
            <button className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] bg-white group">
              <div className="flex-1 text-center tracking-[1.2px] text-[#121315] font-bold text-sm uppercase">
                Get a quote
              </div>
              <div className="w-11 h-11 bg-[#121315] flex items-center justify-center">
                <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
              </div>
            </button>
          </nav>
          {/* Nav Mobile */}
          <div className="xl:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
