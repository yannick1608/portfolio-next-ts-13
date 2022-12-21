import { NextPage } from "next";
import Link from "next/link";
import cn from 'classnames';
import usePathWithHash from "../../hooks/usePathWithHash";

type MobileMenuItemProps = {
   href : string;
   text : string;
   SVG : React.ReactNode;
   closeMobileMenu() : void;
   activeSection? : string;
}

const MobileMenuItem : NextPage<MobileMenuItemProps> = ({href, text, SVG, closeMobileMenu, activeSection}) =>{
  const urlWithHash = usePathWithHash(""); 
  const isActive = activeSection == undefined 
                     ? (href === urlWithHash)
                     : (href === activeSection)

   return (
      <Link href={href} 
            scroll={false} 
            onClick={closeMobileMenu}
            aria-label={text + " link button"}
            className={cn(
               isActive
                  ? "bg-sweaterdarker/90 text-light fill-light"
                  : "bg-blackgreylighter/80 text-light fill-light", 
               " flex h-16 w-64 cursor-pointer items-center overflow-hidden rounded-xl")}>
         <div className="ml-3">
            {SVG}
         </div>
         <div className="ml-5 text-4xl group-hover:block">{text}</div>
      </Link>
   )
}

export default MobileMenuItem;
