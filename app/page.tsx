import Image from "next/image";
const services = [
  {
    title: "Finance Advisory",
    items: [
      "Accounting services",
      "Financial reporting support",
      "CFO advisory",
      "Internal financial controls",
    ],
  },
  {
    title: "Risk & Compliance",
    items: [
      "Risk assessments",
      "Governance frameworks",
      "Internal audit support",
      "Regulatory readiness",
    ],
  },
  {
    title: "Technology Advisory",
    items: [
      "IT compliance advisory",
      "ITGC reviews",
      "ISO 27001 readiness",
      "PCI DSS readiness",
      "NIS2 / GDPR gap assessments",
    ],
  },
];

const frameworks = [
  "ISO 27001",
  "PCI DSS",
  "NIS2",
  "GDPR",
  "SOC Readiness",
  "ITGC",
  "Vendor Risk",
  "Internal Controls",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="CFOMICS logo"
            width={180}
            height={50}
            priority
            className="h-10 w-auto"
                />
        </div>

          <nav className="hidden gap-8 text-sm text-gray-600 md:flex">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#frameworks" className="hover:text-gray-900">Frameworks</a>
            <a href="#approach" className="hover:text-gray-900">Approach</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-8 py-20 md:py-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-widest text-gray-500">
            Finance · Risk · Technology
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Finance, Risk & Technology Advisory
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-gray-600">
            CFOMICS helps organizations improve governance, compliance and
  operational resilience through integrated finance, risk and technology
  expertise.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-700"
            >
              Explore services
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-300 px-6 py-3 text-center hover:bg-gray-50"
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
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <ul className="mt-6 space-y-3 text-gray-600">
                  {service.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="frameworks" className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
              Frameworks & Standards
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Framework-based guidance for practical compliance outcomes.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {frameworks.map((framework) => (
              <span
                key={framework}
                className="rounded-full border border-gray-300 px-5 py-2 text-sm text-gray-700"
              >
                {framework}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="bg-gray-900 px-8 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-widest text-gray-400">
              Approach
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Structured assessments. Clear priorities. Practical roadmaps.
            </h2>
          </div>

          <div className="space-y-6 text-gray-300">
            <p>
              We start with understanding the business context, regulatory
              exposure and current control environment.
            </p>
            <p>
              We identify gaps, map them to risk and business impact, and define
              remediation priorities that are realistic for the organization.
            </p>
            <p>
              Our advisory work is designed to bridge financial governance,
              operational risk and technology compliance.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
              About CFOMICS
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Independent advisory across finance, risk and technology.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              CFOMICS combines finance, governance and IT compliance expertise
              to support organizations that need structured, practical and
              business-aligned advisory. Our focus is on clarity, risk-based
              decision making and measurable improvement.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-50 px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm uppercase tracking-widest text-gray-500">
              Contact
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Let’s discuss how CFOMICS can support your organization.
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              For advisory services, partnerships or initial assessments,
              contact us at:
            </p>
            <p className="mt-6 text-xl font-semibold">cfomics@gmail.com</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 px-8 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© 2026 CFOMICS. All rights reserved.</p>
          <p>Finance · Risk · Technology Advisory</p>
        </div>
      </footer>
    </main>
  );
}