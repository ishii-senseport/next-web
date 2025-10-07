// src/data/works.ts
export type Work = { title: string; href: string; description?: string };
export const works: Work[] = [
  { title: "コーポサイトA", href: "#", description: "BtoB向け" },
  { title: "採用サイトB", href: "#", description: "コーポ採用" },
];