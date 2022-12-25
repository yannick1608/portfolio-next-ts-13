import { NextPage } from "next";
import Image from "next/image";
import HomeImg from "../public/HomeQuad_01_1200px.jpg"
import LinkedInSvg from "../assets/LinkedInSvg";
import GithubSvg from "../assets/GithubSvg";
import { useElementSize } from "usehooks-ts";
import cn from 'classnames';


const HomeSection : NextPage<any> = ({id}) =>{
   
   return (
      <section id={id} 
            className=" h-screen flex p-4 xl:p-14 lg:flex-row flex-col max-w-[1900px]">
               <div className=" flex-1 h-1/2 lg:h-full flex flex-col justify-center items-start flex-wrap text-light">
                  <div className="flex flex-col items-start flex-wrap gap-2 md:gap-4 self-center sm:mr-16">
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
               <div className=" h-1/2 w-full lg:h-full lg:w-1/2">
                  <div className="duration-500 transition-all transform md:hover:scale-[1.01] shadow-lg md:hover:shadow-sweaterdarker 
                                    bg-gradient-to-r from-sweater via-[#A9C1C9] to-sweaterdarker rounded-3xl p-2 lg:p-4 
                                    object-contain max-w-full max-h-full aspect-square mx-auto lg:my-[40%] xl:my-[20%] 2xl:my-0">
                     <div className="h-full w-full relative">
                        <Image
                           src={HomeImg}
                           alt="Home Image"
                           className="rounded-3xl object-contain brightness-95"
                           fill = {true}
                           priority = {true}
                           sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw
                                    50vw"
                           placeholder="blur"
                           quality={100}
                        />
                     </div>
                  </div>
               </div>
      </section>
   )
}

export default HomeSection