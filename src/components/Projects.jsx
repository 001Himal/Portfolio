import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';
import ProjectModal from './ProjectModal';
import { FaGithub, FaExternalLinkAlt, FaTools, FaBook, FaShieldAlt } from 'react-icons/fa';

const projects = [
    {
        id: 0,
        title: 'ToolHub',
        subtitle: 'Developer Toolkit Platform · himalthapa.tech',
        description: 'Architected a multi-tool platform consolidating 50+ developer utilities under one roof. Built on Next.js with a PostgreSQL backend; handles PDF editing, diagram generation, and real-time unit conversion entirely client-side to minimize server cost.',
        icon: <FaTools />,
        tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
        accent: '#00F5D4',
        color: 'rgba(0, 245, 212, 0.06)',
        github: 'https://github.com/001Himal',
        live: 'https://himalthapa.tech',
        features: ['50+ integrated utilities', 'Client-side processing — no server cost', 'PDF Editor with merge & rotation', 'Interactive Diagram Maker'],
    },
    {
        id: 1,
        title: 'Today in History',
        subtitle: 'Educational Platform',
        description: 'Built an educational platform that surfaces historical events by date. Implemented a quiz engine with streak tracking and a data visualization layer — designed to make history engaging through interaction, not passive reading.',
        icon: <FaBook />,
        tags: ['React', 'REST API', 'CSS Animation'],
        accent: '#7B61FF',
        color: 'rgba(123, 97, 255, 0.06)',
        github: 'https://github.com/001Himal',
        live: '#',
        features: ['Historical events by date', 'Interactive timeline UI', 'Quiz mode with streak tracking', 'Data visualizations'],
    },
    {
        id: 2,
        title: 'Mock Cricket Auction',
        subtitle: 'Multiplayer Real-Time System',
        description: 'Engineered a real-time multiplayer draft system for cricket auctions using WebSockets. Designed the bidding state machine to handle concurrent bids, budget enforcement, and live leaderboard updates with sub-100ms latency.',
        icon: <FaTools />,
        tags: ['Node.js', 'Socket.IO', 'React', 'PostgreSQL'],
        accent: '#00F5D4',
        color: 'rgba(0, 245, 212, 0.06)',
        github: 'https://github.com/001Himal',
        live: '#',
        features: ['Real-time bidding via WebSockets', 'Concurrent bid state machine', 'Budget enforcement', 'Live leaderboard'],
    },
    {
        id: 3,
        title: 'Ethical Hacking Battle',
        subtitle: 'Gamified Cybersecurity Learning',
        description: 'Built a gamified cybersecurity learning platform with CTF-style challenge sandboxing via Docker. Designed a points-based progression system with isolated containers per user session, preventing cross-challenge interference.',
        icon: <FaShieldAlt />,
        tags: ['Python', 'React', 'Docker', 'PostgreSQL'],
        accent: '#7B61FF',
        color: 'rgba(123, 97, 255, 0.06)',
        github: 'https://github.com/001Himal',
        live: '#',
        features: ['CTF challenges', 'Docker-sandboxed sessions', 'Skill progression system', 'Live leaderboard'],
    },
];

const Projects = () => {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <div className="projects-wrap">
                <div className="section-heading">
                    <h2>Projects</h2>
                    <div className="heading-line" />
                </div>

                <div className="proj-list">
                    {projects.map((project, i) => (
                        <motion.article
                            key={project.id}
                            className="proj-card glass-card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: i * 0.08 }}
                            style={{ '--proj-accent': project.accent }}
                            whileHover={{ x: 4 }}
                            onClick={() => setSelected(project)}
                        >
                            <div className="proj-icon" style={{ background: project.color, color: project.accent }}>
                                {project.icon}
                            </div>

                            <div className="proj-info">
                                <div className="proj-top">
                                    <div>
                                        <p className="proj-sub">{project.subtitle}</p>
                                        <h3 className="proj-title">{project.title}</h3>
                                    </div>
                                    <div className="proj-actions">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} aria-label="GitHub">
                                            <FaGithub />
                                        </a>
                                        {project.live !== '#' && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} aria-label="Live">
                                                <FaExternalLinkAlt />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <p className="proj-desc">{project.description}</p>
                                <div className="proj-tags">
                                    {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
            </AnimatePresence>
        </>
    );
};

export default Projects;
