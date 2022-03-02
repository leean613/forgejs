import React from 'react';
import { createBrowserHistory } from "history";
import { GlobalProvider } from "./context/Provider";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { PrivateRouteForApplication } from './common/Routes/PrivateRoute';
import  Application  from "./views/Application";
import Login from './views/Login/Login';

function App(props)  {
    const hist = createBrowserHistory();
    console.log(hist);
 return(
    <GlobalProvider>
       <Router history={hist}>
            <Switch>
               {/* <PrivateRouteForApplication path="/application" component={Application} /> */}
               <Route path="/login" render={(props) => <Login {...props} />}></Route>
               <Redirect to="/login"></Redirect>
            </Switch>
       </Router>
    </GlobalProvider>
 );
}
export default App;