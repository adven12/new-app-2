import React from 'react';
import { HomeState, HomeModalRequest } from "../../redux/home/types";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
// import  HomeLogic  from './homeLogic';
import { Button, Link } from '@material-ui/core';
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
      margin:"110px auto",
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

const HomeComponentModalDescription: React.FC<HomeProps> = () => {
  const classes = useStyles({});
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
        <h2>Hyba byba</h2>
       { handleOpen()}
      <Modal className={classes.location}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div  className={classes.paper}>
          <h3 id="simple-modal-title">Enter new name or email</h3>
          <div id="simple-modal-description">
            {/* <HomeLogic /> */}
          </div>

        </div>
      </Modal>
    </div>
  );
}
export default HomeComponentModalDescription;