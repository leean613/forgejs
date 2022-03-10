import React, {useState} from "react";
import { Link } from "react-router-dom";

function Login2(props) {
//   const [filePath, setFilePath] = useState([]);
    const [user, setUser] = useState([]);

    const  openFileAA = async () => {
        console.log(window);
        const files = await window.electron.openFile();
        console.log('user files', files);
        if (files.filePaths) {
        //   setFilePath(files.filePaths);
        }
    }
    const getCustomerFromDb =async () =>{
        console.log(window.electron);
        let result = await window.electron.electronAPI()
        if(result?.length > 0){
          setItem(result);
        }
        console.log(result);
    }
    return (<>
        <h1>Login2</h1>
        <Link to="/login1" ><button>Tới login1</button> </Link>
        <button onClick={()=> {openFileAA()}}> open file</button>
        <button style={{display:"block"}} onClick={()=> {getCustomerFromDb()}}> get user</button>

    </>);
}
export default Login2;