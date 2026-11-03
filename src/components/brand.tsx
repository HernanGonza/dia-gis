import { useState } from "react";
import flor from "@/assets/flor-lapacho.svg";
import misiones from "@/assets/misiones.svg";

/** Marca gráfica: símbolo (flor de Lapacho) + logotipo ECOLOGÍA / MISIONES (Brandbook 2024). */
export function Logo({
  layout = "horizontal",
  tone = "color",
  className = "",
}: {
  layout?: "horizontal" | "vertical";
  tone?: "color" | "light";
  className?: string;
}) {
  const text = tone === "light" ? "text-beige" : "text-primary";
  const vertical = layout === "vertical";
  return (
    <div
      className={`inline-flex items-center gap-[0.35em] ${vertical ? "flex-col text-center" : ""} ${text} ${className}`}
    >
      <img src={flor} alt="" className={vertical ? "h-[2.6em]" : "h-[2.4em]"} />
      <span className="leading-[0.95]">
        <span className="block text-[1.15em] font-normal tracking-[0.01em]">ECOLOGÍA</span>
        <span className="block text-[0.82em] font-medium tracking-[0.3em]">MISIONES</span>
      </span>
    </div>
  );
}

/** Logo oficial de la Provincia de Misiones (extraído del Brandbook). Toma el color del texto. */
export function Misiones({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Misiones"
      className={`inline-block aspect-[5.76/1] h-[1em] bg-current ${className}`}
      style={{
        maskImage: `url(${misiones})`,
        WebkitMaskImage: `url(${misiones})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
}

/** Encabezado de sección estilo Brandbook: número · título centrado · línea fina. */
export function SectionBar({ n, title }: { n: string; title: string }) {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex items-baseline justify-between border-b border-foreground/60 pb-2 text-muted-foreground uppercase">
        <span className="font-light">{n}</span>
        <span className="font-light tracking-wide">{title}</span>
        <Misiones className="text-primary text-base" />
      </div>
    </div>
  );
}

const links = [
  ["El evento", "#evento"],
  ["Agenda", "#agenda"],
  ["Cómo llegar", "#como-llegar"],
];

/** Navegación flotante, estilo sitio del Ministerio de Ecología. Hamburguesa en pantallas chicas. */
export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
      <nav className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-[#7f9d8c]/90 to-[#8ab995]/90 px-5 py-3 text-white shadow-lg shadow-black/15 backdrop-blur-md sm:px-8">
        <div className="flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-4" aria-label="Inicio">
            <Misiones className="text-[1.6rem]" />
            <span className="h-8 w-px bg-white/60" />
            <span className="flex items-center gap-2 text-sm font-light leading-tight">
              <img src={flor} alt="" className="h-8" />
              <span className="hidden min-[440px]:block">
                Ministerio
                <br />
                de Ecología
              </span>
            </span>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="font-light transition hover:text-lime">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="-mr-2 rounded-lg p-2 md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <ul
            id="menu-movil"
            className="mt-3 flex flex-col border-t border-white/40 pt-2 md:hidden"
          >
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-light"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
