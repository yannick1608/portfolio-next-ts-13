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
      <>
      <svg //copied from delba.dev
        className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="pedroduarteisalegend">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#pedroduarteisalegend)"
        ></rect>
      </svg>
      <div className=" bg-[#131313]">
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
      </>
   )
}

export default Container