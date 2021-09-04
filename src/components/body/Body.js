/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Cardheader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Button, CardMedia, IconButton } from '@material-ui/core';
import { Avatar }  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
    content: {
                padding: theme.spacing(1),
        // marginTop: theme.spacing(0),
    },
    paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
   maxWidth: '100%',
    height: 300,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

}
));

const body = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    // const { title, avatarurl, subhead, imageurl, /*description*/ }= props;
    const { product}= props;
   return (
        <main className={classes.content}>
        
                <Card>
                    <Cardheader
                        avatar={<Avatar src= {product.Avatar}/> }
                        action={
                            <IconButton aria-label="settings">
                                <FavoriteIcon  />

                            </IconButton>
                
                        }
                        title={product.category}
                        // subhead={product.subhead}
                    />
               <CardMedia to={`/productdetail/${product._id}`} >
                      <ButtonBase className={classes.image}>
              {/* <img className={classes.img} alt="complex" src={"/static/images/grid/complex.jpg"} /> */}
            <img className={classes.img} alt="complex" src={product.image} />
            </ButtonBase>
                    </CardMedia>
                    <CardContent>
                        < Typography variant="title" component="p">
                            {product.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" > BUY NOW</Button>
                    <IconButton aria-label="settings">
                        <AddShoppingCartIcon />
                    </IconButton>
                    </CardActions>
                </Card>
                {/* return (<article key={id} >
            <img> src={imageurl}  </img>
            </article>
                );
                })}
         */}
        </main>
        )
        }
                
export default body
