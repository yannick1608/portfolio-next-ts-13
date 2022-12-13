import { NextPage } from "next";
import AboutSvg from "../../assets/AboutSvg";
import ContactSvg from "../../assets/ContactSvg";
import ExperienceSvg from "../../assets/ExperienceSvg";
import HomeSvg from "../../assets/HomeSvg";
import SkillsSvg from "../../assets/SkillsSvg";
import MobileMenuItem from "./MobileMenuItem";
import cn from 'classnames';

type MobileMenuProps = {
   setMobileMenuUnfolded(openMobileMenu: boolean): void;
   mobileMenuUnfolded : boolean;
}

const MobileMenu : NextPage<MobileMenuProps> = ({setMobileMenuUnfolded, mobileMenuUnfolded}) =>{
   const closeMobileMenu = () =>{
      setMobileMenuUnfolded(false);
   }

   return(
      <header className={cn(
                  mobileMenuUnfolded
                  ? "left-0"
                  : "-left-full",
                  "bg-blackgrey border-light fixed top-0 bottom-0 flex flex-col " +
                  "justify-center border-r-2 px-4 transition-all duration-300 " +
                  "ease-in-out md:hidden")}>
         <nav className="flex flex-col gap-1">
            <MobileMenuItem 
                  href="/#home"
                  text = "Home"
                  SVG={<HomeSvg width={40} height={40}/>}
                  closeMobileMenu={closeMobileMenu}/>
            <MobileMenuItem 
                  href="/#about"
                  text = "About"
                  SVG={<AboutSvg width={40} height={40}/>}
                  closeMobileMenu={closeMobileMenu}/>
            <MobileMenuItem 
                  href="/#resume"
                  text = "Resume"
                  SVG={<ExperienceSvg width={40} height={40}/>}
                  closeMobileMenu={closeMobileMenu}/>
            <MobileMenuItem 
                  href="/#skills"
                  text = "Skills"
                  SVG={<SkillsSvg width={40} height={40}/>}
                  closeMobileMenu={closeMobileMenu}/>
            <MobileMenuItem 
                  href="/contact"
                  text = "Contact"
                  SVG={<ContactSvg width={40} height={40}/>}
                  closeMobileMenu={closeMobileMenu}/>
         </nav>
      </header>
   )
}

export default MobileMenu;