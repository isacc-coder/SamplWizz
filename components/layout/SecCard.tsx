import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Rating } from "@mui/material";
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';


const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const message = `Trunine of tex as this is a  can support. `;

function SecCard () {
    return (
        <>
     <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
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
      <Typography noWrap>{message}</Typography>
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
    <Rating name="simple-controlled" />
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
      <Typography noWrap><OutlinedFlagIcon /> </Typography>
    </Grid>
  </Grid>
  
</ListItem>


</List>
    </Box>


      
      </>
    )
}

export default SecCard;