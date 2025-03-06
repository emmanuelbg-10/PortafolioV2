import Image from "next/image";

export default function Presentation() {
  return (
    <section
      id="conocimientos"
      className="relative flex flex-col lg:flex-row items-stretch justify-between w-full py-8 px-4 lg:px-16"
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <header>
          <h1 className="text-3xl font-bold mb-4 text-left">Hola, soy Emmanuel</h1>
        </header>

        <div className="text-lg space-y-4">
          <p>
            Soy un desarrollador web full stack con experiencia en tecnologías modernas para el
            frontend y el backend. Mi pasión por el aprendizaje continuo me impulsa a explorar
            nuevas herramientas y a compartir conocimientos, lo que se traduce en soluciones
            creativas y eficientes para cada proyecto.
          </p>
          <p>
            Con 20 años, resido en Tenerife, España, y estoy a punto de graduarme en Desarrollo de
            Aplicaciones Web. Mi formación académica y la experiencia en proyectos me permiten
            abordar desafíos complejos y trabajar de manera colaborativa en entornos ágiles. Busco
            constantemente nuevos retos que me ayuden a crecer profesionalmente y a aportar valor en
            cada iniciativa.
          </p>
        </div>
      </div>

      <figure className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
        <Image
          src="/img/AnimatedEmmanuel.png" // Reemplaza con la ruta real de tu imagen
          alt="Foto de Emmanuel"
          width={250}
          height={250}
          className="rounded-full"
        />
      </figure>

      {/* Divisor vertical absoluto (solo en pantallas grandes) */}
      <hr
        className="hidden lg:block absolute"
        style={{
          left: "50%",
          top: 0,
          bottom: 0,
          width: "1px",
          backgroundColor: "#ccc",
          border: "none",
        }}
      />
    </section>
  );
}
