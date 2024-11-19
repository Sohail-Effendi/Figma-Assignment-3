import Image from "next/image";
import Link from "next/link";
import Navbar from "../component/navbar";
import Hero from "../component/hero";
import Proj from "../component/proj";

export default function Home() {
  return (
    <div className="w-[1922px] h-[5669px] py-20 mx-20">
    <h1 className=""></h1>

    <Navbar/>
    <Hero/>
    <Proj/>
  
    </div>
  )
}
