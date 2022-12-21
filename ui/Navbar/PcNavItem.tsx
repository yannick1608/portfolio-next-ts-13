import { NextPage } from "next";
import Link from "next/link";
import cn from 'classnames';
import usePathWithHash from "../../hooks/usePathWithHash";

type PcNavItemProps = {
   href : string;
   text : string;
   SVG : React.ReactNode;
   activeSection? : string;
}

const PcNavItem : NextPage<PcNavItemProps> = ({href, text, SVG, activeSection}) =>{
  const urlWithHash = usePathWithHash(""); 
  const isActive = activeSection == undefined 
                     ? (href === urlWithHash)
                     : (href === activeSection)

   return (
      <Link href={href} 
            scroll={false} 
            aria-label={text + " link button"}
            className={cn(
               isActive
                  ? " bg-sweaterdarker/90 text-light fill-light"
                  : "bg-blackgreylighter/80 text-light fill-light", 
               "hover:bg-sweaterdarker hover:text-light hover:fill-light hover:w-48 "
               + "group flex h-14 w-14 cursor-pointer items-center overflow-hidden rounded-xl "
               + "transition-all duration-500 backdrop-blur backdrop-filter cursor-pointer")}>
         <div className="ml-2">
            {SVG}
         </div>
         <div className="ml-2 hidden text-3xl font-mono group-hover:block">
               {text}
         </div>
      </Link>
   )
}

export default PcNavItem;