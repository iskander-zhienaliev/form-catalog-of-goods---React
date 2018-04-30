import React, { Component } from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm'
import LisfOfGoods from './components/ListOfGoods'
import { Route } from 'react-router-dom'

class App extends Component {

  render(){
    return(
      <div>
        <Header />
            <Route path='/form' component={LoginForm} />
            <Route path='/goods' component={LisfOfGoods} />
        </div>
    )
  }
};

export default App;
