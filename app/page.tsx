'use client';

import { NextRouter, useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useUrlHash from '../hooks/useUrlHash';

const Page= () =>{
   // const currentHash = useUrlHash("");

   // console.log("curHash: " + currentHash);

   return (<>
         <section id="home" className="bg-red-400 min-h-screen">home</section>
         <section id="about" className="min-h-screen bg-blue-400">about</section>
         <section id="experience" className="min-h-screen bg-green-400">experience</section>
         <section id="skills" className="min-h-screen bg-yellow-400">skills</section>

      </>
   )
 }

 export default Page;