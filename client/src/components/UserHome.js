import React, { useEffect } from 'react';
import { userProfile } from '../actions/user_action';
import { useDispatch, useSelector } from 'react-redux';
import Image from '../Images/userIcon.png';

const UserHome = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userProfile());
    }, [dispatch]);

    const { currentUser } = useSelector(state => state.userProfileReducer);

    return (
        <div className="col-md-4 m-auto">
            <div className="card mt-2" style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
                <img
                    src={Image}
                    alt="Profile"
                    style={{ height: '250px', width: '250px', borderRadius: '50%', marginLeft: '17%' }}
                />
                <h3 style={{ textAlign: 'center', color: '#333', marginTop: '20px' }}>
                    {currentUser && currentUser[0] && currentUser[0].name}
                </h3>
                <div style={{ backgroundColor: '#2c5c69', padding: '20px', color: 'white', textAlign: 'center' }}>
                    {currentUser && currentUser[0] && currentUser[0].isAdmin ? (
                        <p style={{ fontSize: '22px', marginBottom: '10px' }}>
                            <b>Employee Id:</b> {currentUser && currentUser[0] && currentUser[0].roll_no}
                        </p>
                    ) : (
                        <>
                            <p style={{ fontSize: '22px', marginBottom: '10px' }}>
                                <b>Email Id:</b> {currentUser && currentUser[0] && currentUser[0].email}
                            </p>
                            <p style={{ fontSize: '22px', marginBottom: '10px' }}>
                                <b>Enrollment No:</b> {currentUser && currentUser[0] && currentUser[0].roll_no}
                            </p>
                            <p style={{ fontSize: '22px', marginBottom: '10px' }}>
                                <b>Branch:</b> {currentUser && currentUser[0] && currentUser[0].branch}
                            </p>
                            <p style={{ fontSize: '22px', marginBottom: '10px' }}>
                                <b>Admission Year:</b> {currentUser && currentUser[0] && currentUser[0].admission_year}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserHome;
