import { NextPage } from "next";

const SkillsSection : NextPage<any> = ({id}) =>{
   return(
      <div id={id} className="min-h-screen flex justify-center">
         <div className=" max-w-5xl bg-slate-700 mx-10 my-36 flex flex-col text-light">
            <h2 className=" md:text-5xl text-3xl font-mono font-black">Skills</h2>
            <p className=" text-xl mt-5">My interest in programming was mainly aroused by the computer 
            science exam course in high school.</p>
            <p className=" text-xl mt-3">During my studies, in addition to OOP, algorithms and data structures, I was able to 
            learn a basic understanding of software development through programming embedded systems.</p>
            <p className=" text-xl mt-3">At the same time, I was able to expand my skills in 
            dealing with Git and agile development methods, as well as developing in teams, in the dual practice company.</p>
         </div>
      </div>
   )
}

export default SkillsSection