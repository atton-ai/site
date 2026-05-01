// ─── Nav links ────────────────────────────────────────────────────────────────

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const socialLinks: NavLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/attonai/', external: true },
  { label: 'GitHub', href: 'https://github.com/atton-ai', external: true },
  { label: 'Medium', href: 'https://medium.com/@attonai', external: true },
];

export const contentLinks: NavLink[] = [
  { label: 'LMA Framework', href: '/articles/language-memory-architecture', external: false },
  { label: 'Writing', href: 'https://medium.com/@attonai', external: true },
];

// ─── Project cards ────────────────────────────────────────────────────────────

export type Project = {
  title: string;
  href: string | null;   // null = not yet published (no link rendered)
  meta: string;
  description: string;
  cols: string;          // Tailwind col-span classes for the grid cell
  isPivot?: boolean;
  external?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Pivot',
    href: '/articles/pivot',
    meta: 'System · Career Navigation · 2026',
    description: "A structured way to think through a career shift when the path isn't obvious anymore. Built on persistent context and reflection, not generic advice.",
    cols: 'col-span-2',
    isPivot: true,
  },
  {
    title: 'Therapeutic Co-pilot',
    href: '/articles/therapeutic-co-pilot',
    meta: 'System · Reflection · 2026',
    description: 'A reflective system for understanding direction, resistance, and alignment — without turning it into therapy theatre.',
    cols: 'col-span-2',
  },
  {
    title: 'Language Memory Architecture',
    href: '/articles/language-memory-architecture',
    meta: 'Foundation · BCLP · Open',
    description: 'Documents define system behaviour and maintain context over time. The foundation layer for structured AI interaction.',
    cols: 'col-span-2',
  },
  {
    title: 'Aten OS',
    href: null,
    meta: 'Forthcoming · 2026',
    description: 'Professional AI interface. Modes, memory, structured interaction.',
    cols: 'col-span-2',
  },
  {
    title: 'Strategist',
    href: '/articles/strategist',
    meta: 'System · Decision Support · 2026',
    description: 'Decision support for complex situations where clarity matters more than speed. Maps trade-offs, surfaces blind spots, tracks reasoning over time.',
    cols: 'col-span-2',
  },
  {
    title: 'Boundary Condition Language',
    href: '/articles/boundary-condition-language',
    meta: 'Governance · Open',
    description: 'Structured constraints that shape how AI reasons within defined boundaries.',
    cols: 'col-span-2',
  },
  {
    title: 'Founding Users',
    href: '/founding-users',
    meta: 'Limited cohort',
    description: 'Early access to the system. Direct feedback loop.',
    cols: 'col-span-2 md:col-span-3',
  },
  {
    title: 'Writing',
    href: 'https://medium.com/@attonai',
    meta: 'Medium · Essays',
    description: 'Thinking about AI, identity, and what happens when your industry disappears.',
    cols: 'col-span-2 md:col-span-3',
    external: true,
  },
];
