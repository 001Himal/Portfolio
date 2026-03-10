import React, { useEffect, useState, useRef } from 'react';

const CursorGlow = () => {
    const [pos, setPos] = useState({ x: -300, y: -300 });
    const [ringPos, setRingPos] = useState({ x: -300, y: -300 });
    const [hovering, setHovering] = useState(false);
    const rafRef = useRef(null);
    const targetRef = useRef({ x: -300, y: -300 });

    useEffect(() => {
        const onMove = (e) => {
            targetRef.current = { x: e.clientX, y: e.clientY };
            setPos({ x: e.clientX, y: e.clientY });
        };

        // Smooth ring follow with lerp
        const animateRing = () => {
            setRingPos(prev => ({
                x: prev.x + (targetRef.current.x - prev.x) * 0.12,
                y: prev.y + (targetRef.current.y - prev.y) * 0.12,
            }));
            rafRef.current = requestAnimationFrame(animateRing);
        };

        const onHoverIn = (e) => {
            const el = e.target.closest('a, button, [role="button"]');
            if (el) setHovering(true);
        };
        const onHoverOut = () => setHovering(false);

        window.addEventListener('mousemove', onMove);
        document.addEventListener('mouseover', onHoverIn);
        document.addEventListener('mouseout', onHoverOut);
        rafRef.current = requestAnimationFrame(animateRing);

        return () => {
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseover', onHoverIn);
            document.removeEventListener('mouseout', onHoverOut);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <>
            <div
                className="cursor-glow"
                style={{ left: pos.x, top: pos.y }}
            />
            <div
                className="cursor-dot"
                style={{ left: pos.x, top: pos.y }}
            />
            <div
                className={`cursor-ring ${hovering ? 'hovering' : ''}`}
                style={{ left: ringPos.x, top: ringPos.y }}
            />
        </>
    );
};

export default CursorGlow;
