import React, { Component } from 'react';
import './App.css';
import Title from './Title';
import ListItems from './ProductItems';
import Cart from "./Cart";

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Title />
          <div className="row">
              <ListItems />
              <Cart/>

          </div>
      </React.Fragment>
    );
  }
}

export default App;
