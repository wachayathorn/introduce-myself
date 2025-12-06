import { Footer } from "@/components/footer/page";
import { Header } from "@/components/header/page";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container flex row-auto">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-left">
          <div className="mb-8 inline-block animate-fade-in">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-full text-red-400 text-sm font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight animate-slide-up">
            <span className="block text-black mb-2">Hi, I'm</span>
            <span className="block bg-linear-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              Wachayathorn Singsena
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl animate-fade-in delay-200">
            A passionate software developer specializing in building exceptional
            digital experiences. Currently, I'm focused on developing responsive
            web applications and learning new technologies to enhance my skills.
          </p>
          <div className="grid grid-cols-12 z-50 gap-5">
            <div className="animate-fade-in delay-400">
              <a
                href="https://github.com/wachayathorn"
                target="_blank"
                className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 transition"
              >
                Github
              </a>
            </div>
            <div className="animate-fade-in delay-400">
              <a
                href="https://linkedin.com/in/wachayathorn"
                target="_blank"
                className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
