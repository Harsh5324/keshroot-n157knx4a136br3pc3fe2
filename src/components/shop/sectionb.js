import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

import images from '../../constants/images';

const SectionB = () => {

    const [tab, setTab] = useState(0);

    return (<div className='tab-view'>
        <section className='first'>
            <div className='tabs'>
                <span onClick={() => setTab(0)} className={tab === 0 ? 'active' : null}>Product Details</span>
                <span onClick={() => setTab(1)} className={tab === 1 ? 'active' : null}>Reviews</span>
                <span onClick={() => setTab(2)} className={tab === 2 ? 'active' : null}>Shipping and Return</span>
            </div>
        </section>
        <section>
            <div className='content'>
                {
                    tab === 0 ? (<ProductDetails />)
                        : tab === 1 ? (<Reviews />)
                            : <ShippingAndReturn />
                }
            </div>
        </section>
    </div>);
};

const ProductDetails = () => (
    <>
        <p>Keshroot Ayurvedic Oil is an all-natural hair care solution made from 13 rich herbs and extracts that nourish the roots and promote healthy, strong hair. This powerful ayurvedic oil is designed to be a one-stop solution for all of your hair problems, helping you achieve the strong, healthy roots you need to move ahead in life.</p>
        <p>With its unique blend of natural ingredients, Keshrrot Ayurvedic Oil nourishes and strengthens the hair from the root, helping to prevent breakage and promote growth. Whether you're dealing with dry, damaged hair, or simply looking to maintain the health and strength of your locks, this ayurvedic oil is here to be your partner in hair care.</p>
        <div className='images'>
            <img src={images.product1} />
            <img src={images.product2} />
            <img src={images.product3} />
            <img src={images.product4} />
        </div>
    </>
);

const Reviews = () => (
    <></>
);

const ShippingAndReturn = () => (
    <>
        <p>To initiate a cancellation, please contact us through the "Contact Us" link. We will respond within 24 hours.</p> <p>To be eligible for a return, the item must be in its original condition and packaging. A refund will be issued to your original payment method upon receipt of the returned item. If the payment was made through COD, you will be prompted to provide your bank account details for a secure refund transaction. Returns cannot be requested until the item has been delivered.</p> <p>Only items that are damaged will be eligible for a return. Once the packaging has been opened, returns will not be accepted. Returns must be requested within 7 days of delivery.</p>
    </>
);

export default SectionB;