import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useAuth0 } from "./react-auth0-wrapper";

import Navbar from './Components/Navbar'
import { privateRoutes, publicRoutes } from './routes';

const renderRoutes = (routes) => {
  return routes.map((route, index) => {
    return <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  })
}

function App() {
  const { isAuthenticated } = useAuth0();
  // Cơ chế Switch giống như switch/case condition
  // Nếu ko rơi vào những case 
  // thì sẽ chạy xử lý dưới default 
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          {
            isAuthenticated &&
            <>
              {renderRoutes(privateRoutes)}
            </>
          }
          {/* default */}
          {renderRoutes(publicRoutes)}
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
