import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider"
import Chat from "./Chat.js"
import Login from "./Login"

function App() {

  const [{user}] = useStateValue();

  return (
    //BEM naming convention
    <div className="app">
      <Router>
      {!user ? (<Login/>) : (
        <>

      <Header/>

      <div className="app__body">
        <Sidebar />

        <Switch>
          <Route path="/room/:roomId">
            <Chat/>
          </Route>
          <Route path="/">
            <h1>Welcome</h1>
          </Route>

        </Switch>
        
      </div>
      </>
      )}
      {/* React router -> Chat screen */}
      </Router>
      
    </div>
  );
}

export default App;
