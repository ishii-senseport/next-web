// src/app/page.tsx（トップ）
export default function Page() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl md:text-5xl font-bold">未来を形にする、Example Inc.</h1>
      <p className="mt-4 text-gray-600">
        Web制作・開発を中心に、事業成長に効くプロダクトをお届けします。
      </p>
      <div className="mt-8">
        <a href="/contact" className="inline-block rounded-lg border px-6 py-3">
          無料相談はこちら
        </a>
      </div>
    </section>
  );
}