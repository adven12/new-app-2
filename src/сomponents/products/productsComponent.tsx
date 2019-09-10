import React from "react";
import { ProductsState, ProductsRequest } from "../../redux/products/types";
import ProductLogic from "../products/productsLogic";
import ProductsComponentModal from "../products/productsComponentModal"
import ProductsComponentModalDescription from "../products/productsComponentModalDescription"

import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia, Modal, Grid, TextField, Link } from "@material-ui/core";
import {DebounceInput} from 'react-debounce-input';
import { Redirect, Router, Route } from "react-router";
import HomeComponentModalDescription from "../products/productsComponentModalDescription";



export interface ProductsProps {
  doProducts: () => object;
  doProductsToBasket: (data:ProductsRequest) => object;
  isLog: boolean,
  dataProducts: string,
  data: [],
} 

class ProductComponent extends React.Component<any, any> {
  state: ProductsState = {
    addToBasket: "",
    dataProducts: "",
    data: "",
    dataArr: [],
    search: "",
  };

 handleBuy = (id:any) => {  
    const { doProductsToBasket } = this.props;
    doProductsToBasket({addToBasket: id});
    
  }
  handleDel = (id:any) => {
    this.props.dataProducts.forEach((item:any,index:any) => {
     if(item.id === id){
      this.props.dataProducts.splice(index, 1)
      }
      fetch(`http://localhost:3003/products/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", "Accept": "application/json"},
      })
      .then(res => res.json());
    });    
  }
  productDescription = (id:any) => {
    // this.props.dataProducts.forEach((item:any,index:any) => {
    console.log(id);
    // if(this.props.isLog ===  true) {
      return <Redirect to="/description" />;
    // }
    // })
  }



    render(){
    if(this.props.dataProducts.length <= 0 ){
        const { doProducts } = this.props;
        doProducts();
    }
       
    return (
      <div className="productsComponent">
          <div className="productsComponent-list ">
          <Grid container spacing={2}>
           <Grid item  xs={12}>
          <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={event => this.setState({search: event.target.value})} />
        {/* {this.props.dataProducts.map((text:any, index:any) => (
        text.name == this.state.search ? (  
        ):(null)
        ))} */}
         <p>Value: {this.state.search}</p>
            </Grid>
         </Grid>
         {this.props.isLog && this.props.dataProducts.length > 0 ? 
          (
                this.props.dataProducts.map((text:any, index:any) => (
                  text.name.includes(this.state.search) ? (  
                  <div className="productsComponent-books" key={index}>
                    <Card className="productsComponent-books-card" onClick={() => this.productDescription(text.id)}>
                   <CardContent>
                <CardMedia
                    className="productsComponent-books-card-media"
                    image={text.picture}
                    title="Paella dish"
                    id={text.id}
                />
                  <Typography  component="h6">
                    {text.name}
                  </Typography>
                  <Typography color="textSecondary">
                  {text.price}
                  </Typography>
                  <Typography variant="body2" component="p">
                  {text.discript}
                    <br />
                  </Typography>
                  </CardContent>
                  <CardActions>
                  <Button size="small" onClick={() => this.handleBuy(text.id)} id={text.id}>Buy</Button>
                  {this.props.data.role === "admin" ? 
                  (
                  <Button size="small" onClick={() => this.handleDel(text.id)}>Del</Button>
                  ) : console.log("dffdg") 
                  }
                </CardActions>
                  </Card>
                  </div>
                   ): (null)
                   )
                   )
                   ) : (console.log("isLog = false"))
                  }
                  <br />
                  {this.props.data.role === "admin" ? 
                  (
                    <ProductsComponentModal />
                  ) : console.log("dffdg")
          }
      </div>
      </div>
    );
  }
}
export default ProductComponent;

