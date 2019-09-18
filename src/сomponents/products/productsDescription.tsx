import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { RootState } from '../../redux/rootReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button, Modal } from '@material-ui/core';
import ProductsDescriptionModalLogic from './productsDescriptionModalLogic';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 4, 1),
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
const mapStateToProps = (state: RootState) => ({
  dataProducts: state.products.dataProducts,
});
export interface ProductsProps {
  isLog: boolean,
}

const ProductsDescription: React.FC<any> = (props) => {

  const classes = useStyles({});
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="productsDescription">
     {props.isLog || props.isLog == undefined ? (
     props.dataProducts.map((item:any, index:any) => (
     props.match.params.id == item.id ? (
      <div key={index}>
      <div>
     <Card className="productsComponent-books-card" >
     <CardContent>
     <CardMedia
          className="productsComponent-books-card-media"
          image={item.picture}
          title="Paella dish"
          id={item.id}
        />
        <Typography component="h6">
        {item.name}
        </Typography>
        <div>
        {item.full_discript != undefined ?
        (<Typography component="h6">{item.full_discript}</Typography>) :
        (<Typography component="h6">{item.discript}</Typography>)}
        </div>
     </CardContent>
      </Card>
      </div>
      <div>
      <br/>
      {item.full_discript != undefined ? 
      (<Button size="small" onClick={handleOpen}>Сhange Description</Button>) :
      (null)}
       <Modal className={classes.location}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
        <div  className={classes.paper}>
        <h3 id="simple-modal-title">Enter a new description</h3>
        <div id="simple-modal-description">
          <ProductsDescriptionModalLogic product={item} handleClose={handleClose}/>
        </div>
        </div>
        </Modal>
      </div>
      </div>

     ) : (null)
     ))
     ):(<Redirect to="/login"/>)}

    </div>
  );
}
export default connect(
  mapStateToProps,
)(ProductsDescription);
