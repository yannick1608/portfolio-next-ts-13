import { NextPage } from "next";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import PcNavbar from "./PcNavbar";

type NavbarProps ={
   activeSection? : string
}

const Navbar : NextPage<NavbarProps> = ({activeSection}) =>{
   const [mobileMenuUnfolded, setMobileMenuUnfolded] = useState<boolean>(false);
   useEffect(() => {
      mobileMenuUnfolded && (document.body.style.overflow = 'hidden');
      !mobileMenuUnfolded && (document.body.style.overflow = 'unset');
   }, [mobileMenuUnfolded ]);

   return(
   <>
      <PcNavbar activeSection={activeSection}/>
      <MobileMenu 
         mobileMenuUnfolded ={mobileMenuUnfolded}
         setMobileMenuUnfolded={setMobileMenuUnfolded}
         activeSection={activeSection}/>
      <MobileMenuButton 
         mobileMenuUnfolded={mobileMenuUnfolded} 
         setMobileMenuUnfolded={setMobileMenuUnfolded}/>
   </>
   )
}

export default Navbar;