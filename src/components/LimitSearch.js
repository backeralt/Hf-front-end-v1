import React from 'react';
import { Accordion, AccordionSummary,AccordionDetails, FormGroup} from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
        width: '180px',
      
    },
}));

const LimitSearch = () => {
    const classes = useStyles();
    return (
        <div>
         <Grid container spacing={3} >
            <Grid item>
            <Accordion className={classes.root}> 
                <AccordionSummary
                    expandIcon={<ExpandMore/>}>
                <h5> Furniture Name </h5> 
                     </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
          <FormControlLabel
            control={<Checkbox   />}
            label="delux"
          />
          <FormControlLabel
            control={<Checkbox   />}
            label="3f"
          />
          <FormControlLabel
            control={<Checkbox  />}
            label="kidane mhret"
          />
        </FormGroup>
                        </AccordionDetails>
                        </Accordion>
               </Grid>
                    <Grid item>
               <Accordion className={classes.root}> 
                <AccordionSummary
                    expandIcon={<ExpandMore/>}>
                <h5> price </h5> 
                     </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
          <FormControlLabel
            control={<Checkbox   />}
            label="2,000-5,000"
          /> <FormControlLabel
            control={<Checkbox   />}
            label="5,000-10,000"
          /> <FormControlLabel
            control={<Checkbox   />}
            label="up to 30,000"
          />
          <FormControlLabel
            control={<Checkbox   />}
            label="up to 50,000"
          />
          <FormControlLabel
            control={<Checkbox  />}
            label="any price"
          />
        </FormGroup>
                        </AccordionDetails>
                        </Accordion> 
               </Grid>
                    <Grid item>
              <Accordion className={classes.root}> 
                <AccordionSummary
                    expandIcon={<ExpandMore/>}>
                <h5> Type</h5> 
                     </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
          <FormControlLabel
            control={<Checkbox   />}
            label="home furniture"
          /><FormControlLabel
            control={<Checkbox   />}
            label="office"
          />
          <FormControlLabel
            control={<Checkbox   />}
            label="school"
          />
          <FormControlLabel
            control={<Checkbox  />}
            label="hospital"
          />
        </FormGroup>
                    </AccordionDetails>
               
            </Accordion>
            </Grid> <Grid item>
              <Accordion className={classes.root}> 
                <AccordionSummary
                    expandIcon={<ExpandMore/>}>
                <h5> Location</h5> 
                     </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
          <FormControlLabel
            control={<Checkbox   />}
            label="near by me"
          />
          <FormControlLabel
            control={<Checkbox  />}
            label="addis ababa"
          />
        </FormGroup>
                    </AccordionDetails>
               
            </Accordion>
            </Grid> <Grid item>
              <Accordion className={classes.root}> 
                <AccordionSummary
                    expandIcon={<ExpandMore/>}>
                <h5> status </h5> 
                     </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
          <FormControlLabel
            control={<Checkbox   />}
            label="like new"
          />
          <FormControlLabel
            control={<Checkbox   />}
            label="brand new"
          />
                </FormGroup>
                    </AccordionDetails>
               
            </Accordion>
            </Grid>  
          </Grid>
        </div>
    )
}

export default LimitSearch
