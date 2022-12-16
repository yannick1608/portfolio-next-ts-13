import { NextPage } from "next";
import Link from "next/link";

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
                     <Link key={linkItem.name} scroll={false} href={linkItem.href} className="cursor-pointer my-2 text-gray-400 hover:animate-pulse hover:text-light mx-10 font-mono transition-all duration-300">
                        {linkItem.name}
                     </Link>
                  ))
               }
            </div>
            {/* <div className=" mx-10 text-sweaterdarker/50">This website is an Open Source Project build with Next.js and Tailwindcss</div> */}
         </div>
      </footer> //TODO: add footer
   )
}

export default Footer;