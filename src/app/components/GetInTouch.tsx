import { useState, useRef, useEffect } from 'react';

type State = 'idle' | 'open' | 'submitted' | 'error';

export function GetInTouch() {
  const [state, setState] = useState<State>('idle');
  const [email, setEmail] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state === 'open') inputRef.current?.focus();
  }, [state]);

  const submit = async () => {
    const val = email.trim();
    if (!val) return;
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: val }),
      });
      setState(res.ok ? 'submitted' : 'error');
    } catch {
      setState('error');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') submit();
    if (e.key === 'Escape') setState('idle');
  };

  if (state === 'submitted') {
    return (
      <span style={{ fontFamily: 'var(--font-body)', color: 'var(--text)', fontSize: '0.93rem' }}>
        I'll be in touch.
      </span>
    );
  }

  if (state === 'open') {
    return (
      <div className="flex items-baseline gap-[6px]">
        <input
          ref={inputRef}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Your email"
          className="outline-none bg-transparent border-b border-[var(--border)] focus:border-[var(--text-secondary)] transition-[border-color] duration-150 py-[2px] w-[150px] placeholder:text-[var(--text-tertiary)]"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.93rem',
            color: 'var(--text)',
          }}
        />
        <button
          onClick={submit}
          className="cursor-pointer transition-colors"
          style={{
            background: 'transparent',
            border: 'none',
            padding: 0,
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          ↵
        </button>
      </div>
    );
  }

  if (state === 'error') {
    return (
      <button
        onClick={() => { setEmail(''); setState('open'); }}
        className="cursor-pointer hover:underline"
        style={{
          background: 'transparent',
          border: 'none',
          padding: 0,
          fontFamily: 'var(--font-body)',
          fontSize: '0.93rem',
          color: 'var(--text-secondary)',
          textDecorationOffset: '3px',
        }}
      >
        Try again
      </button>
    );
  }

  return (
    <button
      onClick={() => setState('open')}
      className="cursor-pointer hover:underline"
      style={{
        background: 'transparent',
        border: 'none',
        padding: 0,
        fontFamily: 'var(--font-body)',
        fontSize: '0.93rem',
        color: 'var(--text)',
        textDecorationOffset: '3px',
      }}
    >
      Get in Touch
    </button>
  );
}
