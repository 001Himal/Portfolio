import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import { FaDocker, FaLinux, FaPython, FaGithub, FaAws, FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiPostgresql, SiC } from 'react-icons/si';

export const DEFAULT_SKILLS = [
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

// Duplicate for seamless infinite scroll
const track = [...DEFAULT_SKILLS, ...DEFAULT_SKILLS];

const SkillChip = ({ skill }) => (
    <div
        className="skill-chip glass-card"
        style={{ '--sc': skill.accent }}
    >
        <span className="skill-chip-icon">{skill.icon}</span>
        <span className="skill-chip-name">{skill.name}</span>
    </div>
);

const Skills = () => (
    <div className="skills-wrap">
        <div className="section-heading">
            <h2>Skills</h2>
            <div className="heading-line" />
        </div>

        <div className="marquee-outer">
            <div className="marquee-track">
                {track.map((skill, i) => (
                    <SkillChip key={`${skill.name}-${i}`} skill={skill} />
                ))}
            </div>
        </div>
    </div>
);

export default Skills;
