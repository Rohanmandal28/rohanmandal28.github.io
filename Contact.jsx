export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center bg-slate-950 text-white">
      <h2 className="text-3xl mb-4">Let's Connect</h2>
      <p className="mb-6 text-slate-400">
        Open to internships and AI/ML opportunities.
      </p>

      <div className="flex justify-center gap-4">
        <a href="mailto:rohanmandal2832006@gmail.com" className="bg-blue-500 px-6 py-3 rounded-xl">
          Email
        </a>
        <a href="https://www.linkedin.com/in/rohan-mandal-822945323" target="_blank" className="border px-6 py-3 rounded-xl">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
