export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-slate-950 text-white">
      
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Rohan Mandal
      </h1>

      <h2 className="text-xl md:text-2xl text-blue-400 mb-4">
        Aspiring AI/ML Engineer
      </h2>

      <p className="max-w-xl text-slate-400 mb-6">
        Turning real-world problems into intelligent, data-driven solutions.
      </p>

      <div className="flex gap-4">
        <a href="#projects" className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition">
          View Projects
        </a>

        <a href="#contact" className="border border-slate-500 px-6 py-3 rounded-xl hover:bg-slate-800 transition">
          Contact Me
        </a>
      </div>

    </section>
  );
}
