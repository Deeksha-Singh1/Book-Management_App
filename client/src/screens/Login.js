import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../actions/user_action";
import { useDispatch } from 'react-redux'
import StudentIMage from "../Images/student4.jpg"
const Login = () => {

    const [password, setPassword] = useState("");
    const[show,setShow] = useState("password") 
    const [roll_no, setRoll_no] = useState("")
    const dispatch = useDispatch()

    const PostData = () => {
        const user = { password, roll_no }
        dispatch(loginUser(user))
    };

    const handleShow = ()=> {
        if(show === "password"){
            setShow("text")
        } else {
            setShow("password")
        }
    }

    return (
        <div >
            <div className="LoginPage"></div>
            <div className="login_container" style={{textAlign:"center"}}>
               
                    <div className="col-md-6 m-auto" style={{opacity:1}}>
                        <div style={{marginLeft:"37%"}}>
                        <div id="circle"></div>
                      
                        </div>
                        <p style={{color:"white",fontWeight:"800",textAlign:"center"}}>Welcome to Library
Management System</p>
<img src={StudentIMage} alt="StudentIMage" style={{height:"220px",width:"220px",borderRadius:"50%"}} />
                    <div style={{marginTop:"20px"}}>
                        <input type="text" className="form-control" style={{height:"60px",borderRadius:"20px"}}
                         placeholder="roll_no" value={roll_no} onChange={(e) => setRoll_no(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <input type="text"  style={{height:"60px",borderRadius:"20px"}}
                        className="form-control"  placeholder="password"
                         value={password} onChange={(e) => setPassword(e.target.value)} />
                        <i className="fas fa-eye"  onClick={() =>  handleShow()}></i>
                    </div>
                     <br />



                    <button style={{width:"100%",height:"60px",color:"white",borderRadius:"20px",backgroundColor:"red"}} onClick={() => PostData()}>
                        Login 
                    </button>
                    </div>
                    <br />
                    <Link to="/register"  style={{fontFamily:"sans-serif",color:"white",textDecoration:"none"}}>Register Here</Link>
               
            </div>
        </div>
    );
};



export default Login;