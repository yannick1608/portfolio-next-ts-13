import { NextPage } from "next";
import cn from 'classnames';
import { useEffect, useRef, useState } from "react";
import CollapseArrowSvg from "../assets/CollapseArrowSvg";

type CollapsibleProgressBarProps ={
   name: string,
   skillInPercentage: number,
   text: string,
   minWidthOfTextIfLarge: number
}

//example: https://medium.com/edonec/build-a-react-collapsible-component-from-scratch-using-react-hooks-typescript-73dfd02c9208
const CollapsibleProgressBar : NextPage<CollapsibleProgressBarProps> = ({name, skillInPercentage, text, minWidthOfTextIfLarge}) =>{
   const [isOpen, setIsOpen] = useState(false);
   const [height, setHeight] = useState<number | undefined>(0);
   const ref = useRef<HTMLDivElement>(null);

   const handleFilterOpening = () => {
      setIsOpen((prev) => !prev);
    };

    useEffect(() => {
      if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
      else setHeight(0);
    }, [isOpen]);

   return(
      <button onClick={handleFilterOpening} className=" p-5 transition overflow-hidden shadow-surface-elevation-low hover:shadow-surface-elevation-medium flex-none rounded-xl bg-white/5 duration-300 hover:bg-white/10">
         <div className="mb-1 flex justify-between lg:hidden">
            <span className="text-xl text-light">{name}</span>
            <CollapseArrowSvg width={25} height={25} className={cn(
               isOpen
               ? " rotate-180"
               : ""
               , "ml-5 fill-light transition-all duration-500"
            )} />
         </div>
         <div className="flex">
            <span className="mr-4 hidden font-mono font-extrabold text-xl text-light lg:block" style={{minWidth: minWidthOfTextIfLarge}}>{name}</span>
            <div className="h-6 w-full rounded-full bg-[#eeeeee]">
               <div className="h-6 rounded-full bg-[#436F7D]" style={{width: skillInPercentage+"%"}}></div>
            </div>
            <CollapseArrowSvg width={30} height={30} className={cn(
               isOpen
               ? " rotate-180"
               : ""
               , "ml-5 fill-light transition-all duration-500 hidden lg:block"
            )} />
         </div>
         <div style={{height}} className="transition-all duration-500" >
               <p ref={ref} className=" pt-5 text-light">{text}</p>
         </div>
      </button>
   )
}

export default CollapsibleProgressBar