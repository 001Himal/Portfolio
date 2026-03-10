import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SplitLayout.css';

// Import all sections
import About from './About';
import Timeline from './Timeline';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const navItems = [
    { id: 'about', label: 'About' },
    { id: 'timeline', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

const roles = ['Software Engineer', 'Cloud Architect', 'DevOps Engineer', 'System Designer'];

const LeftPanel = ({ activeSection }) => {
    const [roleIdx, setRoleIdx] = useState(0);
    const [blobPos, setBlobPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const id = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2800);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        const handler = (e) => {
            setBlobPos({
                x: (e.clientX / window.innerWidth - 0.5) * 30,
                y: (e.clientY / window.innerHeight - 0.5) * 30,
            });
        };
        window.addEventListener('mousemove', handler);
        return () => window.removeEventListener('mousemove', handler);
    }, []);

    return (
        <div className="left-panel">
            {/* Ambient blobs */}
            <div className="hero-blob blob-a" style={{ transform: `translate(${blobPos.x}px, ${blobPos.y}px)` }} />
            <div className="hero-blob blob-b" style={{ transform: `translate(${-blobPos.x * 0.7}px, ${-blobPos.y * 0.7}px)` }} />

            <div className="left-inner">
                {/* Identity */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    className="hero-identity"
                >
                    <div className="availability-badge">
                        <span className="pulse-dot" />
                        Available for opportunities
                    </div>

                    <h1 className="hero-name">
                        Himal<br />
                        <span className="gradient-text">Thapa</span>
                    </h1>

                    <div className="hero-role-wrap">
                        <span className="role-dash" />
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={roleIdx}
                                className="hero-role-text"
                                initial={{ y: 16, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -16, opacity: 0 }}
                                transition={{ duration: 0.35 }}
                            >
                                {roles[roleIdx]}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    <p className="hero-tagline">
                        Building cloud tools, developer platforms,<br />
                        and things that actually ship.
                    </p>
                </motion.div>

                {/* Navigation */}
                <motion.nav
                    className="left-nav"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {navItems.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`left-nav-item ${activeSection === id ? 'active' : ''}`}
                        >
                            <span className="nav-line" />
                            <span className="nav-label">{label}</span>
                        </a>
                    ))}
                </motion.nav>

                {/* Currently building status */}
                <motion.div
                    className="currently-building"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <span className="building-dot" />
                    <span>Building: <span className="gradient-text">ToolHub</span></span>
                </motion.div>

                {/* Social links */}
                <motion.div
                    className="left-socials"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <a href="https://github.com/himal-thapa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                    </a>
                    <a href="https://linkedin.com/in/himal-thapa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    </a>
                    <a href="mailto:contact@himalthapa.tech" aria-label="Email">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

const SplitLayout = () => {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const sectionIds = navItems.map(n => n.id);
        const observers = sectionIds.map(id => {
            const el = document.getElementById(id);
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { rootMargin: '-40% 0px -55% 0px' }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach(o => o?.disconnect());
    }, []);

    return (
        <div className="split-layout">
            <LeftPanel activeSection={activeSection} />
            <main className="right-panel">
                <section id="about" className="right-section">
                    <About />
                </section>
                <section id="projects" className="right-section">
                    <Projects />
                </section>
                <section id="timeline" className="right-section">
                    <Timeline />
                </section>
                <section id="skills" className="right-section">
                    <Skills />
                </section>
                <section id="contact" className="right-section">
                    <Contact />
                </section>
                <footer className="right-footer">
                    <p>Built by <span className="gradient-text">Himal Thapa</span> &copy; {new Date().getFullYear()}</p>
                    <p className="footer-stack">React · Framer Motion · Vite</p>
                </footer>
            </main>
        </div>
    );
};

export default SplitLayout;
