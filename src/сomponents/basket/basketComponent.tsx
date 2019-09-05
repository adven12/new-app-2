import React from "react";
import { HomeState, HomeModalRequest } from "../../redux/home/types";
import { RootState } from "../../redux/rootReducer";
import no_picture from "../../img/no_picture.png"; 

import { makeStyles ,Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Modal from '@material-ui/core/Modal';
import { doHomeModal } from "../../redux/home/actions";
import { MenuItem, CardMedia } from "@material-ui/core";



const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    container: {
      display: 'flex',
      textAlign: 'center',
      // padding: theme.spacing(2),
    },
    media: {
      paddingTop: '30%', 
      // paddingRight: '10%', 
      width: '90px',
      hight: '40px',
      margin: 'auto',
    },
    button: {
    //  alignContent: 'left',
    //  justifyContent:'left',
    marginTop: '17px',
    }

  }),
);

export interface HomeProps {
  // dataProducts: string,
}

const  BasketComponent: React.FC<HomeProps> = (props:any) => {
  // const state:HomeState = {
  //   dataProducts: "",
  // };
  const classes = useStyles();
  const defaultimg = no_picture;
  return (
      <div className="basketComponent">
        {/* <div className={classes.location}> */}
          {/* {props.isLog ? 
          (
          <div className="basketComponent-user">  

          </div>

          ) :
          (
          <div className="empty">

          </div>
          )
          } */} 

        <Grid container spacing={2}>
        <Grid item  xs={2}>
        <Button className={classes.button}>-</Button>
        </Grid> 
        <Grid item  xs={7}>
        <CardMedia
            className={classes.media}
                    image={defaultimg}
                    title="Paella dish"
                    // id={text.id}
                />
        <Typography  component="h6">
        {/* {text.name} */}sdgfdsgfsd
        </Typography>
        <Typography  component="h6">
        {/* {text.name} */}350 U
        </Typography> 
        </Grid>  
        <Grid item  xs={3}>    
        <Button className={classes.button}>+</Button>
        </Grid>
        {/* </CardContent> */}
        {/* </Card> */}
        </Grid>   
        <Button>cleanBasket</Button><br />
        <Button>Place your order</Button>
        </div>
    );
}
export default BasketComponent;



