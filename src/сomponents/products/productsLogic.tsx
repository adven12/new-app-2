import React from "react";
// import { saveImg } from "../../redux/products/actions";
import { ProductsModalState, savePictureProfile } from "../../redux/products/types";
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import { RootState } from "../../redux/rootReducer";
import { home } from "../../redux/home/reducer";
import no_picture from "../../img/no_picture.png"; 

export interface ProductsModalProps {
    // savePicture:(data: savePictureProfile) => object;
    changePhoto: string;
  }
  const mapStateToProps = (state:RootState) => ({
    changePhoto: state.products.dataProducts,
  });
 class ProductLogic extends React.Component<ProductsModalProps, ProductsModalState> {
   [x: string]: any;
    state: ProductsModalState = {
        picture: "", 
        name: "",
        discript: "",
        price: "",
      };
      no_picturePhoto:any = {no_picture}
     handle = (event: any) =>{
      this.setState({ [event.target.name]: event.target.value } as any);

    }
    add = ():any => {
        let addName:any = document.querySelector('#new_name');
        let addDiscript:any = document.querySelector('#new_discript');
        let addPrice:any = document.querySelector('#new_price');
        console.log("1111111 ",addName.value);
        addName.value = this.state.name;
        addDiscript.value = this.state.discript;
        addPrice.value = this.state.price;
        const newSave = {
            name: this.state.name,
            discript: this.state.discript,
            price: this.state.price,
            picture: this.state.picture,
        };
        console.log(newSave);
        
        // const local: any = localStorage.getItem('state')
        // console.log(local);
        // const localParce = JSON.parse(local)
        // console.log(localParce.login.data);
        // for(var key in localParce.login.data) {
        //     if(key ==='email'){
        //       if(newSave.email != ''){
        //       localParce.login.data[key] = newSave.email
        //       console.log('What we assign', key, ':', localParce.login.data[key])
        //       console.log('Modified - login:',localParce) 
        //       }
        //     } 
        //     if(key ==='name'){
        //       if(newSave.name != ''){
        //         localParce.login.data[key] = newSave.name
        //         console.log('What we assign', key, ':', localParce.login.data[key])
        //         console.log('Modified - login:',localParce) 
        //       }
        //     }
        //     if(key ==='avatar'){
        //       localParce.login.data[key] = newSave.changePhoto
        //       console.log('Img', key, ':', localParce.login.data[key])
        //       console.log('Modified - img:',localParce) 
        //   }  
        // }   
        
            fetch(`http://localhost:3003/products/`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify(newSave)
          });
          // localStorage.clear();
          // window.location.href = "/login";
    };

    handlePicture = (e: any) =>{
            let defaultPhoto = this.no_picturePhoto
            console.log(defaultPhoto);
            
            // let picture:any = document.querySelector('#photo');
            // let imgMin:any = document.querySelector('#photoMin');
            //  console.log(defaultPhoto);
            const toBase64 = (file:any) => new Promise((resolve, reject) => {
                const reader = new FileReader();
                console.log("*** ",file);
                reader.readAsDataURL(file);              
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
              
            });
            async function Main(){
               const input : any = (document.querySelector('#upload_picture'));
               const file : any = input ? input.files[0] : null;
                if(!file){
                    return defaultPhoto
                }
                return await toBase64(file)
            }           
            Main().then(res =>{
                  this.setState({picture: res})
                  console.log(res);
            })
    }
          
      saveNewPicture = () =>{
            this.handlePicture(null);
                    console.log("working22");
      }

    render(){
      console.log(this.state.picture); 
        return(
            <div className="homeLogic">
             <input
              id="new_name"
              className="homeLogic-input"
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handle}
            />
            <input
              id="new_discript"
              className="homeLogic-input"
              type="text"
              name="discript"
              value={this.state.discript}
              onChange={this.handle}
            />
            <input
              id="new_price"
              className="homeLogic-input"
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handle}
            />
            <Button  size="small" className="homeLogic-input">
                <input id="upload_picture" type="file" className="homeLogic-input-upload"/>
            </Button>
            <Button  size="small" component="span" className="homeLogic-input" onClick={() => this.saveNewPicture()}>
                Add picture
            </Button>
            <br/>
            <button onClick={() => this.add()} className="homeLogic-button">Add product</button>
           </div>
        );
    }
}
export default connect(
    mapStateToProps,
    // { savePicture }
  )(ProductLogic);