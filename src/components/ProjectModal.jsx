import React from 'react';
import { motion } from 'framer-motion';
import './ProjectModal.css';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheckCircle } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="modal-panel glass-card"
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose} aria-label="Close">
                    <FaTimes />
                </button>

                {/* Header */}
                <div className="modal-header">
                    <div className="modal-icon" style={{ background: project.color, color: project.accent }}>
                        {project.icon}
                    </div>
                    <div>
                        <p className="modal-subtitle" style={{ color: project.accent }}>{project.subtitle}</p>
                        <h2 className="modal-title">{project.title}</h2>
                    </div>
                </div>

                {/* Description */}
                <p className="modal-desc">{project.description}</p>

                {/* Features */}
                <div className="modal-features">
                    <h4>Key Features</h4>
                    <ul>
                        {project.features.map((f, i) => (
                            <li key={i}>
                                <FaCheckCircle style={{ color: project.accent, flexShrink: 0 }} />
                                {f}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tags */}
                <div className="proj-tags" style={{ marginBottom: '1.5rem' }}>
                    {project.tags.map((t) => (
                        <span key={t} className="proj-tag">{t}</span>
                    ))}
                </div>

                {/* Links */}
                <div className="modal-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <FaGithub /> View on GitHub
                    </a>
                    {project.live !== '#' && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            <FaExternalLinkAlt /> Live Demo
                        </a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectModal;
