import Link from 'next/link'
import AccountCircle from '@mui/icons-material/AccountCircle';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';


export default function Nav (){
   const pages = ['E-shop', 'Data', 'Blog'];

    return (

  <AppBar position="static" style={{ background: '#129576' }}>
       <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
               
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
       <Typography sx={{ flexGrow: 1 }}>EXPANZO</Typography>
            <div>
        <Button size="small" color="secondary">CH</Button>
        <Button size="small" color="secondary">EN</Button>
      </div>
       <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
             
            <AccountCircle />
          
              </IconButton>
              <p>Account</p>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
          
              <EditRoundedIcon/>
              </IconButton><p>Registeral</p>
               
    </Toolbar>
  </AppBar>

)
        
    
}


