import Link from "next/link";

export default function Hero() {
    return (
        <div className="flex bg-[#043873] w-[1920px] h-[829px] py-[140px] px-[220px] top-[92px]">
            <div className="w-[656px] h-[361px] gap-[60px]">
                <div className="text-[#FFFFFF] flex-col w-[656px] h-[238px] gap-[24px]">
                    <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-2%] my-16"> 
                    Get More Done with whitepace</h2>
                <p className="font-normal text-lg leading-[30px] tracking-[0.02em]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                
                </div>
                <button className="bg-[#4F9CF9] text-white w-[219px] h-[63px] my-20 gap-[10px] rounded-md">Try Whitepace free &rarr;</button>
            </div>
            <div className="bg-[#C4DEFD] w-[824px] h-[549px] border-2 gap-[4px] m-8">
           </div>
        </div>
          
    )
}