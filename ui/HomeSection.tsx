import { NextPage } from "next";
import Image from "next/image";
import HomeImg from "../public/HomeQuad_01_1200px.jpg"
import LinkedInSvg from "../assets/LinkedInSvg";
import GithubSvg from "../assets/GithubSvg";


const HomeSection : NextPage<any> = ({id}) =>{
   return (
      <section id={id} 
            className=" h-screen flex p-4 xl:p-14 lg:flex-row flex-col">
               <div className=" flex-1 h-1/2 lg:h-full flex flex-col justify-center items-start flex-wrap text-light">
                  <div className="flex flex-col items-start flex-wrap gap-2 md:gap-4 ml-10 sm:ml-24 lg:ml-14 xl:ml-24 2xl:ml-32">
                     <div className=" flex gap-3 md:gap-5 font-mono">
                        <h2 className="text-4xl sm:text-5xl xl:text-6xl">
                           Hey,
                        </h2>
                        <div className=" animate-wave origin-[70%_70%] text-3xl sm:text-4xl xl:text-5xl">
                           👋🏼
                        </div>
                     </div>
                     <div className="flex items-end gap-2 sm:gap-3 xl:gap-5">
                        <h2 className="text-4xl sm:text-5xl xl:text-6xl font-mono">
                           I'm
                        </h2>
                        <h1 className="font-mono font-bold text-6xl sm:text-7xl xl:text-8xl text-sweater">
                           Yannick
                        </h1>
                     </div>
                     <h2 className=" text-2xl sm:text-3xl xl:text-3xl">
                        Software Developer
                     </h2>
                     <div className="flex mt-5 gap-5">
                        <a href="https://www.linkedin.com/in/yannick-pfaff-32903225b/" target="_blank" rel="noopener noreferrer" 
                        className=" group bg-gradient-to-br from-sweater/80 to-sweaterdarker/80 p-3 rounded-2xl cursor-pointer 
                         transition-all duration-300 shadow-lg hover:scale-110 hover:rounded-3xl hover:shadow-sweaterdarker ease-out"
                         aria-label="LinkedIn Link">
                           <LinkedInSvg className="h-8 md:h-10 fill-[#131313] transition delay-100 duration-500 group-hover:scale-105 ease-out"/>
                        </a>
                        <a href="https://github.com/yannick1608" target="_blank" rel="noopener noreferrer" 
                        className=" group bg-gradient-to-br from-sweater/80 to-sweaterdarker/80 p-3 rounded-2xl cursor-pointer 
                         transition-all duration-300 shadow-lg hover:scale-110 hover:rounded-3xl hover:shadow-sweaterdarker ease-out"
                         aria-label="Github Link">
                           <GithubSvg className="h-8 md:h-10 fill-[#131313] transition delay-100 duration-500 group-hover:scale-105 ease-out"/>
                        </a>
                     </div>
                  </div>
               </div>
               <div className=" flex-1 h-1/2 lg:h-full flex lg:flex-col justify-center items-center">
                  <div className="max-w-full duration-500 transition-all transform hover:scale-[1.01] shadow-lg hover:shadow-sweaterdarker
                  max-h-full flex justify-center p-3 bg-gradient-to-r from-sweater via-[#A9C1C9] to-sweaterdarker 
                  aspect-square rounded-3xl">
                  <Image
                     src={HomeImg}
                     alt=""
                     className="rounded-3xl max-w-full max-h-full object-contain h-auto w-auto z-50 brightness-95"
                     unoptimized={true}
                     priority={true}
                     />
                  </div>
               </div>
      </section>
   )
}

export default HomeSection