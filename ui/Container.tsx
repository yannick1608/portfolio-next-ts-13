import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

const Container : NextPage<any> = (props)=>{
   const { children, ...customMeta} = props;

   const router = useRouter();
   const meta = {
      title: "Yannick Pfaff - Developer",
      description: "Currently dual student working as a Full Stack Developer",
      type: "website"
      // image: "" TODO: add image path to public folder
   }

   return (
      <div className=" bg-blackgrey">
         <Head>
            <title>{meta.title}</title>
            <meta name="robots" content="follow, index" />
            <meta content={meta.description} name="description" />
            <meta property="og:url" content={`https://yannick.page${router.asPath}`} />
            <link rel="canonical" href={`https://yannick.page${router.asPath}`} />
            <meta property="og:type" content={meta.type} />
            <meta property="og:site_name" content="Yannick Pfaff" />
            <meta property="og:description" content={meta.description} />
            <meta property="og:title" content={meta.title} />
            {/* <meta property="og:image" content={meta.image} /> */}
         </Head>
         <main className='md:ml-24'>
            {children}
         </main>
         <Navbar/>
         <Footer/>
      </div>
   )
}

export default Container