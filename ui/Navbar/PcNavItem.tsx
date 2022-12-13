import { NextPage } from "next";
import Link from "next/link";
import cn from 'classnames';
import { useRouter } from "next/router";

type PcNavItemProps = {
   href : string;
   text : string;
   SVG : React.ReactNode;
}

const PcNavItem : NextPage<PcNavItemProps> = ({href, text, SVG}) =>{
  const router = useRouter();
  const isActive = router.asPath === href;

   return (
      <Link href={href} 
            scroll={false} 
            className={cn(
               isActive
                  ? "bg-teal/90 text-blackgrey fill-blackgrey"
                  : "bg-blackgreylighter/80 text-light fill-light", 
               "hover:bg-teal hover:text-blackgrey hover:fill-blackgrey hover:w-48 "
               + "group flex h-14 w-14 cursor-pointer items-center overflow-hidden rounded-xl "
               + "transition-all duration-500 backdrop-blur backdrop-filter")}>
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