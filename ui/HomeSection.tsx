import { NextPage } from "next";
import Image from "next/image";
import HomeImg from "../public/quad_WasserkuppeFrontal_mediumKorrekt.jpg"
import FreeSquareImg from "../public/freeSquare.jpg"


const HomeSection : NextPage<any> = ({id}) =>{
   return (
      <div id={id} 
            className=" bg-slate-500 h-screen flex p-4 md:flex-row flex-col">
               <div className="bg-orange-400 flex-1 flex flex-col justify-center content-center flex-wrap text-4xl">
                  <h2 className="">
                     Hey, I'm
                  </h2>
                  <h1 className=" font-marker">
                     Yannick
                  </h1>
                  <h2 className="">
                     Software Developer
                  </h2>
                  <div>
                     {/* Links to LinkedIn and GitHub*/}
                  </div>
               </div>
               <div className="bg-lime-500 flex-1 flex md:flex-col justify-center">
                  <Image
                     src={HomeImg}
                     alt="Starter Picture"
                     className=" rounded-3xl object-cover"/>
               </div>
      </div>
   )
}

export default HomeSection