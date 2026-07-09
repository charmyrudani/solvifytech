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
        image: '/images/blog_light_1.png',
        tag: 'AI + Design',
        darkTag: false,
    },
    {
        id: '2',
        title: 'Beyond Stock: How AI Image Generation Is Revolutionizing Visual Storytelling',
        date: '27 Jun, 2025',
        image: '/images/blog_light_5.png',
        tag: 'AI + Art',
        darkTag: false,
    },
    {
        id: '3',
        title: 'Unlocking Visual Precision: Why Custom AI Image Prompts Are the Future',
        date: '27 Jun, 2025',
        image: '/images/blog_light_3.png',
        tag: 'AI + Tools',
        darkTag: true,
    },
    {
        id: '4',
        title: 'Faces of the Future: How AI Avatar Design Is Transforming Brand Identity',
        date: '27 Jun, 2025',
        image: '/images/blog_light_4.png',
        tag: 'AI + Branding',
        darkTag: true,
    },
    {
        id: '5',
        title: 'Rise of the AI Artist: How Brands Are Tapping into Machine-Driven Creativity',
        date: '27 Jun, 2025',
        image: '/images/blog_light_5.png',
        tag: 'AI + Creativity',
        darkTag: false,
    },
];
