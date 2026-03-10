import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => (
    <div className="about-wrap">
        <div className="section-heading">
            <h2>About</h2>
            <div className="heading-line" />
        </div>

        <div className="about-body">
            <p>
                <strong>Himal Thapa</strong> — Computer Engineering student at{' '}
                <span className="text-accent">Lovely Professional University</span>, building software for the real world.
            </p>
            <p>
                I work across the full engineering spectrum: from writing clean application code to architecting{' '}
                <span className="text-secondary">cloud infrastructure</span>, designing CI/CD pipelines, and thinking
                through system design at scale. My interests sit at the intersection of software engineering,
                DevOps, and distributed systems.
            </p>
            <p>
                Outside of coursework, I ship side projects, contribute to open source, and explore topics like
                cloud cost optimization, container orchestration, and database internals. I care deeply about
                writing software that is reliable, maintainable, and built to last.
            </p>

            <div className="about-tags">
                {['LPU · CSE', 'Software Engineer', 'Cloud Architect', 'DevOps', 'System Design', 'Open Source'].map(t => (
                    <span key={t} className="tag">{t}</span>
                ))}
            </div>

            <div className="stat-grid">
                {[
                    { val: '3+', label: 'Years of building' },
                    { val: '20+', label: 'Projects shipped' },
                    { val: '∞', label: 'Curiosity' },
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
