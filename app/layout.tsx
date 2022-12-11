import '../styles/global.css';
import Navbar from '../ui/Navbar/Navbar';


 const RootLayout = ({ children }: { children: any }) =>{
   return (
     <html lang="en">
       <head>
         <title>Next.js</title>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       </head>
       <body>
          <Navbar/>
          <main className='md:ml-24'>{children}</main>
        </body>
     </html>
   );
 }

 export default RootLayout;