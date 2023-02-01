import React, { useEffect, useState } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import { useSelector } from 'react-redux';

const Slider = () => {

    const [images, setImages] = useState([]);

    const homeApi = useSelector(state => state.homeApi.value);

    useEffect(() => {
        if (homeApi) {
            const imgs = [];
            homeApi.slider.media.forEach(item => {
                imgs.push({ url: item });
            });
            setImages(imgs);
        };
    }, [homeApi]);

    return (images.length > 0 ? (
        <SimpleImageSlider
            width='100%'
            height='80vh'
            images={images}
            showBullets
            showNavs
            autoPlay
        />
    ) : <></>);
}

export default Slider;