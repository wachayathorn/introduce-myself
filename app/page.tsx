export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container flex row-auto">
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
    </div>
  );
}
