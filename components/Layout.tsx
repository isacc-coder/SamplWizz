import React ,{ ReactNode }from "react";
import Head from 'next/head';
import Cards from "./layout/Cards";
import Nav from "./nav/Nav";
import Item from "./layout/Item";
import { Box } from "@mui/system";
import Footer from "./footer/Footer";
import styles from '../styles/Home.module.css'

interface GlobalLayoutProps {
    children: ReactNode;
  }
function Layout ({ children }: GlobalLayoutProps) {
    return (
   <>
    <Head>
        <title>Crapzo </title>
    </Head>
       <Box >
       <header>
           <Nav/>
       </header>
       <Item/>
       <main className={styles.main}>
           
           <Cards/>
           
          
       </main>
     <footer>
        <Footer/>
     </footer>
   </Box>

   </>
    );   
        

}

export default Layout;