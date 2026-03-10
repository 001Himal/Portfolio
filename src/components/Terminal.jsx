import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Terminal.css';
import { FaTerminal, FaTimes } from 'react-icons/fa';

const COMMANDS = {
    whoami: `Himal Thapa
DevOps learner & builder
LPU CSE student | himalthapa.tech`,
    help: `Available commands:
  whoami     — who is this?
  skills     — tech stack
  contact    — get in touch
  clear      — clear terminal
  exit       — close terminal`,
    skills: `[ DevOps, Cloud, Docker, AWS, Linux ]
[ React, Next.js, Python, PostgreSQL ]
[ System Design, Security, CI/CD ]`,
    contact: `Email    → contact@himalthapa.tech
GitHub   → github.com/himal-thapa
LinkedIn → linkedin.com/in/himal-thapa`,
};

const Terminal = () => {
    const [open, setOpen] = useState(false);
    const [history, setHistory] = useState([{ type: 'info', text: 'Type \'help\' to see available commands.' }]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [open]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();
        if (!cmd) return;

        const newHistory = [...history, { type: 'input', text: `$ ${cmd}` }];

        if (cmd === 'clear') {
            setHistory([]);
        } else if (cmd === 'exit') {
            setOpen(false);
            setHistory([{ type: 'info', text: 'Type \'help\' to see available commands.' }]);
        } else if (COMMANDS[cmd]) {
            newHistory.push({ type: 'output', text: COMMANDS[cmd] });
            setHistory(newHistory);
        } else {
            newHistory.push({ type: 'error', text: `command not found: ${cmd}. Try 'help'.` });
            setHistory(newHistory);
        }

        setInput('');
    };

    return (
        <>
            {/* Trigger button */}
            <motion.button
                className="terminal-trigger"
                onClick={() => setOpen(true)}
                whileHover={{ scale: 1.1 }}
                title="Open terminal easter egg"
                aria-label="Open terminal"
            >
                <FaTerminal />
            </motion.button>

            {/* Terminal panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="terminal-window"
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    >
                        {/* Title bar */}
                        <div className="terminal-bar">
                            <div className="terminal-dots">
                                <span style={{ background: '#FF5F57' }} />
                                <span style={{ background: '#FEBC2E' }} />
                                <span style={{ background: '#28C840' }} />
                            </div>
                            <span className="terminal-label">himal@portfolio:~</span>
                            <button className="terminal-x" onClick={() => setOpen(false)}><FaTimes /></button>
                        </div>

                        {/* History */}
                        <div className="terminal-body">
                            {history.map((ln, i) => (
                                <div key={i} className={`terminal-line ${ln.type}`}>
                                    {ln.text.split('\n').map((l, j) => <p key={j}>{l}</p>)}
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </div>

                        {/* Input */}
                        <form className="terminal-input-row" onSubmit={handleCommand}>
                            <span className="terminal-prompt gradient-text">$</span>
                            <input
                                ref={inputRef}
                                className="terminal-input"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="type a command..."
                                autoComplete="off"
                                autoCorrect="off"
                                spellCheck="false"
                            />
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Terminal;
