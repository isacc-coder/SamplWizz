import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from "@mui/material";
import FirsCard from "./FirsCard";
import SecCard from "./SecCard";
import ThirdCard from "./ThirdCard";
import { useRecoilState } from 'recoil';
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Height } from '@mui/icons-material';
import { purple, green } from '@mui/material/colors';



 export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

function Cards () {
  const primary = green['A400']; 
  const accent = purple['A200'];
  const style = {

    background : `#00C29D`
};
    return (  

      <>
   <Box sx={{ width: 1 }} >
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 8" >
        <Typography bgcolor={style}  gutterBottom variant="h4" component="div">
           Zakladin Infromace
            </Typography>
          <Item> <FirsCard /></Item>
        </Box>
        
        <Box gridColumn="span 4" >
        <Typography bgcolor="black" color="white" gutterBottom variant="h6" component="div">
           Zakladin Infromace
            </Typography>
          <Item>
          <List>
      <ListItem secondaryAction={<Typography>Https</Typography>}>
        <ListItemText primary="Photos"  />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem secondaryAction={<Typography>Https</Typography>}>
        <ListItemText primary="Work"  />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem secondaryAction={<Typography>Https</Typography>}>
        <ListItemText primary="Vacation"/>
      </ListItem>
    </List>
          </Item>
        </Box>
        <Box gridColumn="span 8">
        <Typography bgcolor={style} gutterBottom variant="h4" component="div">
           Zakladin 
            </Typography>
          <Item> <SecCard/></Item>
        </Box>
        
        <Box gridColumn="span 4">
        <Typography bgcolor="black" color="white" gutterBottom variant="h6" component="div">
           Zakladin Infromace
            </Typography>
          <Item>    
          <List>
          <ListItem   sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}>
        <Grid container  spacing={2}>
          <Grid item>
          <Typography>Thired</Typography>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Data</Typography>
          </Grid>
        </Grid>
        
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem   sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}>
        <Grid container  spacing={2}>
          <Grid item>
          <Typography>First</Typography>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Http</Typography>
          </Grid>
        </Grid>
        
      </ListItem>
      
      <Divider variant="inset" component="li" />
      <ListItem   sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}>
        <Grid container  spacing={2}>
          <Grid item>
          <Typography>Last</Typography>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Data</Typography>
          </Grid>
        </Grid>
        
      </ListItem>

    </List></Item>
        </Box>
        <Box gridColumn="span 8">
        <Typography bgcolor={style} gutterBottom variant="h4" component="div">
           Zakladin Indfsd
            </Typography>
          <Item> <ThirdCard/></Item>
        </Box>

      </Box>
   </Box>
     
        
      

     



 </>

    
    ) 
}

export default Cards;










  

