import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowDownRight, ArrowUpRight, AtSign, BookOpen, Bookmark, Check, Copy, Instagram, Linkedin, MapPin, Sparkles } from 'lucide-react';
import './styles.css';

const projects = [
  { number: '01', title: 'Dhammapada-reader', type: 'Buddhism · 2020', color: 'indigo', mark: '*.', link:'https://apkpure.com/dhammapada/com.senlasy.dhammapada' },
  { number: '02', title: 'Planetz', type: 'Space · 2021', color: 'sage', mark: '✳', link:'https://apkpure.com/planetz/com.senlasy.planetz' },
  { number: '03', title: 'Senlasy', type: 'Social · 2026', color: 'blue', mark: 'S', link: '#' },
];

function App() {
  const [quoteCopied, setQuoteCopied] = useState(false);
  const [quoteSaved, setQuoteSaved] = useState(false);
  const [activeQuote, setActiveQuote] = useState(0);
  const favoriteQuotes = [
    { text: 'Whatever you are, be a good one.', author: 'Abraham Lincoln', source: '' },
    { text: 'If you only read the books that everyone else is reading, you can only think what everyone else is thinking.', author: 'Haruki Murakami', source: 'Norwegian Wood' },
    { text: '1Q84—that’s what I’ll call this new world.', author: 'Aomame', source: '1Q84 · Haruki Murakami' },
    { text: 'Build things that make someone’s day a little easier.', author: 'Reader room note' },
    { text: 'A good app feels simple because someone cared about every detail.', author: 'Reader room note' },
    { text: 'Every small improvement is a quiet way of moving forward.', author: 'Reader room note' },
    { text: 'Read with curiosity; build with kindness.', author: 'Reader room note' },
    { text: 'A page can take you somewhere a screen cannot.', author: 'Reader room note' },
    { text: 'The best ideas often arrive after you slow down.', author: 'Reader room note' },
    { text: 'Stay curious enough to keep learning, and patient enough to keep going.', author: 'Reader room note' },
    { text: 'Make technology feel a little more human.', author: 'Reader room note' },
    { text: 'Good work grows from clear thinking and steady practice.', author: 'Reader room note' },
    { text: 'One thoughtful feature can make a big difference to someone.', author: 'Reader room note' },
    { text: 'Keep the useful parts. Keep the wonder, too.', author: 'Reader room note' },
    { text: 'Books remind us there is always another point of view.', author: 'Reader room note' },
    { text: 'Write code you can understand tomorrow.', author: 'Reader room note' },
    { text: 'Progress is still progress when it happens one quiet step at a time.', author: 'Reader room note' },
    { text: 'Build for people first; the details will find their place.', author: 'Reader room note' },
    { text: 'Let each new chapter make room for a new idea.', author: 'Reader room note' },
    { text: 'Thoughtful work is a kind of respect for the people who use it.', author: 'Reader room note' },
    { text: 'Keep making, keep reading, and stay open to what comes next.', author: 'Reader room note' },
  ];
  const currentQuote = favoriteQuotes[activeQuote];

  async function copyFavoriteQuote() {
    try {
      await navigator.clipboard.writeText(`${currentQuote.text} — ${currentQuote.author}${currentQuote.source ? `, ${currentQuote.source}` : ''}`);
      setQuoteCopied(true);
      window.setTimeout(() => setQuoteCopied(false), 2000);
    } catch {
      setQuoteCopied(false);
    }
  }

  return (
    <main>
      <header className="topbar wrap">
        <a className="wordmark" href="#home" aria-label="Seint Seint Thu home">sst<span>®</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#reading">Reader room</a><a href="#work">Work</a><a href="#contact" className="nav-contact">Say hello <ArrowUpRight size={14} /></a>
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

      <section className="reader-room section-wrap" id="reading">
        <div className="reader-heading"><div><div className="section-kicker">A LITTLE WONDER SPACE</div><h2>The <em>reader room</em></h2></div><BookOpen size={28} strokeWidth={1.4} aria-hidden="true" /></div>
        <div className="reader-content"><p className="reader-intro">A corner for one of my favorite ways to spend free time: finding the ways in a good book.</p><div className="book-shelf" aria-label="Reading interests"><div className="book-spine book-one"><span>FICTION</span></div><div className="book-spine book-two"><span>IDEAS</span></div><div className="book-spine book-three"><span>CREATIVITY</span></div><div className="book-spine book-four"><span>NEW WORLDS</span></div><div className="shelf-caption">ALWAYS OPEN TO A NEW CHAPTER</div></div></div>
        <div className="favorite-quote">
          <div className="favorite-quote-copy"><span className="section-kicker">A FAVORITE TO KEEP</span><blockquote>“{currentQuote.text}”</blockquote><span className="quote-credit">— {currentQuote.author.toUpperCase()}{currentQuote.source ? ` · ${currentQuote.source.toUpperCase()}` : ''}</span></div>
          <div className="quote-actions"><span className="quote-count">{String(activeQuote + 1).padStart(2, '0')} / {favoriteQuotes.length}</span><button type="button" onClick={() => { setActiveQuote((index) => (index + 1) % favoriteQuotes.length); setQuoteCopied(false); setQuoteSaved(false); }}>Next quote <ArrowUpRight size={15} /></button><button type="button" onClick={copyFavoriteQuote} aria-live="polite">{quoteCopied ? <Check size={15} /> : <Copy size={15} />}{quoteCopied ? 'Copied' : 'Copy quote'}</button><button type="button" className={quoteSaved ? 'is-saved' : ''} onClick={() => setQuoteSaved((saved) => !saved)} aria-pressed={quoteSaved}><Bookmark size={15} fill={quoteSaved ? 'currentColor' : 'none'} />{quoteSaved ? 'Saved' : 'Save quote'}</button></div>
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="work-heading"><div><div className="section-kicker">02 / A FEW THINGS I’VE MADE</div><h2>Selected <em>work</em></h2></div><a className="text-link" href="#contact">Have something in mind? <ArrowUpRight size={15} /></a></div>
        <div className="project-grid">{projects.map((project) => <article className="project" key={project.number}><div className={`project-art ${project.color}`}><span className="project-number">{project.number} / 03</span><span className="project-mark">{project.mark}</span><span className="project-arrow"><ArrowDownRight size={18} /></span></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.type}</p></div><a href={project.link} target='blank'><ArrowUpRight size={17} /></a></div></article>)}</div>
      </section>

      <section className="note-band"><div className="note-inner"><span className="section-kicker">A SMALL NOTE</span><p>“Whatever you are,<br /><em>be a good one.</em>”</p><span className="note-attribution">— ABRAHAM LINCOLN</span><span className="note-star">✳</span></div></section>

      <footer className="footer section-wrap" id="contact"><div className="section-kicker">03 / YOUR TURN</div><div className="footer-main"><h2>Let’s make<br /><em>something good.</em></h2><a className="email-link" href="mailto: xiaoyuandevlab@gmail.com"><AtSign size={16} /> xiaoyuandevlab@gmail.com <ArrowUpRight size={18} /></a></div><div className="footer-bottom"><a className="wordmark" href="#home">sst<span>®</span></a><span>MADE AT NIGHT · YANGON, MYANMAR</span><div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Instagram size={17} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={17} /></a></div><a href="#home" className="back-top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
