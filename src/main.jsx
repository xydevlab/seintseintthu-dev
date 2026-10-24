import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowDownRight, ArrowUpRight, AtSign, Facebook, Github, Linkedin, MapPin, Sparkles, X } from 'lucide-react';
import './styles.css';

const projects = [
  { number: '01', title: 'Dhammapada-reader', type: 'Buddhism · 2020', color: 'indigo', mark: '*.', link:'https://apkpure.com/dhammapada/com.senlasy.dhammapada' },
  { number: '02', title: 'Planetz', type: 'Space · 2021', color: 'sage', mark: '✳', link:'https://apkpure.com/planetz/com.senlasy.planetz' },
  { number: '03', title: 'Senlasy', type: 'Social · 2026', color: 'blue', mark: 'S', link: '#', current: true },
];

function App() {
  return (
    <main>
      <header className="topbar wrap">
        <a className="wordmark" href="#home" aria-label="Seint Seint Thu home">sst<span>®</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#stack">Tech stack</a><a href="#work">Work</a><a href="#contact" className="nav-contact">Say hello <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</div>
          <h1>Making room<br />for <em>good things.</em></h1>
          <p className="intro">Hi, I’m <strong>Seint Seint Thu</strong> — a creative thinker and maker drawn to thoughtful ideas, useful details, and the stories in between.</p>
          <a className="text-link" href="#about">A little about me <ArrowDown size={15} /></a>
        </div>
        <div className="hero-art" aria-label="Blue and violet mountain landscape emblem">
          <div className="art-note note-top">a softer<br />kind of focus <Sparkles size={14} /></div>
          <svg className="landscape-mark" viewBox="0 0 360 290" role="img" aria-hidden="true">
            <defs>
              <linearGradient id="mark-gradient" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#20c7ff"/><stop offset=".55" stopColor="#315dff"/><stop offset="1" stopColor="#9b42ff"/></linearGradient>
              <linearGradient id="sun-gradient" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#148dff"/><stop offset="1" stopColor="#692cff"/></linearGradient>
            </defs>
            <circle cx="180" cy="92" r="69" fill="url(#sun-gradient)" opacity=".94"/>
            <path d="M66 177 126 132q15-12 26-22 12-10 21-10t22 12l26 22q12 10 23 9l45 33-61-20q-13-4-26-17l-24-21q-4-4-8 0l-27 24q-14 12-30 17Z" fill="url(#mark-gradient)"/>
            <path d="M111 191q34 0 48 5t-12 10q-39 8-24 15t105 15q-79 8-119 0t-21-18q11-10 41-16t-18-11Z" fill="url(#mark-gradient)"/>
          </svg>
          <div className="art-note note-bottom">YANGON, MM <span>↗</span></div>
          <div className="vertical-label">FIND YOUR OWN WAY</div>
        </div>
        <div className="hero-index">01 <span>—</span> INTRODUCTION</div>
      </section>

      <section className="about section-wrap" id="about">
        <div className="section-kicker">01 / THE SHORT VERSION</div>
        <div className="about-content"><h2>Building at<br /><em>Good Night.</em></h2><div className="about-text"><p>I have over three years of experience in app development, with a special focus on mobile apps. I enjoy turning thoughtful ideas into useful, easy-to-use experiences.</p><div className="location"><MapPin size={15} /> BASED IN YANGON, MYANMAR</div></div></div>
      </section>

      <section className="tech-stack section-wrap" id="stack">
        <div className="section-kicker">02 / WHAT I USE</div>
        <div className="stack-heading"><h2>Tools for<br /><em>good ideas.</em></h2><p>I build across mobile and web, choosing the right platform to bring each idea to life.</p></div>
        <div className="stack-list" aria-label="Tech stack">
          <div className="stack-item"><span className="stack-number">01</span><svg className="stack-icon android-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8.5a5 5 0 0 1 10 0v.5H7zM6 10h12v7a2 2 0 0 1-2 2h-1v2h-2v-2h-2v2H9v-2H8a2 2 0 0 1-2-2zm-3 1h2v6H3zm16 0h2v6h-2zM7.4 3.3l1.5 2.2m7.7-2.2-1.5 2.2" fill="currentColor" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9.5" cy="7" r=".6" fill="#0c142d"/><circle cx="14.5" cy="7" r=".6" fill="#0c142d"/></svg><strong>Android</strong><span className="stack-type">MOBILE</span></div>
          <div className="stack-item"><span className="stack-number">02</span><svg className="stack-icon apple-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.7 12.8c0-2 1.6-3 1.7-3.1a3.7 3.7 0 0 0-2.9-1.6c-1.2-.1-2.4.7-3 .7s-1.5-.7-2.5-.7a3.8 3.8 0 0 0-3.2 1.9c-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.4 2s1.3-.6 2.5-.6 1.5.6 2.5.6 1.7-1 2.3-2a9 9 0 0 0 1-2.1 3.3 3.3 0 0 1-1.8-3.1ZM14.7 6.8A3.7 3.7 0 0 0 15.6 4a3.8 3.8 0 0 0-2.5 1.3 3.4 3.4 0 0 0-.9 2.7 3.2 3.2 0 0 0 2.5-1.2Z"/></svg><strong>iOS</strong><span className="stack-type">MOBILE</span></div>
          <div className="stack-item"><span className="stack-number">03</span><svg className="stack-icon react-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="1.8" fill="currentColor"/><g stroke="currentColor" strokeWidth="1.15"><ellipse cx="12" cy="12" rx="10" ry="3.8"/><ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)"/></g></svg><strong>React</strong><span className="stack-type">WEB</span></div>
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="work-heading"><div><div className="section-kicker">03 / SELECTED PROJECTS</div><h2>Selected <em>work</em></h2></div><a className="text-link" href="#contact">Have something in mind? <ArrowUpRight size={15} /></a></div>
        <div className="project-grid">{projects.map((project) => <article className={`project${project.current ? ' is-current' : ''}`} key={project.number}><div className={`project-art ${project.color}`}><span className="project-number">{project.number} / 03</span>{project.current && <span className="project-status">CURRENT WORK</span>}<span className="project-mark">{project.mark}</span><span className="project-arrow"><ArrowDownRight size={18} /></span></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.type}{project.current && <span className="current-label"> · IN PROGRESS</span>}</p></div><a href={project.link} target='blank' aria-label={`View ${project.title}`}><ArrowUpRight size={17} /></a></div></article>)}</div>
      </section>

      <footer className="footer section-wrap" id="contact"><div className="section-kicker">04 / CONTACT</div>
      <div className="footer-main"><h2>Let’s make<br /><em>something good.</em></h2><a className="email-link" href="mailto: xiaoyuandevlab@gmail.com"><AtSign size={16} /> xiaoyuandevlab@gmail.com <ArrowUpRight size={18} /></a></div>
      <div className="footer-bottom">
        <a className="wordmark" href="#home">sst<span>®</span></a><span>MADE AT NIGHT · YANGON, MYANMAR</span>
        <div className="socials">
          <a href="https://github.com/xydevlab" aria-label="Github" target='blank' ><Github size={17} /></a>
          <a href="https://linkedin.com/in/seintseintthu" aria-label="LinkedIn" target='blank' ><Linkedin size={17} /></a>
          <a href="https://x.com/_seintseintthu" aria-label="X" target='blank' ><X size={17} /></a>
          <a href="https://facebook.com/seintseintthu.dev" aria-label="X" target='blank' ><Facebook size={17} /></a>
         
        </div><a href="#home" className="back-top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
