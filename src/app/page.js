import Image from "next/image";
import TopItems from "./Components/Shared/TopItems";
import Hero from "./Components/Hero";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Hero />
      <TopItems />
    </div>
  );
}
