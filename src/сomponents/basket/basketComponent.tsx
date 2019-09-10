import React from "react";
import { BasketState } from "../../redux/basket/types";
import { makeStyles ,Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {CardMedia } from "@material-ui/core";
import { number } from "prop-types";


const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    container: {
      display: 'flex',
      textAlign: 'center',
    },
    media: {
      paddingTop: '30%', 
      width: '90px',
      hight: '40px',
      margin: 'auto',
    },
    button: {
    marginTop: '17px',
    marginRight: '40px',
    },
    sumTotal: {
       textAlign: 'left',
       marginTop: '45px',
      },
      vanish: {
       display: 'none',
      }  

  }),
);

export interface BasketProps {
  doBasket: () => object;
  doBasketBook: (data:any) => object;
  buyProduct: string,
  addToBasket: string,
  dataArr: any,
}

const  BasketComponent: React.FC<BasketProps> = (props:any) => {
  const state:BasketState = { 
    countBooks: 0
  };
  const classes = useStyles();
  // let countBooks = 0;

  // const pBook = (price:any) => {
  //   countBooks = countBooks+price;  
  // };
  const mBook = (id:any) => {
    const { doBasketBook } = props;
    console.log("EEE",id);
    
    doBasketBook({ id});        
  }
  
  const cleanBasket = () =>{
    const { doBasket } = props;
    doBasket();          
  }



  return (
      <div className="basketComponent">
        {props.addToBasket.addToBasket === undefined ? (
          <div className="empty">
          <h2>Basket is empty</h2>
          </div>
        ) : (
        props.dataArr.map((textArr:any, indexArr:any) => (
        props.buyProduct.map((text:any, index:any) => (
        textArr.addToBasket === text.id ?(  
        <div className="basketComponent-content" key={index}>
        <div className={classes.vanish} >{state.countBooks = Number(state.countBooks) + Number(text.price)}</div>
        <Grid container spacing={2}>
        <Grid item  xs={2}>
        <Button className={classes.button} onClick={() => mBook(text.id)}>-</Button>
        </Grid> 
        <Grid item  xs={7}>
        <CardMedia
            className={classes.media} image={text.picture} title="Paella dish" />
        <Typography  component="h6">
        {text.name}
        </Typography>
        <Typography  component="h6">
        {text.price}
        </Typography> 
        </Grid>  
        <Grid item  xs={3}>    
        {/* <Button className={classes.button}  onClick={() => pBook(text.price)}>+</Button> */}
        {/* <Typography  component="h6" id="countBooks">
         {countBooks}
        </Typography>   */}
        </Grid>
        </Grid>   
        <hr/>
        </div>
        ) : (console.log("Orabotalo")))
        
        
        )

        )))} 
       <div className="basketComponent-footer">
       <Typography  component="h6" className={classes.sumTotal}>
        Sum products: {state.countBooks}
        </Typography> 
        <Button onClick={() => cleanBasket()}>cleanBasket</Button><br />
        <Button>Place your order</Button> 
        </div>

       </div> 
    );
}
export default BasketComponent;



