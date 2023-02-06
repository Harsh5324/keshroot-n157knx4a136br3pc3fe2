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
        <ol>
            <li>Shake the bottle well and dispense oil directly on the scalp using the applicator.</li>
            <li>Massage oil into the scalp and work through the hair</li>
            <li>Leave in for at least 30 minutes or overnight.</li>
            <li>Rinse thoroughly with shampoo and water to remove.</li>
        </ol>
        <p>
            <b>Direction for Use: </b>
            Open the KESHROOT HAIR oil cap, Attach the Deep Root Hair
            Comb Applicator, Place it on the affected area, Press the bottle for the oil to flow, and
            Massage the oil further into the scalp using your fingertips.
        </p>
        <p>
            <b>Caution: </b>
            Store in a cool dry place, away from sunlight, heat & moisture. Avoid contact
            with eyes.
        </p>
        <p>
            <b>Manufactured By: </b>
            Indo Herbal Products (Unit 2).Plot No.29, Sector 1-B, IIE&#60; Ranipur, Sidcul, Haridwar 249403 (U.K.) Regd. Office: C-84, Panchseel Enclave, New Delhi 110017
        </p>
        <p>
            <b>Mfg Lic. No.: </b>  UK.AY.-290/2014
        </p>
        <p>
            <b>Marketed By: </b>
            Smart Laboratories Pvt. Ltd. 1004, Brooklyn Tower, Nr. YMCA Club, S. G.
            Highway, Ahmedabad 380051 (Guj.) <a href='mailto:care@smartlaboratories.co.in'>care@smartlaboratories.co.in</a> | <a href='tel:7949136601'>+91-79–49136601</a>
        </p>
        <p>
            <b>Country of Origin: </b> India
        </p>
        <div className='images'>
            <img src={images.product1} />
            <img src={images.product2} />
            <img src={images.product3} />
            <img src={images.product4} />
            <img src={images.product5} />
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