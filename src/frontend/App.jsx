import React from 'react';
import { createHashHistory } from "history";
import { GlobalProvider } from "./context/Provider";
import { Link, MemoryRouter, Redirect, Route, Router, Switch } from "react-router-dom";
import { PrivateRouteForApplication } from './common/Routes/PrivateRoute';
import  Application  from "./views/Application";
import Login from './views/Login/Login';
import './assets/css/Common/common.css'
import Login2 from './views/Login/Login2';
import { HashRouter } from 'react-router-dom';

function App(props)  {
    const hist = createHashHistory 
 return(
    <GlobalProvider>
       <HashRouter history={hist}>
       {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login2">login2</Link>
            </li>
            <li>
              <Link to="/application">application</Link>
            </li>
          </ul>
        </nav> */}
            <Switch>
               {/* <Route path="/login2" render={(props) => <Login2 {...props} />}></Route> */}
               <Route path="/login" render={(props) => <Login {...props} />}></Route>
               <Route path="/application" render={(props) => <Application {...props} />}></Route>
               
               <Redirect to="/login"></Redirect>
            </Switch>
       </HashRouter>
       {/* <Login></Login> */}
    </GlobalProvider>
 );
}
export default App;