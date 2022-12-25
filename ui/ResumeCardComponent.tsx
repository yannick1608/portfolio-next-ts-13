import { NextPage } from "next";
import Image from "next/image";
import UpperLeftArrowSvg from "../assets/UpperLeftArrowSvg";

type ResumeCardComponentProps ={
   heading : string,
   periodOfTime: string,
   listItems : string[],
   imgName : string,
   location : string,
   websiteUrl : string,
}
// "/BuM_Logo.png"
const ResumeCardComponent : NextPage<ResumeCardComponentProps> = ({heading, periodOfTime, listItems, imgName, location, websiteUrl}) =>{
   return(
         <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-light/5 rounded-xl hover:bg-light/10
          transition-all transform hover:scale-[1.01] duration-300 cursor-pointer">
            <div className=" relative w-full aspect-[8/2] bg-light rounded-t-lg">
               <Image src={imgName} 
                     alt="" 
                     className="object-contain " 
                     fill={true} 
                     sizes="(max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                              40vw"/>
            </div>
            <div className="flex flex-col justify-between p-4 text-light text-lg">
               <div className=" flex justify-between p-1">
                  <h4 className="text-2xl font-bold flex-1">{heading}</h4>
                  <UpperLeftArrowSvg className=" w-8 h-8 rotate-90 fill-light flex-initial"/>
               </div>
               <div className=" bg-sweater/30 px-2 py-1 rounded-lg my-1 self-start">
                  <p>{periodOfTime}</p>
               </div>
               <p className=" italic">{location}</p>
               <ul className="list-disc pl-5 mt-2">
                  {listItems.map(item =>(
                     <li key={item}>{item}</li>
                  ))}
               </ul>
            </div>
         </a>
   )
}

export default ResumeCardComponent