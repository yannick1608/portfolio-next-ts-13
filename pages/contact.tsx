import { NextPage } from "next"
import ConstructionSignSvg from "../assets/ConstructionSignSvg"
import Container from "../ui/Container"

const Contact: NextPage = () => {
   return (
    <Container title="Contact - Yannick Pfaff">
      <div className="flex justify-center">
        <div className=" max-w-5xl  mx-5 md:mx-10 my-16 flex flex-col p-4 text-light">
            <h2 className=" md:text-5xl text-3xl font-mono font-black">Contact</h2>
            <p className=" text-xl mt-5">This page is under construction.</p>
            <p className=" text-xl mt-3">You are welcome to contact me at the following email address: 
              <a href="mailto:contact@yannick.page" className="text-sweater rounded-xl hover:bg-light/5 px-2">
                 contact@yannick.page
              </a>
            </p>
            <ConstructionSignSvg className="fill-light mt-10 max-w-xl self-center"/>
         </div>
      </div>
    </Container>
   )
 }
 
 export default Contact