import React from 'react';

import Footer from '../../components/footer';
import Header from '../../components/header';
import SectionA from '../../components/aboutus/sectiona';
import SectionC from '../../components/aboutus/sectionc';
import SectionB from '../../components/aboutus/sectionb';
import SectionD from '../../components/aboutus/sectiond';

import '../../css/aboutus.css';

const AboutUs = () => {
    return (<div className='about-us'>
        <Header activepage='about-us' />
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
        <Footer />
    </div>);
}

export default AboutUs;