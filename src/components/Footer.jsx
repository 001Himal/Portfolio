import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => (
    <footer className="footer">
        <div className="container footer-inner">
            <div className="footer-logo">
                <span className="gradient-text">Himal</span>
                <span style={{ color: 'var(--text-muted)' }}>Thapa</span>
            </div>
            <p className="footer-copy">
                Built with <FaHeart className="heart" /> and a lot of coffee &mdash; &copy; {new Date().getFullYear()}
            </p>
            <div className="footer-links">
                <a href="https://github.com/himal-thapa" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/himal-thapa" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="mailto:contact@himalthapa.tech"><FaEnvelope /></a>
            </div>
        </div>
    </footer>
);

export default Footer;
