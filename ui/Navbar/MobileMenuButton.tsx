import { NextPage } from "next";
import BurgerMenuSvg from "../../assets/BurgerMenuSvg";
import XSvg from "../../assets/XSvg";

type MobileMenuButtonProps = {
   setMobileMenuUnfolded(openMobileMenu: boolean): void;
   mobileMenuUnfolded : boolean;
}

const MobileMenuButton : NextPage<MobileMenuButtonProps> = ({setMobileMenuUnfolded, mobileMenuUnfolded}) =>{
   return(
      <button
         onClick={() => setMobileMenuUnfolded(!mobileMenuUnfolded)}
         className="bg-blackgreylighter/80 fill-light stroke-2 stroke-light group 
                     fixed right-3 top-3 cursor-pointer rounded-xl p-3 md:hidden">
            {mobileMenuUnfolded
            ?<XSvg height={50} width={50}/> 
            :<BurgerMenuSvg height={50} width={50}/>}
      </button>
   )
}

export default MobileMenuButton;