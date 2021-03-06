import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import 'libraries/fontawesome'


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
