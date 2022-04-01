import React from 'react';
import Link from 'next/link'
import { Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import Typography from '@mui/material/Typography';
import styles from '../../styles/Home.module.css'


export default function Footer () {
   const pages = ['E-shop', 'DATA', 'Blog'];
    return (
        <>
        
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} className={styles.footer}>
        <Grid item xs>
        <Typography gutterBottom variant="h4" component="div" color="action">
           Expanzola
            </Typography>
        </Grid>
        <Grid item xs={6} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

        {pages.map((page) => (
              <Button
                key={page}
               
                sx={{ my: 2, color: 'dark', display: 'block' }}
              >
                {page}
              </Button>
            ))}
        </Grid>
        <Grid item xs>
         <IconButton>
         <ArrowUpwardRoundedIcon/>
         </IconButton>
        </Grid>
      
      </Grid>


   <footer className={styles.footer}>
           <div>
           termlink 
           <span style={{ margin: '0 1rem' }}>|</span>
            privacy 
           </div>
        </footer> 
    </Box>
        
        
        
        
        
        
        
        
  
    </>
    )
}

       