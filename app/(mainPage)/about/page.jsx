import aboutData from "./aboutData";

export default function About() {
  return (
    <section className="flex justify-center items-center py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-3xl text-center px-6">
        <h1 className="text-4xl font-extrabold mb-4 text-[var(--color-main)]">
          {aboutData.title}
        </h1>

        <h2 className="text-xl text-gray-600 mb-6">
          {aboutData.subtitle}
        </h2>

        <p className="text-gray-700 leading-relaxed text-lg">
          {aboutData.description}
        </p>
      </div>
      
    </section>
  );
}
