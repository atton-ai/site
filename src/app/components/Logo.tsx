const logo = '/wp-content/uploads/2026/05/logoAttonAi.png';

export function Logo({ className = "", opacity = 1 }: { className?: string; opacity?: number }) {
  return (
    <div
      className={`flex items-center flex-wrap ${className}`}
      style={{ opacity, gap: '16px' }}
    >
      <img
        src={logo}
        alt="Atton AI logo"
        style={{ height: '42px', minWidth: '150px', width: 'auto', objectFit: 'contain' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
        <p style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.2, color: 'var(--text)', fontFamily: 'var(--font-body)' }}>
          Atton Conrad
        </p>
        <p style={{ margin: 0, fontSize: '0.84rem', fontWeight: 500, lineHeight: '1.35', color: 'var(--text-secondary)', fontFamily: 'var(--font-body)' }}>
          AI Systems Architect · Consultant · Human-Centred AI
        </p>
      </div>
    </div>
  );
}
