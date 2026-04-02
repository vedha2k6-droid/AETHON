import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Shared Toast Component
const Toast = ({ message, onClose }) => (
    <div className={`toast-notification ${message ? 'visible' : ''}`}>
        <span>{message}</span>
        <button onClick={onClose} className="toast-close">×</button>
    </div>
);

const Header = ({ showToast }) => {
    const [activeMenu, setActiveMenu] = React.useState(null);

    const toggleMenu = (menuName) => {
        if (activeMenu === menuName) setActiveMenu(null);
        else setActiveMenu(menuName);
    };

    return (
        <header className="header" onMouseLeave={() => setActiveMenu(null)}>
            <div className="header-container">
                <Link to="/" className="logo-container" onClick={() => setActiveMenu(null)} style={{ cursor: 'pointer', textDecoration: 'none' }}>
                    <div className="logo-icon" style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center' }}>
                        <img src="/assets/logo.png" alt="Aethonix Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <span className="logo-text" style={{ fontWeight: 700, letterSpacing: '-0.5px' }}>Aethonix<br /><span style={{ fontSize: '14px', display: 'block', marginTop: '-8px' }}>Solutions</span></span>
                </Link>

                <nav className="main-nav">
                    <a href="#" onClick={(e) => { e.preventDefault(); showToast('Navigating to Our Suite'); }}>Our Suite</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleMenu('byNeed'); }} className={activeMenu === 'byNeed' ? 'active-dropdown' : ''}>By Need</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); showToast('Navigating to Resources'); }}>Resources</a>
                    <Link to="/collab" onClick={() => setActiveMenu(null)}>Collab</Link>
                    <a href="#" onClick={(e) => { e.preventDefault(); toggleMenu('about'); }} className={`${activeMenu === 'about' ? 'active-dropdown' : ''}`}>About</a>
                </nav>

                <div className="header-actions">
                    <a href="#" className="login-link" onClick={(e) => { e.preventDefault(); showToast('Opening Login panel...'); }}>Log in</a>
                    <a href="#" className="btn btn-primary" onClick={(e) => { e.preventDefault(); showToast('Opening Demo Request form...'); }}>REQUEST DEMO <span className="arrow">↗</span></a>
                </div>
            </div>

            {/* Mega Menu Dropdowns */}
            {activeMenu === 'byNeed' && (
                <div className="mega-menu">
                    <div className="mega-menu-container container">
                        <div className="mega-column">
                            <h3 className="mega-title">By Role</h3>
                            <ul className="mega-list">
                                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Role: Marketing'); setActiveMenu(null); }}>Marketing</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Role: Sales'); setActiveMenu(null); }}>Sales</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Role: C-Suite & Executives'); setActiveMenu(null); }}>C-Suite & Executives</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Role: PR & Communications'); setActiveMenu(null); }}>PR & Communications</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Role: Research & Insights'); setActiveMenu(null); }}>Research & Insights</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Role: Influencer Marketing'); setActiveMenu(null); }}>Influencer Marketing</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Role: Influencers & Creators'); setActiveMenu(null); }}>Influencers & Creators</a></li>
                            </ul>
                        </div>
                        <div className="mega-column">
                            <h3 className="mega-title">By Industry</h3>
                            <ul className="mega-list">
                                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Industry: Technology'); setActiveMenu(null); }}>Technology</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Industry: Education'); setActiveMenu(null); }}>Education</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Industry: Public Sector'); setActiveMenu(null); }}>Public Sector</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Industry: Retail & Consumer Goods'); setActiveMenu(null); }}>Retail & Consumer Goods</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Industry: Financial Services'); setActiveMenu(null); }}>Financial Services</a></li>
                            </ul>
                        </div>
                        <div className="mega-column">
                            <h3 className="mega-title">By Company Type</h3>
                            <ul className="mega-list">
                                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Company Type: Enterprise'); setActiveMenu(null); }}>Enterprise</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Company Type: Small & Medium Business'); setActiveMenu(null); }}>Small & Medium Business</a></li>
                                <li><a href="#" onClick={(e) => { e.preventDefault(); showToast('Company Type: Agency'); setActiveMenu(null); }}>Agency</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {activeMenu === 'about' && (
                <div className="mega-menu">
                    <div className="mega-grid-container container">
                        <a href="#" className="mega-feature-link" onClick={(e) => { e.preventDefault(); showToast('Navigating to About Us'); setActiveMenu(null); }}>
                            <span className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            </span>
                            <div className="feature-content">
                                <strong className="feature-title">About Us</strong>
                                <span className="feature-desc">See our story</span>
                            </div>
                        </a>
                        <a href="#" className="mega-feature-link" onClick={(e) => { e.preventDefault(); showToast('Navigating to Careers'); setActiveMenu(null); }}>
                            <span className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                            </span>
                            <div className="feature-content">
                                <strong className="feature-title">Careers</strong>
                                <span className="feature-desc">Explore opportunities</span>
                            </div>
                        </a>
                        <a href="#" className="mega-feature-link" onClick={(e) => { e.preventDefault(); showToast('Navigating to Contact Us'); setActiveMenu(null); }}>
                            <span className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                            </span>
                            <div className="feature-content">
                                <strong className="feature-title">Contact Us</strong>
                                <span className="feature-desc">Get in touch</span>
                            </div>
                        </a>
                        <a href="#" className="mega-feature-link" onClick={(e) => { e.preventDefault(); showToast('Navigating to News'); setActiveMenu(null); }}>
                            <span className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                            </span>
                            <div className="feature-content">
                                <strong className="feature-title">News</strong>
                                <span className="feature-desc">Visit the newsroom</span>
                            </div>
                        </a>
                        <a href="#" className="mega-feature-link" onClick={(e) => { e.preventDefault(); showToast('Navigating to Our Impact'); setActiveMenu(null); }}>
                            <span className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </span>
                            <div className="feature-content">
                                <strong className="feature-title">Our Impact</strong>
                                <span className="feature-desc">Learn about our initiatives</span>
                            </div>
                        </a>
                        <a href="#" className="mega-feature-link" onClick={(e) => { e.preventDefault(); showToast('Navigating to Partners'); setActiveMenu(null); }}>
                            <span className="feature-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </span>
                            <div className="feature-content">
                                <strong className="feature-title">Partners</strong>
                                <span className="feature-desc">Aethonix Partner Program</span>
                            </div>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

const Hero = () => (
    <section className="hero-section">
        <div className="container hero-container">
            <div className="hero-left">
                <div className="large-logo">
                    <div className="large-logo-icon" style={{ width: '100px', height: '100px' }}>
                        <img src="/assets/logo.png" alt="Aethonix Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <h1 className="large-logo-text" style={{ color: 'var(--text-main)', display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: 0.9 }}>
                        <strong style={{ color: 'var(--text-main)' }}>Aethonix</strong>
                        <span style={{ fontSize: '32px', fontWeight: 600, color: 'var(--text-main)' }}>Solutions</span>
                    </h1>
                </div>
            </div>
            <div className="hero-right">
                <h4 className="section-subtitle">About us</h4>
                <h2 className="hero-title">We're Aethonix Solutions</h2>
                <p className="hero-description">
                    We are a passionate team focused on creating innovative solutions that help businesses to grow and succeed in the digital world.
                </p>
            </div>
        </div>
    </section>
);

const Guides = () => (
    <section className="guides-section dark-section">
        <div className="container text-center">
            <h2 className="section-title text-center">What guides us.</h2>
        </div>
        <div className="container guides-container">
            <div className="guides-visuals">
                <div className="shape purple-shape"></div>
                <div className="shape yellow-shape">
                    <svg className="rocket-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C12 2 5 6 5 14C5 17 4 19 4 19H20C20 19 19 17 19 14C19 6 12 2 12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M9 19V22M15 19V22M12 19V23" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="12" cy="10" r="2" fill="white" />
                    </svg>
                </div>
                <div className="shape teal-shape"></div>
            </div>
            <div className="guides-content">
                <div className="guide-item">
                    <h3 className="guide-title teal-text">Our Vision</h3>
                    <p>Our vision is to build innovative and accessible technologies that solve real-world problems, empower people, and create a better future for everyone.</p>
                </div>
                <div className="guide-item">
                    <h3 className="guide-title teal-text">Our Mission</h3>
                    <p>To transform innovative ideas into real-world technological solutions. We aim to continuously research, design, and build products.</p>
                </div>
            </div>
        </div>
    </section>
);

const KnownFor = () => (
    <section className="workshop-section">
        <div className="container">
            <h2 className="section-title text-center">Brainobots Workshop</h2>
            <div className="workshop-gallery">
                <figure className="gallery-item item-main">
                    <img src="/assets/workshop/workshop2.png" alt="Robotics Workshop" />
                </figure>
                <figure className="gallery-item">
                    <img src="/assets/workshop/workshop3.jpg" alt="Student Engagement" />
                </figure>
                <figure className="gallery-item">
                    <img src="/assets/workshop/workshop4.jpg" alt="Bionic Hand Demo" />
                </figure>
            </div>
        </div>
    </section>
);

const InnovationHub = ({ showToast }) => {
    const [view, setView] = React.useState(null);

    const bootcampContent = (
        <div className="hub-detail-view fade-in">
            <button className="back-btn" onClick={() => setView(null)}>&larr; Back to Selection</button>
            <div className="hub-card-expanded">
                <h3 className="value-title purple-text">PM Shri kendri vidhyala school</h3>
                <p className="hero-description" style={{ color: '#fff', opacity: 0.9 }}>
                    We have successfully completed a bootcamp over there, empowering students with hands-on robotics and IoT training.
                </p>
                <div className="btn-group" style={{ marginTop: '30px' }}>
                    <button className="btn btn-primary" onClick={() => showToast('Viewing Bootcamp gallery...')}>View Gallery</button>
                </div>
            </div>
        </div>
    );

    const productsContent = (
        <div className="hub-detail-view fade-in">
            <button className="back-btn" onClick={() => setView(null)}>&larr; Back to Selection</button>
            <div className="hub-card-expanded">
                <h3 className="value-title teal-text" style={{ marginBottom: '40px', fontSize: '32px' }}>Upcoming Products</h3>

                <div className="product-grid">
                    <div className="product-card">
                        <span className="product-card-tag">Bionic Tech</span>
                        <div className="product-card-icon">🦾</div>
                        <h4 className="product-card-title">Bionic Arm Prototype v2</h4>
                        <p className="product-card-description">
                            High-precision bionic arm with neural feedback integration and advanced multi-grip functionality.
                        </p>
                    </div>

                    <div className="product-card">
                        <span className="product-card-tag">Healthcare IoT</span>
                        <div className="product-card-icon">📊</div>
                        <h4 className="product-card-title">Rehab Tracker</h4>
                        <p className="product-card-description">
                            Intelligent wearable for real-time recovery monitoring, motion analytics, and patient progress tracking.
                        </p>
                    </div>
                </div>

                <div className="product-footer-note">
                    Neat and professional solutions for modern healthcare.
                </div>
            </div>
        </div>
    );

    return (
        <section className="history-section dark-section" id="innovation-hub">
            <div className="container">
                <h2 className="section-title text-center" style={{ marginBottom: '60px' }}>Innovation & Impact</h2>

                {!view && (
                    <div className="hub-selection-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        <div className="hub-selection-card" onClick={() => setView('bootcamp')}>
                            <div className="hub-icon">🎓</div>
                            <h3>Bootcamp</h3>
                            <p>Success stories and educational initiatives.</p>
                            <span className="learn-more">Learn More &rarr;</span>
                        </div>
                        <div className="hub-selection-card" onClick={() => setView('products')}>
                            <div className="hub-icon">🦾</div>
                            <h3>Products</h3>
                            <p>Upcoming Bionic arms and Rehab trackers.</p>
                            <span className="learn-more">See Future &rarr;</span>
                        </div>
                    </div>
                )}

                {view === 'bootcamp' && bootcampContent}
                {view === 'products' && productsContent}
            </div>
        </section>
    );
};

const Values = () => (
    <section className="values-section dark-section">
        <div className="container text-center">
            <h2 className="section-title text-center">What we stand for.</h2>
        </div>
        <div className="container values-container">
            <div className="value-card purple-card" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 400px) 1fr' }}>
                <div className="value-image">
                    <img src="/assets/workshop.jpg" alt="Robotics and IoT lab" />
                </div>
                <div className="value-content" style={{ padding: '50px' }}>
                    <h3 className="value-title purple-text" style={{ fontSize: '28px', marginBottom: '24px' }}>Our Core Pillars</h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#444' }}>
                        In Aethonix Solutions we are offering our services in <strong>Electronics, IoT, Robotics and Biomedical</strong>. Our goal is to develop innovative solutions in these fields and produce by combining these interdisciplinary fields into a valuable one.
                    </p>
                    <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#444' }}>
                        Other than this we are committed to empower students through hands-on learning sessions. Through our student boot camp training programs, we provide practical exposure to modern technologies, industry tools, and interdisciplinary research areas.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const CTA = ({ showToast }) => (
    <section className="cta-section dark-section">
        <div className="container text-center cta-container">
            <div className="floating-shape shape-blue"></div>
            <div className="floating-shape shape-pink"></div>
            <div className="floating-shape shape-yellow"></div>
            <div className="floating-shape shape-cyan"></div>

            <h2 className="cta-title">Want to learn more?</h2>
            <a href="#" className="btn btn-black" onClick={(e) => { e.preventDefault(); showToast('Redirecting to Contact form...'); }}>GET IN TOUCH</a>
        </div>
    </section>
);

const ChatWidget = ({ showToast }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            showToast(`Message sent: "${inputValue}"`);
            setInputValue('');
        }
    };

    return (
        <div className="chat-widget">
            <div className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                    {isOpen ? (
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    ) : (
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                    )}
                </svg>
            </div>
            <div className={`chat-box ${isOpen ? '' : 'hidden'}`}>
                <div className="chat-header">
                    <img src="https://i.pravatar.cc/150?img=47" alt="Nora" className="agent-avatar" />
                    <div className="agent-info">
                        <strong>Nora</strong>
                        <span>AI SDR Agent</span>
                    </div>
                </div>
                <div className="chat-body" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '15px' }}>
                    <p>Hi there! I'm Nora, an AI SDR Agent from Aethonix Solutions. What questions do you have about our services or how we can support your needs?</p>

                    <button className="chat-chip" onClick={() => showToast('Connecting to Sales team...')} style={{ padding: '8px 16px', borderRadius: '20px', border: '1px solid #1ab3a6', color: '#1ab3a6', background: 'transparent', alignSelf: 'flex-start', cursor: 'pointer', fontSize: '12px', fontWeight: 500 }}>
                        Connect with Sales
                    </button>
                </div>
                <form className="chat-input-area" onSubmit={handleSend} style={{ padding: '12px', display: 'flex', gap: '8px', borderTop: '1px solid #eee' }}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ask a question"
                        style={{ flex: 1, padding: '8px 12px', borderRadius: '20px', border: '1px solid #ddd', outline: 'none' }}
                    />
                    <button type="submit" className="send-btn" style={{ background: 'none', border: 'none', color: '#1ab3a6', cursor: 'pointer', fontSize: '18px' }}>➤</button>
                </form>
            </div>
        </div>
    );
};

const HomePage = ({ showToast }) => (
    <main>
        <Hero />
        <Guides />
        <KnownFor />
        <InnovationHub showToast={showToast} />
        <Values />
        <CTA showToast={showToast} />
    </main>
);

const CollabPage = () => (
    <main className="collab-page">
        <section className="hero-section" style={{ background: '#f8fafc', padding: '100px 0', textAlign: 'center' }}>
            <div className="container">
                <h4 className="section-subtitle">Aethonix Solutions</h4>
                <h1 className="hero-title" style={{ fontSize: '48px', marginBottom: '24px' }}>Incubation & Collaboration</h1>
                <p className="hero-description" style={{ maxWidth: '800px', margin: '0 auto', color: '#444' }}>
                    Driving innovation through strategic partnerships and world-class incubation programs.
                </p>
            </div>
        </section>

        <section className="incubation-section dark-section" style={{ padding: '80px 0' }}>
            <div className="container">
                <h2 className="section-title text-center" style={{ marginBottom: '60px' }}>Our Incubation Journey</h2>
                <div className="values-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                    <div className="value-card" style={{ padding: '50px', background: '#fff', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                        <div className="feature-icon" style={{ width: '70px', height: '70px', background: '#fef3c7', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
                            <svg viewBox="0 0 24 24" width="32" height="32" stroke="#d97706" strokeWidth="2" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                        </div>
                        <h3 className="value-title" style={{ fontSize: '24px', marginBottom: '16px' }}>Incubated at</h3>
                        <strong style={{ display: 'block', fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>AIC RAISE</strong>
                        <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.6' }}>Rathinam College of Arts and Science</p>
                    </div>

                    <div className="value-card" style={{ padding: '50px', background: '#fff', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
                        <div className="feature-icon" style={{ width: '70px', height: '70px', background: '#e0f2f1', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
                            <svg viewBox="0 0 24 24" width="32" height="32" stroke="#1ab3a6" strokeWidth="2" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        </div>
                        <h3 className="value-title" style={{ fontSize: '24px', marginBottom: '16px' }}>Pre-Incubation at</h3>
                        <strong style={{ display: 'block', fontSize: '20px', color: 'var(--text-main)', marginBottom: '8px' }}>SRCAS</strong>
                        <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.6' }}>(sri ramakrishna college of arts and science)</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="collaboration-section" style={{ padding: '80px 0', background: '#111' }}>
            <div className="container">
                <h2 className="section-title text-center" style={{ color: '#fff', marginBottom: '60px' }}>Our Collaborations</h2>
                <div className="values-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    <div className="value-card" style={{ padding: '40px', background: '#ffffff08', borderRadius: '24px', border: '1px solid #ffffff10', textAlign: 'center' }}>
                        <div className="feature-icon" style={{ width: '60px', height: '60px', background: '#ffffff10', borderRadius: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="#fff" strokeWidth="2" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                        </div>
                        <h3 className="value-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '8px' }}>Dhyana Lab!</h3>
                        <p style={{ color: '#94a3b8' }}>Technology & Research Partner</p>
                    </div>

                    <div className="value-card" style={{ padding: '40px', background: '#ffffff08', borderRadius: '24px', border: '1px solid #ffffff10', textAlign: 'center' }}>
                        <div className="feature-icon" style={{ width: '60px', height: '60px', background: '#ffffff10', borderRadius: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="#fff" strokeWidth="2" fill="none"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                        </div>
                        <h3 className="value-title" style={{ color: '#fff', fontSize: '20px', marginBottom: '8px' }}>Moto Link</h3>
                        <p style={{ color: '#94a3b8' }}>Strategic Connectivity Ally</p>
                    </div>
                </div>
            </div>
        </section>

        <CTA showToast={() => { }} />
    </main>
);

const App = () => {
    const [toastMsg, setToastMsg] = React.useState('');

    const showToast = (msg) => {
        setToastMsg(msg);
        setTimeout(() => setToastMsg(''), 3000); // clear after 3s
    };

    return (
        <div className="app-wrapper">
            <Header showToast={showToast} />
            <Routes>
                <Route path="/" element={<HomePage showToast={showToast} />} />
                <Route path="/collab" element={<CollabPage />} />
            </Routes>
            <ChatWidget showToast={showToast} />
            {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg('')} />}
        </div>
    );
};

export default App;
