"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const { id } = useParams();
  return (
    <>
      <div className="p-10">
        <div className="lg:flex">
          <div className="lg:w-6/12 lg:p-10">
            <img
              className="block w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZsx7p_e6_czcg9ZlKBJkSwDxWvHM3qxN4ROP1UH0EQ&s"
              alt=""
            />
          </div>
          <div className="lg:w-6/12 lg:p-10">
            <h1 className="text-3xl p-2">Item name</h1>
            <h1 className="text-xl p-2 py-1">150 taka</h1>
            <h1 className="text-xl p-2 py-1">10 kg</h1>
            <p className="text-xl p-2 py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab earum
              quis quod mollitia deserunt quibusdam fuga quisquam nihil,
              accusantium vero voluptate, voluptatibus a amet placeat. Ipsum
              accusamus culpa cupiditate fugit?
            </p>
            <div className="lg:flex items-center justify-center lg:space-x-5 lg:space-y-0 space-y-5 text-center p-10">
              <Link
                className="block bg-slate-950 rounded-xl shadow-2xl text-white p-2 hover:bg-slate-800 lg:w-4/12 w-12/12"
                href={`/product/${id}/shop`}
              >
                Buy Now
              </Link>
              <Link
                className="block bg-slate-800 rounded-xl shadow-2xl text-white p-2 hover:bg-slate-800 lg:w-4/12 w-12/12"
                href={"/product"}
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
