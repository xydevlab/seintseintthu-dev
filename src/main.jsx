import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowDownRight, ArrowUpRight, AtSign, BookOpen, Facebook, Github, Instagram, Linkedin, MapPin, Radio, Sparkles, X } from 'lucide-react';
import './styles.css';

const projects = [
  { number: '01', title: 'Dhammapada-reader', type: 'Buddhism · 2020', color: 'indigo', mark: '*.', link:'https://apkpure.com/dhammapada/com.senlasy.dhammapada' },
  { number: '02', title: 'Planetz', type: 'Space · 2021', color: 'sage', mark: '✳', link:'https://apkpure.com/planetz/com.senlasy.planetz' },
  { number: '03', title: 'Senlasy', type: 'Social · 2026', color: 'blue', mark: 'S', link: '#' },
];

const radioTracks = [
  { number: '01', title: 'You Belong with Me', artist: 'Taylor Swift', mood: 'COUNTRY POP · 2008', spotifyId: '1GEBsLDvJGw7kviySRI6GX' },
  { number: '02', title: 'Too Little, Too Late', artist: 'JoJo', mood: 'POP · 2006', spotifyId: '5pS5GzrFOTiT1j4yCeYByV' },
  { number: '03', title: 'Just the Way You Are', artist: 'Bruno Mars', mood: 'POP · 2010', spotifyId: '7BqBn9nzAq8spo5e7cZ0dJ' },
  { number: '04', title: 'Love Yourself', artist: 'Justin Bieber', mood: 'POP · 2015', spotifyId: '50kpGaPAhYJ3sGmk6vplg0' },
  { number: '05', title: '群青 (Gunjō)', artist: 'YOASOBI', mood: 'J-POP · 2020', spotifyId: '0T4AitQuq8IJhWBWuZwkFA' },
  { number: '06', title: 'たぶん (Tabun)', artist: 'YOASOBI', mood: 'J-POP · 2020', spotifyId: '398dL22bDbKbAmiOnPaq7o' },
  { number: '07', title: "Hero's Come Back!!", artist: 'nobodyknows+', mood: 'J-HIP HOP · 2007', spotifyId: '7weHG0yOwtAcZ0qBhyODLF' },
  { number: '08', title: '猫 (Neko)', artist: 'DISH//', mood: 'J-POP · 2017', spotifyId: '6sIx7Cn37DGEhjy9hBP8Gx' },
  { number: '09', title: '25 Minutes', artist: 'Michael Learns To Rock', mood: 'SOFT ROCK · 1993', spotifyId: '43j3MyGD3GEfYhCPTaF2is' },
];

function App() {
  const [activeTrack, setActiveTrack] = useState(0);
  const currentTrack = radioTracks[activeTrack];

  function selectTrack(index) {
    setActiveTrack(index);
  }

  return (
    <main>
      <header className="topbar wrap">
        <a className="wordmark" href="#home" aria-label="Seint Seint Thu home">sst<span>®</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#stack">Tech stack</a><a href="#radio">Radio</a><a href="#reading">Reader room</a><a href="#work">Work</a><a href="#contact" className="nav-contact">Say hello <ArrowUpRight size={14} /></a>
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
        <div className="about-content"><h2>Building at<br /><em>Good Night.</em></h2><div className="about-text"><p>I have over three years of experience in app development, with a special focus on mobile apps. I enjoy turning thoughtful ideas into useful, easy-to-use experiences.</p><p>When I’m away from the screen, you’ll often find me reading a book and making room for a new perspective.</p><div className="location"><MapPin size={15} /> BASED IN YANGON, MYANMAR</div></div></div>
      </section>

      <section className="tech-stack section-wrap" id="stack">
        <div className="section-kicker">02 / WHAT I USE</div>
        <div className="stack-heading"><h2>Tools for<br /><em>good ideas.</em></h2><p>I build across mobile and web, choosing the right platform to bring each idea to life.</p></div>
        <div className="stack-list" aria-label="Tech stack"><div className="stack-item"><span className="stack-number">01</span><strong>Android</strong><span className="stack-type">MOBILE</span></div><div className="stack-item"><span className="stack-number">02</span><strong>iOS</strong><span className="stack-type">MOBILE</span></div><div className="stack-item"><span className="stack-number">03</span><strong>React</strong><span className="stack-type">WEB</span></div></div>
      </section>

      <section className="radio-room section-wrap" id="radio">
        <div className="radio-heading"><div><div className="section-kicker">03 / TUNING IN</div><h2>Seint’s <em>radio</em></h2><p>A small playlist for slow evenings, long walks, and finding a little focus.</p></div><div className="radio-badge"><Radio size={17} /><span>ON AIR</span><i /></div></div>
        <div className="radio-layout">
          <div className="radio-player">
            <div className="radio-embed-heading"><span>NOW TUNING</span><a href={`https://open.spotify.com/track/${currentTrack.spotifyId}`} target="_blank" rel="noreferrer">Open in Spotify <ArrowUpRight size={13} /></a></div>
            <iframe key={currentTrack.spotifyId} title={`${currentTrack.title} by ${currentTrack.artist} on Spotify`} src={`https://open.spotify.com/embed/track/${currentTrack.spotifyId}?utm_source=generator&theme=0`} width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
          </div>
          <div className="radio-list" aria-label="Radio song list">
            {radioTracks.map((track, index) => <button type="button" className={`radio-track${activeTrack === index ? ' is-active' : ''}`} key={track.number} onClick={() => selectTrack(index)} aria-current={activeTrack === index ? 'true' : undefined}><span className="radio-number">{track.number}</span><div className="radio-track-title"><h3>{track.title}</h3><span>{track.artist}</span></div><span className="radio-mood">{track.mood}</span><span className="radio-wave" aria-hidden="true"><i /><i /><i /><i /><i /></span></button>)}
          </div>
        </div>
        <p className="radio-note">A few songs currently in rotation <span>✳</span></p>
      </section>

      <section className="reader-room section-wrap" id="reading">
        <div className="reader-heading"><div><div className="section-kicker">A LITTLE WONDER SPACE</div><h2>The <em>reader room</em></h2></div><BookOpen size={28} strokeWidth={1.4} aria-hidden="true" /></div>
        <div className="reader-content"><p className="reader-intro">A corner for one of my favorite ways to spend free time: finding the ways in a good book.</p><div className="book-shelf" aria-label="Reading interests"><div className="book-spine book-one"><span>FICTION</span></div><div className="book-spine book-two"><span>IDEAS</span></div><div className="book-spine book-three"><span>CREATIVITY</span></div><div className="book-spine book-four"><span>NEW WORLDS</span></div><div className="shelf-caption">ALWAYS OPEN TO A NEW CHAPTER</div></div></div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="work-heading"><div><div className="section-kicker">04 / A FEW THINGS I’VE MADE</div><h2>Selected <em>work</em></h2></div><a className="text-link" href="#contact">Have something in mind? <ArrowUpRight size={15} /></a></div>
        <div className="project-grid">{projects.map((project) => <article className="project" key={project.number}><div className={`project-art ${project.color}`}><span className="project-number">{project.number} / 03</span><span className="project-mark">{project.mark}</span><span className="project-arrow"><ArrowDownRight size={18} /></span></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.type}</p></div><a href={project.link} target='blank'><ArrowUpRight size={17} /></a></div></article>)}</div>
      </section>

      <section className="note-band"><div className="note-inner"><span className="section-kicker">A SMALL NOTE</span><p>“Whatever you are,<br /><em>be a good one.</em>”</p><span className="note-attribution">— ABRAHAM LINCOLN</span><span className="note-star">✳</span></div></section>

      <footer className="footer section-wrap" id="contact"><div className="section-kicker">05 / YOUR TURN</div>
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
