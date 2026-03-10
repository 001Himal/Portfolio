import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa';

const EMAIL = 'contact@himalthapa.tech';

const links = [
    { label: 'GitHub', sub: 'github.com/himal-thapa', icon: <FaGithub />, href: 'https://github.com/himal-thapa', accent: '#E6EDF3' },
    { label: 'LinkedIn', sub: 'linkedin.com/in/himal-thapa', icon: <FaLinkedin />, href: 'https://linkedin.com/in/himal-thapa', accent: '#0A66C2' },
    { label: 'Email', sub: EMAIL, icon: <FaEnvelope />, href: `mailto:${EMAIL}`, accent: '#00F5D4' },
];

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try { await navigator.clipboard.writeText(EMAIL); } catch { }
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div className="contact-wrap">
            <div className="section-heading">
                <h2>Contact</h2>
                <div className="heading-line" />
            </div>

            <p className="contact-intro">
                I'm open to new opportunities, collaborations, and interesting conversations about tech.
                Reach out through any of the channels below — I reply within a day.
            </p>

            <div className="contact-links">
                {links.map((l, i) => (
                    <motion.a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link glass-card"
                        style={{ '--cl': l.accent }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        whileHover={{ x: 4 }}
                    >
                        <span className="cl-icon" style={{ color: l.accent }}>{l.icon}</span>
                        <div className="cl-body">
                            <span className="cl-label">{l.label}</span>
                            <span className="cl-sub">{l.sub}</span>
                        </div>
                        <span className="cl-arrow">→</span>
                    </motion.a>
                ))}
            </div>

            {/* Copy email row */}
            <motion.div
                className="email-row"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <code className="email-code">{EMAIL}</code>
                <button className={`copy-btn${copied ? ' copied' : ''}`} onClick={copy}>
                    {copied ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy</>}
                </button>
            </motion.div>
        </div>
    );
};

export default Contact;
