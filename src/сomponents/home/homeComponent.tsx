import React from "react";
import { HomeState, HomeModalRequest } from "../../redux/home/types";
import { Product } from "../../types/product";
//import { doInit } from "@redux/home/actions";
import HeaderContainer from "../../сontainers/headerContainer"
import { error } from "../../redux/common/reducer";
import { Error } from "../common/errorComponent"
import { RootState } from "../../redux/rootReducer";
import avatar from "../../img/avatar.png"; 
import HomeComponentModal  from "./homeComponentModal";

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

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    root: {
      width: '100%',
      maxWidth: 500,
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 120,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);



export interface HomeProps {
  token: any,
  isLog: boolean,
  error: string,
  data: any,
  test: string,
}

const  HomeComponent: React.FC<HomeProps> = (props:any) => {
  const state:HomeState = {
    isLog: false,
    age: "",
    email: "",
    name: "",
    error: "",
  };
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  // const handleChange = (e: any) => {
  //   // this.setState({ [name]: e.target.value } as any);
  // };
  // const  handleKeyDown = (e:any) => {
  //   if (e.key === 'Enter') {
  //     e.target.value = e.target.value;
  //   }
  // }
  const handleImage = (e: any) =>{
  console.log("working1");
        // let defaultPhoto = this.props.imageProfile
        // let img:any = document.querySelector('#photo');
        // const toBase64 = (file:any) => new Promise((resolve, reject) => {
        //     const reader = new FileReader();
        //     reader.readAsDataURL(file);
        //     reader.onload = () => resolve(reader.result);
        //     reader.onerror = error => reject(error);
        // });
        // async function Main(){
        //     const file:any = e.target.files[0];
        //     if(!file){
        //         return defaultPhoto
        //     }
        //     return await toBase64(file)
        // }
        // Main().then(res =>{
        //     this.setState({changePhoto: res})
        //     img.src = res;
        // })
  }
  const handleSubmit = (e:any) =>{
  console.log("working2");
  // this.props.saveImgProfile({img:this.state.changePhoto, id:this.props.idUser})
  }
  
  return (
      <div className="homeComponent">
              
          {props.isLog ? 
          (
          <div className="homeComponent-user">  
   <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image } >
              <img className={classes.img} alt="avatar" src={avatar} />
              {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.bigAvatar} /> */}
            </ButtonBase>
          </Grid> 
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
            <Grid container alignItems="center" justify="center"  direction="row">
          <Typography variant="button" display="block">
           Welcome to the site!
          </Typography>
          </Grid>

          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="user-name"
              label="Your name"
              className={classes.textField}
              value={props.data.name}
              // onChange={handleChange}
              // onKeyDown={handleKeyDown}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="user-email"
              label="E-mail"
              className={classes.textField}
              value={props.data.email}
              // onChange={handleChange()}
              margin="normal"
              variant="outlined"
            />
          </form> 
          </Grid>
            </Grid>
            <Grid item container  alignItems="center" justify="flex-start"  direction="row">
            {/* <div className="homeComponent-user-buttons" > */}
              <Button  onClick={handleImage}  size="small" className={classes.button}><input type="file" onClick={handleImage} placeholder="Choose avatar" className={classes.button}/></Button>
              {/* <input type="file" onClick={handleImage} placeholder="Choose avatar" className={classes.button}/> */}
              <Button  onClick={handleSubmit} size="small" component="span" className={classes.button}>Upload avatar</Button>
              <HomeComponentModal />
            {/* </div> */}
            </Grid>
        </Grid>
      </Paper>
    </div>

          </div>

          ) :
          (
          <div className="empty">

          </div>
          )
          }
          </div>
    );
}
export default HomeComponent;



