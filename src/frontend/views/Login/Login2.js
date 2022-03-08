import React from "react";
import { Link } from "react-router-dom";

function Login2(props) {
    console.log("in login 2");
    console.log(props);
    return (<>
        <h1>Login2</h1>
        <Link to="/login1" ><button>Tới login1</button> </Link>
    </>);
}
export default Login2;