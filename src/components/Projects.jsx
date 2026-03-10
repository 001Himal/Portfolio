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
        description: 'A production-grade multi-tool platform built for developers and everyday users. Ships calculators, a PDF editor, diagram builder, unit converters, and 50+ utilities — all under one roof.',
        icon: <FaTools />,
        tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
        accent: '#00F5D4',
        color: 'rgba(0, 245, 212, 0.06)',
        github: 'https://github.com/himal-thapa',
        live: 'https://himalthapa.tech',
        features: ['50+ integrated utilities', 'PDF Editor with merge & rotation', 'Interactive Diagram Maker', 'Real-time calculators'],
    },
    {
        id: 1,
        title: 'Today in History',
        subtitle: 'Educational Platform',
        description: 'An interactive educational site that surfaces historical events by date, presents them as explorable timelines, and reinforces learning through a quiz module.',
        icon: <FaBook />,
        tags: ['React', 'REST API', 'CSS Animation'],
        accent: '#7B61FF',
        color: 'rgba(123, 97, 255, 0.06)',
        github: 'https://github.com/himal-thapa',
        live: '#',
        features: ['Historical events by date', 'Interactive timeline UI', 'Quiz mode', 'Data visualizations'],
    },
    {
        id: 2,
        title: 'Mock Cricket Auction',
        subtitle: 'Multiplayer Real-Time Game',
        description: 'A real-time multiplayer auction system for cricket player drafts. Handles live bidding, team composition, budget constraints, and a ranked leaderboard over WebSockets.',
        icon: <FaTools />,
        tags: ['Node.js', 'Socket.IO', 'React', 'PostgreSQL'],
        accent: '#00F5D4',
        color: 'rgba(0, 245, 212, 0.06)',
        github: 'https://github.com/himal-thapa',
        live: '#',
        features: ['Real-time bidding via WebSockets', 'Team management', 'Budget tracking', 'Live leaderboard'],
    },
    {
        id: 3,
        title: 'Ethical Hacking Battle',
        subtitle: 'Gamified Cybersecurity Learning',
        description: 'A gamified cybersecurity platform where users work through CTF-style challenges, track skill progression, and compete on a live security leaderboard — sandboxed with Docker.',
        icon: <FaShieldAlt />,
        tags: ['Python', 'React', 'Docker', 'PostgreSQL'],
        accent: '#7B61FF',
        color: 'rgba(123, 97, 255, 0.06)',
        github: 'https://github.com/himal-thapa',
        live: '#',
        features: ['CTF challenges', 'Skill progression system', 'Live leaderboard', 'Docker sandboxing'],
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
