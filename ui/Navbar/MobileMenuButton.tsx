import { NextPage } from "next";
import { Sling as Hamburger } from "hamburger-react";

type MobileMenuButtonProps = {
   setMobileMenuUnfolded(openMobileMenu: boolean): void;
   mobileMenuUnfolded : boolean;
}

const MobileMenuButton : NextPage<MobileMenuButtonProps> = ({setMobileMenuUnfolded, mobileMenuUnfolded}) =>{
   return(
      <button
         onClick={() => setMobileMenuUnfolded(!mobileMenuUnfolded)}
         className="bg-blackgreylighter/80 fixed right-3 top-3 cursor-pointer rounded-xl p-3 md:hidden">
            <Hamburger toggled={mobileMenuUnfolded} toggle={setMobileMenuUnfolded} size={48} color="#EEEEEE"/>
      </button>
   )
}

export default MobileMenuButton;