import { NextPage } from "next"
import ConstructionSignSvg from "../assets/ConstructionSignSvg"
import ContactForm from "../ui/ContactForm"
import Container from "../ui/Container"

const Contact: NextPage = () => {
   return (
    <Container title="Contact - Yannick Pfaff">
      <div className="flex justify-center">
        <div className=" max-w-5xl  mx-5 md:mx-10 my-16 flex flex-col p-4 text-light">
            <h2 className=" md:text-5xl text-3xl font-mono font-black">Contact</h2>
            <p className=" text-xl mt-5">Feel free to contact me using the form below or the following email:
              <a href="mailto:contact@yannick.page" className="text-sweater rounded-xl hover:bg-light/5 px-2">
                 contact@yannick.page
              </a>
            </p>
            <ContactForm/>
         </div>
      </div>
    </Container>
   )
 }
 
 export default Contact