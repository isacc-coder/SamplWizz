
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import FactoryRoundedIcon from '@mui/icons-material/FactoryRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import BalanceRoundedIcon from '@mui/icons-material/BalanceRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import { Input } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { BootstrapInput } from '../LayoutStyle'
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import {Search, SearchIconWrapper, StyledInputBase} from '../layout/ItemStyle'

function Item () {
  const style = {

    color : `#69f0ae`
};
    return (

      <>
        <Box sx={{ minWidth:120,   }} >
 <FormControl sx={{ m: 1 }} variant="standard">
            <BootstrapInput id="demo-customized-textbox" placeholder="search"/> 
            </FormControl>

            <FormControl sx={{ m: 1 }} variant="standard">
            <BootstrapInput id="demo-customized-textbox" placeholder="Region"/> 
            </FormControl>
           
     <FormControl sx={{ m: 1, width: 150 }}  variant="standard" >
      <InputLabel id="demo-simple-select-label">Choose</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
       
        >
          <MenuItem value={10}>CH</MenuItem>
          <MenuItem value={20}>EN</MenuItem>
          <MenuItem value={30}>Other</MenuItem>
        </Select>
        
      </FormControl>  
             
      
     

      <IconButton
                
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="primary"
                
                
              >
          
          <SearchRoundedIcon fontSize="large"  />
              </IconButton>
     <IconButton
                
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="primary"
              >
          
          <FilterAltOutlinedIcon fontSize="large" />
              </IconButton>
              
      </Box>
    
       <Box sx={{ flexGrow: 1 }}>

       <Grid container spacing={2}>
        <Grid item xs={8}>
       <Typography gutterBottom variant="h4" >
           Technology
            </Typography> 
        </Grid> 
        <Grid item xs={4}>
          <IconButton>
        <EmailRoundedIcon/>
          </IconButton>
          <IconButton>
             <BalanceRoundedIcon/>
          </IconButton>
          <IconButton>
             <ShareRoundedIcon/>
          </IconButton>
          <IconButton>
            <LocalPrintshopRoundedIcon/>
          </IconButton>
       
        
        </Grid>
       </Grid>
       </Box>
       
  
   </>
    )
}

export default Item;


