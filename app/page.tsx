const services = [
  {
    title: "Finance & Accounting Advisory",
    text: "Support for accounting processes, financial controls, reporting structures and internal finance governance.",
  },
  {
    title: "Risk & Governance",
    text: "Risk-based advisory for internal controls, governance processes, operational risk and regulatory readiness.",
  },
  {
    title: "IT & Compliance Advisory",
    text: "IT governance, ITGC, ISO 27001 readiness, NIS2/GDPR alignment, vendor risk and framework-based gap assessments.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <div className="text-lg font-semibold tracking-tight">CFOMICS</div>

          <nav className="hidden gap-8 text-sm text-gray-600 md:flex">
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-8 py-28">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-widest text-gray-500">
            Finance · Risk · IT Governance
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Integrated advisory for growing and regulated organizations.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-gray-600">
            CFOMICS helps organizations strengthen financial control, regulatory
            compliance and IT governance through structured assessments,
            practical remediation roadmaps and business-oriented advisory.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-lg bg-gray-900 px-6 py-3 text-center text-white"
            >
              Explore services
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-300 px-6 py-3 text-center"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="bg-gray-50 px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
              Services
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Advisory services across finance, risk and technology.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-200 bg-white p-8"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}