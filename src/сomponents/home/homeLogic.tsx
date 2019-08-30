import React from "react";
import { HomeModalState,  HomeModalRequest } from "../../redux/home/types";
import Modal from '@material-ui/core/Modal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { doHomeModal } from "../../redux/home/actions";


export interface HomeModalProps {
    doHomeModal: (data: HomeModalRequest) => object;
  }
 class HomeLogic extends React.Component<HomeModalProps, HomeModalState> {
    state: HomeModalState = {
        email: "",
        name: "",
      };
    handle = (event: any) =>{
      this.setState({ [event.target.name]: event.target.value } as any);
    }
    edit = () => {
        const { doHomeModal } = this.props;

        doHomeModal({ email: this.state.email, name: this.state.name }); 
        console.log("8888888888888888", doHomeModal({ email: this.state.email, name: this.state.name }));
        
        const newSave = {
            name: this.state.name,
            email: this.state.email,
        };
    

        const local: any = localStorage.getItem('state')
        console.log(local);
        
        const localParce = JSON.parse(local)
        console.log(localParce.login.data);
        for(var key in localParce.login.data) {
            if(key ==='email'){
              localParce.login.data[key] = newSave.email
              console.log('What we assign', key, ':', localParce.login.data[key])
              console.log('Modified - login:',localParce) 
            } 
            if(key ==='name'){
                localParce.login.data[key] = newSave.name
                console.log('What we assign', key, ':', localParce.login.data[key])
                console.log('Modified - login:',localParce) 
            } 
        }   
        console.log(localParce.login.data);
        
            fetch(`http://localhost:3002/users/${localParce.login.data.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify(localParce.login.data)
          })
    };

    

    render(){
        return(
            <div className="homeLogic">
             <input
              className=""
              type="name"
              name="name"
              value={this.state.name}
              onChange={this.handle}
            />
            <input
              className=""
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handle}
            />
            <br/>
            <button onClick={() => this.edit()} className="loginComponent-button">Login</button>
           </div>
        );
    }
}
export default connect(
    null,
    { doHomeModal }
  )(HomeLogic);