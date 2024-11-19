import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/Logo.png";

export default function Navbar() {
    return (
       <div>
         <>
        <nav className="text-white bg-[#043873] justify-between item-center flex w-[1920px] h-[92px] py-4 px-[220px]">
        <div className="w-[191px] h-[34px] items-center py-2"> <Image src={Logo} alt="Logo"/>
        </div>
        <div className="flex justify-between items-center w-[737.5px] h-[60px]  gap-32 p-10">
            <div className="w-[549px] h-[23px]">
               <ul className="flex flex-row justify-between text-white">
                    <li className="w-[59px] h-[24px]"> Products </li>
                    <li className="w-[52px] h-[24px]"> Solutions </li>
                    <li className="w-[58px] h-[24px]"> Resources </li>
                    <li className="w-[43px] h-[24px]"> Pricing </li>
                    </ul>
                    </div>
          <div className="w-[126px] h-[60px]">
          <button className="px-10 py-4 rounded-lg bg-[#ffe492]">
            <span className="w-[64px] h-[23px] text-[#043873] font-medium text-[16px] leading-[23px] tracking-[-2%]">Login </span>
            </button>
          </div>
            </div>
            </nav>
        </>

       </div>
    )
}