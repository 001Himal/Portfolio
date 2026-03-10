import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

// Text reveal variants
const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};
const lineVariant = {
    hidden: { y: '110%', opacity: 0 },
    show: { y: '0%', opacity: 1, transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] } },
};

const roles = ['Software Engineer', 'Cloud Architect', 'DevOps Engineer', 'System Designer'];

const Hero = () => {
    const [roleIdx, setRoleIdx] = useState(0);
    const [blobPos, setBlobPos] = useState({ x: 0, y: 0 });
    const heroRef = useRef(null);

    // Rotate roles
    useEffect(() => {
        const id = setInterval(() => {
            setRoleIdx((i) => (i + 1) % roles.length);
        }, 2500);
        return () => clearInterval(id);
    }, []);

    // Mouse parallax for blobs
    useEffect(() => {
        const handler = (e) => {
            if (!heroRef.current) return;
            const rect = heroRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
            setBlobPos({ x, y });
        };
        window.addEventListener('mousemove', handler);
        return () => window.removeEventListener('mousemove', handler);
    }, []);

    return (
        <section id="hero" className="hero" ref={heroRef}>
            {/* Gradient blobs with parallax */}
            <div
                className="blob blob-1"
                style={{ transform: `translate(${blobPos.x * 0.8}px, ${blobPos.y * 0.8}px)` }}
            />
            <div
                className="blob blob-2"
                style={{ transform: `translate(${-blobPos.x * 0.6}px, ${-blobPos.y * 0.6}px)` }}
            />
            <div
                className="blob blob-3"
                style={{ transform: `translate(${blobPos.x * 0.4}px, ${blobPos.y * 1.2}px)` }}
            />

            <div className="container hero-content">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="hero-text"
                >
                    {/* Badge */}
                    <motion.div variants={lineVariant} className="hero-badge">
                        <span className="badge-dot" />
                        Available for opportunities
                    </motion.div>

                    {/* Name */}
                    <div className="overflow-clip">
                        <motion.h1 variants={lineVariant} className="hero-name">
                            Himal<br />
                            <span className="gradient-text">Thapa</span>
                        </motion.h1>
                    </div>

                    {/* Rotating role */}
                    <div className="overflow-clip">
                        <motion.p variants={lineVariant} className="hero-role">
                            <motion.span
                                key={roleIdx}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -30, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="text-accent"
                            >
                                {roles[roleIdx]}
                            </motion.span>
                        </motion.p>
                    </div>

                    {/* Tag */}
                    <div className="overflow-clip">
                        <motion.p variants={lineVariant} className="hero-tagline">
                            Engineering software, cloud systems,<br className="hide-mobile" />
                            and infrastructure at scale.
                        </motion.p>
                    </div>

                    {/* CTAs */}
                    <motion.div variants={lineVariant} className="hero-ctas">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        variants={lineVariant}
                        className="scroll-indicator"
                    >
                        <div className="scroll-line" />
                        <span>Scroll</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
