import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

const Container : NextPage<any> = (props)=>{
   const { children, activeSection, ...customMeta} = props;

   const router = useRouter();
   const meta = {
      title: "Yannick Pfaff - Developer",
      description: "Currently dual student working as a Full Stack Developer",
      type: "website",
      ...customMeta
      // image: "" TODO: add image path to public folder
   }

   return (
      <>
      <svg //copied from delba.dev
        className="pointer-events-none fixed isolate z-30 opacity-70 mix-blend-soft-light"
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
      <div className=" bg-pagebackground min-h-screen flex flex-col">
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
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            {/* <meta property="og:image" content={meta.image} /> */}
         </Head>
         <main className='md:ml-24 flex-grow flex-shrink-0 basis-auto'>
            {children}
         </main>
         <Navbar activeSection={activeSection}/>
         <Footer/>
      </div>
      </>
   )
}

export default Container