import '../styles/global.css';
import type { AppProps } from 'next/app';
import { Slabo_13px } from '@next/font/google'
import { Lato } from '@next/font/google'
import { Permanent_Marker } from '@next/font/google'

const slabo = Slabo_13px({
  weight: "400",
  subsets: ['latin'],
})

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ['latin'],
})

const permanent_marker = Permanent_Marker({
  weight: "400",
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {
          `
            :root{
              --slabo-font: ${slabo.style.fontFamily};
              --lato-font: ${lato.style.fontFamily};
              --permanent_marker-font: ${permanent_marker.style.fontFamily};
            }
          `
        }
      </style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp