'use client';

import { NextRouter, useRouter } from "next/router"
import { useEffect, useState } from "react"

const usePathWithHash = (initialValue : String) : String => {
   const router : NextRouter = useRouter()
   const [pathWithHash, setPathWithHash] = useState(initialValue)

   useEffect(() => {
     const onWindowHashChange = () => setPathWithHash(window.location.pathname + window.location.hash)
     const onWindowLoad = () => setPathWithHash(window.location.pathname + window.location.hash)
     const onNextJSHashChange = (url) => setPathWithHash(url)

     router.events.on('hashChangeStart', onNextJSHashChange)
     window.addEventListener('hashchange', onWindowHashChange)
     window.addEventListener('load', onWindowLoad)
     return () => {
       router.events.off('hashChangeStart', onNextJSHashChange)
       window.removeEventListener('load', onWindowLoad)
       window.removeEventListener('hashchange', onWindowHashChange)
     }
   }, [router.isReady])

   useEffect(() => {
     setPathWithHash(window.location.pathname + window.location.hash)
   }, [])
   

   return pathWithHash
 }

 export default usePathWithHash;