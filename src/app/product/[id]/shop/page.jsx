"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const { id } = useParams();
  return (
    <>
      <div>
        <h1 className="text-3xl text-center p-5">Add details</h1>
        <div className="lg:w-6/12 m-auto p-10">
          <div className="p-4">
            <label htmlFor="name" className="text-2xl p-2 block">
              Enter Your full name
            </label>
            <input
              className="text-xl p-2 px-4 rounded-xl block w-full"
              type="text"
              id="name"
              placeholder="MD Naiem"
            />
          </div>
          <div className="p-4">
            <label htmlFor="name" className="text-2xl p-2 block">
              Enter Your phone number
            </label>
            <input
              className="text-xl p-2 px-4 rounded-xl block w-full"
              type="number"
              id="name"
              placeholder="017********"
            />
          </div>
          <div className="p-4">
            <label htmlFor="name" className="text-2xl p-2 block">
              Enter Your full Address
            </label>
            <input
              className="text-xl p-2 px-4 rounded-xl block w-full"
              type="text"
              id="name"
              placeholder="Kendua, Netrokona, Dhaka"
            />
          </div>

          <div className="lg:flex items-center justify-center lg:space-x-5 lg:space-y-0 space-y-5 text-center p-10">
            <Link
              className="block bg-slate-950 rounded-xl shadow-2xl text-white p-2 hover:bg-slate-800 lg:w-4/12 w-12/12"
              href={`/alert/${"Success"}`}
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
    </>
  );
}
