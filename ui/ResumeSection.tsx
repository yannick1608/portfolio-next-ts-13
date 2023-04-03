import { NextPage } from "next";
import ResumeCardComponent from "./ResumeCardComponent";

const ResumeSection : NextPage<any> = ({id}) =>{
   return(
      <section id={id} className="flex justify-center">
         <div className=" max-w-5xl mx-10 my-28 flex flex-col text-light">
            <h2 className=" md:text-5xl text-3xl font-mono font-black">Résumé</h2>
            <div className=" flex md:flex-row flex-col mt-7 gap-10 md:gap-5">
               <div className=" flex-1 flex flex-col gap-5 ">
                  <h3 className=" text-2xl font-bold">Professional Experience</h3>
                  <ResumeCardComponent heading="Dual Student"
                                       periodOfTime="2019 - 03/2023"
                                       location="b+m surface systems GmbH, Eiterfeld, Germany"
                                       websiteUrl="https://www.bm-systems.com/en/perfect-solutions-for-surface-finishing/"
                                       imgName="/BuM_Logo.png"
                                       listItems={["In the last months i was working as a Full Stack Developer",
                                                      "Over the three years I gained experience in web, desktop and app development"]}/>
                  <ResumeCardComponent heading="Software Engineer"
                                       periodOfTime="03/2023 - Present"
                                       location="QAware GmbH, Remote, Germany"
                                       websiteUrl="https://www.qaware.de/en/"
                                       imgName="/QAware_Logo.png"
                                       listItems={["I'm currently working on cloud-friendly microservices in the insurance sector"]}/>
               </div>
               <div className=" flex-1 flex flex-col gap-5">
                  <h3 className=" text-2xl font-bold">Education</h3>
                  <ResumeCardComponent heading="Electrical Engineering and Information Technology (B.Eng.)"
                                       periodOfTime="2019 - 01/2023"
                                       location="Univerity of Applied Sciences Fulda, Germany"
                                       websiteUrl="https://www.hs-fulda.de/en/home"
                                       imgName="/HsFulda_Logo.png"
                                       listItems={["Chosen major: Computer Engineering",
                                                      "Grade: 1,6",
                                                      "In my bachelor thesis I developed an Industry 4.0 datalogger with a three-layer system architecture"]}/>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ResumeSection;