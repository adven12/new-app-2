import React from "react";
import { Link, Redirect } from "react-router-dom";
import {LogoutState,  LogoutRequest } from "../../redux/logout/types";
import { doLogin } from "../../redux/login/sagasLogin";


export interface HeaderProps {
  doLogin: () => object;
  isLog: boolean,
  data: any,
}


const  HeaderComponent: React.FC = (props:any) => {
  // const state: LogoutState = {
  //   isLog: false,
  //   data: {
  //     role: "",
  //   },
  // };

 
  function logout()  {
    // const { doLogin } = props;
    localStorage.clear();
    window.location.href = "/";
      //  doLogout({isLog: false});  
    }
    console.log(props.isLog );
    
  if(props.isLog  && props.data.role === undefined){
    doLogin();
  }  
    
    return (
      <div className="headerComponent">
        {/* {!this.props.isLog ? :}  */}
        {props.isLog  && props.data.role === "admin" ?
          (
                 <header className="headerComponent-header">
                   <Link className="headerComponent-link" to="/users">Users</Link>
                   <Link className="headerComponent-link" to="/home">Products</Link>
                   <Link onClick={() => logout()} className="headerComponent-link headerComponent-a" to="/">Logout</Link>
                 </header>
          ) : console.log("dffdg") 
        }
        {props.isLog  && props.data.role === undefined ?
          (
              <header className="headerComponent-header">
                <Link className="headerComponent-link" to="/home">Home</Link>
                <Link className="headerComponent-link" to="/home">Products</Link>
                <Link onClick={() => logout()} className="headerComponent-link headerComponent-a" to="/">Logout</Link>
              </header>
          ) :  console.log("dffdg")
        }
        {(!props.isLog)  ?
          (
            <header className="headerComponent-header">
              <Link className="headerComponent-link" to="/login">Login</Link>
              <Link className="headerComponent-link" to="/Registration">Registration</Link>
            </header>
          ) : console.log("dffdg")
        }

    </div>

    );
}
export default HeaderComponent;
