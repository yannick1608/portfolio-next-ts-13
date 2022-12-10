"use client"

import { NextPage } from "next";
import { useEffect, useState } from "react";
import PcNavbar from "./PcNavbar";

const Navbar : NextPage = () =>{
   // const [mobileMenuUnfolded, setMobileMenuUnfolded] = useState<boolean>(false);
   // //use Effect for disabling the vertical scroller if the mobile menu gets activated
   // useEffect(() => {
   //   mobileMenuUnfolded && (document.body.style.overflow = 'hidden');
   //   !mobileMenuUnfolded && (document.body.style.overflow = 'unset');
   // }, [mobileMenuUnfolded])
   

   return(
   <>
      <PcNavbar/>
   </>
   )
}

export default Navbar;