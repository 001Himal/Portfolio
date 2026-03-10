import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const el = document.documentElement;
            const scrolled = el.scrollTop || document.body.scrollTop;
            const total = el.scrollHeight - el.clientHeight;
            setWidth(total > 0 ? (scrolled / total) * 100 : 0);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div id="scroll-progress" style={{ width: `${width}%` }} />
    );
};

export default ProgressBar;
