import { NextPage } from "next";
import React, { useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import { ContactFormStates, ContactFormState, ContactBody } from "../lib/types";

const ContactForm : NextPage = () =>{
   const [fullname, setFullname] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [formState, setFormState] = useState<ContactFormState>({state: ContactFormStates.Initial})

   const [errors, setErrors] = useState<ContactBody>({});

   const checkFormValidation = () : boolean =>{
      let tempErrors = {};
      let isValid = true;

      if (fullname.length <= 0) {
         tempErrors["fullname"] = "Please enter your name. This field cannot be submitted empty.";
         isValid = false;
       }
       if (email.length <= 0) { //insertEmail check here
         tempErrors["email"] = "Please enter your email address. This field cannot be submitted empty.";
         isValid = false;
       }else if(!validateEmail(email)){
         tempErrors["email"] = "The input hasn't a valid email format.";
         isValid = false;
       }

       if (message.length <= 0) {
         tempErrors["message"] = "Please enter your message. This field cannot be submitted empty.";
         isValid = false;
       }

       setErrors({...tempErrors});
       return isValid;
   }

   const validateEmail = (email : String) : boolean => {
      const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      return regex.test(email.toLowerCase());
    };

   const handleSubmit =async (e : React.FormEvent) => {
      e.preventDefault();
      setFormState({state: ContactFormStates.Loading})

      let isContactValid = checkFormValidation();

      if (isContactValid) {
         const response : Response = await fetch("/api/sendmail", {
            body: JSON.stringify({
               email: email,
               fullname: fullname,
               message: message,
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });

         if (response.status == 200) {
            setFormState({state: ContactFormStates.Success})
            setFullname("");
            setEmail("");
            setMessage("");
         }else{
            setFormState({state: ContactFormStates.Error})
            const { error } : { error : string }= await response.json();

            console.log(error);
         }
      }else{
         setFormState({state: ContactFormStates.Initial})
      }
   }

   return(
      <form 
         onSubmit={handleSubmit}
         className="bg-light/5 rounded-2xl p-5 my-5 flex flex-col gap-1"
         noValidate>
            <label
               htmlFor="fullname"
               className="text-xl text-light font-mono">
               Name:
            </label>
            <input 
               name="fullname"
               type="text"
               className=" rounded-lg bg-light py-1 px-4 text-pagebackground placeholder-gray-500 
                  ring-sweater text-lg outline-sweater focus:ring-2 focus:outline-0 disabled:bg-light/10 border-b-0"
               placeholder="Enter your name"
               value={fullname}
               onChange={(event)=>{
                  setFullname(event.target.value);
               }}
               disabled={formState.state === ContactFormStates.Loading || 
                  formState.state === ContactFormStates.Success}/>
            {errors?.fullname && (
               <p 
               className=" text-red-400">
                  {errors?.fullname}
               </p>
            )}
            
            <label
               htmlFor="email"
               className="text-xl text-light font-mono mt-2">
               Email address:
            </label>
            <input 
               name="email"
               type="email"
               className=" rounded-lg bg-light py-1 px-4 text-pagebackground placeholder-gray-500 
                  ring-sweater text-lg outline-sweater focus:ring-2 focus:outline-0 disabled:bg-light/10 border-b-0"
               placeholder="Enter your email"
               value={email}
               onChange={(event)=>{
                  setEmail(event.target.value);
               }} 
               disabled={formState.state === ContactFormStates.Loading || 
                  formState.state === ContactFormStates.Success}/>
            {errors?.email && (
               <p 
               className=" text-red-400">
                  {errors?.email}
               </p>
            )}
            
            <label
               htmlFor="message"
               className="text-xl text-light font-mono mt-2">
               Message:
            </label>
            <textarea 
               name="message"
               maxLength={400}
               className=" rounded-lg bg-light py-1 px-4 text-pagebackground placeholder-gray-500 
                  ring-sweater text-lg outline-sweater focus:ring-2 focus:outline-0 disabled:bg-light/10 
                  border-b-0 max-h-44 h-32"
               placeholder="Enter your message"
               value={message}
               onChange={(event)=>{
                  setMessage(event.target.value);
               }} 
               disabled={formState.state === ContactFormStates.Loading || 
                  formState.state === ContactFormStates.Success}/>
            {errors?.message && (
               <p 
               className=" text-red-400">
                  {errors?.message}
               </p>
            )}
            <div className="flex items-center mt-2 gap-5">
               <button
                  type="submit"
                  className="bg-gradient-to-br from-sweater/80 to-sweaterdarker/80 p-3 rounded-2xl enabled:cursor-pointer 
                  transition-all duration-300 shadow-lg enabled:hover:scale-110 enabled:hover:rounded-3xl enabled:hover:shadow-sweaterdarker ease-out 
                  flex justify-center text-xl font-mono font-bold text-pagebackground
                  disabled:from-light/10 disabled:to-light/10 disabled:text-gray-500"
                  disabled={formState.state === ContactFormStates.Loading || 
                     formState.state === ContactFormStates.Success}
                  >
                  Send
               </button>
               
               {formState.state === ContactFormStates.Loading && (
                  <RingLoader 
                     color="#EEEEEE"
                     size={45}
                     />
               )}
            </div>

            {formState.state === ContactFormStates.Success && (
               <p className=" text-sweater">
                  The message was sent succesfull! Thank you! I'll answer you as soon as possible.
               </p>
            )}
            {formState.state === ContactFormStates.Error && (
               <p className=" text-red-400">There was an error, while sending. So please send me an email to
                  <a href="mailto:contact@yannick.page" className=" rounded-xl hover:bg-light/5 px-1">
                     contact@yannick.page
                  </a>
               </p>
            )}
      </form>
   )
}


export default ContactForm;