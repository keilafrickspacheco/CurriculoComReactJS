import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Page1 from './Paginas/index'
import Page2 from './Paginas2/index'
import PagePrincipal from './Principal/index'
import Formacao from './Formacao/index'
import Profissao from './Profissao/index'
import Home from './Home/index'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/page1">
            <Page1/>
          </Route>
          <Route path="/page2">
            <Page2/>
          </Route>
          <Route exact path="/apresentacao">
            <PagePrincipal/>
          </Route>
          <Route path="/formacao">
            <Formacao/>
          </Route>
          <Route path="/profissao">
            <Profissao/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

