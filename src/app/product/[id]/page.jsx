"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const { id } = useParams();
  return (
    <>
      <h1 className="text-3xl p-10">You have searched for {id}</h1>
    </>
  );
}
