import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const navigation = useNavigate()


    

    return (
        <div>
            <h1>Home Page</h1>

                <button onClick={() => navigation('/profile')}>
                    Profile
                </button>
                <button onClick={() => navigation('/login')}>
                    Log In
                </button>
                <button onClick={() => navigation('/registration')}>
                    Create New Account
                </button>
            
        </div>
    );
}

export default Homepage;
