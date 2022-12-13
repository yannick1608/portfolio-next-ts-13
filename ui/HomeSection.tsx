import { NextPage } from "next";
import Image from "next/image";
import HomeImg from "../public/quad_WasserkuppeFrontal_mediumKorrekt.jpg"
import FreeSquareImg from "../public/freeSquare.jpg"


const HomeSection : NextPage<any> = ({id}) =>{
   return (
      <div id={id} 
            className=" h-screen flex p-4 xl:p-14 lg:flex-row flex-col">
               <div className=" flex-1 h-1/2 lg:h-full flex flex-col justify-center items-center flex-wrap text-4xl text-light">
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
               <div className=" flex-1 h-1/2 lg:h-full flex lg:flex-col justify-center items-center">
                  <div className="max-w-full duration-500 transition-all transform hover:scale-[1.01] max-h-full flex justify-center p-3 bg-gradient-to-r from-[#a1b6c1] via-[#8BC9D2] to-teal aspect-square rounded-3xl">
                  <Image
                     src={HomeImg}
                     alt="Starter Picture"
                     className="rounded-3xl max-w-full max-h-full object-contain h-auto w-auto"/>

                  </div>
               </div>
      </div>
   )
}

export default HomeSection