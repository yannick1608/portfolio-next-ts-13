import { NextPage } from "next";
import { useEffect, useState } from "react";
import useUrlHash from "../../hooks/useUrlHash";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import PcNavbar from "./PcNavbar";

const Navbar : NextPage = () =>{
   const hash = useUrlHash("");
   const [mobileMenuUnfolded, setMobileMenuUnfolded] = useState<boolean>(false);
   useEffect(() => {
      mobileMenuUnfolded && (document.body.style.overflow = 'hidden');
      !mobileMenuUnfolded && (document.body.style.overflow = 'unset');
   }, [mobileMenuUnfolded ]);

   return(
   <>
      <PcNavbar/>
      <MobileMenuButton 
         mobileMenuUnfolded={mobileMenuUnfolded} 
         setMobileMenuUnfolded={setMobileMenuUnfolded}/>
      <MobileMenu 
         mobileMenuUnfolded ={mobileMenuUnfolded}
         setMobileMenuUnfolded={setMobileMenuUnfolded} />
   </>
   )
}

export default Navbar;