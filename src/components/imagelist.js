import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import data from '../data';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
      width: 400,
      
      
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function TitlebarImageList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ImageList  className={classes.imageList}>
               
                {data.products.map((product) => (
                    <ImageListItem key={product._id}>
                        <img src={product.image} alt={product.imagr} />
                        <ImageListItemBar
                            title={product.name}
                            subtitle={<span>by: {product.rating}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${product.description}`} className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import ImageList from '@material-ui/core/ImageList';
// import ImageListItem from '@material-ui/core/ImageListItem';
// import ImageListItemBar from '@material-ui/core/ImageListItemBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';
// import fileofbody from '../products';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   imageList: {
//     width: 500,
//     height: 450,
//   },
//   icon: {
//     color: 'rgba(255, 255, 255, 0.54)',
//   },
// }));

// export default function TitlebarImageList() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <ImageList rowHeight={180} className={classes.imageList}>
//         <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
//           <ListSubheader component="div">December</ListSubheader>
//         </ImageListItem>
//         {fileofbody.products.map((product) => (
//           <ImageListItem key={product._id}>
//             <img src={product.image} alt={product.imagr} />
//             <ImageListItemBar
//               title={product.name}
//               subtitle={<span>by: {product.rating}</span>}
//               actionIcon={
//                 <IconButton aria-label={`info about ${product.description}`} className={classes.icon}>
//                   <InfoIcon />
//                 </IconButton>
//               }
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </div>
//   );
// }