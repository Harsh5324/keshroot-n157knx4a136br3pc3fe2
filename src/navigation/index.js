import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/app/home';
import Shop from '../pages/app/shop';
import AboutUs from '../pages/app/aboutus';
import Blog from '../pages/app/blog';
import ContactUs from '../pages/app/contactus';

const Navigation = () => {
    return (<Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
    </Router>);
}

export default Navigation;