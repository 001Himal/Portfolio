import React, { useState } from 'react';
import { useAdmin, DEFAULT_CONFIG } from '../AdminContext';
import './Admin.css';

const CREDS = { username: 'himal', password: 'isking' };

/* ── Login ── */
const Login = ({ onLogin }) => {
    const [u, setU] = useState('');
    const [p, setP] = useState('');
    const [err, setErr] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if (u === CREDS.username && p === CREDS.password) {
            onLogin();
        } else {
            setErr('Invalid credentials.');
        }
    };

    return (
        <div className="admin-login">
            <div className="admin-login-box">
                <h1 className="admin-logo">Admin Panel</h1>
                <p className="admin-sub">Portfolio Control Center</p>
                <form onSubmit={submit} className="admin-form">
                    <label>Username
                        <input value={u} onChange={e => setU(e.target.value)} autoComplete="username" />
                    </label>
                    <label>Password
                        <input type="password" value={p} onChange={e => setP(e.target.value)} autoComplete="current-password" />
                    </label>
                    {err && <p className="admin-err">{err}</p>}
                    <button type="submit" className="admin-btn-primary">Sign In</button>
                </form>
            </div>
        </div>
    );
};

/* ── Section wrapper ── */
const Section = ({ title, children }) => (
    <section className="admin-section">
        <h2 className="admin-section-title">{title}</h2>
        {children}
    </section>
);

/* ── Field ── */
const Field = ({ label, value, onChange, multiline = false }) => (
    <label className="admin-field">
        <span className="admin-field-label">{label}</span>
        {multiline
            ? <textarea className="admin-input" rows={3} value={value} onChange={e => onChange(e.target.value)} />
            : <input className="admin-input" value={value} onChange={e => onChange(e.target.value)} />
        }
    </label>
);

/* ── Dashboard ── */
const Dashboard = () => {
    const { config, update, reset } = useAdmin();
    const [saved, setSaved] = useState(false);
    const [activeTab, setActiveTab] = useState('identity');

    const save = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const tabs = ['identity', 'projects', 'skills', 'contact'];

    return (
        <div className="admin-dashboard">
            <header className="admin-header">
                <h1>Admin Panel</h1>
                <div className="admin-header-actions">
                    <button className="admin-btn-ghost" onClick={() => { if (window.confirm('Reset all to defaults?')) reset(); }}>Reset to Defaults</button>
                    <button className="admin-btn-primary" onClick={save}>{saved ? 'Saved!' : 'Save'}</button>
                </div>
            </header>

            <nav className="admin-tabs">
                {tabs.map(t => (
                    <button key={t} className={`admin-tab ${activeTab === t ? 'active' : ''}`} onClick={() => setActiveTab(t)}>
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                ))}
            </nav>

            <div className="admin-content">

                {/* ── Identity ── */}
                {activeTab === 'identity' && (
                    <Section title="Identity & Hero">
                        <Field label="Display Name" value={config.name} onChange={v => update({ name: v })} />
                        <Field label="Tagline (use \\n for line break)" value={config.tagline} onChange={v => update({ tagline: v })} multiline />
                        <Field label="Currently Building" value={config.currentlyBuilding} onChange={v => update({ currentlyBuilding: v })} />
                        <Field label="About One-liner" value={config.about} onChange={v => update({ about: v })} multiline />
                        <Field label="Education line" value={config.aboutEdu} onChange={v => update({ aboutEdu: v })} />
                    </Section>
                )}

                {/* ── Projects ── */}
                {activeTab === 'projects' && (
                    <Section title="Projects">
                        {config.projects.map((proj, i) => (
                            <div key={proj.id} className="admin-project-block">
                                <h3 className="admin-proj-title">Project {i + 1}</h3>
                                <Field label="Title" value={proj.title} onChange={v => {
                                    const p = [...config.projects];
                                    p[i] = { ...p[i], title: v };
                                    update({ projects: p });
                                }} />
                                <Field label="Subtitle" value={proj.subtitle} onChange={v => {
                                    const p = [...config.projects];
                                    p[i] = { ...p[i], subtitle: v };
                                    update({ projects: p });
                                }} />
                                <Field label="Description" value={proj.description} onChange={v => {
                                    const p = [...config.projects];
                                    p[i] = { ...p[i], description: v };
                                    update({ projects: p });
                                }} multiline />
                                <Field label="Tags (comma-separated)" value={proj.tags.join(', ')} onChange={v => {
                                    const p = [...config.projects];
                                    p[i] = { ...p[i], tags: v.split(',').map(t => t.trim()).filter(Boolean) };
                                    update({ projects: p });
                                }} />
                                <Field label="GitHub URL" value={proj.github} onChange={v => {
                                    const p = [...config.projects];
                                    p[i] = { ...p[i], github: v };
                                    update({ projects: p });
                                }} />
                                <Field label="Live URL (use # for none)" value={proj.live} onChange={v => {
                                    const p = [...config.projects];
                                    p[i] = { ...p[i], live: v };
                                    update({ projects: p });
                                }} />
                                <Field label="Accent Color" value={proj.accent} onChange={v => {
                                    const p = [...config.projects];
                                    p[i] = { ...p[i], accent: v };
                                    update({ projects: p });
                                }} />
                            </div>
                        ))}
                    </Section>
                )}

                {/* ── Skills ── */}
                {activeTab === 'skills' && (
                    <Section title="Skills">
                        <p className="admin-hint">One skill per row. Name and accent color (hex).</p>
                        {config.skills.map((sk, i) => (
                            <div key={i} className="admin-skill-row">
                                <input className="admin-input" placeholder="Skill name" value={sk.name} onChange={e => {
                                    const s = [...config.skills];
                                    s[i] = { ...s[i], name: e.target.value };
                                    update({ skills: s });
                                }} />
                                <input className="admin-input admin-color-input" placeholder="#hex" value={sk.accent} onChange={e => {
                                    const s = [...config.skills];
                                    s[i] = { ...s[i], accent: e.target.value };
                                    update({ skills: s });
                                }} />
                                <button className="admin-btn-ghost admin-btn-sm" onClick={() => {
                                    const s = config.skills.filter((_, idx) => idx !== i);
                                    update({ skills: s });
                                }}>Remove</button>
                            </div>
                        ))}
                        <button className="admin-btn-ghost" onClick={() => update({ skills: [...config.skills, { name: '', accent: '#E6EDF3' }] })}>
                            + Add Skill
                        </button>
                    </Section>
                )}

                {/* ── Contact ── */}
                {activeTab === 'contact' && (
                    <Section title="Contact & Social Links">
                        <Field label="Email" value={config.email} onChange={v => update({ email: v })} />
                        <Field label="GitHub URL" value={config.github} onChange={v => update({ github: v })} />
                        <Field label="LinkedIn URL" value={config.linkedin} onChange={v => update({ linkedin: v })} />
                    </Section>
                )}
            </div>
        </div>
    );
};

/* ── Admin Page ── */
const Admin = () => {
    const [authed, setAuthed] = useState(false);
    return authed ? <Dashboard /> : <Login onLogin={() => setAuthed(true)} />;
};

export default Admin;
