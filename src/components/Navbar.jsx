import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 60);
            // Determine active section
            const sections = document.querySelectorAll('section[id]');
            let current = '';
            sections.forEach((s) => {
                if (window.scrollY >= s.offsetTop - 120) current = s.id;
            });
            setActive(current);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={`navbar ${scrolled ? 'scrolled' : ''}`}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
                <div className="container nav-inner">
                    <a href="#hero" className="nav-logo">
                        <span className="gradient-text">HT</span>
                        <span className="nav-logo-dot">.</span>
                    </a>

                    <ul className="nav-links">
                        {navLinks.map(({ label, href }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className={active === href.slice(1) ? 'nav-link active' : 'nav-link'}
                                >
                                    {label}
                                    {active === href.slice(1) && (
                                        <motion.span className="nav-indicator" layoutId="navIndicator" />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a href="#contact" className="btn btn-primary nav-cta">Hire Me</a>

                    <button
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                    >
                        <ul>
                            {navLinks.map(({ label, href }) => (
                                <motion.li
                                    key={href}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
