import { NextPage } from "next"
import Image from "next/image";
import ConstructionSignSvg from "../assets/ConstructionSignSvg"
import Container from "../ui/Container"
import Gh from "../public/HomeQuad_01.jpg"

const Home: NextPage = () => {
   return (
    <Container>
      <div className="h-screen flex justify-center">
        <div className=" max-w-5xl  mx-10 my-36 flex flex-col p-4 text-light">
            <h2 className=" md:text-5xl text-3xl font-mono font-black">Contact</h2>
            <p className=" text-xl mt-5">This page is under construction.</p>
            <p className=" text-xl mt-3">You can contact me at the following email: me@yannick.page</p>
            <ConstructionSignSvg classNames=" fill-light" width={500} height={500}/>
         </div>
      </div>
    </Container>
   )
 }
 
 export default Home