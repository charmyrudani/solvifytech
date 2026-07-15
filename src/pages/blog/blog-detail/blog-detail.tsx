import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Paths } from '../../../constants/route-paths.constants';
import './blog-detail.css';
import { GoHome } from 'react-icons/go';
import { FiEye } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const relatedBlogs = [
    {
        id: '2',
        title: 'Beyond Shopify: Designing Custom Multi-Vendor Commerce Portals...',
        date: '27 Jun, 2025',
        image: '/images/blogs/blog2.png'
    },
    {
        id: '3',
        title: 'The Power of Headless CMS: How Creative Agencies Scale Digital...',
        date: '27 Jun, 2025',
        image: '/images/blogs/blog3.png'
    },
    {
        id: '4',
        title: 'How DOCCURE Built India\'s First Dermatology-First Practice...',
        date: '27 Jun, 2025',
        image: '/images/blogs/blog4.png'
    }
];

const popularServices = [
    {
        id: Paths.aiDevelopment,
        title: 'AI Development Services',
        rating: '5',
        reviews: '12',
        image: '/images/blogs/blog1.png'
    },
    {
        id: Paths.uiUxDesign,
        title: 'UI/UX Design Services',
        rating: '4.9',
        reviews: '24',
        image: '/images/blogs/blog5.png'
    },
    {
        id: Paths.webDevelopment,
        title: 'Web Development Services',
        rating: '4.8',
        reviews: '50',
        image: '/images/blogs/blog3.png'
    }
];

const blogData = {
    '1': {
        title: 'HOW WE BUILT TAP1CE: REDEFINING PROFESSIONAL NETWORKING WITH NFC & QR TECHNOLOGY',
        date: '10 Jul, 2025',
        views: '1.2K',
        image: '/images/blogs/blog1.png',
        excerpt: 'Traditional paper business cards are static, easily lost, and hard to update. Discover how Solvifytech engineered Tap1ce—a modern digital networking platform powered by NFC and QR technology, enabling instant contactless identity sharing, lead capture, and enterprise analytics.',
        content: `
            <p>Professional networking is undergoing a digital revolution. The age-old ritual of exchanging paper business cards is fast disappearing, replaced by smart, contactless, and dynamic digital identity sharing. At Solvifytech, we partnered with Tap1ce to turn this vision into a scalable, high-performing reality.</p>

            <p>Our challenge was not just to build digital business cards, but to engineer a robust networking ecosystem that functions seamlessly across devices, supports multiple user roles, handles corporate branding, and facilitates automated lead generation—all without requiring a native app download.</p>

            <h3>The Challenge: Moving Beyond Static Cards</h3>
            <p>Tap1ce wanted to build a web-first application that allowed users to share customizable profiles instantly. The platform needed to support:</p>
            <ul>
                <li><strong>NFC-powered sharing</strong>: Sharing details instantly with a single tap of an NFC card.</li>
                <li><strong>QR code integration</strong>: Dynamic QR codes for quick scanning.</li>
                <li><strong>Multi-profile management</strong>: Maintaining distinct business and personal profiles on a single account.</li>
                <li><strong>Enterprise controls</strong>: Enabling large companies to manage, customize, and track employee cards.</li>
            </ul>

            <h3>Our Engineering Approach</h3>
            <p>To deliver a fast, app-like experience on the web, we utilized <strong>React.js</strong> and <strong>Next.js</strong> for the frontend. We chose Next.js for its superior rendering capabilities, ensuring quick page load times which is critical when someone is scanning a QR code or tapping an NFC card during a quick meeting.</p>
            <p>On the backend, <strong>Node.js</strong> and <strong>Express.js</strong> manage authentication, database interactions, and business logic, backed by a highly optimized <strong>PostgreSQL</strong> database. <strong>Redis</strong> is used for caching active profiles to ensure sub-second response times.</p>

            <h3>The Business Impact</h3>
            <p>By shifting from paper to digital, Tap1ce users have collectively reduced waste while increasing follow-up rates by over 40%. The corporate dashboard has allowed companies to gain valuable analytics on networking effectiveness, transforming card exchange from a static transaction into a data-driven sales channel.</p>
            
            <h4>Interested in Building a Smart Digital Product?</h4>
            <p>Solvifytech helps businesses engineer scalable SaaS platforms and custom digital products from the ground up.<br/><a href="/contact-us">Get in touch with our team today.</a></p>
        `
    },
    '2': {
        title: 'BEYOND SHOPIFY: DESIGNING CUSTOM MULTI-VENDOR COMMERCE PORTALS FOR ENTERPRISE SCALE',
        date: '27 Jun, 2025',
        views: '980',
        image: '/images/blogs/blog2.png',
        excerpt: 'While Shopify is a world-class commerce engine, native multi-vendor setups often introduce operational friction. Learn how Solvifytech designed a custom vendor portal layer on top of Shopify for Wines of NZ, separating operations from execution to keep data consistent and order fulfillment structured.',
        content: `
            <p>Shopify is incredibly powerful, but as marketplaces grow, giving multiple external suppliers direct access to the Shopify admin panel can become a security and operational nightmare. Uncoordinated product listings, pricing mistakes, and inventory discrepancies quickly degrade the customer experience.</p>

            <p>For Wines of NZ, a premium multi-vendor marketplace, we designed a solution that separated the commerce execution layer (Shopify) from the operational workflow (a custom vendor portal), bringing structured control and peace of mind to the administrative team.</p>

            <h3>The Problem: Operational Clutter</h3>
            <p>With dozens of wine merchants uploading inventory and updating prices, the admin team was spent correcting errors in Shopify. Giving vendors direct store access created issues with:</p>
            <ul>
                <li>Inconsistent product descriptions and formatting.</li>
                <li>Accidental pricing changes without corporate oversight.</li>
                <li>Poor tracking of order fulfillment steps across different suppliers.</li>
            </ul>

            <h3>The Solution: Custom Vendor Management Layer</h3>
            <p>Instead of relying on third-party Shopify apps that clobber the database, we engineered a custom <strong>React/Next.js</strong> dashboard for vendors. Vendors log into their dedicated space where they submit products and confirm inventory. All updates go through an automated validation workflow and require admin approval before a background sync script pushes them to Shopify via the Shopify Admin API.</p>

            <h3>The Result: Structured Scale</h3>
            <p>Now, 0% of external vendors have direct Shopify access, eliminating security risks. Data inconsistency has fallen to zero, and the order validation workflow has made vendor-fulfilled shipping predictable and easy to manage. The platform is now fully ready to support high-growth supplier onboarding.</p>
        `
    },
    '3': {
        title: 'THE POWER OF HEADLESS CMS: HOW CREATIVE AGENCIES SCALE DIGITAL OPERATIONS FAST',
        date: '27 Jun, 2025',
        views: '1.1K',
        image: '/images/blogs/blog3.png',
        excerpt: 'Explore how headless CMS architectures empower marketing and creative teams to manage and publish content independently while developers deliver ultra-fast, premium user experiences on Next.js. Read our case study with Collective Creative Labs.',
        content: `
            <p>For fast-growing creative agencies, agility is everything. Yet, traditional CMS platforms like standard WordPress monoliths often force a compromise: either marketers are blocked by developers for simple changes, or developers are restricted by rigid templates that degrade performance and SEO.</p>

            <p>To break this bottleneck for Collective Creative Labs, Solvifytech implemented a <strong>Headless CMS Architecture</strong>, separating the content management dashboard from the frontend presentation layer.</p>

            <h3>What is a Headless CMS?</h3>
            <p>Unlike traditional platforms, a headless CMS acts as a content repository that delivers data via a REST or GraphQL API. This decouples the backend editor (e.g., WordPress or Strapi) from the public website (built on Next.js and React). Marketers still get the familiar editing experience, while developers have absolute freedom over coding and styling.</p>

            <h3>Why We Chose Headless for Collective Creative Labs</h3>
            <ul>
                <li><strong>Blazing Fast Performance</strong>: Next.js pre-renders pages as static HTML, achieving near-instant load times and high SEO scores.</li>
                <li><strong>Ultimate Design Freedom</strong>: No template constraints meant we could deliver a premium, fluid UI with rich micro-animations.</li>
                <li><strong>Security</strong>: The database and CMS are hidden behind a CDN, making the site highly resistant to hacking attempts.</li>
            </ul>

            <h3>Long-Term Partnership</h3>
            <p>Beyond the architectural shift, our partnership with Collective Creative Labs continues. We constantly optimize their performance, build new dynamic campaign landing pages, and handle infrastructure scaling so their creative team can focus entirely on campaigns.</p>
        `
    },
    '4': {
        title: 'HOW DOCCURE BUILT INDIA\'S FIRST DERMATOLOGY-FIRST PRACTICE MANAGEMENT PLATFORM',
        date: '27 Jun, 2025',
        views: '1.4K',
        image: '/images/blogs/blog4.png',
        excerpt: 'Most practice management software is built for general practitioners, ignoring the visual and procedural nuances of aesthetic and dermatology clinics. Discover how Solvifytech helped DOCCURE build an all-in-one digital operating system for specialized clinics.',
        content: `
            <p>Healthcare technology has advanced rapidly, yet specialized clinics (like dermatology, aesthetic, and hair transplant clinics) are often left behind. They have unique workflows, such as tracking skin progress via clinical photographs, managing aesthetic package deals, and coordinating multi-branch doctor schedules.</p>

            <p>Solvifytech partnered with DOCCURE to engineer a dermatology-first practice management platform that automates administrative tasks while delivering tailored clinical tools for doctors and surgeons.</p>

            <h3>Key Features of DOCCURE</h3>
            <ul>
                <li><strong>Clinical Photography Management</strong>: Securely uploading, categorizing, and comparing before/after clinical photographs of skin progress.</li>
                <li><strong>Electronic Medical Records (EMR)</strong>: An interactive examination panel designed specifically for recording dermatological diagnoses.</li>
                <li><strong>Package & Billing Workflows</strong>: Smooth management of multi-session treatments (e.g. laser hair removal packages) and automatic billing.</li>
                <li><strong>AI Clinical Assistance</strong>: Helping doctors analyze trends and automate patient follow-up instructions.</li>
            </ul>

            <h3>Engineering & Infrastructure</h3>
            <p>We built DOCCURE using <strong>React.js/Next.js</strong> for the web panels, accompanied by responsive mobile applications for clinic staff on the go. The backend runs on a scalable <strong>Node.js</strong> API connected to <strong>PostgreSQL</strong> and <strong>Redis</strong>, hosted on <strong>AWS</strong>. It implements strict security to comply with healthcare privacy regulations for patient records and images.</p>

            <h3>The Impact</h3>
            <p>DOCCURE has centralized operations for single clinics and large healthcare chains alike, cutting down clinic wait times by 30% and eliminating the need to manage photography and medical charts across disconnected systems.</p>
        `
    },
    '5': {
        title: 'SSO & CUSTOM THEMES: IMPLEMENTING ENTERPRISE-GRADE SECURITY FOR DIGITAL IDENTITIES',
        date: '27 Jun, 2025',
        views: '1.0K',
        image: '/images/blogs/blog5.png',
        excerpt: 'For enterprise clients like Marriott, a simple custom profile design is not enough. Secure login coordination is vital. Read how we built a custom SSO login flow and role-based access to unify portal security with branded digital identity profiles.',
        content: `
            <p>As enterprise adoption of digital business cards grows, organizations face a critical security challenge: how do they manage thousands of employee profiles without creating administrative overhead or security vulnerabilities?</p>

            <p>When Marriott needed custom branded digital profiles for their staff, they requested that the login process be integrated with their existing enterprise identity provider. Solvifytech developed an SSO-based portal authentication system to achieve this seamless experience.</p>

            <h3>The Requirement: Single Sign-On (SSO)</h3>
            <p>Marriott users needed to access their custom profile dashboard without creating or memorizing a separate username and password. The system had to automatically authenticate them based on their corporate Marriott account.</p>

            <h3>How We Engineered it</h3>
            <p>We integrated <strong>Single Sign-On (SSO)</strong> using industry-standard protocols. When a user tries to access their Tap1ce profile editor, they are redirected to Marriott's identity provider. Upon successful login, secure token-based authentication (JWT) verifies the credentials and automatically logs them into their profile dashboard.</p>
            <p>Additionally, we developed role-based access controls so that local branch managers can edit cards for their teams, while corporate admins maintain control over global design templates and branding restrictions.</p>

            <h3>Why it Matters</h3>
            <p>Unifying identity management through SSO reduces administrative overhead, ensures quick employee offboarding, and elevates security, making digital profile platforms fully enterprise-ready.</p>
        `
    }
};

export default function BlogDetail() {
    const { blogId } = useParams<{ blogId: string }>();
    const post = blogData[blogId as keyof typeof blogData] || blogData['1'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [blogId]);

    return (
        <div className="bd-page-wrapper">
            <div className="bd-container">
                <div className="bd-main-content">
                    <nav className="bd-breadcrumb-nav" aria-label="breadcrumb">
                        <ol className="bd-breadcrumb-list">
                            <li className="bd-breadcrumb-item">
                                <Link to="/" className="bd-breadcrumb-link" aria-label="Home">
                                    <GoHome size={20} />
                                </Link>
                            </li>
                            <li className="bd-breadcrumb-item">
                                <Link to={`/${Paths.blog}`} className="bd-breadcrumb-link">Blog</Link>
                            </li>
                            <li className="bd-breadcrumb-item bd-breadcrumb-current">
                                {post.title.length > 40 ? post.title.substring(0, 40) + '...' : post.title}
                            </li>
                        </ol>
                    </nav>

                    <h1 className="bd-title">
                        {post.title}
                    </h1>

                    <p className="bd-excerpt">
                        {post.excerpt}
                    </p>

                    <div className="bd-meta-bar">
                        <div className="bd-meta-left">
                            <span className="bd-date">{post.date}</span>
                             <span className="bd-views">
                                <FiEye size={16} />
                                {post.views} views
                             </span>
                        </div>
                    </div>

                    <div className="bd-featured-image">
                        <img src={post.image} alt="Featured" />
                    </div>

                    <div className="bd-article-body" dangerouslySetInnerHTML={{ __html: post.content }}></div>

                    <div className="bd-related-blogs">
                        <h2>Related Blog</h2>
                        <div className="bd-related-grid">
                            {relatedBlogs.map((relatedPost) => (
                                <Link to={`/${Paths.blog}/${relatedPost.id}`} key={relatedPost.id} className="bd-related-card">
                                    <div className="bd-related-image">
                                        <img src={relatedPost.image} alt={relatedPost.title} />
                                    </div>
                                    <div className="bd-related-content">
                                        <span className="bd-related-date">{relatedPost.date}</span>
                                        <h3 className="bd-related-title">{relatedPost.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <aside className="bd-sidebar">
                    <h3 className="bd-sidebar-title">Popular Services</h3>
                    <div className="bd-services-list">
                        {popularServices.map((service) => (
                            <Link to={`/${Paths.services}/${service.id}`} key={service.id} className="bd-service-card">
                                <div className="bd-service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <div className="bd-service-info">
                                    <span className="bd-service-name">{service.title}</span>
                                     <div className="bd-service-rating">
                                        <FaStar color="#ffc107" size={14} />
                                        <span className="rating-val">{service.rating}</span>
                                        <span className="rating-count">({service.reviews})</span>
                                     </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
}