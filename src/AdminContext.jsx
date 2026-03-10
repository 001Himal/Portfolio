import React, { createContext, useContext, useState, useEffect } from 'react';

export const DEFAULT_CONFIG = {
    name: 'Himal Thapa',
    tagline: 'Building cloud tools, developer platforms,\nand things that actually ship.',
    currentlyBuilding: 'ToolHub',
    email: 'himalthapa00001234@gmail.com',
    github: 'https://github.com/001himal',
    linkedin: 'https://www.linkedin.com/in/himal-thapa-7a2998359/',
    about: 'Software Engineer focused on cloud infrastructure, developer tooling, and systems that scale.',
    aboutEdu: 'Computer Engineering · Lovely Professional University',
    projects: [
        {
            id: 0,
            title: 'ToolHub',
            subtitle: 'Developer Toolkit Platform · himalthapa.tech',
            description: 'Architected a multi-tool platform consolidating 50+ developer utilities under one roof. Built on Next.js with a PostgreSQL backend; handles PDF editing, diagram generation, and real-time unit conversion entirely client-side to minimize server cost.',
            tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
            accent: '#00F5D4',
            github: 'https://github.com/001Himal',
            live: 'https://himalthapa.tech',
            features: ['50+ integrated utilities', 'Client-side processing — no server cost', 'PDF Editor with merge & rotation', 'Interactive Diagram Maker'],
        },
        {
            id: 1,
            title: 'Today in History',
            subtitle: 'Educational Platform',
            description: 'Built an educational platform that surfaces historical events by date. Implemented a quiz engine with streak tracking and a data visualization layer — designed to make history engaging through interaction, not passive reading.',
            tags: ['React', 'REST API', 'CSS Animation'],
            accent: '#7B61FF',
            github: 'https://github.com/001Himal',
            live: '#',
            features: ['Historical events by date', 'Interactive timeline UI', 'Quiz mode with streak tracking', 'Data visualizations'],
        },
        {
            id: 2,
            title: 'Mock Cricket Auction',
            subtitle: 'Multiplayer Real-Time System',
            description: 'Engineered a real-time multiplayer draft system for cricket auctions using WebSockets. Designed the bidding state machine to handle concurrent bids, budget enforcement, and live leaderboard updates with sub-100ms latency.',
            tags: ['Node.js', 'Socket.IO', 'React', 'PostgreSQL'],
            accent: '#00F5D4',
            github: 'https://github.com/001Himal',
            live: '#',
            features: ['Real-time bidding via WebSockets', 'Concurrent bid state machine', 'Budget enforcement', 'Live leaderboard'],
        },
        {
            id: 3,
            title: 'Ethical Hacking Battle',
            subtitle: 'Gamified Cybersecurity Learning',
            description: 'Built a gamified cybersecurity learning platform with CTF-style challenge sandboxing via Docker. Designed a points-based progression system with isolated containers per user session, preventing cross-challenge interference.',
            tags: ['Python', 'React', 'Docker', 'PostgreSQL'],
            accent: '#7B61FF',
            github: 'https://github.com/001Himal',
            live: '#',
            features: ['CTF challenges', 'Docker-sandboxed sessions', 'Skill progression system', 'Live leaderboard'],
        },
    ],
    skills: [
        { name: 'Python', accent: '#3776AB' },
        { name: 'HTML', accent: '#E34F26' },
        { name: 'CSS', accent: '#1572B6' },
        { name: 'JavaScript', accent: '#F7DF1E' },
        { name: 'React', accent: '#61DAFB' },
        { name: 'C', accent: '#A8B9CC' },
        { name: 'Git', accent: '#F05032' },
        { name: 'GitHub', accent: '#E6EDF3' },
        { name: 'PostgreSQL', accent: '#336791' },
        { name: 'Docker', accent: '#2496ED' },
        { name: 'AWS', accent: '#FF9900' },
        { name: 'Linux', accent: '#FCC624' },
    ],
};

const STORAGE_KEY = 'portfolio_config';

const AdminContext = createContext(null);

export const AdminProvider = ({ children }) => {
    const [config, setConfig] = useState(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? { ...DEFAULT_CONFIG, ...JSON.parse(stored) } : DEFAULT_CONFIG;
        } catch {
            return DEFAULT_CONFIG;
        }
    });

    const update = (partial) => {
        setConfig(prev => {
            const next = { ...prev, ...partial };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            return next;
        });
    };

    const reset = () => {
        localStorage.removeItem(STORAGE_KEY);
        setConfig(DEFAULT_CONFIG);
    };

    return (
        <AdminContext.Provider value={{ config, update, reset }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => useContext(AdminContext);
