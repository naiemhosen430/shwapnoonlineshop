"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swiper from "./Swiper";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage:
            'url("https://media.datawiz.io/ph-cms/images/consumer_behavior.png?AWSAccessKeyId=datawiz&Signature=ubr2uF5PUYPsH4LP2zyZX2u8t6Q%3D&Expires=2326734003")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="lg:p-20 p-10 px-10"
        data-aos="fade-top"
      >
        <div className="lg:flex">
          <div className="lg:w-6/12">
            <h1
              className="text-white font-bold text-3xl py-5"
              data-aos="fade-left"
            >
              Shwapno Online Shop: Your Ultimate Destination for Online Shopping
              Excellence
            </h1>
            <p className="text-slate-500" data-aos="fade-right">
              ShopNest is an innovative e-commerce platform designed to
              revolutionize your online shopping experience. With a commitment
              <br />
              <br />
              What sets us apart is our dedication to excellence. We constantly
              update our offerings, collaborate with trusted brands, and provide
            </p>
          </div>
        </div>
        <div className="lg:block hidden">
          <Swiper item={4} />
        </div>
        <div className="lg:hidden block ">
          <Swiper item={1} />
        </div>
      </div>
    </>
  );
}
