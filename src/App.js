// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import  "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './screens/Home';
import Contact from './screens/Contact';
import About from './screens/About';
import {Switch,Route, Redirect} from "react-router-dom";
import Navbar from "./Navbar";

function App () {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Redirect to='/home'/>
    </Switch>
    </>
    
  );
}

export default App;
