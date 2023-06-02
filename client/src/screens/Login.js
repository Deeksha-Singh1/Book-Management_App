import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../actions/user_action";
import { useDispatch } from 'react-redux';
import StudentImage from "../Images/student.jpg";

const Login = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [roll_no, setRoll_no] = useState("");
    const dispatch = useDispatch();

    const PostData = () => {
        const user = { password, roll_no };
        dispatch(loginUser(user));
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className="LoginPage"></div>
            <div className="login_container" style={{ textAlign: "center" }}>
                <div className="col-md-6 m-auto" style={{ opacity: 1 }}>
                    <div style={{ marginLeft: "37%" }}>
                        <div id="circle"></div>
                    </div>
                    <p style={{ color: "white", fontWeight: "800", textAlign: "center" }}>Welcome to Library Management System</p>
                    <img src={StudentImage} alt="StudentImage" style={{ height: "220px", width: "220px", borderRadius: "50%" }} />
                    <div style={{ marginTop: "20px" }}>
                        <input type="text" className="form-control" style={{ height: "60px", borderRadius: "20px" }} placeholder="roll_no" value={roll_no} onChange={(e) => setRoll_no(e.target.value)} />
                    </div>
                    <br />
                    <div style={{ position: "relative" }}>
                        <input
                            type={showPassword ? "text" : "password"}
                            style={{ height: "60px", borderRadius: "20px", paddingRight: "40px" }}
                            className="form-control"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i
                            className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                            onClick={toggleShowPassword}
                            style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", cursor: "pointer" }}
                        ></i>
                    </div>
                    <br />
                    <button style={{ width: "100%", height: "60px", color: "white", borderRadius: "20px", backgroundColor: "red" }} onClick={() => PostData()}>
                        Login
                    </button>
                    <br />
                    <br />
                    <Link to="/register" style={{ fontFamily: "sans-serif", color: "white", textDecoration: "none" }}>Register Here</Link>

                    <br />
                    <br />
                    <Link to="/" style={{ fontFamily: "sans-serif", color: "white", textDecoration: "none" }}>Go To Home Page</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
