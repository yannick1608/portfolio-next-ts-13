import { NextPage } from "next";
import CollapsibleProgressBar from "./CollapsibleProgressBar";

const SkillsSection : NextPage<any> = ({id}) =>{
   return(
      <section id={id} className=" flex justify-center">
         <div className=" max-w-5xl mx-10 mt-28 mb-36 flex flex-col text-light">
            <h2 className=" md:text-5xl text-3xl font-mono font-black">Skills</h2>
            <p className=" text-xl mt-5">My interest in programming was mainly aroused by the computer 
            science exam course in high school.</p>
            <p className=" text-xl mt-3">During my studies, in addition to OOP, algorithms and data structures, I was able to 
            learn a basic understanding of software development through programming embedded systems.</p>
            <p className=" text-xl mt-3">At the same time, I was able to expand my skills in 
            dealing with Git and agile development methods, as well as developing in teams, in the dual practice company.</p>
            <div className=" flex md:flex-row flex-col gap-5 mt-5">
               <div className=" flex-1 flex flex-col gap-5">
                  <CollapsibleProgressBar name="C#" minWidthOfTextIfLarge={31} skillInPercentage={75} 
                  text="With C# I have been able to help develop various 
                  small to medium-sized projects in a company for over two years. So far I have mainly used the frameworks ASP.net and WPF."/>
                  <CollapsibleProgressBar name="Java" minWidthOfTextIfLarge={31} skillInPercentage={70} text="I learned the basics mainly in high school and university. 
                  In the company, I have significantly deepened my knowledge for several months and also gained experience in the development 
                  of multi-threaded applications."/>
                  <CollapsibleProgressBar name="SQL" minWidthOfTextIfLarge={31} skillInPercentage={80} text="I learned the database language in combination with relational 
                  databases, especially during my studies. In active development, I have mainly worked on databases with Microsoft SQL Server 
                  (T-SQL). In the future I hope to gain experience with other types of databases such as NoSQL."/>
                  <CollapsibleProgressBar name="PLC" minWidthOfTextIfLarge={31} skillInPercentage={30} text="In the past year, I was able to gain initial experience in 
                  programming programmable logic controllers, and I concentrated primarily on the basic understanding and processes in a PLC."/>
               </div>
               <div className=" flex-1 flex flex-col gap-5 justify-start">
                  <CollapsibleProgressBar name="HTML/CSS" minWidthOfTextIfLarge={91} skillInPercentage={60} text="Since they are essential in web development, the use of 
                  HTML and CSS has been part of everyday business for years. At the moment I mainly use Tailwindcss for designing because, 
                  despite the higher development speed, you have complete control over the components."/>
                  <CollapsibleProgressBar name="Javascript" minWidthOfTextIfLarge={91} skillInPercentage={70} text="I taught myself this programming language because 
                  of my great interest in web development. Since I generally prefer static programming languages because of the 
                  better structure, I also learned Typescript. I am currently using React or Next.js for web development (which is also 
                  used to build this page)."/>
                  <CollapsibleProgressBar name="C" minWidthOfTextIfLarge={91} skillInPercentage={55} text="I learned C during my studies to understand the general 
                  basics of programming. Later during my studies, it was mainly used when working on embedded systems."/>
                  <CollapsibleProgressBar name="Algorithms" minWidthOfTextIfLarge={91} skillInPercentage={75} text="Since I think that understanding algorithms and 
                  data structures forms the basis for clean and high-performance code, I completed a suitable additional module during my studies to deepen my knowledge."/>
               </div>
            </div>
         </div>
      </section>
   )
}

export default SkillsSection