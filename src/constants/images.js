const images = {
    feature: require('../assets/images/feature.png'),
    logo: require('../assets/images/logo.png'),
    getToKnow: require('../assets/images/get_to_know.png'),
    girl: require('../assets/images/girl.png'),
    bottomArt: require('../assets/images/bottom_art.png'),
    collabs1: require('../assets/images/collabs_1.png'),
    collabs2: require('../assets/images/collabs_2.png'),
    collabs3: require('../assets/images/collabs_3.png'),
    collabs4: require('../assets/images/collabs_4.png'),
    instagramId: require('../assets/images/instagram_id.png'),
    shop1: require('../assets/images/shop_1.png'),
    shop2: require('../assets/images/shop_2.png'),
    shop3: require('../assets/images/shop_3.png'),
    shop4: require('../assets/images/shop_4.png'),
    shop5: require('../assets/images/shop_5.png'),
    about1: require('../assets/images/about_1.png'),
    about2: require('../assets/images/about_2.png'),
    about3: require('../assets/images/about_3.png'),
    product1: require('../assets/images/product_1.png'),
    product2: require('../assets/images/product_2.png'),
    product3: require('../assets/images/product_3.png'),
    product4: require('../assets/images/product_4.png'),
    product1: require('../assets/images/blog_1.png'),
    product2: require('../assets/images/blog_2.png'),
    product3: require('../assets/images/blog_3.png'),
    blog1: require('../assets/images/blog_1.png'),
    blog2: require('../assets/images/blog_2.png'),
    blog3: require('../assets/images/blog_3.png'),
};

// instagram images
for (let i = 0; i < 8; i++) {
    images['instagram' + (i + 1)] = require(`../assets/images/instagram_${i + 1}.png`)
};

export default images;