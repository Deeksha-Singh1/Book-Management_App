import React from 'react';
import { Link } from "react-router-dom";
import StudentImage from "../Images/student44.jpg";
import AdminImage from "../Images/AdminIcon.jpg";
import LibraryBackground from "../Images/libraryy.avif";
import './Home.css';

const Home = () => {
    return (
        <div className="HomePage" style={{ backgroundImage: `url(${LibraryBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ maxWidth: '600px', padding: '20px', background: 'rgba(45, 15, 5, 0.7)', borderRadius: '10px' }}>
                <h1 style={{ textAlign: "center", fontFamily: 'Arial, sans-serif', fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', color: "white" }}>Library Management App</h1>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <div className="card" style={{ textAlign: 'center', padding: '20px', borderRadius: '5px' }}>
                        <img src={AdminImage} alt="AdminImage" style={{ height: "250px", width: "220px", borderRadius: '5px',paddingBottom:"20px" }} />
                        <Link className="link_class" to="/adminLogin"><button className="sign-in-button">Sign In as Admin</button></Link>
                    </div>
                    <div className="card" style={{ textAlign: 'center', padding: '20px', borderRadius: '5px' }}>
                        <img src={StudentImage} alt="StudentImage" style={{ height: "250px", width: "250px", borderRadius: '5px' ,paddingBottom:"20px"}} />
                        <Link className="link_class" to="/login"><button className="sign-in-button">Sign In as Student</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
