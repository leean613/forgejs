import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authenticationService } from '../../services/Login/AuthenticationService';
// import { authenticationService } from '../../../services/Login/AuthenticationService';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            const system = localStorage.getItem('system') ? localStorage.getItem('system') : null;
            const token = authenticationService.token;
            if (!token || !system) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            // authorised so return component
            return <Component {...props} {...rest} />
        }} />
    )
}
export const PrivateRouteForAdmin = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            const token = authenticationService.token;
            if (!token) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            // authorised so return component
            return <Component {...props} />
        }} />
    )
}
export const PrivateRouteForApplication = ({ component: Component, ...rest }) => {
    console.log("PrivateRouteForApplication");
    return (
        <Route {...rest} render={props => {
            const token = authenticationService.token;
            if (!token) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }
            return <Component {...props} />
        }} />
    )
}