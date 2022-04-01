import Layout from '../components/Layout'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import '../styles/globals.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
  
 
     <Layout>
 <Component {...pageProps} /> 
    </Layout>

  
     
    
    
    </>
  )
  
  
  
}

export default MyApp
