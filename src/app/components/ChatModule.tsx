import { useState, useRef, useEffect } from 'react';

interface Message {
  text: string;
  type: 'system' | 'ai' | 'user';
}

export function ChatModule() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "This AI understands how I think and work. You can use it to explore the system, ask about the approach, or describe your own situation.",
      type: 'system'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [msgCount, setMsgCount] = useState(0);
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);
  const maxFree = 3;

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    const val = inputValue.trim();
    if (!val) return;

    const newMsgCount = msgCount + 1;
    setMsgCount(newMsgCount);
    
    setMessages(prev => [...prev, { text: val, type: 'user' }]);
    setInputValue('');

    if (newMsgCount > maxFree) {
      setShowEmailPrompt(true);
      return;
    }

    setTimeout(() => {
      const responses = [
        "I'm a demonstration of how this system works. The full version maintains context across sessions, adapts to your thinking style, and operates within structured modes — Pivot, Strategist, or Therapeutic Co-pilot.",
        "The key difference from standard AI chat is persistence. Your context, decisions, and reflections carry forward. Nothing starts from zero.",
        "If you're navigating a career shift or a complex decision, the system is designed to help you think through it structurally — not to give you generic answers."
      ];
      setMessages(prev => [...prev, { 
        text: responses[Math.min(newMsgCount - 1, responses.length - 1)], 
        type: 'ai' 
      }]);
    }, 800 + Math.random() * 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col" style={{ fontFamily: 'var(--font-body)' }}>
      <div 
        className="flex justify-between items-baseline px-[28px] pt-[22px] pb-[16px]"
        style={{ 
          borderBottom: 'var(--border-w) solid var(--border)'
        }}
      >
        <span 
          style={{ 
            fontSize: '1.15rem',
            fontWeight: '800',
            letterSpacing: '-0.01em',
            color: 'var(--text)'
          }}
        >
          Interface
        </span>
        <span 
          style={{ 
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-tertiary)'
          }}
        >
          Mode: Open &nbsp;·&nbsp; Context: Initial
        </span>
      </div>
      
      <div 
        ref={chatBodyRef}
        className="flex-1 px-[28px] py-6 flex flex-col gap-5 overflow-y-auto"
        style={{ 
          minHeight: '280px',
          maxHeight: '420px'
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`${
              msg.type === 'user' ? 'self-end text-right' : ''
            }`}
            style={{
              lineHeight: '1.65',
              color: msg.type === 'system'
                ? 'var(--text-secondary)'
                : msg.type === 'user'
                ? 'var(--text)'
                : 'var(--text-secondary)',
              fontFamily: msg.type === 'system' ? 'var(--font-mono)' : 'var(--font-body)',
              fontSize: msg.type === 'system' ? '0.87rem' : '0.93rem',
              fontWeight: msg.type === 'user' ? '500' : 'normal',
              maxWidth: '88%'
            }}
          >
            {msg.text}
          </div>
        ))}
        
        {showEmailPrompt && (
          <div 
            className="mt-2"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-tertiary)'
            }}
          >
            To continue this conversation, enter your email below.
            <div className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 outline-none px-[10px] py-[6px]"
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: '2px',
                  background: 'transparent',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'var(--text)'
                }}
              />
              <button
                className="px-[14px] py-[6px] border-none cursor-pointer"
                style={{
                  background: 'var(--accent)',
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  borderRadius: '2px'
                }}
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div
        className="mx-[20px] mb-[20px]"
        style={{
          border: 'var(--border-w) solid var(--border)',
          borderRadius: '2px',
          background: 'rgba(0,0,0,0.01)',
          padding: '14px',
        }}
      >
        <div
          className="flex items-stretch border border-[var(--border)] focus-within:border-[var(--text-secondary)] transition-[border-color] duration-150"
          style={{
            borderRadius: '2px',
            background: 'var(--bg)',
            marginBottom: '12px',
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything…"
            className="flex-1 outline-none py-[14px] px-[14px] bg-transparent placeholder:text-[var(--text-secondary)]"
            style={{
              border: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--text)',
            }}
            autoComplete="off"
          />
          <button
            onClick={handleSend}
            className="cursor-pointer px-4 transition-colors"
            style={{
              background: 'transparent',
              borderLeft: 'var(--border-w) solid var(--border)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            ↵
          </button>
        </div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.76rem',
            color: 'var(--text-tertiary)',
            lineHeight: '1.5',
          }}
        >
          You can explore freely. After a few messages, you'll be asked for your email.
        </div>
      </div>
    </div>
  );
}