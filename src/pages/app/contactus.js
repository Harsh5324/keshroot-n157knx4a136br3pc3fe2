import React from 'react';

import images from '../../constants/images';
import icons from '../../constants/icons';

import Footer from '../../components/footer';
import Header from '../../components/header';

import '../../css/contactus.css';

const ContactUs = () => {
    return (<div>
        <Header activepage='contact-us' />
        <div className='container-section'>
            <section id='form'>
                <h2>Contact us</h2>
                <p>Get in touch and let us know how we can help. Have a question but aren’t sure who to contact? Get in touch and a member of our team will reach out to you.</p>
                <div className='form'>
                    <div className='form-section'>
                        <input type='text' placeholder='First name' />
                        <input type='text' placeholder='Last name' />
                    </div>
                    <div className='form-section'>
                        <input type='text' placeholder='Email' />
                        <input type='text' placeholder='Phone number' />
                    </div>
                    <div className='form-section'>
                        <input type='text' placeholder='Subject' />
                    </div>
                    <div className='form-section'>
                        <textarea placeholder='Message' />
                    </div>
                    <button>Submit</button>
                </div>
            </section>
            <section id='info'>
                <img id='logo' src={images.logo} />
                <h3>Address:</h3>
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                <h3>Phone:</h3>
                <a href='tel:2015550124'><p>(201) 555-0124</p></a>
                <h3>Email</h3>
                <a href='mailto:kenzi.lawson@example.com'><p>kenzi.lawson@example.com</p></a>
                <div className='social'>
                    <h3>Stay connected</h3>
                    <main>
                        <a href='#' target='_blank'><img src={icons.facebookBlack} /></a>
                        <a href='#' target='_blank'><img src={icons.instagramBlack} /></a>
                        <a href='#' target='_blank'><img src={icons.twitterFullBlack} /></a>
                    </main>
                </div>
            </section>
        </div>
        <Footer />
    </div>);
}

export default ContactUs;