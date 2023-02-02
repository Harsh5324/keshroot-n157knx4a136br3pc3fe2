import React from 'react';

const ForgotPassword = () => {
    return (<div className='auth'>
        <h2>Forgot Password</h2>
        <p> Please enter your mail id</p>
        <input type='text' placeholder='Email id' />
        <button>Submit</button>
    </div>);
}

export default ForgotPassword;