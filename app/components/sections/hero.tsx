"use client";

import { useRef, useState } from "react";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "3", label: "Roles" },
  { value: "4", label: "Companies" },
  { value: "API", label: "Microservices" },
];

const cardSlots = [
  "left-0 top-8 z-10 w-72 -rotate-3 lg:left-6",
  "left-1/2 top-0 z-30 w-96 -translate-x-1/2 rotate-0",
  "top-10 z-10 w-72 rotate-3 left-[calc(100%-18rem)] lg:left-[calc(100%-19.5rem)]",
];

export default function Welcome() {
  const [order, setOrder] = useState(["now", "daily", "before"]);
  const moving = useRef(false);

  const bringToMiddle = (id: string) => {
    if (moving.current) return;
    setOrder((current) => {
      const index = current.indexOf(id);
      if (index === 1) return current;
      moving.current = true;
      window.setTimeout(() => {
        moving.current = false;
      }, 520);
      const next = [...current];
      next[index] = current[1];
      next[1] = id;
      return next;
    });
  };

  const resetOrder = () => setOrder(["now", "daily", "before"]);

  const deck = (stacked: boolean) =>
    order.map((id, index) => (
      <article
        key={id}
        onMouseEnter={() => bringToMiddle(id)}
        className={`rounded-2xl border border-[#E5E7EB] bg-white p-5 text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          stacked
            ? index === 1
              ? "z-10 scale-[1.02] shadow-[0_24px_48px_-8px_rgba(0,0,0,0.12)]"
              : "shadow-[0_16px_36px_-6px_rgba(0,0,0,0.08)]"
            : `${cardSlots[index]} absolute ${
                index === 1
                  ? "shadow-[0_24px_48px_-8px_rgba(0,0,0,0.12)]"
                  : "shadow-[0_16px_36px_-6px_rgba(0,0,0,0.08)]"
              }`
        }`}
      >
        {cards[id as keyof typeof cards]}
      </article>
    ));

  const cards = {
    now: (
      <>
        <p className="text-xs font-semibold text-[#6C727F] uppercase">Current</p>
        <h2 className="mt-1 text-lg font-bold">Virtual Bank</h2>
        <p className="text-sm text-[#6C727F]">Ascend Money · Bangkok, Thailand</p>
        <p className="mt-4 text-sm text-[#45474a]">Backend · Kotlin · Spring Boot</p>
      </>
    ),
    daily: (
      <>
        <p className="text-xs font-bold tracking-wider text-[#6C727F] uppercase">Primary technologies</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Kotlin", "Spring Boot", "Microservices"].map((tool) => (
            <span key={tool} className="rounded-full bg-[#F3F4F6] px-3 py-1 text-sm font-medium">
              {tool}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-[#6C727F]">
          Backend microservices for the Virtual Bank team at Ascend Money.
        </p>
      </>
    ),
    before: (
      <>
        <p className="text-xs font-semibold text-[#e11d2e] uppercase">Previous</p>
        <h2 className="mt-1 text-lg font-bold">KBTG</h2>
        <p className="text-sm text-[#6C727F]">Innovation Engineer</p>
        <p className="mt-4 text-sm text-[#45474a]">04/2022 – 10/2026 · Nonthaburi</p>
      </>
    ),
  };

  return (
    <section id="home" className="relative overflow-x-hidden px-4 pt-16 pb-16 md:px-10 lg:px-16">
      <div className="pointer-events-none absolute top-10 left-1/2 -z-10 h-[420px] w-full max-w-3xl -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#e11d2e]/[0.04] via-red-100/10 to-transparent blur-3xl" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="animate-fade-in mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e11d2e] opacity-25" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e11d2e]" />
          </span>
          <span className="text-xs font-semibold tracking-wide text-[#6C727F] uppercase">
            Current role · Virtual Bank, Ascend Money
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl leading-tight font-extrabold tracking-tight text-[#111418] uppercase md:text-6xl">
          <span className="hero-mask block">
            <span className="block">Wachayathorn</span>
          </span>
          <span className="hero-mask hero-mask-delay block">
            <span className="block">Singsena</span>
          </span>
        </h1>
        <p className="animate-fade-in-up animation-delay-300 mt-3 text-lg font-semibold text-[#e11d2e] md:text-2xl">
          Senior Software Engineer · Backend Microservices
        </p>
        <p className="animate-fade-in-up animation-delay-400 mt-4 max-w-2xl text-base leading-7 text-[#6C727F] md:text-lg">
          Senior Software Engineer specializing in backend microservices and high-performance APIs
          for the Virtual Bank team at{" "}
          <span className="font-semibold text-[#111418]">Ascend Money</span>.
          Primary technologies are Kotlin and Spring Boot, with AWS for deployment.
        </p>

        <div className="animate-fade-in-up animation-delay-500 mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
          <a
            href="https://github.com/wachayathorn"
            target="_blank"
            rel="noreferrer"
            className="hover-pop inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-[#111418] shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:bg-[#fff1f2] hover:text-[#e11d2e] sm:w-auto"
          >
            GitHub
          </a>
          <a
            href="#experience"
            className="hover-pop inline-flex h-12 w-full items-center justify-center rounded-full bg-black text-sm font-medium text-white shadow-[0_12px_24px_-8px_rgba(0,0,0,0.25)] hover:bg-[#2a2a2a] sm:w-52"
          >
            Explore Experience
          </a>
          <a
            href="#contact"
            className="hover-pop inline-flex h-12 w-full items-center justify-center rounded-full bg-white text-sm font-medium text-[#111418] shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:bg-black hover:text-white sm:w-52"
          >
            Get In Touch
          </a>
          <a
            href="https://linkedin.com/in/wachayathorn"
            target="_blank"
            rel="noreferrer"
            className="hover-pop inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-[#111418] shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:bg-[#fff1f2] hover:text-[#e11d2e] sm:w-auto"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="hover-pop animate-scale-in flex flex-col items-center rounded-2xl border border-[#E5E7EB] bg-[#F3F4F6] p-6 text-center [animation-fill-mode:both] hover:bg-white"
              style={{ animationDelay: `${0.55 + index * 0.12}s` }}
            >
              <span className="text-4xl font-medium tracking-tight text-[#111418]">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-semibold tracking-wider text-[#6C727F] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div
          className="mt-16 flex w-full max-w-xl flex-col gap-4 xl:hidden"
          onMouseLeave={resetOrder}
        >
          {deck(true)}
        </div>
        <div
          className="relative mx-auto mt-16 hidden min-h-[280px] w-full max-w-4xl xl:block"
          onMouseLeave={resetOrder}
        >
          {deck(false)}
        </div>
      </div>
    </section>
  );
}
