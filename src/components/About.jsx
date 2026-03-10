import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';

const areas = [
    {
        icon: '⚡',
        title: 'DevOps',
        items: 'Docker · CI/CD · Linux',
    },
    {
        icon: '☁️',
        title: 'Cloud',
        items: 'AWS · Cloudflare · Supabase',
    },
    {
        icon: '🛠',
        title: 'Engineering',
        items: 'React · Python · PostgreSQL',
    },
    {
        icon: '📐',
        title: 'Design',
        items: 'System Design · Architecture',
    },
];

const About = () => (
    <div className="about-wrap">
        <div className="section-heading">
            <h2>About</h2>
            <div className="heading-line" />
        </div>

        <div className="about-body">
            <p className="about-intro">
                CSE student at <span className="text-accent">LPU</span>. I build software, ship cloud infrastructure, and think in systems.
            </p>

            <div className="about-area-grid">
                {areas.map((a, i) => (
                    <motion.div
                        key={a.title}
                        className="about-area-card glass-card"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        whileHover={{ y: -4 }}
                    >
                        <span className="area-icon">{a.icon}</span>
                        <span className="area-title">{a.title}</span>
                        <span className="area-items">{a.items}</span>
                    </motion.div>
                ))}
            </div>

            <div className="stat-grid">
                {[
                    { val: '3+', label: 'Years building' },
                    { val: '20+', label: 'Projects shipped' },
                    { val: '∞', label: 'Things to learn' },
                ].map(s => (
                    <div key={s.val} className="stat-box">
                        <span className="stat-val gradient-text">{s.val}</span>
                        <span className="stat-label">{s.label}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default About;
