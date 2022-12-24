import { NextPage } from "next";
import Link from "next/link";
import UpperLeftArrowSvg from "../assets/UpperLeftArrowSvg";

type LinkItem ={
   name : string,
   href : string
}

const Footer : NextPage = () => {
   const linkItems : LinkItem[] = [
                                    {name: "Home", href: "/#home"},
                                    {name: "About", href: "/#about"},
                                    {name: "Resume", href: "/#resume"},
                                    {name: "Skills", href: "/#skills"},
                                    {name: "Contact", href: "/contact"},
                                 ]

   return (
      <footer className="md:ml-24 shrink-0">
         <div className="mx-auto py-5 max-w-5xl bg-light/5 rounded-t-2xl flex flex-col">
            <div className="flex justify-around flex-wrap items-center">
               {
                  linkItems.map(linkItem =>(
                     <Link key={linkItem.name} scroll={false} href={linkItem.href} 
                           className="cursor-pointer my-2 text-gray-400 hover:animate-pulse hover:text-light 
                           mx-10 font-mono transition-all duration-300"
                           aria-label={linkItem.name + " link button"}>
                        {linkItem.name}
                     </Link>
                  ))
               }
            </div>
            <p className=" mx-10 text-sweaterdarker/50 self-center md:block hidden">
               This website is an 
               <a href="https://github.com/yannick1608/portfolio-next-ts-13"  target="_blank" rel="noopener noreferrer" 
                  className="hover:text-sweater mx-1 group">
                  open-source project
                 <UpperLeftArrowSvg className=" w-2 h-2 rotate-90 group-hover:fill-sweater fill-sweaterdarker/50 flex-initial inline mx-1 align-top mt-2"/>
               </a> 
               built with Typescript, Next.js and Tailwindcss
            </p>
         </div>
      </footer> //TODO: add footer
   )
}

export default Footer;