import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import {actionTypes} from "./reducer"

function Login() {

    const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        })
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/08/09/09/man-of-steel-0.jpg?w968"
          alt=""
        />
        <h1>Sign in to Oryan Kibandi HQ</h1>
        <p>kibandi.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
