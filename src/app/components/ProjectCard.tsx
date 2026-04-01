interface ProjectCardProps {
  title: string;
  meta: string;
  description: string;
  hasArrow?: boolean;
  isPivot?: boolean;
}

export function ProjectCard({ title, meta, description, hasArrow = true, isPivot = false }: ProjectCardProps) {
  return (
    <div className="relative" style={{ padding: '4px 0' }}>
      {hasArrow && (
        <span 
          className="absolute"
          style={{
            top: '18px',
            right: '18px',
            fontSize: '0.8rem',
            color: 'var(--text-tertiary)'
          }}
        >
          ↗
        </span>
      )}
      <div 
        style={{
          fontSize: '1.05rem',
          fontWeight: isPivot ? '800' : '700',
          marginBottom: '6px',
          letterSpacing: '-0.01em',
          color: 'var(--text)'
        }}
      >
        {title}
      </div>
      <div 
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--text-tertiary)',
          marginBottom: '14px',
          letterSpacing: '0.01em'
        }}
      >
        {meta}
      </div>
      <div 
        style={{
          fontSize: '0.87rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.65'
        }}
      >
        {description}
      </div>
    </div>
  );
}