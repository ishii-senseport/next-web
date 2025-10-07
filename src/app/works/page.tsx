// src/app/works/page.tsx
import { works } from "@/data/works";
export default function Works() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-2xl md:text-4xl font-bold">実績</h1>
      <ul className="mt-8 grid sm:grid-cols-2 gap-6">
        {works.map((w) => (
          <li key={w.title} className="rounded-xl border p-6">
            <h2 className="font-semibold">{w.title}</h2>
            <p className="text-sm text-gray-600">{w.description}</p>
            <a className="inline-block mt-3 underline" href={w.href}>詳細</a>
          </li>
        ))}
      </ul>
    </div>
  );
}