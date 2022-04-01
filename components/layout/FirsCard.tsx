import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Item} from '../layout/Cards'



function FirsCard () {
    return (
        <>
           {/* <Typography gutterBottom variant="h4" component="div">
           Zakladin Infromace
            </Typography> */}
      <List>

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
            <Typography noWrap>Title</Typography>
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
          <Typography>Second</Typography>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>message</Typography>
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
          <Typography>Forth</Typography>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>link..</Typography>
          </Grid>
        </Grid>
        
      </ListItem>
      
    
    </List>
    
    
    
    
    
    
    
    {/* <div>
     <h2 className="title">Zakladin Infromace</h2>       
     <h3 className="title">Spcfic</h3>
       <p className="description">content</p>
                <div className="type-content">
                  <div className="type">type </div>
                  <div className="type-value">item value</div>
                </div>
     <div className="country"></div>
                  
                <div className="other">
                  <div className="other-title">price</div>
                  <div className="other-subTitle">min</div>
                </div>
      </div> */}
        
     </>
    )
}
export default FirsCard;