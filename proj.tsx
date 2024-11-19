import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/Logo.png";
import Apple from "@/app/assets/Apple.png";
import Microsoft from "@/app/assets/Microsoft.png";
import Slack_Technologies_Logo from "@/app/assets/Slack_Technologies_Logo.png";
import Group246 from "@/app/assets/Group246.png";
import Btm from "@/app/assets/Btm.png";
import Logoicon from "@/app/assets/LogoIcon.png";

export default function Proj() {
    return (
       
        <div className="flex flex-col w-[1920px] h-[1588px] top-[921px] left-[1px] py-[140px] px-[220px] space-y-24">
            <div className="flex w-[1482px] h-[547px] gap-[60px]">
           
                <div className="text-black flex-col w-[672px] h-[411px] gap-[60px]">
                    <h1 className=" w-[672px] h-[174px] font-inter font-bold text-[#212529] text-[72px] leading-[87.14px] tracking-[-2%] my-16"> 
                    Project Management</h1>
                <p className=" text-[#212529] w-[672px] h-[90px] font-bold text-[18px] leading-[30px] tracking-[-2%]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                
                <button className="text-[#FFFFFF] bg-[#4F9CF9] w-[201px] h-[63px] font-medium leading-[23px] tracking-[-2%] my-20 rounded-md">Get Started &rarr;</button>
            </div>
            <div className="bg-[#C4DEFD] w-[748px] h-[547px] border-2 gap-[4px] m-8"></div>
       </div>
        {/* --------------------Circle section ---------------------------------*/}
       <div className="flex w-[1480px] h-[661px] mt-[100px] mb-[140px] mr-[220px] gap-[100px]">
           
                <div className="flex w-[710px] h-[661px] left-[35px]">
                    <div className="w-[661px] h-[661px] font-inter ml-[35px] relative rounded-full border-2 border-dashed border-[#A7CEFC]">
                    <div className="w-[387px] h-[387px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#A7CEFC]">
                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-[100px] h-[100px] bg-white border-2 border-[#A7CEFC] flex items-center justify-center">
                        <Image src={Logoicon} alt="Logoicon" className="w-[80%] h-[80%] object-contain"/>
                    </div>
                    </div>
                    <div className="flex -mx-[140px] -my-[140px]">
                    <div className="w-[70px] h-[70px] rounded-full mt-[102px] mb-[489px] ml-[297px] mr-[294px] borber-2 absolute bg-[#00ca75] "></div>
                    <div className="w-[70px] h-[70px] rounded-full mt-[401px] mb-[190px] ml-[605px] mr-[14px] borber-2 absolute bg-[#00ca75] "></div>
                    <div className="w-[70px] h-[70px] rounded-full mt-[296px] mb-[295px] ml-[105px] mr-[489px] borber-2 absolute bg-[#37A3FF] "></div>
                    <div className="w-[70px] h-[70px] rounded-full mt-[489px] mb-[102px] ml-[296px] mr-[295px] borber-2 absolute bg-[#FFBF60] "></div>
                    <div className="w-[70px] h-[70px] rounded-full mt-[296px] mb-[295px] ml-[489px] mr-[102px] borber-2 absolute bg-[#37a3ff] "></div>
                    <div className="w-[70px] h-[70px] rounded-full mt-[296px] mb-[295px] ml-[-35px] mr-[1410px] borber-2 absolute bg-[#FF5758] "></div>
                    <div className="w-[70px] h-[70px] rounded-full mt-[23px] mb-[560px] ml-[102px] mr-[489px] borber-2 absolute bg-[#FFDC4D] "></div>
                    <div className="w-[70px] h-[70px] rounded-full mt-[71px] mb-[520px] ml-[529px] mr-[62px] borber-2 absolute bg-[#37a3ff] "></div>
                    <div className="w-[70px] h-[70px] rounded-full mt-[415px] mb-[23px] ml-[105px] mr-[295px] top-[0px] borber-2 absolute bg-[#37a3ff] "></div>
                    </div>
                    </div>
                    
                </div>
                    
                    
            </div>
            <div className="w-[670px] h-[294px] gap-[60px]">
            <h1 className=" w-[670px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-2%] my-16"> 
                Work together</h1>
                <p className=" text-[#212529] w-[670px] h-[60px] font-bold text-[18px] leading-[30px] tracking-[-2%] -px-8">With whitepace, share your notes with your colleagues and collaborate on them.
                You can also publish a note to the internet and share the URL with others.
                </p>
                
                <button className="text-[#FFFFFF] bg-[#4F9CF9] w-[183px] h-[63px] font-bold leading-[23px] tracking-[-2%] my-20 rounded-md">Try it now &rarr;</button>
             </div>
            </div>
            {/* --------------------Use as Extension ---------------------------------*/}
            <div className="flex bg-[#043873] w-[1920px] h-[829px] -mx-60 py-[140px] px-[220px] top-[92px]">
            <div className="w-[697px] h-[294px] gap-[60px] py-20">
                <div className="text-white flex-col w-[697px] h-[171px] gap-[24px]">
                    <h2 className=" font-bold text-[64px] leading-[77.45px] tracking-[-2%] my-16"> 
                    Use as Extension</h2>
                <p className="font-normal text-lg leading-[30px] tracking-[0.02em]">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
            </p>
                
                </div>
                <button className="bg-[#4F9CF9] text-white w-[171px] h-[63px] my-20 gap-[10px] rounded-[6px]">Lets Go &rarr;</button>
            </div>
            <div className="bg-[#C4DEFD] w-[824px] h-[549px] border-2 gap-[4px] m-8">
           </div>
        </div>
            {/* --------------------Customise ---------------------------------*/}
            <div className="flex w-[1921px] h-[759px] top-[2509px] left-[1px] space-x-28">
            
            <div className="bg-[#C4DEFD] w-[714px] h-[523px] border-2 gap-[4px]"></div>
                <div className="text-black flex-col w-[697px] h-[294px] gap-[60px]">
                    <h2 className=" w-[672px] h-[174px] font-bold text-[72px] leading-[87.14px] tracking-[-2%] my-16">
                        Customise it to your needs </h2>
                <p className=" text-[#212529] w-[669px] h-[41px] gap-[60px] font-bold text-[18px] leading-[30px] tracking-[-2%]">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                
                <button className="text-[#FFFFFF] bg-[#4F9CF9] w-[97px] h-[23px] font-medium leading-[23px] tracking-[-2%] my-20 rounded-md">Lets Go &rarr;</button>
            </div>
           </div>
        {/* --------------------Your work ---------------------------------*/}
        <div className="flex flex-col justify-center items-center place-content-center bg-[#043873] w-[1921px] h-[574px] top-[4080px] left-[1px] -mx-60">
           
           <div className="text-white flex-col justify-center items-center place-content-center w-[1481px] h-[294px] gap-[60px] px-220 py-140">
               <h1 className="justify-center text-center font-bold text-[72px] leading-[87.14px] tracking-[-2%] my-16">
               Your work, everywhere you are </h1>
           <p className=" text-white text-center justify-center font-bold text-[18px] leading-[30px] tracking-[-2%]">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                     
       </div>
       <button className="text-[#FFFFFF] bg-[#4F9CF9] w-[195px] h-[63px] px-[40px] py-[20px] my-20 rounded-md">Lets Go &rarr;</button>
  </div>
       {/* --------------------Our sponsors ---------------------------------*/}
       <div className="flex flex-col justify-center items-center place-content-center w-[1922px] h-[538px] top-[4654px] px-[220px] py-[140px] -mx-60 gap-[100px]">
           
           <div className="text-black flex-col justify-center items-center place-content-center w-[1481px] h-[87px] gap-[60px] px-[220px] py-[140px]">
               <h1 className="text-8xl justify-center text-center font-bold text-[72px] leading-[87.14px] tracking-[-2%]">
               Our sponsors </h1>
           </div>
           <div className="flex justify-between w-[1482px] h-[71px] items-center py-2 -mx-40"> 
           <Image src={Apple} alt="Apple"/> 
           <Image src={Microsoft} alt="MS"/>
           <Image src={Slack_Technologies_Logo} alt="STL"/>
           <Image src={Group246} alt="Group246"/>
           </div>
       </div>
        {/* --------------------Footer ---------------------------------*/}
        
        <div className="bg-[#043873] text-white w-[1920px] h-[461px] top-[5159px] -mx-60 left-[1px] px-[220px] py-[140px]">
            <div className="bg-[#043873] flex w-[1480px] h-[289px] gap-[100px]">
                <div className="flex  w-[1480px] h-[169px] gap-[100px]">
                    <div className="w-[295px] h-[169px] space-y-6 gap-[15px]">
                    <Image src={Logo} alt="Logo" className="w-[191px] h-[34px]"/>
                    <p className="w-[240px] h-[120px] font-normal text-[18px] leading-[30px] tracking-[-2%] text-[#F7F7EE]">
                        whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                    </div>
                    <div className="w-[295px] h-[127px] gap-[15px]">
                        <ul>
                            <li>Product</li>
                            <li>Overview</li>
                            <li>Pricing</li>
                            <li>Customer stories</li>
                        </ul>
                    </div>
                    <div className="w-[295px] h-[130px] gap-[16px]">
                    <ul>
                            <li>Resources</li>
                            <li>Blog</li>
                            <li>Guides & Tutorials</li>
                            <li>Help center</li>
                        </ul>
                    </div>
                    <div className="w-[295px] h-[130px] gap-[16px]">
                    <ul>
                            <li>Company</li>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Media kit</li>
                        </ul>
                    </div>
                </div>
                                    
                </div>
                
                <div className="flex-col w-[1480px] h-[20px] justify-between -my-4">
                <p className=""><Image src={Btm} alt="Btm"/></p>
            </div>
        </div>

       </div>
    )
}