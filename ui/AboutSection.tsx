import { NextPage } from "next";
import UpperLeftArrowSvg from "../assets/UpperLeftArrowSvg";

const AboutSection : NextPage<any> = ({id}) =>{
   return(
      <section id={id} className=" flex justify-center">
         <div className=" max-w-5xl mx-10 my-28 flex flex-col text-light">
            <h2 className=" md:text-5xl text-3xl font-mono font-black">About me</h2>
            <p className=" text-xl mt-5">My name is Yannick Pfaff and I live in Hesse, Germany.</p>
            <p className=" text-xl mt-3">I've studied electrical engineering and information technology on a dual basis.
            I graduated in computer engineering in January 2023 (B.Eng.).</p>
            <p className=" text-xl mt-3">I am currently working as a software engineer with a great team 
            using state-of-the-art technologies to migrate existing systems to the cloud.</p>
            <p className=" text-xl mt-3">In doing so, I am learning a lot about the architecture of distributed systems, 
            so that the highest possible resilience, evolvability and scalability is ensured.</p>
            <p className=" text-xl mt-3">Outside of my job, I spend time with friends, do sports or enjoy teaching myself new things. 
            One example for this was the understanding of modern web development. To apply the learned knowledge, I built this website using 
            Typescript, Next.js and Tailwindcss as an 
               <a href="https://github.com/yannick1608/portfolio-next-ts-13"  target="_blank" rel="noopener noreferrer" 
                  className="text-sweater rounded-xl hover:bg-light/5 ml-2">
                 open-source project
                 <UpperLeftArrowSvg className=" w-3 h-3 rotate-90 fill-sweater flex-initial inline mx-1 align-top mt-2"/>
              </a>
            .
            </p>
            <p className=" text-xl mt-3">My future goal is to gain more experience in the design 
            and development process of long-lasting software architecture in a professional environment.</p>
         </div>
      </section>
   )
}

export default AboutSection