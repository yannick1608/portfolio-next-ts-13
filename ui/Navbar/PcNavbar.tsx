import { NextPage } from "next";
import Link from "next/link";

const PcNavbar : NextPage = () =>{
   return(
      <>
         <header className="fixed top-0 bottom-0 left-0 hidden flex-col justify-center px-3 md:flex">
            <nav className="flex flex-col gap-1">
               <Link href="/#home" scroll={false} className="bg-teal text-blackgrey hover:bg-teal hover:text-blackgrey group flex h-14 w-14 cursor-pointer items-center overflow-hidden rounded-full transition-all duration-500 hover:w-40">
                  <div className="ml-3 text-5xl">H</div>
                  <div className="ml-2 hidden text-3xl group-hover:block">Home</div>
               </Link>
               <Link href="/#about" scroll={false} className="bg-blackgreylighter hover:bg-teal hover:text-blackgrey text-light group flex h-14 w-14 cursor-pointer items-center overflow-hidden rounded-full transition-all duration-500 hover:w-40">
                  <div className="ml-3 text-5xl">A</div>
                  <div className="ml-2 hidden text-3xl group-hover:block">About</div>
               </Link>
               <Link href="/#experience" scroll={false} className="bg-blackgreylighter hover:bg-teal hover:text-blackgrey text-light group flex h-14 w-14 cursor-pointer items-center overflow-hidden rounded-full transition-all duration-500 hover:w-48">
                  <div className="ml-3 text-5xl">E</div>
                  <div className="ml-2 hidden text-3xl group-hover:block">Experience</div>
               </Link>
               <Link href="/#skills" scroll={false} className="bg-blackgreylighter hover:bg-teal hover:text-blackgrey text-light group flex h-14 w-14 cursor-pointer items-center overflow-hidden rounded-full transition-all duration-500 hover:w-40">
                  <div className="ml-3 text-5xl">S</div>
                  <div className="ml-2 hidden text-3xl group-hover:block">Skills</div>
               </Link>
               <Link href="/contact" className="bg-blackgreylighter hover:bg-teal hover:text-blackgrey text-light group flex h-14 w-14 cursor-pointer items-center overflow-hidden rounded-full transition-all duration-500 hover:w-40">
                  <div className="ml-3 text-5xl">C</div>
                  <div className="ml-2 hidden text-3xl group-hover:block">Contact</div>
               </Link>
               {/* <Link className="bg-blackgreylighter hover:bg-teal hover:text-blackgrey text-light group mt-10 flex h-14 w-14 cursor-pointer items-center overflow-hidden rounded-full transition-all duration-500 hover:w-40">
                  <div className="ml-3 text-5xl">D</div>
                  <div className="ml-2 hidden text-3xl group-hover:block">Dark</div>
               </Link>
               <Link className="bg-blackgreylighter hover:bg-teal hover:text-blackgrey text-light group flex h-14 w-14 cursor-pointer items-center overflow-hidden rounded-full transition-all duration-500 hover:w-48">
                  <div className="ml-3 text-5xl">L</div>
                  <div className="ml-2 hidden text-3xl group-hover:block">Language</div>
               </Link> */}
            </nav>
         </header>
      </>
   )
}

export default PcNavbar;