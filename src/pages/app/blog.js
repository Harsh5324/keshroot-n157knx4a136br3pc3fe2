import React from 'react';

import ComingSoon from '../../components/commingsoon';
import Footer from '../../components/footer';
import Header from '../../components/header';

const Blog = () => {
    return (<div>
        <Header activepage='blog' />
        <ComingSoon />
        <Footer />
    </div>);
}

export default Blog;