import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './Timeline.css';

const events = [
    {
        year: '2023',
        title: 'Started CSE at LPU',
        items: ['Began Computer Science & Engineering', 'Discovered passion for web development', 'First HTML/CSS/JavaScript projects'],
        accent: '#00F5D4',
    },
    {
        year: '2024',
        title: 'Building with JavaScript & React',
        items: ['Built first web tools and calculators', 'Learned JavaScript & React deeply', 'Launched Cute Tool platform MVP'],
        accent: '#7B61FF',
    },
    {
        year: '2025',
        title: 'DevOps & Cloud Journey',
        items: ['Docker, Linux, CI/CD pipelines', 'Explored AWS & deployment infrastructure', 'Built production-grade full-stack apps', 'PostgreSQL & system design fundamentals'],
        accent: '#00F5D4',
    },
    {
        year: '2026',
        title: 'SaaS & Cybersecurity',
        items: ['Building SaaS & cloud products', 'Exploring ethical hacking & CTF challenges', 'Python, system design, database optimization', 'Portfolio live at himalthapa.tech'],
        accent: '#7B61FF',
    },
];

const TimelineCard = ({ event, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <div className="tl-row" ref={ref}>
            {/* Year + node column */}
            <div className="tl-left-col">
                <motion.div
                    className="tl-year-badge"
                    style={{ '--node-color': event.accent }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    {event.year}
                </motion.div>
                {index < events.length - 1 && <div className="tl-connector" />}
            </div>

            {/* Card */}
            <motion.div
                className="tl-card glass-card"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 }}
            >
                <h3 className="tl-title" style={{ color: event.accent }}>{event.title}</h3>
                <ul className="tl-list">
                    {event.items.map((item, i) => (
                        <li key={i}>
                            <span className="tl-bullet" style={{ background: event.accent }} />
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

const Timeline = () => (
    <div className="timeline-wrap">
        <div className="section-heading">
            <h2>Experience</h2>
            <div className="heading-line" />
        </div>
        <div className="tl-stack">
            {events.map((event, i) => (
                <TimelineCard key={i} event={event} index={i} />
            ))}
        </div>
    </div>
);

export default Timeline;
