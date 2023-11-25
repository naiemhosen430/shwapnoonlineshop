"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const { text } = useParams();
  return (
    <>
      <div className="p-20">
        <h1 className="text-3xl text-center p-4">{text}</h1>
        <div className="lg:flex items-center justify-center lg:space-x-5 lg:space-y-0 space-y-5 text-center p-10">
          <Link
            className="block bg-slate-950 rounded-xl shadow-2xl text-white p-2 hover:bg-slate-800 lg:w-4/12 w-12/12"
            href={`/aboutus`}
          >
            About As
          </Link>
          <Link
            className="block bg-slate-800 rounded-xl shadow-2xl text-white p-2 hover:bg-slate-800 lg:w-4/12 w-12/12"
            href={"/"}
          >
            Back
          </Link>
        </div>
      </div>
    </>
  );
}
