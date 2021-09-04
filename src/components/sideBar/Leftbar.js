import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import StarRate from './StarRate';
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    padding: theme.spacing(1.5),

  },
  

  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const Leftbar = (props) => {
  const classes = useStyles();
  const {product} = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              {/* <img className={classes.img} alt="complex" src={"/static/images/grid/complex.jpg"} /> */}
            <img className={classes.img} alt="complex" src={product.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {/* Standard license */}
                  {product.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {/* Full resolution 1920x1080 • JPEG */}
                  {product.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {/* ID: 1030114 */}
                  {product.brand}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  {/* Remove */}
                  {product.rating}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                {/* $19.00 */}
                {/* {subhead} */}
                <StarRate/>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Leftbar




// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import StarRate from './StarRate';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     // flexGrow: 1,
//     padding: theme.spacing(1.5),
// background: '#2b323a'
//   },
  

//   paper: {
//     padding: theme.spacing(2),
//     margin: 'auto',
//     maxWidth: 500,
//   },
//   image: {
//     width: 128,
//     height: 128,
//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
// }));


// const Leftbar = (props) => {
//   const classes = useStyles();
//   const {  title,/*star ,*/imageurl, description } = props;
//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <Grid container spacing={2}>
//           <Grid item>
//             <ButtonBase className={classes.image}>
//               {/* <img className={classes.img} alt="complex" src={"/static/images/grid/complex.jpg"} /> */}
//             <img className={classes.img} alt="complex" src={imageurl} />
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column" spacing={2}>
//               <Grid item xs>
//                 <Typography gutterBottom variant="subtitle1">
//                   {/* Standard license */}
//                   {description}
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {/* Full resolution 1920x1080 • JPEG */}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {/* ID: 1030114 */}
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="body2" style={{ cursor: 'pointer' }}>
//                   {/* Remove */}
//                   {title}
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Grid item>
//               <Typography variant="subtitle1">
//                 {/* $19.00 */}
//                 {/* {subhead} */}
//                 <StarRate/>
//               </Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// }

// export default Leftbar
