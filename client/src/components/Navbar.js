import React from 'react';
import { useSelector } from 'react-redux';


const Navbar = () => {
 
    const {currentUser} = useSelector(state => state.userLoginReducer) ;
    console.log(currentUser)
    return (
        <div >
           <nav className=" shadow   bg-white rounded navbar fixed-top navbar-white " style={{height:"60px"}}>
            <div className="container-fluid">
               
                <a className="navbar-brand" href="/dashboard" 
                style={{fontFamily:"oswald",fontSize:"30px",marginTop:"-12px",color:"teal"}}>Library Management System</a>
                <p style={{textAlign:"center",marginRight:"10%",fontFamily:"sans-serif",fontSize:"24px",color:"black"}}>
                <i  className="far fa-user "></i> { " "}{ currentUser && currentUser.user.name.split(" ")[0]}</p>
            </div>
        
          
          
            </nav> 
        </div>
    );
};

export default Navbar;