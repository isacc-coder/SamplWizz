import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
   children?: React.ReactNode;
   index: number;
   value: number;
 }
 
 function TabPanel(props: TabPanelProps) {
   const { children, value, index, ...other } = props;
 
   return (
     <div
       role="tabpanel"
       hidden={value !== index}
       id={`simple-tabpanel-${index}`}
       aria-labelledby={`simple-tab-${index}`}
       {...other}
     >
       {value === index && (
         <Box sx={{ p: 3 }}>
           <Typography>{children}</Typography>
         </Box>
       )}
     </div>
   );
 }
 
 function a11yProps(index: number) {
   return {
     id: `simple-tab-${index}`,
     'aria-controls': `simple-tabpanel-${index}`,
   };
 }

 export default function ThirdCard () {
   const [value, setValue] = React.useState(0);

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
     setValue(newValue);
   };
    return (
    
    <>
   
   <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Lorem one" {...a11yProps(0)} />
          <Tab label="Lorem Two" {...a11yProps(1)} />
          <Tab label="Lorem Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fuga consequatur voluptatibus dolorem optio illum eaque cumque aspernatur in atque nobis, nihil fugiat illo maxime, eos ipsa eum, deserunt doloribus.
      </TabPanel>
      <TabPanel value={value} index={1}>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, eum? Possimus dolore nostrum quae pariatur cum sunt quia eius optio iure, incidunt eos? 
       Et quo assumenda perspiciatis odio iusto? Vero.
      </TabPanel>
      <TabPanel value={value} index={2}>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, dolor voluptatum eaque, eveniet ducimus corporis modi consequatur quod ab repudiandae fugiat vitae aperiam consectetur nulla
        rerum aliquam magnam quia assumenda.
      </TabPanel>
    </Box>
   
   
   
   
   
   
   
   
   
   {/* <div>
    
    <h2 className="title">Domlanci Infromace</h2> 
       <div>
         <h3>place</h3>
          <p>discripe</p>
       </div>
       <div>
         <h3>Hotel</h3>
          <p>discripe</p>
       </div>
       <div>
         <h3>Dentail</h3>
          <p>discripe</p>
       </div>
    </div> */}
    </>
    )
}

 ThirdCard;