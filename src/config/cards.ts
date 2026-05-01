import { links } from './links';

export const cards = [
  {
    title: "Pivot",
    meta: "System · Career Navigation · 2026",
    description:
      "A structured way to think through a career shift when the path isn't obvious anymore. Built on persistent context and reflection, not generic advice.",
    href: "/articles/pivot",
    external: false,
    cols: 'col-span-2',
    isPivot: true,
  },
  {
    title: "Therapeutic Co-pilot",
    meta: "System · Reflection · 2026",
    description:
      "A reflective system for understanding direction, resistance, and alignment — without turning it into therapy theatre.",
    href: "/articles/therapeutic-co-pilot",
    external: false,
    cols: 'col-span-2',
  },
  {
    title: "Language Memory Architecture",
    meta: "Foundation · BCLP · Open",
    description:
      "Documents define system behaviour and maintain context over time. The foundation layer for structured AI interaction.",
    href: links.lmaFramework,
    external: false,
    cols: 'col-span-2',
  },
  {
    title: "Aten OS",
    meta: "Forthcoming · 2026",
    description:
      "Professional AI interface. Modes, memory, structured interaction.",
    href: null,
    external: false,
    disabled: true,
    cols: 'col-span-2',
  },
  {
    title: "Strategist",
    meta: "System · Decision Support · 2026",
    description:
      "Decision support for complex situations where clarity matters more than speed. Maps trade-offs, surfaces blind spots, tracks reasoning over time.",
    href: "/articles/strategist",
    external: false,
    cols: 'col-span-2',
  },
  {
    title: "Boundary Condition Language",
    meta: "Governance · Open",
    description:
      "Structured constraints that shape how AI reasons within defined boundaries.",
    href: "/articles/boundary-condition-language",
    external: false,
    cols: 'col-span-2',
  },
  {
    title: "Founding Users",
    meta: "Limited cohort",
    description: "Early access to the system. Direct feedback loop.",
    href: links.foundingUsers,
    external: false,
    cols: 'col-span-2 md:col-span-3',
  },
  {
    title: "Writing",
    meta: "Medium · Essays",
    description:
      "Thinking about AI, identity, and what happens when your industry disappears.",
    href: links.writing,
    external: true,
    cols: 'col-span-2 md:col-span-3',
  },
];
