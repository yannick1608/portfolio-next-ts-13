import { NextPage } from "next"
import Link from "next/link"
import Container from "../ui/Container"

const NotFound: NextPage = () => {
   return (
    <Container title="Page not found">
      <div className="flex justify-center">
        <div className=" max-w-5xl  mx-5 md:mx-10 my-16 flex flex-col p-4 text-light">
            <h2 className=" md:text-5xl text-3xl font-mono font-black">Error 404</h2>
            <p className=" text-xl mt-5">You tried to access a page doesn't currently exist.</p>
            <Link href="/#home" 
                  className=" bg-gradient-to-br from-sweater/80 to-sweaterdarker/80 p-3 rounded-2xl cursor-pointer 
                         transition-all duration-300 shadow-lg hover:scale-110 hover:rounded-3xl hover:shadow-sweaterdarker ease-out 
                         flex justify-center text-4xl font-mono self-center mt-6 font-bold text-pagebackground"
                  aria-label="Back to home button">
               Return Home
            </Link>
         </div>
      </div>
    </Container>
   )
 }
 
 export default NotFound