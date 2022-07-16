import React from 'react';
import { useNavigate } from 'react-router-dom';
import Registerformik from '../../components/pure/forms/registerFormik';

const Registerpage = () => {
    const navigation = useNavigate()
    return (
        <div>
            <h1>Register Page</h1>
            <Registerformik></Registerformik>
            <h5>Already have an account?</h5>
            <button onClick={() => navigation('/login')}>Log in</button>
        </div>
    );
}

export default Registerpage;

