import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../../assets/Logos/logo.svg';
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Header = () =>{
    return (
      <React.Fragment>
        <AppBar className="App-header" position="static">
          <Toolbar>
            <Link to={`/`} alt="home">
              <img src={Logo} className="App-logo" alt="logo" />
            </Link>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
}

export default Header;