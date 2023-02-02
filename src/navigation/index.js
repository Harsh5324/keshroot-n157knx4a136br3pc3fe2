import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Home from '../pages/app/home';
import Shop from '../pages/app/shop';
import AboutUs from '../pages/app/aboutus';
import Blog from '../pages/app/blog';
import ContactUs from '../pages/app/contactus';
import Login from '../pages/auth/login';
import Signup from '../pages/auth/signup';
import ForgotPassword from '../pages/auth/forgotpassword';
import ResetPassword from '../pages/auth/resetpassword';
import { showAuth } from '../redux/slices';

const Navigation = () => {

    const auth = useSelector(state => state.showAuth.value);
    const authPage = useSelector(state => state.authPage.value);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(showAuth(true));
        }, 7000);
    }, [])

    return (<Router>
        {auth && (<div className='auth-cover' onClick={() => dispatch(showAuth(false))}></div>)}
        {auth ? authPage === 'login' ? <Login /> : authPage === 'signup' ? <Signup /> : authPage === 'forgotPassword' ? <ForgotPassword /> : <ResetPassword /> : null}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/blog' element={<Blog post={false} />} />
            <Route path='/blog/:post' element={<Blog post />} />
            <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
    </Router>);
}

export default Navigation;