// src/app/contact/page.tsx（fetchでAPIへPOST）
"use client";
import { useState } from "react";

export default function Contact() {
  const [state, setState] = useState<"idle"|"sending"|"done"|"error">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(fd.entries())),
      headers: { "Content-Type": "application/json" },
    });
    setState(res.ok ? "done" : "error");
  }
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-2xl md:text-4xl font-bold">お問い合わせ</h1>
      <form onSubmit={onSubmit} className="mt-8 grid gap-4">
        <input name="name" placeholder="お名前" required className="border rounded-md px-3 py-2" />
        <input name="email" type="email" placeholder="メール" required className="border rounded-md px-3 py-2" />
        <textarea name="message" placeholder="内容" rows={6} className="border rounded-md px-3 py-2" />
        <button disabled={state==="sending"} className="rounded-md border px-4 py-2">
          {state==="sending" ? "送信中..." : "送信"}
        </button>
        {state==="done" && <p className="text-green-600">送信しました。</p>}
        {state==="error" && <p className="text-red-600">エラーが発生しました。</p>}
      </form>
    </div>
  );
}