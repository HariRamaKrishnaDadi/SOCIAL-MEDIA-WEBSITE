import React from "react";
import "./Login.css";
import Button from '@material-ui/core/Button';
import v from "./images/v.png";
import { auth , provider } from "./firebase.js";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider"


function Login()  {
    const[state , dispatch] = useStateValue();
  
    // Sign in with google
    const signin = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    };
      

    return (
        <div className="login">
            
                
            <div className="login__logo">
                <img className="image" src ={v} alt ="" >
                </img>
                <h1 className="name">INTRA VELTECH</h1>
            </div>
            

            <Button  className="button" type="submit" onClick={signin}>
            Sign In
            </Button  >
    

        </div>            
        
    );
}

export default Login;
