import blog1 from '/images/blogs/blog1.webp'
import blog2 from '/images/blogs/blog2.webp'
import blog3 from '/images/blogs/blog3.webp'
import blog4 from '/images/blogs/blog4.webp'
import blog5 from '/images/blogs/blog5.webp'

export interface BlogPost {
    id: string;
    title: string;
    date: string;
    image: string;
    tag: string;
    darkTag: boolean;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'How We Built Tap1ce: Redefining Professional Networking with NFC & QR Technology',
        date: '10 Jul, 2025',
        image: blog1,
        tag: 'AI + Networking',
        darkTag: false,
    },
    {
        id: '2',
        title: 'Beyond Shopify: Designing Custom Multi-Vendor Commerce Portals for Enterprise Scale',
        date: '27 Jun, 2025',
        image: blog2,
        tag: 'eCommerce + Scale',
        darkTag: false,
    },
    {
        id: '3',
        title: 'The Power of Headless CMS: How Creative Agencies Scale Digital Operations Fast',
        date: '27 Jun, 2025',
        image: blog3,
        tag: 'Web + Architecture',
        darkTag: true,
    },
    {
        id: '4',
        title: 'How DOCCURE Built India\'s First Dermatology-First Practice Management Platform',
        date: '27 Jun, 2025',
        image: blog4,
        tag: 'SaaS + Healthcare',
        darkTag: true,
    },
    {
        id: '5',
        title: 'SSO & Custom Themes: Implementing Enterprise-Grade Security for Digital Identities',
        date: '27 Jun, 2025',
        image: blog5,
        tag: 'Enterprise + Security',
        darkTag: false,
    },
];
