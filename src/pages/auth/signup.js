import React from 'react';
import { useDispatch } from 'react-redux';

import { authPage } from '../../redux/slices';

const Signup = () => {

    const dispatch = useDispatch();

    return (<div className='auth'>
        <h2>Sign up</h2>
        <p>Please enter your details</p>
        <input type='text' placeholder='Username' />
        <input type='text' placeholder='Password' />
        <input type='text' placeholder='Email ID' />
        {/* <span className='forgot'>Forgot Password?</span> */}
        <button>Log in</button>
        <div className='bottom-text'>Already have an account ? <span onClick={() => dispatch(authPage('login'))}>Log in</span></div>
    </div>);
}

export default Signup;