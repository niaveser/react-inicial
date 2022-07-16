import React from 'react';
import { useNavigate } from 'react-router-dom';

const Progilepage = () => {
    const navigation = useNavigate()
    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={() => navigation('/contacts')}>
                    Check your contacts' list
                </button>
        </div>
    );
}

export default Progilepage;
