"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "../assets/assets";

const NavBar = () => {
  const [isScroll, setScroll] = useState(false);
  const sideMenuRef = useRef(null);

  const openMenu = () => {
    sideMenuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.right = "-16rem";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex text-white items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-slate-950/80 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-black mr-6">
          Maximiliano Villa
        </h1>

        <ul className="hidden md:flex text-sm lg:text-base items-center justify-between gap-2 lg:gap-4 rounded-full px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-lg">
          <li><a href="#top" className="px-3 py-2 rounded-full hover:bg-cyan-300/10 hover:text-cyan-200 transition">Home</a></li>
          <li><a href="#about" className="px-3 py-2 rounded-full hover:bg-cyan-300/10 hover:text-cyan-200 transition">About</a></li>
          <li><a href="#work" className="px-3 py-2 rounded-full hover:bg-cyan-300/10 hover:text-cyan-200 transition">Experience</a></li>
          <li><a href="#project" className="px-3 py-2 rounded-full hover:bg-cyan-300/10 hover:text-cyan-200 transition">Projects</a></li>
          <li><a href="#certifications" className="px-3 py-2 rounded-full hover:bg-cyan-300/10 hover:text-cyan-200 transition">Certifications</a></li>
          <li><a href="#contact" className="px-3 py-2 rounded-full hover:bg-cyan-300/10 hover:text-cyan-200 transition">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-6 py-2 border border-cyan-300/30 bg-cyan-300/10 text-cyan-100 rounded-full ml-4 hover:bg-cyan-300/20 transition"
          >
            Contact
          </a>

          <button
            className="block md:hidden ml-3 rounded-full border border-white/10 bg-white/10 p-2"
            onClick={openMenu}
          >
            <Image src={assets.menu_black} alt="" className="w-6 cursor-pointer invert" />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-3 py-20 px-8 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-slate-950 text-white border-l border-white/10 shadow-2xl shadow-black/40 transition-all duration-500"
        >
          <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/10 p-2" onClick={closeMenu}>
            <Image src={assets.close_black} alt="" className="w-5 cursor-pointer invert" />
          </div>

          <li onClick={closeMenu}><a href="#top" className="block px-4 py-3 rounded-xl hover:bg-cyan-300/10 hover:text-cyan-200 transition">Home</a></li>
          <li onClick={closeMenu}><a href="#about" className="block px-4 py-3 rounded-xl hover:bg-cyan-300/10 hover:text-cyan-200 transition">About</a></li>
          <li onClick={closeMenu}><a href="#work" className="block px-4 py-3 rounded-xl hover:bg-cyan-300/10 hover:text-cyan-200 transition">Experience</a></li>
          <li onClick={closeMenu}><a href="#project" className="block px-4 py-3 rounded-xl hover:bg-cyan-300/10 hover:text-cyan-200 transition">Projects</a></li>
          <li onClick={closeMenu}><a href="#certifications" className="block px-4 py-3 rounded-xl hover:bg-cyan-300/10 hover:text-cyan-200 transition">Certifications</a></li>
          <li onClick={closeMenu}><a href="#contact" className="block px-4 py-3 rounded-xl hover:bg-cyan-300/10 hover:text-cyan-200 transition">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;