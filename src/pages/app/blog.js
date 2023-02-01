import React from 'react';
import { Link } from 'react-router-dom';

import images from '../../constants/images';

import Footer from '../../components/footer';
import Header from '../../components/header';

import '../../css/blog.css';

const Blog = ({ post }) => {

    const data = [];
    const recentPostData = [];

    if (post) {
        window.scrollTo(0, 0);
    }

    for (let i = 0; i < 3; i++) {
        data.push({
            thumbnail: images['blog' + (i + 1)],
            title: 'How Bhumija Ayurvedic Hair Oil Helps in Reducing Gray Hair?',
            description: 'vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
            postedAt: 'November 16, 2022',
            postedBy: 'Admin keshroot',
        });
    };

    for (let i = 0; i < 3; i++) {
        recentPostData.push({
            thumbnail: images.feature,
            description: 'vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum',
        });
    };

    return (<div className='blog-section'>
        <Header activepage='blog' />
        {!post ? (<h1>Blog</h1>) : <div style={{ marginTop: 50, }}></div>}
        <div className='blog'>
            <Link className='recent-posts' to='/blog/how-bhumija-ayurvedic-hair-oil-helps-in-reducing-gray-hair'>
                <h2>Recent posts</h2>
                {
                    recentPostData.map(item => (
                        <div className='recent-post'>
                            <img src={item.thumbnail} />
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </Link>
            <div className='blog-posts'>
                {!post ? (
                    <>
                        {
                            data.map(item => (
                                <div className='blog-post'>
                                    <img src={item.thumbnail} />
                                    <h2>{item.title}</h2>
                                    <ul>
                                        <li>{item.postedAt}</li>
                                        <li>{item.postedBy}</li>
                                    </ul>
                                    <p>{item.description}</p>
                                    <Link to='/blog/how-bhumija-ayurvedic-hair-oil-helps-in-reducing-gray-hair'>Read more...!</Link>
                                </div>
                            ))
                        }
                    </>
                ) : (
                    <div className='post-view'>
                        <h1>How Bhumija Ayurvedic Hair Oil Helps in Reducing Gray Hair?</h1>
                        <ul>
                            <li>November 16, 2022</li>
                            <li>Posted by Admin keshroot</li>
                        </ul>
                        <div className='content'>
                            <img src={images.blog1} />
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                            <h2>Sed ut perspiciatis</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <h2>Sed ut perspiciatis</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <h2>Sed ut perspiciatis</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                        </div>
                        <Comment />
                    </div>
                )}
            </div>
        </div>
        <Footer />
    </div>);
};

const Comment = () => (
    <div className='comment'>
        <section>
            <input type='text' placeholder='First name' />
            <input type='text' placeholder='Email' />
        </section>
        <textarea placeholder='Message' />
        <button>Post Comment</button>
    </div>
);

export default Blog;