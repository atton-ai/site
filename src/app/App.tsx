import { Logo } from './components/Logo';
import { ChatModule } from './components/ChatModule';
import { ProjectCard } from './components/ProjectCard';
import { AlternatingText } from './components/AlternatingText';

export default function App() {
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
          className="col-span-2 lg:col-span-3 flex items-center justify-start px-6 py-0 min-h-14"
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
        
        <div 
          className="flex items-center gap-[14px] px-[22px] py-5 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <button 
            className="border-none cursor-pointer transition-opacity hover:opacity-85"
            style={{
              background: '#000',
              color: '#fff',
              padding: '9px 20px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              fontWeight: '500',
              letterSpacing: '0.01em',
              borderRadius: '2px'
            }}
          >
            Founding Access
          </button>
          <span style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>→</span>
        </div>
        
        <div 
          className="flex items-end justify-start px-[22px] py-5 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <a 
            href="#"
            className="no-underline hover:underline"
            style={{ 
              color: 'var(--text)',
              textDecorationOffset: '3px'
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* ROW 2: SOCIAL / LINKS */}
        <div 
          className="flex items-end justify-start px-[22px] py-5 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <a
            href="#"
            className="no-underline group inline-flex items-baseline gap-[3px]"
            style={{ color: 'var(--text)' }}
          >
            <span className="transition-transform duration-150 ease-out group-hover:translate-x-1">LinkedIn</span>
            <span className="text-[0.75em] opacity-50 transition-transform duration-150 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </div>
        
        <div 
          className="flex items-end justify-start px-[22px] py-5 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <a
            href="#"
            className="no-underline group inline-flex items-baseline gap-[3px]"
            style={{ color: 'var(--text)' }}
          >
            <span className="transition-transform duration-150 ease-out group-hover:translate-x-1">GitHub</span>
            <span className="text-[0.75em] opacity-50 transition-transform duration-150 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </div>
        
        <div 
          className="flex items-end justify-start px-[22px] py-5 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <a
            href="#"
            className="no-underline group inline-flex items-baseline gap-[3px]"
            style={{ color: 'var(--text)' }}
          >
            <span className="transition-transform duration-150 ease-out group-hover:translate-x-1">Medium</span>
            <span className="text-[0.75em] opacity-50 transition-transform duration-150 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </div>
        
        <div 
          className="hidden lg:block min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)',
            padding: '20px 22px'
          }}
        />
        
        <div 
          className="flex items-end justify-start px-[22px] py-5 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <a
            href="#"
            className="no-underline group inline-flex items-baseline gap-[3px]"
            style={{ color: 'var(--text)' }}
          >
            <span className="transition-transform duration-150 ease-out group-hover:translate-x-1">LMA Framework</span>
            <span className="text-[0.75em] opacity-50 transition-transform duration-150 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </div>
        
        <div 
          className="flex items-end justify-start px-[22px] py-5 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <a
            href="#"
            className="no-underline group inline-flex items-baseline gap-[3px]"
            style={{ color: 'var(--text)' }}
          >
            <span className="transition-transform duration-150 ease-out group-hover:translate-x-1">Writing</span>
            <span className="text-[0.75em] opacity-50 transition-transform duration-150 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </div>

        {/* ROW 3: AI CHAT MODULE + NARRATIVE */}
        <div 
          className="col-span-2 md:col-span-3 lg:col-span-4 p-0"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <ChatModule />
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

        {/* ROW 4: SYSTEM MODULES */}
        <div 
          className="col-span-2 px-[26px] py-6 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <ProjectCard
            title="Pivot"
            meta="System · Career Navigation · 2026"
            description="A structured way to think through a career shift when the path isn't obvious anymore. Built on persistent context and reflection, not generic advice."
            isPivot={true}
          />
        </div>
        
        <div 
          className="col-span-2 px-[26px] py-6 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <ProjectCard
            title="Therapeutic Co-pilot"
            meta="System · Reflection · 2026"
            description="A reflective system for understanding direction, resistance, and alignment — without turning it into therapy theatre."
          />
        </div>

        {/* ROW 5: FOUNDATION + FUTURE */}
        <div 
          className="col-span-2 px-[26px] py-6 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <ProjectCard
            title="Language Memory Architecture"
            meta="Foundation · BCLP · Open"
            description="Documents define system behaviour and maintain context over time. The foundation layer for structured AI interaction."
          />
        </div>
        
        <div 
          className="col-span-2 px-[26px] py-6 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <ProjectCard
            title="Aten OS"
            meta="Forthcoming · 2026"
            description="Professional AI interface. Modes, memory, structured interaction."
          />
        </div>
        
        <div 
          className="col-span-2 px-[26px] py-6 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <ProjectCard
            title="Strategist"
            meta="System · Decision Support · 2026"
            description="Decision support for complex situations where clarity matters more than speed. Maps trade-offs, surfaces blind spots, tracks reasoning over time."
          />
        </div>
        
        <div 
          className="col-span-2 px-[26px] py-6 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <ProjectCard
            title="Boundary Condition Language"
            meta="Governance · Open"
            description="Structured constraints that shape how AI reasons within defined boundaries."
          />
        </div>

        {/* ROW 6: FOUNDING USERS + WRITING */}
        <div 
          className="col-span-2 md:col-span-3 px-[26px] py-6 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <ProjectCard
            title="Founding Users"
            meta="Limited cohort"
            description="Early access to the system. Direct feedback loop."
          />
        </div>
        
        <div 
          className="col-span-2 md:col-span-3 px-[26px] py-6 min-h-14"
          style={{
            borderRight: 'var(--border-w) solid var(--border)',
            borderBottom: 'var(--border-w) solid var(--border)'
          }}
        >
          <ProjectCard
            title="Writing"
            meta="Medium · Essays"
            description="Thinking about AI, identity, and what happens when your industry disappears."
          />
        </div>

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
          <div style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            hello@atton.ai
          </div>
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
        
<div className="lg:col-span-2 px-[22px] py-5 min-h-14 flex flex-col justify-end"
  style={{
    borderRight: 'var(--border-w) solid var(--border)',
    borderBottom: 'var(--border-w) solid var(--border)'
  }}
>
  <div style={{ fontSize: '0.87rem', fontWeight: '500', color: 'var(--text)' }}>
    Atton Conrad
  </div>

  <div style={{ fontSize: '0.87rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
    AI Systems Architect · Consultant · Human-Centred AI
  </div>
</div>
      </div>
    </div>
  );
}