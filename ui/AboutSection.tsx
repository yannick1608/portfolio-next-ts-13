import { NextPage } from "next";

const AboutSection : NextPage<any> = ({id}) =>{
   return(
      <section id={id} className=" flex justify-center">
         <div className=" max-w-5xl mx-10 my-28 flex flex-col text-light">
            <h2 className=" md:text-5xl text-3xl font-mono font-black">About me</h2>
            <p className=" text-xl mt-5">My name is Yannick Pfaff and I live in Hesse, Germany.</p>
            <p className=" text-xl mt-3">I am currently working as a full stack developer on an Android-based handheld control panel for painting robots.</p>
            <p className=" text-xl mt-3">I'm studying electrical engineering and information technology dual and will graduate in January 2023 in Computer 
               Engineering (B.Eng.).</p>
            <p className=" text-xl mt-3">During the dual studies, I was involved in small, agile teams on various projects and was able 
               to gain experience, especially in .Net web and desktop development, as well as relational database modeling.</p>
            <p className=" text-xl mt-3">Outside of my job, I spend time with friends, do sports or enjoy teaching myself new things. Most recently, I've dealt with modern web development 
               using Typescript and the Next.js framework.</p>
         </div>
      </section>
   )
}

export default AboutSection