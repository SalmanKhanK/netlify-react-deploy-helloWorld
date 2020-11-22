// @ts-ignore
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {CardMedia,Button,CardContent,CardActions,CardActionArea,Card,Grid} from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux'
import { SelectBasket, add } from '../Store/Basketslice'
import { ProductType } from '../Types/Global'
export const Product = () => {
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 190,
        },
    });
    const classes = useStyles();
    const state = useSelector(SelectBasket)
    const dispatch = useDispatch();
    console.log(state.ProductList)
    console.log(state.BasketProduct)
    return (
        <div>
<Grid container spacing={1}  >
     
                {
                    state.ProductList.map((item: ProductType, key: number) => {

                    return(
                        
                        <Grid item xs={12} sm={4} key={key}>
                        <Card >
                          
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={item.imgUrl}
                                    title="T-shirts"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.title}
                               </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.description}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary"
                                 onClick={()=>dispatch(add(item))}
                                //  disabled={item.added}
                                 >
                                    Add
                               </Button>
                                    </CardActions>
                                   
                        </Card>
                        </Grid>
                    
                    )
                    })
                }
                    </Grid>
         
        </div>
    )
}



                        //         return(
                        //             <div key={key}>
                        //                <button 
                        //                 disabled={item.added}
                        //                onClick={()=>dispatch(add(item))}>Add</button>

                        //             </div>
                        //    )