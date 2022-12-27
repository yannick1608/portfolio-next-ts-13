import { NextPage } from "next";

const ShootingStars : NextPage = () =>{

   return(
   <>
      <span className=" fixed -mt-5 top-0 left-full w-1 h-1 bg-light/70 rounded-full shadow-shooting-star 
       animate-shooting-stars-tr before:fixed before:w-72 before:h-[0.5px] before:bg-gradient-to-r before:from-light/60 to-transparent"/>

       {/* <span className=" fixed -mt-5 top-0 right-full w-1 h-1 bg-light/70 rounded-full shadow-shooting-star 
       animate-shooting-stars-tl before:fixed before:w-72 before:h-[0.5px] before:bg-gradient-to-r before:from-light/60 to-transparent"/> */}
   </>
   )
}

export default ShootingStars;

