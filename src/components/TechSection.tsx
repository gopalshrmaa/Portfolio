import React from "react";
import StackCard from "./StackCard";

export default function TechSection() {
  const cards = [
    { title: "Languages", items: ["Python","C++","JavaScript","SQL"], icon: <span>🐍</span> },
    { title: "AI / ML", items: ["PyTorch","TensorFlow","scikit-learn","Pandas"], icon: <span>🧠</span> },
    { title: "Web Dev", items: ["React.js","Next.js","Node.js","Tailwind"], icon: <span>🌐</span> },
    { title: "Concepts", items: ["Deep Learning","Prompt Engineering","DSA"], icon: <span>⚡</span> },
    { title: "Tools", items: ["Git","VS Code","Vercel","Google Colab"], icon: <span>🛠️</span> },
    { title: "Domains", items: ["Computer Vision","NLP","Anomaly Detection"], icon: <span>🔬</span> },
  ];

  return (
    <section id="stack" className="mb-16 mt-8">
      <div className="text-center mb-8">
        <p className="text-sm text-pink-400 uppercase tracking-wider">02 — Tech Stack</p>
        <h2 className="text-4xl font-bold">Tools I wield. <span className="text-pink-400 italic">Concepts I own.</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c) => (
          <StackCard key={c.title} title={c.title} items={c.items} icon={c.icon} />
        ))}
      </div>
    </section>
  );
}
