import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from 'classnames';

type MobileMenuItemProps = {
   href : string;
   text : string;
   SVG : React.ReactNode;
   closeMobileMenu() : void;
}

const MobileMenuItem : NextPage<MobileMenuItemProps> = ({href, text, SVG, closeMobileMenu}) =>{
  const router = useRouter();
  const isActive = router.asPath === href;

   return (
      <Link href={href} 
            scroll={false} 
            onClick={closeMobileMenu}
            className={cn(
               isActive
                  ? "bg-teal text-blackgrey fill-blackgrey"
                  : "bg-blackgreylighter text-light fill-light", 
               " flex h-14 w-64 cursor-pointer items-center overflow-hidden rounded-xl")}>
         <div className="ml-3">
            {SVG}
         </div>
         <div className="ml-5 text-3xl group-hover:block">{text}</div>
      </Link>
   )
}

export default MobileMenuItem;
