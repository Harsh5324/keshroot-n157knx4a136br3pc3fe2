import React from 'react';
import { useDispatch } from 'react-redux';

import { authPage } from '../../redux/slices';

const Login = () => {

    const dispatch = useDispatch();

    return (<div className='auth'>
        <h2>Log in</h2>
        <p>Please enter your details</p>
        <input type='text' placeholder='Username' />
        <input type='text' placeholder='Password' />
        <span className='forgot' onClick={() => dispatch(authPage('forgotPassword'))}>Forgot Password?</span>
        <button>Log in</button>
        <div className='bottom-text'>Don’t have an account ? <span onClick={() => dispatch(authPage('signup'))}>Sign up</span></div>
    </div>);
}

export default Login;