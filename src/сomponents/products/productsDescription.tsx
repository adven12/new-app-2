import React from 'react';
import { HomeState, HomeModalRequest } from "../../redux/home/types";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
// import  HomeLogic  from './homeLogic';
import { Button, Link, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { doHomeModal } from '../../redux/home/actions';
import ProductsComponent from "../products/productsComponent";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      // position: 'absolute',
      // maxWidth: 270,
      // maxHeight: 270,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 4, 1),
      // margin: theme.spacing(30, 98),
      // display: 'flex',
      // margin: 'auto',
      // justifyContent='center',
    },
    location: {
      display: 'flex',
      margin: "110px auto",
      position: 'absolute',
      maxWidth: 270,
      maxHeight: 270,
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);
export interface HomeProps {

}

const ProductsDescription: React.FC<any> = (props) => {
  console.log(props.location.state.id);
  console.log(props.location.state.name);
  console.log(props.location.state.picture);
  console.log(props.location.state.full_discript);
  const classes = useStyles({});
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };


  return (
    <div className="productsDescription">
      {/* <h2>H</h2> */}
      <Card className="productsComponent-books-card" >
                      <CardContent>
                        <CardMedia
                          className="productsComponent-books-card-media"
                          image={props.location.state.picture}
                          title="Paella dish"
                          id={props.location.state.id}
                          />
                        <Typography component="h6">
                          {props.location.state.name}
                        </Typography>
                        <Typography component="h6">
                          {props.location.state.full_discript}
                        </Typography>

                        </CardContent>
        </Card>
    </div>
  );
}
export default ProductsDescription;