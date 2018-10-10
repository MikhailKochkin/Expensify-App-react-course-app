import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <h4><NavLink to="/" activeClassName="is-active" exact={true} >Go Home!</NavLink></h4>
    <h4><NavLink to="/create" activeClassName="is-active">Go Create!</NavLink></h4>
    <h4><NavLink to="/edit" activeClassName="is-active">Go Edit!</NavLink></h4>
  </header>
);

export default Header;
