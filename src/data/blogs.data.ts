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
        title: 'Can AI-Generated Art Make Your Brand More Human?',
        date: '10 Jul, 2025',
        image: blog1,
        tag: 'AI + Design',
        darkTag: false,
    },
    {
        id: '2',
        title: 'Beyond Stock: How AI Image Generation Is Revolutionizing Visual Storytelling',
        date: '27 Jun, 2025',
        image: blog2,
        tag: 'AI + Art',
        darkTag: false,
    },
    {
        id: '3',
        title: 'Unlocking Visual Precision: Why Custom AI Image Prompts Are the Future',
        date: '27 Jun, 2025',
        image: blog3,
        tag: 'AI + Tools',
        darkTag: true,
    },
    {
        id: '4',
        title: 'Faces of the Future: How AI Avatar Design Is Transforming Brand Identity',
        date: '27 Jun, 2025',
        image: blog4,
        tag: 'AI + Branding',
        darkTag: true,
    },
    {
        id: '5',
        title: 'Rise of the AI Artist: How Brands Are Tapping into Machine-Driven Creativity',
        date: '27 Jun, 2025',
        image: blog5,
        tag: 'AI + Creativity',
        darkTag: false,
    },
];
