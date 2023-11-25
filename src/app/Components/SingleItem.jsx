"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function SingleItem({
  image,
  itemname,
  price,
  sell,
  id,
  rating,
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <div
        className="rounded-xl inline-block m-4 p-2 lg:w-3/12 bg-slate-300 shadow hover:bg-slate-400"
        data-aos="flip-up"
      >
        <Link href={`/product/${id}`}>
          <img className="block w-full h-40" src={image} alt="" />
          <h1 className="text-2xl font-bold">{itemname}</h1>
          <div className="flex py-2">
            <h1 className="w-4/12">Price: {price}</h1>
            <h1 className="w-4/12">Total: {sell}</h1>
            <h1 className="w-4/12">Rating {rating}</h1>
          </div>
        </Link>
      </div>
    </>
  );
}
