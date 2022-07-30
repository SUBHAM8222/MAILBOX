import React from "react";
import Login from './Components/LoginPage/Login'
import './App.css';
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import { Route, Switch} from "react-router-dom";

function App() {
  return (
    <Switch>
    <Route path='/welcome' exact>
      <WelcomePage/>
    </Route>
   <Login/>
   </Switch>
  
  );
}

export default App;
