import { useState, useEffect } from 'react';
import { Logo } from './components/Logo';
import { ProjectCard } from './components/ProjectCard';
import { AlternatingText } from './components/AlternatingText';
import { GetInTouch } from './components/GetInTouch';
import { cards } from '../config/cards';
import { links } from '../config/links';

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex items-baseline gap-0 cursor-pointer"
      style={{
        background: 'transparent',
        border: 'none',
        padding: 0,
        marginTop: '4px',
      }}
    >
      <span
        className="transition-transform duration-150 ease-out group-hover:translate-x-1"
        style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}
      >
        {copied ? 'Copied' : 'Copy email'}
      </span>
    </button>
  );
}

export default function App() {
  useEffect(() => {
    const target = document.getElementById('ai-chat-container');
    if (!target) return;

    const move = () => {
      const source = document.getElementById('mwai-chatbot-source');
      if (!source) return false;
      target.appendChild(source);
      source.style.display = 'block';
      return true;
    };

    if (move()) return;

    const observer = new MutationObserver(() => {
      if (move()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className="min-h-screen"
      style={{ 
        fontFamily: 'var(--font-body)',
        background: 'var(--bg)',
        color: 'var(--text)',
        lineHeight: '1.45',
        WebkitFontSmoothing: 'antialiased'
      }}
    >
      <div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        style={{
          borderTop: 'var(--border-w) solid var(--border)',
          borderLeft: 'var(--border-w) solid var(--border)'
        }}
      >
        {/* ROW 1: IDENTITY */}
        <div
          className="col-span-2 lg:col-span-3 flex items-center justify-start px-6 py-4 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <Logo />
        </div>
        
        <div 
          className="hidden lg:block min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)',
            padding: '20px 22px'
          }}
        />
        
        {/* Founding Access CTA hidden for now; layout slot preserved intentionally */}
        <div
          className="flex items-center px-[22px] py-5 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <button
            style={{
              visibility: 'hidden',
              background: '#000',
              padding: '9px 20px',
              fontSize: '0.85rem',
              borderRadius: '2px',
              border: 'none',
            }}
          >
            Founding Access
          </button>
        </div>
        
        <div 
          className="flex items-end justify-start px-[22px] py-5 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <GetInTouch />
        </div>

        {/* ROW 2: SOCIAL / LINKS */}
        {[
          { label: 'LinkedIn', href: links.linkedin, external: true },
          { label: 'GitHub', href: links.github, external: true },
          { label: 'Medium', href: links.medium, external: true },
          { label: 'X', href: links.x, external: true },
        ].map(({ label, href, external }) => (
          <div
            key={label}
            className="flex items-end justify-start px-[22px] py-5 min-h-14"
            style={{
              borderRight: 'var(--border-w) solid var(--border)',
              borderBottom: 'var(--border-w) solid var(--border)'
            }}
          >
            <a
              href={href}
              className="no-underline group inline-flex items-baseline gap-[3px]"
              style={{ color: 'var(--text)' }}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="transition-transform duration-150 ease-out group-hover:translate-x-1">{label}</span>
              <span className="text-[0.75em] opacity-50 transition-transform duration-150 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </div>
        ))}

        <div
          className="hidden lg:block min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)',
            padding: '20px 22px'
          }}
        />

        {[
          { label: 'Writing', href: links.writing, external: true },
        ].map(({ label, href, external }) => (
          <div
            key={label}
            className="flex items-end justify-start px-[22px] py-5 min-h-14"
            style={{
              borderRight: 'var(--border-w) solid var(--border)',
              borderBottom: 'var(--border-w) solid var(--border)'
            }}
          >
            <a
              href={href}
              className="no-underline group inline-flex items-baseline gap-[3px]"
              style={{ color: 'var(--text)' }}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="transition-transform duration-150 ease-out group-hover:translate-x-1">{label}</span>
              <span className="text-[0.75em] opacity-50 transition-transform duration-150 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </div>
        ))}

        {/* ROW 3: AI CHAT MODULE + NARRATIVE */}
        <div 
          className="col-span-2 md:col-span-3 lg:col-span-4 p-0"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <div className="interface-chat-box">
            <div id="ai-chat-container" />
          </div>
        </div>
        
        <div
          className="col-span-2 px-[22px] py-6 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <div style={{
            borderLeft: '2px solid var(--border)',
            paddingLeft: '16px',
          }}>
            <p style={{ fontSize: '1.1rem', fontWeight: '600', lineHeight: '1.45', color: 'var(--text)', marginBottom: '0.3em' }}>AI makes it easy to act.</p>
            <p style={{ fontSize: '1.1rem', fontWeight: '600', lineHeight: '1.45', color: 'var(--text)', marginBottom: '1.4em' }}>It doesn't make it easy to think.</p>

            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '0.3em' }}>Most organisations move straight from "we should use AI" to implementation.</p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '0.3em' }}>They automate what they haven't examined,</p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '0.3em' }}>accelerate decisions they haven't structured,</p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '1.4em' }}>then wonder why the output is garbage.</p>

            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '0.3em' }}>I start with the layer before the system.</p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '1.4em' }}>The thinking, the structure, the constraints that make AI useful.</p>

            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '1.4em' }}>Then I build.</p>

            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginBottom: '0.3em' }}>If you want to plug in a tool and call it transformation, I'm not that.</p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>If you want it to actually work, we should talk.</p>
          </div>
        </div>

        {/* ROWS 4–6: PROJECT CARDS */}
        {cards.map(({ cols, title, href, meta, description, isPivot, external }) => (
          <div
            key={title}
            className={`${cols} px-[26px] py-6 min-h-14`}
            style={{
              borderRight: 'var(--border-w) solid var(--border)',
              borderBottom: 'var(--border-w) solid var(--border)'
            }}
          >
            <ProjectCard
              title={title}
              href={href}
              meta={meta}
              description={description}
              isPivot={isPivot}
              external={external}
            />
          </div>
        ))}

        {/* ROW 7: FOOTER */}
        <div 
          className="col-span-2 flex items-center justify-start px-6 py-0 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <AlternatingText />
        </div>
        
        <div 
          className="px-[22px] py-5 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <div style={{ fontSize: '0.87rem', fontWeight: '500', color: 'var(--text)' }}>
            Inquiries
          </div>
          <CopyEmail />
        </div>
        
        <div 
          className="px-[22px] py-5 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <div style={{ fontSize: '0.87rem', fontWeight: '500', color: 'var(--text)' }}>
            Location
          </div>
          <div style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Denmark/London
          </div>
        </div>
        
        <div
          className="lg:col-span-2 px-[22px] py-5 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <div style={{ fontSize: '0.87rem', fontWeight: '500', color: 'var(--text)' }}>
            AI &amp; Cloud Architecture
          </div>
          <div style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Claude Certified Architect
          </div>
          <div style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Google Cloud Associate
          </div>
        </div>
      </div>
    </div>
  );
}