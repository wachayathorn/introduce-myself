import Reveal from "../ui/reveal";

export default function Footer() {
  return (
    <footer className="bg-[#f3f4f5]">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 text-center md:flex-row md:px-10 md:text-left lg:px-16">
        <div>
          <p className="font-bold text-[#111418]">Wachayathorn Singsena</p>
          <p className="text-sm text-[#6C727F]">Senior Software Engineer · Backend Microservices</p>
        </div>
        <p className="text-sm text-[#6C727F]">© 2026 Wachayathorn Singsena</p>
      </Reveal>
    </footer>
  );
}
