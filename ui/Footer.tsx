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
         <div className="mx-auto py-5 max-w-5xl bg-light/5 rounded-t-2xl">
            <div className="flex justify-around ">
               {
                  linkItems.map(linkItem =>(
                     <Link scroll={false} href={linkItem.href} className="cursor-pointer text-gray-600 font-mono">{linkItem.name}</Link>
                  ))
               }
            </div>
         </div>
      </footer> //TODO: add footer
   )
}

export default Footer;