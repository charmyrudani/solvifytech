import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '../../constants/route-paths.constants';
import './blog.css';

const blogPosts = [
    {
        id: '1',
        title: 'Can AI-Generated Art Make Your Brand More Human?',
        date: '10 Jul, 2025',
        image: '/images/blog_light_1.png'
    },
    {
        id: '2',
        title: 'Beyond Stock: How AI Image Generation Is Revolutionizing Visual...',
        date: '27 Jun, 2025',
        image: '/images/blog_light_5.png'
    },
    {
        id: '3',
        title: 'Unlocking Visual Precision: Why Custom AI Image Prompts Are the...',
        date: '27 Jun, 2025',
        image: '/images/blog_light_3.png'
    },
    {
        id: '4',
        title: 'Faces of the Future: How AI Avatar Design Is Transforming Brand Identit...',
        date: '27 Jun, 2025',
        image: '/images/blog_light_4.png'
    },
    {
        id: '5',
        title: 'Rise of the AI Artist: How Brands Are Tapping into Machine-Driven...',
        date: '27 Jun, 2025',
        image: '/images/blog_light_5.png'
    }
];

export default function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-listing-page">
            <div className="blog-grid-container">
                <div className="blog-grid-layout">
                    {blogPosts.map((post) => (
                        <Link to={`/${Paths.blog}/${post.id}`} key={post.id} className="blog-list-card">
                            <div className="blog-list-image">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="blog-list-content">
                                <span className="blog-list-date">{post.date}</span>
                                <h2 className="blog-list-title">{post.title}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}