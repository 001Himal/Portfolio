import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';
import { FaDocker, FaLinux, FaPython, FaGithub, FaAws, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaCode } from 'react-icons/fa';
import { SiJavascript, SiPostgresql, SiGit, SiC } from 'react-icons/si';

const skills = [
    { name: 'Python', icon: <FaPython />, accent: '#3776AB' },
    { name: 'HTML', icon: <FaHtml5 />, accent: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, accent: '#1572B6' },
    { name: 'JavaScript', icon: <SiJavascript />, accent: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, accent: '#61DAFB' },
    { name: 'C', icon: <SiC />, accent: '#A8B9CC' },
    { name: 'Git', icon: <FaGitAlt />, accent: '#F05032' },
    { name: 'GitHub', icon: <FaGithub />, accent: '#E6EDF3' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, accent: '#336791' },
    { name: 'Docker', icon: <FaDocker />, accent: '#2496ED' },
    { name: 'AWS', icon: <FaAws />, accent: '#FF9900' },
    { name: 'Linux', icon: <FaLinux />, accent: '#FCC624' },
];

const competencies = [
    { name: 'Software Engineering', pct: 88 },
    { name: 'DevOps & CI/CD', pct: 83 },
    { name: 'Cloud Architecture', pct: 75 },
    { name: 'System Design', pct: 72 },
    { name: 'Database Management (DBMS)', pct: 78 },
    { name: 'Python & Scripting', pct: 80 },
];

const SkillBar = ({ name, pct, delay }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    return (
        <div className="skill-bar-row" ref={ref}>
            <div className="skill-bar-meta">
                <span>{name}</span>
                <span className="text-accent">{pct}%</span>
            </div>
            <div className="skill-bar-track">
                <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${pct}%` } : {}}
                    transition={{ duration: 1.1, delay: delay * 0.07, ease: [0.4, 0, 0.2, 1] }}
                />
            </div>
        </div>
    );
};

const Skills = () => (
    <div className="skills-wrap">
        <div className="section-heading">
            <h2>Skills</h2>
            <div className="heading-line" />
        </div>

        {/* Icon grid */}
        <div className="skill-icon-grid">
            {skills.map((skill, i) => (
                <motion.div
                    key={skill.name}
                    className="skill-badge glass-card"
                    style={{ '--sc': skill.accent }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ y: -5, scale: 1.06 }}
                >
                    <span className="skill-badge-icon">{skill.icon}</span>
                    <span className="skill-badge-name">{skill.name}</span>
                </motion.div>
            ))}
        </div>

        {/* Bars */}
        <div className="competency-bars">
            <p className="bars-label">Core Competencies</p>
            {competencies.map((c, i) => (
                <SkillBar key={c.name} name={c.name} pct={c.pct} delay={i} />
            ))}
        </div>
    </div>
);

export default Skills;
