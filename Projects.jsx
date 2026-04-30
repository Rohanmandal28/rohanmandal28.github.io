const projects = [
  {
    title: "Disease Prediction System",
    desc: "ML-based system for predicting diseases from symptoms.",
  },
  {
    title: "Forgery Detection",
    desc: "Detects forged documents using pattern recognition.",
  },
  {
    title: "Jarvis Assistant",
    desc: "Voice-controlled AI automation system.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950 text-white">
      <h2 className="text-3xl text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {projects.map((p, i) => (
          <div key={i} className="bg-slate-900 p-6 rounded-2xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-slate-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
