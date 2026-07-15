import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '../../constants/route-paths.constants';
import { blogPosts } from '../../data/blogs.data';
import './blog.css';
import { GoHome } from 'react-icons/go';

export default function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-listing-page">
            <nav className="blog-breadcrumbs" aria-label="breadcrumb">
                <ol className="blog-breadcrumb-list">
                    <li className="blog-breadcrumb-item">
                        <Link to="/" className="blog-breadcrumb-link home-icon-link" aria-label="Home">
                            <GoHome size={20} />
                        </Link>
                    </li>
                    <li className="blog-breadcrumb-item blog-breadcrumb-current">Blog</li>
                </ol>
            </nav>

            <div className="blog-header-section">
                <h1 className="blog-page-title">
                    Our Blog &amp; Insights
                </h1>
                <p className="blog-page-subtitle">
                    Ideas, perspectives, and deep dives from the Solvify Tech team.
                </p>
            </div>
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
