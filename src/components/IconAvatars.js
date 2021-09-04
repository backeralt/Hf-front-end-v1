import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
// import FolderIcon from '@material-ui/icons/Folder';
// import PageviewIcon from '@material-ui/icons/Pageview';
// import AssignmentIcon from '@material-ui/icons/Assignment';
import "../components/Context.css";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft:'6em',
    display: 'flex',
    '& > *': {
      margin: theme.spacing(3.5),
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  yellow: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  gray: {
    color: '#fff',
    backgroundColor: pink[500],
  },
}));

export default function IconAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div><Avatar>
        {/* <FolderIcon /> */}
        <MenuIcon/>
      </Avatar>
        <br/>
        <p6 className="word">.  All furniture</p6>
</div><div>
      <Avatar className={classes.pink}>
        {/* <PageviewIcon /> */}
        </Avatar>
         <br></br>
        <p6 className="word">Bedroom furniture</p6>
     </div><div>
      <Avatar className={classes.green}>
        {/* <AssignmentIcon /> */}
        </Avatar>
         <br></br>
        <p6 className="word">Hotel furniture</p6>
      </div><div>
      <Avatar className={classes.gray}>
        {/* <PageviewIcon /> */}
        </Avatar>
         <br></br>
        <p6 className="word">Kitchen furniture</p6>
        </div>
        {/* <div>
      <Avatar className={classes.yellow}>
        <AssignmentIcon />
        </Avatar>
         <br></br>
        <p6 className="word">Office furniture</p6>
      </div><div>
        
      <Avatar className={classes.pink}>
        <PageviewIcon />
        </Avatar>
         <br></br>
        <p6 className="word">School furniture</p6>
      </div>*/}
      <div> 
      <Avatar className={classes.green}>
        {/* <AssignmentIcon /> */}
        </Avatar>
         <br></br>
        <p6 className="word">Other furniture</p6>
        </div>
    </div>
  );
}


// <Grid container  spacing={5}>
//         <Grid Item >
//           <Avatar>
//         <FolderIcon />
        
//           </Avatar>
//           <h6>all furniture</h6>

//         </Grid>
//         <Grid Item>
//             <Avatar className={classes.pink}>
//         <PageviewIcon />
//           </Avatar>
//            <h6>bedroom furniture</h6>
//         </Grid>
//      <Grid Item><Avatar className={classes.green}>
//         <AssignmentIcon />
//       </Avatar>
//         </Grid>
//      <Grid Item><Avatar className={classes.gray}>
//         <PageviewIcon />
//       </Avatar>
      
//         </Grid>
//      <Grid Item> <Avatar className={classes.yellow}>
//         <AssignmentIcon />
//       </Avatar>
     
//         </Grid>
//      <Grid Item> <Avatar className={classes.yellow}>
//         <AssignmentIcon />
//       </Avatar>
     
//         </Grid>
//      <Grid Item >  <Avatar className={classes.yellow}>
//         <AssignmentIcon />
//       </Avatar>
     
//         </Grid>
//       </Grid>