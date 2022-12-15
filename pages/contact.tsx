import { NextPage } from "next"
import ConstructionSignSvg from "../assets/ConstructionSignSvg"
import Container from "../ui/Container"

const Contact: NextPage = () => {
   return (
    <Container>
      <div className="flex justify-center">
        <div className=" max-w-5xl  mx-5 md:mx-10 my-16 flex flex-col p-4 text-light">
            <h2 className=" md:text-5xl text-3xl font-mono font-black">Contact</h2>
            <p className=" text-xl mt-5">This page is under construction.</p>
            <p className=" text-xl mt-3">You can contact me at the following email: me@yannick.page</p>
            <ConstructionSignSvg classNames=" fill-light mt-10"/>
         </div>
      </div>
    </Container>
   )
 }
 
 export default Contact