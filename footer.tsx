import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/Logo.png";

export default function Footer() {
    return (
        <div className="flex bg-[#043873] w-[1920px] h-[461px] top-[5159px] left-1px] px-[220px] py-[140px]">
            <div className="flex bg-[#043873] w-[1480px] h-[169px] gap-[100px]">
                <div>
                    <div>
                    <Image src={Logo} alt="Logo"/>
                    <p>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                    </div>
                    <div>
                        <ul>
                            <li>Product</li>
                            <li>Overview</li>
                            <li>Pricing</li>
                            <li>Customer stories</li>
                        </ul>
                    </div>
                    <div>
                    <ul>
                            <li>Resources</li>
                            <li>Blog</li>
                            <li>Guides & Tutorials</li>
                            <li>Help center</li>
                        </ul>
                    </div>
                    <div>
                    <ul>
                            <li>Company</li>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Media kit</li>
                        </ul>
                    </div>
                </div>
                
                <div>
                    <p></p>
                </div>
            </div>
        </div>
          
    )
}