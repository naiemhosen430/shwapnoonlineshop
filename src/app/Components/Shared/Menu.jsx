"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
  IoMdReorder,
} from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Menu() {
  const [menuBox, setMenuBox] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  // hundle onclick
  const toggleMenu = () => {
    if (menuBox === true) {
      setMenuBox(false);
    } else {
      setMenuBox(true);
    }
  };
  return (
    <>
      <div
        className="p-2 px-8 z-10 sticky flex top-0 bg-gradient-to-t from-slate-400 to-slate-600"
        data-aos="fade-up"
      >
        <div className="lg:w-3/12 w-9/12">
          <h1 className="font-bold lg:text-2xl text-xl">
            <Link href={"/"}>Shwapno Online Shop</Link>
          </h1>
        </div>

        <div className="lg:w-6/12 lg:block hidden">
          <ul className="flex space-x-2">
            <Link
              href={"/cetagory"}
              className="font-bold p-2 px-4 hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Catagory
            </Link>
            <Link
              href={"/product"}
              className="font-bold p-2 px-4 hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Product
            </Link>
            <Link
              href={"/service"}
              className="font-bold p-2 px-4 hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Service
            </Link>
            <Link
              href={"/order"}
              className="font-bold p-2 px-4 hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Order
            </Link>
            <Link
              href={"/pricing"}
              className="font-bold p-2 px-4 hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Pricing
            </Link>
          </ul>
        </div>

        <div className="lg:w-3/12 hidden lg:flex items-center">
          <input
            className="py-2 px-4 rounded-3xl rounded-tr-none rounded-br-none text-slate-950 border bg-slate-300"
            type="search"
            name=""
            id=""
            placeholder="Search your keyword"
          />
          <Link
            className="text-white bg-slate-700 rounded-2xl rounded-tl-none rounded-bl-none py-2 px-4"
            href={'/search/"something"'}
          >
            <FaSearch className="inline-block" />
          </Link>
        </div>

        <div className="lg:hidden w-3/12 text-right">
          <button
            onClick={toggleMenu}
            className="inline-block py-1 px-4 text-black text-3xl font-bold rounded-md"
          >
            <IoMdReorder />
          </button>
        </div>
      </div>

      {menuBox && (
        <div className="w-screen h-screen py-5" data-aos="fade-left">
          <div className="w-full flex justify-center items-center p-5">
            <input
              className="py-2 px-4 rounded-3xl block w-10/12 rounded-tr-none rounded-br-none text-slate-950 border bg-slate-300"
              type="search"
              name=""
              id=""
              placeholder="Search your keyword"
            />
            <Link
              className="text-white block w-2/12 text-center bg-slate-700 rounded-2xl rounded-tl-none rounded-bl-none py-2 px-2"
              href={'/search/"something"'}
            >
              <FaSearch className="inline-block" />
            </Link>
          </div>
          <ul className="space-y-2 lg:space-x-2">
            <Link
              onClick={toggleMenu}
              href={"/cetagory"}
              className="font-bold p-2 px-4 block hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Catagory
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/service"}
              className="font-bold p-2 px-4 block hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Service
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/product"}
              className="font-bold p-2 px-4 block hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Product
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/project"}
              className="font-bold p-2 px-4 block hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Project
            </Link>
            <Link
              onClick={toggleMenu}
              href={"/pricing"}
              className="font-bold p-2 px-4 block hover:text-slate-500 hover:bg-slate-300 cursor-pointer rounded-xl"
            >
              Pricing
            </Link>
          </ul>

          <div className="flex items-center pt-20 justify-center space-x-5">
            <IoLogoFacebook className="text-3xl inline-block text-black font-bold rounded-full" />
            <IoLogoInstagram className="text-3xl inline-block text-black font-bold rounded-full" />
            <IoLogoTwitter className="text-3xl inline-block text-black font-bold rounded-full" />
            <IoLogoLinkedin className="text-3xl inline-block text-black font-bold rounded-full" />
            <IoLogoYoutube className="text-3xl inline-block text-black font-bold rounded-full" />
          </div>
          <div className="text-center py-5">
            <h1 className="font-bold">+8801920679575</h1>
            <h1 className="font-bold">naiemhosen430@gmail.com</h1>
            <p className="p-5">
              ShopNest is your one-stop destination for all your online shopping
            </p>
          </div>
        </div>
      )}
    </>
  );
}
