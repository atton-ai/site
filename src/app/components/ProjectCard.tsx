interface ProjectCardProps {
  title: string;
  href?: string | null;
  meta: string;
  description: string;
  hasArrow?: boolean;
  isPivot?: boolean;
  disabled?: boolean;
  external?: boolean;
}

export function ProjectCard({ title, href, meta, description, hasArrow = true, isPivot = false, disabled = false, external = false }: ProjectCardProps) {
  const isLinked = !!href && !disabled;
  const Wrapper = isLinked ? 'a' : 'div';
  const wrapperProps = isLinked
    ? { href, 'aria-label': title, ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
    : {};

  return (
    <Wrapper className="relative group cursor-pointer block no-underline" style={{ padding: '4px 0' }} {...wrapperProps}>
      {hasArrow && (
        <span
          className="absolute transition-transform duration-150 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
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
        className="transition-transform duration-150 ease-out group-hover:translate-x-1"
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
          fontSize: '0.93rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.65'
        }}
      >
        {description}
      </div>
    </Wrapper>
  );
}
