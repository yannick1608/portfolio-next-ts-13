import '../styles/global.css';

 const RootLayout = ({ children }: { children: any }) =>{
   return (
     <html lang="en">
       <head>
         <title>Next.js</title>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       </head>
       <body>{children}</body>
     </html>
   );
 }

 export default RootLayout;