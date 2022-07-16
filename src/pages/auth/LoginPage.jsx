import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loginformik from '../../components/pure/forms/LoginFormik';

const Loginpage = () => {

    const navigation = useNavigate()
    return (
        <div>
            <h1>Login Page</h1>
            <Loginformik></Loginformik>
            <button onClick={() => navigation('/registration')}>Create New Account</button>
        </div>
    );
}

export default Loginpage;
