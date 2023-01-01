import { NextPage } from "next";
import React from "react";

const ContactForm : NextPage = () =>{
   


   const handleSubmit =async (e : React.FormEvent) => {
      e.preventDefault();

      //implement everything for submitting forms
   }

   return(
      <form 
         onSubmit={handleSubmit}
         className="bg-light/5 rounded-2xl p-5 my-5 flex flex-col gap-1">
            <label
               htmlFor="fullname"
               className="text-xl text-light font-mono">
               Name:
            </label>
            <input 
               name="fullname"
               type="text"
               className=" rounded-lg bg-light py-1 px-4 text-pagebackground placeholder-gray-500 
                  border-b ring-sweater text-lg outline-sweater focus:ring-2 focus:outline-0"
               placeholder="Enter your name">
            </input>
            <p 
               className=" text-red-400">
               Please enter your name. This field cannot be submitted empty.
            </p>
            
            <label
               htmlFor="email"
               className="text-xl text-light font-mono mt-2">
               Email address:
            </label>
            <input 
               name="email"
               type="email"
               className=" rounded-lg bg-light py-1 px-4 text-pagebackground placeholder-gray-500 
                  border-b ring-sweater text-lg outline-sweater focus:ring-2 focus:outline-0"
               placeholder="Enter your email">
            </input>
            <p 
               className=" text-red-400">
               Please enter your email address. This field cannot be submitted empty.
            </p>
            
            <label
               htmlFor="message"
               className="text-xl text-light font-mono mt-2">
               Message:
            </label>
            <textarea 
               name="message"
               className=" rounded-lg bg-light py-1 px-4 text-pagebackground placeholder-gray-500 
                  border-b ring-sweater text-lg outline-sweater focus:ring-2 focus:outline-0 max-h-44"
               placeholder="Enter your message">
            </textarea>
            <p 
               className=" text-red-400">
               Please enter your message. This field cannot be submitted empty.
            </p>

            <button
               type="submit"
               className="bg-gradient-to-br from-sweater/80 to-sweaterdarker/80 p-3 rounded-2xl cursor-pointer 
               transition-all duration-300 shadow-lg hover:scale-110 hover:rounded-3xl hover:shadow-sweaterdarker ease-out 
               flex justify-center text-xl font-mono self-start mt-2 font-bold text-pagebackground">
               Send
            </button>

            <p className=" text-sweater">The message was sent succesfull! Thank you! I'll answer you as soon as possible.</p>
            <p className=" text-red-400">There was an error, while sending. So please send me an email to
               <a href="mailto:contact@yannick.page" className=" rounded-xl hover:bg-light/5 px-1">
                 contact@yannick.page
              </a>
            </p>


      </form>
   )
}


export default ContactForm;