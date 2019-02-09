import React, { Component } from 'react';
import Layout from './shared/Layout';
import './App.css';
import './build-suit.css';
import './tachyons.css';
import {
  BrowserRouter as Router 
} from "react-router-dom";

class App extends Component {
  render() {
    return (

      <Router>
      <Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
