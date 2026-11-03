import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/salto-encantado-real.jpg";
import { Logo, Nav, SectionBar } from "@/components/brand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Día del GIS Misiones · 18 de noviembre · Salto Encantado" },
      {
        name: "description",
        content:
          "Celebramos el Día del GIS en el Parque Provincial Salto Encantado, Misiones. 18 de noviembre de 2026.",
      },
      { property: "og:title", content: "Día del GIS Misiones" },
      {
        property: "og:description",
        content: "18 de noviembre en el Parque Provincial Salto Encantado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const agenda = [
  ["09:00", "Acreditación y bienvenida"],
  ["10:00", "Charlas: el GIS en la gestión del territorio misionero"],
  ["12:30", "Almuerzo en el parque"],
  ["14:00", "Taller práctico de mapeo con GPS y drones"],
  ["16:00", "Recorrido por los senderos del Salto Encantado"],
  ["17:30", "Cierre y foto grupal"],
];

function Index() {
  return (
    <main className="bg-background text-foreground font-sans">
      <Nav />

      {/* Portada */}
      <section className="relative flex h-[85svh] min-h-[620px] max-h-[820px] items-end">
        <img
          src={hero}
          alt="Parque Provincial Salto Encantado"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/45 to-forest/25" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40 text-primary-foreground md:pb-24">
          <p className="text-lg font-light md:text-xl">
            Ministerio de Ecología y Recursos Naturales Renovables
          </p>
          <h1 className="mt-6 text-[clamp(3.25rem,9vw,7.5rem)] font-light uppercase leading-none tracking-tight">
            Día del GIS
          </h1>
          <p className="mt-5 text-2xl font-light md:text-3xl">
            Misiones <span className="font-bold">2026</span>
          </p>
          <p className="mt-10 max-w-xl text-lg font-light leading-relaxed md:text-xl">
            Una jornada para mapear, compartir y celebrar los Sistemas de Información Geográfica en
            plena selva.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <span className="border border-primary-foreground/60 px-5 py-3 font-medium">
              18 de noviembre
            </span>
            <span className="border border-primary-foreground/60 px-5 py-3">
              Parque Provincial Salto Encantado
            </span>
          </div>
          <a
            href="#agenda"
            className="mt-12 inline-block bg-lapacho px-10 py-4 font-bold text-white transition hover:bg-[#b02a5d]"
          >
            Ver agenda
          </a>
        </div>
      </section>

      <section id="evento" className="pt-8 pb-24 scroll-mt-28">
        <SectionBar n="01" title="El evento" />
        <div className="mx-auto mt-16 max-w-6xl px-6">
          <p className="max-w-3xl text-2xl md:text-4xl font-light leading-snug">
            Una jornada para <strong className="font-bold">mapear</strong>,{" "}
            <strong className="font-bold">compartir</strong> y{" "}
            <strong className="font-bold">celebrar</strong> los Sistemas de Información Geográfica
            en plena selva.
          </p>
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              [
                "Capas de conocimiento",
                "Profesionales, estudiantes y organismos comparten proyectos geoespaciales de la provincia.",
              ],
              [
                "Territorio vivo",
                "Trabajamos en campo, en uno de los paisajes más impactantes de la selva paranaense.",
              ],
              ["Comunidad GIS", "Un día para conectar con quienes mapean Misiones todos los días."],
            ].map(([t, d], i) => (
              <div key={t}>
                <span className="text-sm align-super text-lapacho font-medium">0{i + 1}</span>
                <h3 className="mt-1 text-2xl font-bold text-primary">{t}</h3>
                <div className="my-4 h-px w-8 bg-primary" />
                <p className="text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agenda" className="pt-8 pb-24 scroll-mt-28">
        <SectionBar n="02" title="Agenda" />
        <div className="mx-auto mt-16 max-w-4xl px-6">
          <ul className="divide-y divide-border">
            {agenda.map(([h, a]) => (
              <li key={h} className="flex gap-8 py-5 items-baseline">
                <span className="w-20 text-2xl font-light text-primary tabular-nums">{h}</span>
                <span className="text-lg md:text-xl">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="como-llegar" className="bg-sage/40 pt-8 pb-24 scroll-mt-28">
        <SectionBar n="03" title="Cómo llegar" />
        <div className="mx-auto mt-16 max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-primary">
              cómo <strong className="font-bold">llegar</strong>
            </h2>
            <div className="my-5 h-px w-8 bg-primary" />
            <p className="text-lg text-foreground/80 leading-relaxed">
              Parque Provincial Salto Encantado, municipio de Salto Encantado, Misiones.
            </p>
          </div>
          <iframe
            title="Mapa Salto Encantado"
            className="w-full h-80 border border-border bg-white"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-54.8738%2C-27.0944%2C-54.7738%2C-27.0244&layer=mapnik&marker=-27.05944%2C-54.82378"
          />
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
          <Logo tone="light" className="text-xl" />
          <div className="sm:text-right">
            <p className="font-bold">ecologia.misiones.gob.ar</p>
            <p className="font-light text-sm">Día del GIS Misiones · 18.11.2026</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
