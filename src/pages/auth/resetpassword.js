import React from 'react';

const ResetPassword = () => {
    return (<div className='auth'>
        <h2>Reset Password</h2>
        <p>Please enter your new password</p>
        <input type='password' placeholder='New Password' />
        <input type='password' placeholder='Re-enter Password' />
        <button>Update</button>
    </div>);
}

export default ResetPassword;