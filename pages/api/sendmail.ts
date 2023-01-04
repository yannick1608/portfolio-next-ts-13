import sendgrid from "@sendgrid/mail"
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
   const text = getEmailText(req.body);
   try{
      await sendgrid.send({
         to : "contact@yannick.page",
         from : "contact@yannick.page",
         subject: "Contact Form Message",
         text : text,
      });
   }catch(error){
      return res.status(error.statusCode || 500).json({error : error.message})
   }
   
   return res.status(200).json({error: ""});
}

const getEmailText = ({email, fullname, message}) => {
   return `You've received an e-mail!\n
            Name: ${fullname}
            Email: ${email}
            Message: ${message}`
}

export default handler;
