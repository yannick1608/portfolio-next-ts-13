import { NextPage } from "next";
import AboutSvg from "../../assets/AboutSvg";
import ContactSvg from "../../assets/ContactSvg";
import ExperienceSvg from "../../assets/ExperienceSvg";
import HomeSvg from "../../assets/HomeSvg";
import SkillsSvg from "../../assets/SkillsSvg";
import PcNavItem from "./PcNavItem";

type PcNavbarProps = {
   activeSection? : string,
}

const PcNavbar : NextPage<PcNavbarProps> = ({activeSection}) =>{
   return(
      <>
         <header className="fixed top-0 bottom-0 left-0 hidden flex-col justify-center px-3 md:flex">
            <nav className="flex flex-col gap-1">
               <PcNavItem 
                  href="/#home"
                  text = "Home"
                  SVG={<HomeSvg width={40} height={40}/>}
                  activeSection = {activeSection}
               />
               <PcNavItem 
                  href="/#about"
                  text = "About"
                  SVG={<AboutSvg width={40} height={40}/>}
                  activeSection = {activeSection}
               />
               <PcNavItem 
                  href="/#resume"
                  text = "Résumé"
                  SVG={<ExperienceSvg width={40} height={40}/>}
                  activeSection = {activeSection}
               />
               <PcNavItem 
                  href="/#skills"
                  text = "Skills"
                  SVG={<SkillsSvg width={40} height={40}/>}
                  activeSection = {activeSection}
               />
               <PcNavItem 
                  href="/contact"
                  text = "Contact"
                  SVG={<ContactSvg width={40} height={40}/>}
                  activeSection = {activeSection}
               />
            </nav>
         </header>
      </>
   )
}

export default PcNavbar;