"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Language = "en" | "bg";
type PageKey =
  | "home"
  | "services"
  | "finance"
  | "technology"
  | "grc"
  | "about"
  | "contact"
  | "insights";
type SiteContent = (typeof content)[Language];
type DetailContent = {
  eyebrow: string;
  title: string;
  intro: string;
  outcomes: readonly string[];
  sections: readonly {
    title: string;
    text: string;
  }[];
};
type CtaContent = {
  primary: string;
  secondary: string;
  email: string;
  text: string;
};

const content = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      finance: "Finance Advisory",
      technology: "Technology Advisory",
      grc: "Governance, Risk & Compliance",
      allServices: "All Services",
      about: "About",
      contact: "Contact",
    },
    cta: {
      primary: "Book a consultation",
      secondary: "Explore services",
      email: "Email CFOmics",
      text: "Need senior finance, governance or compliance support for your next stage of growth? Let's discuss how CFOmics can help you improve visibility, strengthen controls and scale with confidence.",
    },
    footer: {
      copyright: "Copyright 2026 CFOmics. All rights reserved.",
      tagline: "Finance Advisory | CFO Support | Governance",
    },
    home: {
      eyebrow: "Finance | Risk | Technology | Compliance",
      title: "Finance, Risk & Governance Advisory",
      intro:
        "CFOmics helps businesses strengthen financial management, improve reporting visibility, optimize processes and build scalable governance frameworks.",
      note:
        "Our expertise combines finance advisory, CFO support, AI-enabled finance transformation, internal controls, IT risk, security and compliance advisory.",
      trust: [
        "18+ years finance leadership",
        "AI-enabled finance workflows",
        "Reporting & internal controls",
        "Governance & compliance expertise",
      ],
      visualTitle: "Integrated Finance & Technology Advisory",
      visualIntro: "Finance, governance, risk and compliance aligned around practical management decisions.",
      framework: ["Finance", "Governance", "Risk", "Compliance"],
      servicesTitle: "Our Services",
      servicesIntro:
        "Two complementary advisory practices helping organizations improve performance, governance and decision-making.",
      technologyTitle: "Technology Advisory",
      technologyIntro:
        "Practical support for technology risk, cybersecurity governance and regulatory readiness where finance, controls and technology intersect.",
      technologyServices: [
        "NIS2 Readiness",
        "DORA Readiness",
        "PCI DSS Advisory",
        "SWIFT Customer Security Programme (CSP) Assessments",
        "ISO 27001 Readiness",
        "ISO 42001 AI Governance",
        "IT Risk Management",
        "Security & Compliance Advisory",
      ],
      frameworksTitle: "Frameworks & Standards",
      frameworks: [
        "NIS2",
        "DORA",
        "PCI DSS",
        "SWIFT CSP",
        "ISO 27001",
        "ISO 42001",
        "Cyber Resilience Act (CRA)",
        "SOC 2",
      ],
      expertiseTitle: "Expertise Behind CFOmics",
      expertiseIntro:
        "Senior finance, operations, analytics and governance experience for companies that need practical advisory without unnecessary complexity. CFOmics combines core advisory capabilities with a trusted network of experienced finance, compliance and technology professionals.",
      whyTitle: "Why CFOmics",
      whyText:
        "CFOmics combines finance and technology expertise with senior-level advisory experience, a practical compliance approach, strong governance and risk focus, and tailored engagements shaped around each client's priorities.",
      whyPoints: [
        "Combined Finance and Technology expertise",
        "Senior-level advisory experience",
        "Practical compliance approach",
        "Governance and risk focus",
        "Tailored engagements",
      ],
      approachTitle: "Built for practical decisions",
      approach: [
        "Clarify financial visibility and reporting needs.",
        "Strengthen controls, accountability and operating rhythm.",
        "Align risk and compliance priorities with the business.",
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Services",
      intro:
        "Integrated Finance, Risk & Technology Advisory. CFOmics supports organizations across finance operations, compliance readiness, governance, IT risk and technology advisory.",
      pillars: [
        {
          href: "/finance-advisory",
          badge: "FIN",
          title: "Finance Advisory",
          text:
            "CFO support, planning, reporting, treasury, controls and AI-enabled finance transformation.",
          services: [
            "Fractional CFO & Strategic Finance",
            "Budgeting, Forecasting & FP&A",
            "Management Reporting & Decision Packs",
            "Treasury & Cash Flow Management",
            "Internal Controls & Governance",
            "AI-enabled Finance Transformation",
          ],
        },
        {
          href: "/technology-advisory",
          badge: "TECH",
          title: "Technology Advisory",
          text:
            "Framework-based assessments, gap analysis and advisory support for regulated and technology-dependent organizations.",
          services: [
            "NIS2 Readiness",
            "DORA Readiness",
            "PCI DSS Advisory",
            "SWIFT Customer Security Programme (CSP) Assessments",
            "ISO 27001 Readiness",
            "ISO 42001 AI Governance",
            "Cyber Resilience Act (CRA) Readiness",
            "IT Risk Management",
            "Security & Compliance Advisory",
          ],
        },
      ],
    },
    finance: {
      eyebrow: "Finance Advisory",
      title: "Senior finance support for visibility, control and scale.",
      intro:
        "CFOmics helps organizations improve financial visibility, reporting discipline and finance operating models.",
      outcomes: [
        "CFO Services",
        "Financial Reporting",
        "Budgeting & Forecasting",
        "Internal Controls",
        "Finance Transformation",
        "Accounting Process Advisory",
      ],
      sections: [
        {
          title: "Fractional CFO & Strategic Finance",
          text:
            "Senior financial perspective for leadership cadence, decision support, operating priorities and transformation planning.",
        },
        {
          title: "Reporting, Planning & Management Insight",
          text:
            "Budgeting, rolling forecasts and management reporting packs that improve visibility and accountability.",
        },
        {
          title: "Controls, Treasury & Transformation",
          text:
            "Cash flow routines, working capital focus, internal controls and AI-enabled process improvements.",
        },
      ],
    },
    technology: {
      eyebrow: "Technology Advisory",
      title: "Technology Advisory",
      intro:
        "CFOmics provides framework-based assessments, gap analysis and advisory support for regulated and technology-dependent organizations.",
      outcomes: [
        "NIS2 Readiness",
        "DORA Readiness",
        "PCI DSS Advisory",
        "SWIFT Customer Security Programme (CSP) Assessments",
        "ISO 27001 Readiness",
        "ISO 42001 AI Governance",
        "Cyber Resilience Act (CRA) Readiness",
        "IT Risk Management",
        "Security & Compliance Advisory",
      ],
      sections: [
        {
          title: "Regulatory Readiness",
          text:
            "Assessment and advisory support for NIS2, DORA, Cyber Resilience Act readiness and related governance expectations.",
        },
        {
          title: "Security & Compliance Frameworks",
          text:
            "Practical gap analysis and advisory support for PCI DSS, SWIFT CSP, ISO 27001 and ISO 42001 AI governance.",
        },
        {
          title: "IT Risk Management",
          text:
            "Structured support for technology risk, security governance, remediation planning and compliance priorities.",
        },
      ],
    },
    grc: {
      eyebrow: "Governance, Risk & Compliance",
      title: "Practical governance and compliance support for growing organizations.",
      intro:
        "CFOmics supports selected clients with IT risk, security and compliance advisory where stronger governance and control are business priorities.",
      outcomes: [
        "IT risk and compliance advisory",
        "PCI DSS readiness and payment security",
        "SOC 1 / SOC 2 readiness",
        "ISO 27001 advisory",
        "Security governance and third-party risk reviews",
        "Secure SDLC and cloud security advisory",
      ],
      sections: [
        {
          title: "Risk & Control Readiness",
          text:
            "Gap assessments, remediation priorities and governance roadmaps connected to business impact.",
        },
        {
          title: "Compliance Frameworks",
          text:
            "Practical readiness support for PCI DSS, SOC reporting, ISO 27001 and selected control frameworks.",
        },
        {
          title: "Security Governance",
          text:
            "Security operating practices, third-party reviews, secure SDLC and cloud security advisory.",
        },
      ],
    },
    about: {
      eyebrow: "About CFOmics",
      title: "Boutique advisory for finance, governance and practical risk management.",
      paragraphs: [
        "CFOmics is a boutique advisory firm focused on finance transformation, CFO support, governance and practical risk management. We help companies improve financial visibility, strengthen internal controls, optimize operations and make better business decisions through structured reporting and advisory support.",
        "Our approach combines hands-on finance experience with process improvement, analytics, AI-enabled workflows and selected compliance and security expertise. We work with growing companies, local businesses and international organizations that need senior-level support without building a large internal advisory team.",
        "CFOmics combines core advisory capabilities with a trusted network of experienced finance, compliance and technology professionals.",
      ],
      modelTitle: "Our Model",
      modelText:
        "CFOmics combines senior advisory experience with a flexible network of finance, risk, compliance and technology professionals. This allows us to assemble the right expertise for each engagement while maintaining practical oversight, quality and business focus.",
      focus: ["Finance", "Risk", "Compliance", "Security"],
      profiles: [
        {
          category: "FINANCE",
          title: "Strategic Finance & Transformation",
          text:
            "Senior finance executive experience across financial management, accounting, treasury, controlling and business transformation.",
        },
        {
          category: "ANALYTICS",
          title: "Finance Operations & Analytics",
          text:
            "Finance planning, reporting, performance management, business analytics and process improvement experience.",
        },
        {
          category: "GRC & SECURITY",
          title: "Governance, Risk & Security",
          text:
            "Payment security, IT governance, risk management, PCI DSS, SOC reporting, ISO 27001 and cloud security experience.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Book a consultation",
      intro:
        "Contact CFOmics for advisory, partnership and assessment inquiries across finance, technology, governance, risk and compliance.",
      email: "office@cfomics.com",
    },
    insights: {
      eyebrow: "Insights",
      title: "Insights library in preparation",
      intro:
        "This section is prepared for future articles on PCI DSS, AI in finance, internal controls, governance, SOC readiness and ISO 27001.",
      topics: [
        "PCI DSS articles",
        "AI in Finance",
        "Internal Controls",
        "Governance",
        "SOC Readiness",
        "ISO 27001",
      ],
    },
  },
  bg: {
    nav: {
      home: "Начало",
      services: "Услуги",
      finance: "Финанси",
      technology: "Технологично консултиране",
      grc: "Управление, риск и съответствие",
      allServices: "Всички услуги",
      about: "За нас",
      contact: "Контакт",
    },
    cta: {
      primary: "Запазете консултация",
      secondary: "Вижте услугите",
      email: "Пишете на CFOmics",
      text:
        "Имате нужда от опитна финансова, управленска или подкрепа по съответствие за следващия етап на растеж? Нека обсъдим как CFOmics може да помогне за по-добра видимост, по-силни контроли и уверено мащабиране.",
    },
    footer: {
      copyright: "2026 CFOmics. Всички права запазени.",
      tagline: "Финансово консултиране | CFO подкрепа | Управление и контрол",
    },
    home: {
      eyebrow: "Финанси | Риск | Технологии | Съответствие",
      title: "Финансово, рисково и управленско консултиране",
      intro:
        "CFOmics помага на бизнеси да подобрят финансовото управление, видимостта на отчетността, процесите и мащабируемите рамки за управление и контрол.",
      note:
        "Експертизата ни комбинира финансово консултиране, CFO подкрепа, финансова трансформация с AI, вътрешни контроли, IT риск, сигурност и консултиране по съответствие.",
      trust: [
        "18+ години финансово лидерство",
        "Финансови процеси с AI",
        "Отчетност и вътрешни контроли",
        "Експертиза по управление и съответствие",
      ],
      visualTitle: "Интегрирано финансово и технологично консултиране",
      visualIntro: "Финанси, управление, риск и съответствие, свързани с практични управленски решения.",
      framework: ["Финанси", "Управление", "Риск", "Съответствие"],
      servicesTitle: "Нашите услуги",
      servicesIntro:
        "Две допълващи се консултантски практики, които помагат на организациите да подобрят представянето, управлението и решенията.",
      technologyTitle: "Технологично консултиране",
      technologyIntro:
        "Практична подкрепа за технологичен риск, управление на киберсигурността и регулаторна готовност там, където финансите, контролите и технологиите се пресичат.",
      technologyServices: [
        "NIS2 готовност",
        "DORA готовност",
        "PCI DSS консултиране",
        "SWIFT Customer Security Programme (CSP) оценки",
        "ISO 27001 готовност",
        "ISO 42001 AI управление",
        "IT риск мениджмънт",
        "Консултиране по сигурност и съответствие",
      ],
      frameworksTitle: "Рамки и стандарти",
      frameworks: [
        "NIS2",
        "DORA",
        "PCI DSS",
        "SWIFT CSP",
        "ISO 27001",
        "ISO 42001",
        "Cyber Resilience Act (CRA)",
        "SOC 2",
      ],
      expertiseTitle: "Експертизата зад CFOmics",
      expertiseIntro:
        "Опит във финанси, операции, анализи и управление за компании, които имат нужда от практично консултиране без излишна сложност. CFOmics комбинира основни консултантски способности с доверена мрежа от опитни финансови, compliance и технологични професионалисти.",
      whyTitle: "Защо CFOmics",
      whyText:
        "CFOmics комбинира финансова и технологична експертиза със senior консултантски опит, практичен compliance подход, силен фокус върху управление и риск, и ангажименти, съобразени с приоритетите на всеки клиент.",
      whyPoints: [
        "Комбинирана финансова и технологична експертиза",
        "Senior консултантски опит",
        "Практичен compliance подход",
        "Фокус върху управление и риск",
        "Съобразени ангажименти",
      ],
      approachTitle: "Създадено за практични решения",
      approach: [
        "Изясняваме финансовата видимост и нуждите от отчетност.",
        "Засилваме контролите, отговорностите и работния ритъм.",
        "Свързваме риска и съответствието с бизнес приоритетите.",
      ],
    },
    services: {
      eyebrow: "Услуги",
      title: "Услуги",
      intro:
        "Интегрирано финансово, рисково и технологично консултиране. CFOmics подкрепя организации във финансови операции, готовност за съответствие, управление, IT риск и технологично консултиране.",
      pillars: [
        {
          href: "/finance-advisory",
          badge: "FIN",
          title: "Финансово консултиране",
          text:
            "CFO подкрепа, планиране, отчетност, ликвидност, контроли и финансова трансформация с AI.",
          services: [
            "Fractional CFO и стратегически финанси",
            "Бюджетиране, прогнозиране и FP&A",
            "Управленска отчетност и анализи",
            "Управление на ликвидност и парични потоци",
            "Вътрешни контроли и управление",
            "Финансова трансформация с AI",
          ],
        },
        {
          href: "/technology-advisory",
          badge: "TECH",
          title: "Технологично консултиране",
          text:
            "Оценки по рамки, gap анализ и консултантска подкрепа за регулирани и технологично зависими организации.",
          services: [
            "NIS2 готовност",
            "DORA готовност",
            "PCI DSS консултиране",
            "SWIFT Customer Security Programme (CSP) оценки",
            "ISO 27001 готовност",
            "ISO 42001 AI управление",
            "Cyber Resilience Act (CRA) готовност",
            "IT риск мениджмънт",
            "Консултиране по сигурност и съответствие",
          ],
        },
      ],
    },
    finance: {
      eyebrow: "Финансово консултиране",
      title: "Опитна финансова подкрепа за видимост, контрол и растеж.",
      intro:
        "CFOmics помага на организации да подобрят финансовата видимост, отчетната дисциплина и финансовите операционни модели.",
      outcomes: [
        "CFO услуги",
        "Финансова отчетност",
        "Бюджетиране и прогнозиране",
        "Вътрешни контроли",
        "Финансова трансформация",
        "Консултиране по счетоводни процеси",
      ],
      sections: [
        {
          title: "Fractional CFO и стратегически финанси",
          text:
            "Опитна финансова перспектива за управленски ритъм, решения, оперативни приоритети и трансформация.",
        },
        {
          title: "Отчетност, планиране и управленски анализи",
          text:
            "Бюджетиране, rolling прогнози и управленски отчети за по-добра видимост и отговорност.",
        },
        {
          title: "Контроли, ликвидност и трансформация",
          text:
            "Процеси за парични потоци, работен капитал, вътрешни контроли и подобрения с AI.",
        },
      ],
    },
    technology: {
      eyebrow: "Технологично консултиране",
      title: "Технологично консултиране",
      intro:
        "CFOmics предоставя оценки по рамки, gap анализ и консултантска подкрепа за регулирани и технологично зависими организации.",
      outcomes: [
        "NIS2 готовност",
        "DORA готовност",
        "PCI DSS консултиране",
        "SWIFT Customer Security Programme (CSP) оценки",
        "ISO 27001 готовност",
        "ISO 42001 AI управление",
        "Cyber Resilience Act (CRA) готовност",
        "IT риск мениджмънт",
        "Консултиране по сигурност и съответствие",
      ],
      sections: [
        {
          title: "Регулаторна готовност",
          text:
            "Оценка и консултантска подкрепа за NIS2, DORA, Cyber Resilience Act готовност и свързани управленски очаквания.",
        },
        {
          title: "Рамки за сигурност и съответствие",
          text:
            "Практичен gap анализ и консултиране за PCI DSS, SWIFT CSP, ISO 27001 и ISO 42001 AI управление.",
        },
        {
          title: "IT риск мениджмънт",
          text:
            "Структурирана подкрепа за технологичен риск, управление на сигурността, remediation планиране и compliance приоритети.",
        },
      ],
    },
    grc: {
      eyebrow: "Управление, риск и съответствие",
      title: "Практична подкрепа по управление и съответствие за растящи организации.",
      intro:
        "CFOmics подкрепя избрани клиенти с консултиране по IT риск, сигурност и съответствие, когато по-силното управление и контрол са бизнес приоритет.",
      outcomes: [
        "IT риск и консултиране по съответствие",
        "PCI DSS готовност и платежна сигурност",
        "SOC 1 / SOC 2 готовност",
        "ISO 27001 консултиране",
        "Управление на сигурността и прегледи на трети страни",
        "Secure SDLC и облачна сигурност",
      ],
      sections: [
        {
          title: "Готовност за риск и контрол",
          text:
            "Gap оценки, приоритети за подобрение и управленски roadmap, свързан с бизнес ефекта.",
        },
        {
          title: "Compliance рамки",
          text:
            "Практична подготовка за PCI DSS, SOC reporting, ISO 27001 и избрани контролни рамки.",
        },
        {
          title: "Управление на сигурността",
          text:
            "Практики за сигурност, прегледи на трети страни, Secure SDLC и облачна сигурност.",
        },
      ],
    },
    about: {
      eyebrow: "За CFOmics",
      title: "Бутиково консултиране във финанси, управление и практичен риск мениджмънт.",
      paragraphs: [
        "CFOmics е бутикова консултантска фирма с фокус върху финансова трансформация, CFO подкрепа, управление и практичен риск мениджмънт. Помагаме на компании да подобрят финансовата видимост, да засилят вътрешните контроли, да оптимизират операциите и да вземат по-добри бизнес решения чрез структурирана отчетност и консултантска подкрепа.",
        "Подходът ни комбинира практически финансов опит с подобрение на процеси, анализи, работни потоци с AI и избрана експертиза по съответствие и сигурност. Работим с растящи компании, местни бизнеси и международни организации, които имат нужда от опитна подкрепа без изграждане на голям вътрешен консултантски екип.",
        "CFOmics комбинира основни консултантски способности с доверена мрежа от опитни финансови, compliance и технологични професионалисти.",
      ],
      modelTitle: "Нашият модел",
      modelText:
        "CFOmics комбинира senior консултантски опит с гъвкава мрежа от финансови, рискови, compliance и технологични професионалисти. Това ни позволява да съберем правилната експертиза за всеки ангажимент, като запазваме практичен надзор, качество и бизнес фокус.",
      focus: ["Финанси", "Риск", "Съответствие", "Сигурност"],
      profiles: [
        {
          category: "ФИНАНСИ",
          title: "Стратегически финанси и трансформация",
          text:
            "Опит във финансово управление, счетоводство, ликвидност, контролинг и бизнес трансформация.",
        },
        {
          category: "АНАЛИЗИ",
          title: "Финансови операции и анализи",
          text:
            "Опит във финансово планиране, отчетност, performance management, бизнес анализи и процесни подобрения.",
        },
        {
          category: "GRC И СИГУРНОСТ",
          title: "Управление, риск и сигурност",
          text:
            "Опит в платежна сигурност, IT управление, риск, PCI DSS, SOC reporting, ISO 27001 и cloud security.",
        },
      ],
    },
    contact: {
      eyebrow: "Контакт",
      title: "Запазете консултация",
      intro:
        "Свържете се с CFOmics за консултантски, партньорски и оценъчни запитвания във финанси, технологии, управление, риск и съответствие.",
      email: "office@cfomics.com",
    },
    insights: {
      eyebrow: "Публикации",
      title: "Библиотека с публикации в подготовка",
      intro:
        "Тази секция е подготвена за бъдещи материали за PCI DSS, AI във финансите, вътрешни контроли, управление, SOC готовност и ISO 27001.",
      topics: [
        "PCI DSS статии",
        "AI във финансите",
        "Вътрешни контроли",
        "Управление",
        "SOC готовност",
        "ISO 27001",
      ],
    },
  },
} as const;

const serviceNavItems = [
  { key: "finance", href: "/finance-advisory" },
  { key: "technology", href: "/technology-advisory" },
  { key: "allServices", href: "/services" },
] as const;

export function SitePage({ page }: { page: PageKey }) {
  const [language, setLanguage] = useState<Language>("en");
  const t = content[language];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9fc] text-slate-950">
      <Header language={language} setLanguage={setLanguage} t={t} />

      {page === "home" && <HomePage t={t} />}
      {page === "services" && <ServicesPage t={t} />}
      {page === "finance" && <DetailPage data={t.finance} cta={t.cta} />}
      {page === "technology" && (
        <DetailPage data={t.technology} cta={t.cta} />
      )}
      {page === "grc" && <DetailPage data={t.grc} cta={t.cta} />}
      {page === "about" && <AboutPage t={t} />}
      {page === "contact" && <ContactPage t={t} />}
      {page === "insights" && <InsightsPage t={t} />}

      <Footer t={t} />
    </main>
  );
}

function Header({
  language,
  setLanguage,
  t,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  t: SiteContent;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="CFOmics logo"
            width={180}
            height={50}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 xl:flex">
          <Link href="/" className="transition hover:text-slate-950">
            {t.nav.home}
          </Link>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1.5 py-2 transition hover:text-slate-950"
            >
              <span>{t.nav.services}</span>
              <span className="text-[10px]">▼</span>
            </button>
            <div className="invisible absolute left-0 top-full min-w-72 translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-2xl shadow-blue-950/10 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {serviceNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                >
                  {t.nav[item.key]}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about" className="transition hover:text-slate-950">
            {t.nav.about}
          </Link>
          <Link href="/contact" className="transition hover:text-slate-950">
            {t.nav.contact}
          </Link>
        </nav>

        <div
          className="flex rounded-full border border-slate-200 bg-slate-50 p-1 text-xs font-semibold text-slate-500 shadow-sm"
          aria-label="Language switcher"
        >
          {(["en", "bg"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setLanguage(option)}
              className={`rounded-full px-3 py-1.5 transition ${
                language === option
                  ? "bg-[#0b2f57] text-white shadow-sm"
                  : "hover:text-slate-900"
              }`}
              aria-pressed={language === option}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function HomePage({ t }: { t: SiteContent }) {
  return (
    <>
      <Hero t={t} />
      <TrustStrip items={t.home.trust} />
      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <Eyebrow>{t.services.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.home.servicesTitle}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            {t.home.servicesIntro}
          </p>
        </div>
        <ServicePillars t={t} compact />
      </SectionShell>
      <TechnologyAdvisory t={t} />
      <FrameworksStandards t={t} />
      <ExpertisePreview t={t} />
      <WhyCFOmics t={t} />
      <section className="bg-[#081f38] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-3xl font-semibold">{t.home.approachTitle}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {t.home.approach.map((item, index) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5"
              >
                <span className="text-sm font-bold text-blue-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-sm leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA t={t} />
    </>
  );
}

function TechnologyAdvisory({ t }: { t: SiteContent }) {
  return (
    <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <Eyebrow>{t.home.technologyTitle}</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.home.technologyTitle}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            {t.home.technologyIntro}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.technologyServices.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FrameworksStandards({ t }: { t: SiteContent }) {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>{t.home.frameworksTitle}</Eyebrow>
        <div className="mt-6 flex flex-wrap gap-3">
          {t.home.frameworks.map((framework) => (
            <span
              key={framework}
              className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm"
            >
              {framework}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertisePreview({ t }: { t: SiteContent }) {
  return (
    <section className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.home.expertiseTitle}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            {t.home.expertiseIntro}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.about.profiles.map((profile) => (
            <article
              key={profile.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1f5f9f]">
                {profile.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{profile.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {profile.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCFOmics({ t }: { t: SiteContent }) {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <Eyebrow>{t.home.whyTitle}</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.home.whyTitle}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {t.home.whyText}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {t.home.whyPoints.map((point) => (
            <div
              key={point}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-sm font-semibold text-slate-700 shadow-lg shadow-blue-950/5"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hero({ t }: { t: SiteContent }) {
  return (
    <section className="relative border-b border-slate-200/80 bg-[radial-gradient(circle_at_15%_20%,rgba(52,112,181,0.18),transparent_32%),linear-gradient(135deg,#ffffff_0%,#f3f7fb_48%,#eaf1f8_100%)] px-5 py-16 sm:px-8 md:py-20">
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase text-[#1f5f9f] shadow-sm">
            {t.home.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {t.home.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {t.home.intro}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            {t.home.note}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#0b2f57] px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-950/15 transition hover:bg-[#123f6f]"
            >
              {t.cta.primary}
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-200 hover:text-[#0b2f57]"
            >
              {t.cta.secondary}
            </Link>
          </div>
        </div>

        <ConsultingVisual t={t} />
      </div>
    </section>
  );
}

function ConsultingVisual({ t }: { t: SiteContent }) {
  return (
    <div className="relative rounded-[2rem] border border-white/80 bg-white/90 p-4 shadow-2xl shadow-blue-950/15 backdrop-blur sm:p-5">
      <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[#0b2f57]">
        <div className="relative min-h-[430px] bg-[linear-gradient(135deg,rgba(8,31,56,0.96),rgba(17,64,111,0.88)),radial-gradient(circle_at_28%_20%,rgba(147,197,253,0.28),transparent_34%)] p-6 text-white sm:p-8">
          <div className="absolute inset-x-8 top-10 h-px bg-white/15" />
          <div className="absolute bottom-20 left-1/2 h-28 w-[72%] -translate-x-1/2 rounded-[50%] border border-white/15 bg-white/10 shadow-2xl shadow-slate-950/30" />
          <div className="absolute bottom-24 left-[19%] h-14 w-14 rounded-full border border-white/30 bg-white/20" />
          <div className="absolute bottom-36 left-[39%] h-16 w-16 rounded-full border border-white/30 bg-white/25" />
          <div className="absolute bottom-24 right-[20%] h-14 w-14 rounded-full border border-white/30 bg-white/20" />
          <div className="absolute bottom-11 left-[30%] h-12 w-24 rotate-[-8deg] rounded-xl border border-white/20 bg-white/90 shadow-lg" />
          <div className="absolute bottom-12 right-[30%] h-12 w-24 rotate-[7deg] rounded-xl border border-white/20 bg-blue-50 shadow-lg" />

          <div className="relative max-w-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
              {t.home.visualTitle}
            </p>
            <p className="mt-3 text-sm leading-6 text-blue-50/90">
              {t.home.visualIntro}
            </p>
          </div>

          <div className="relative mt-10 grid gap-3 sm:grid-cols-2">
            {t.home.framework.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"
              >
                <p className="text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesPage({ t }: { t: SiteContent }) {
  return (
    <>
      <PageHero eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} />
      <SectionShell>
        <ServicePillars t={t} />
      </SectionShell>
      <CTA t={t} />
    </>
  );
}

function ServicePillars({
  t,
  compact = false,
}: {
  t: SiteContent;
  compact?: boolean;
}) {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {t.services.pillars.map((pillar, index) => (
        <article
          key={pillar.title}
          className={`rounded-[2rem] border bg-white p-6 shadow-xl shadow-blue-950/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/10 ${
            index === 0 ? "border-blue-100" : "border-slate-200"
          }`}
        >
          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-black tracking-wide ${
              index === 0
                ? "bg-[#0b2f57] text-white"
                : "bg-blue-50 text-[#0b2f57] ring-1 ring-blue-100"
            }`}
          >
            {pillar.badge}
          </span>
          <h3 className="mt-4 text-2xl font-semibold">{pillar.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{pillar.text}</p>
          {!compact && (
            <div className="mt-6 grid gap-3">
              {pillar.services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          )}
          <Link
            href={pillar.href}
            className="mt-6 inline-flex rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:text-[#0b2f57]"
          >
            {pillar.title}
          </Link>
        </article>
      ))}
    </div>
  );
}

function DetailPage({
  data,
  cta,
}: {
  data: DetailContent;
  cta: CtaContent;
}) {
  return (
    <>
      <PageHero eyebrow={data.eyebrow} title={data.title} intro={data.intro} />
      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-xl shadow-blue-950/5">
            <h2 className="text-2xl font-semibold">Outcomes</h2>
            <div className="mt-6 grid gap-3">
              {data.outcomes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            {data.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-blue-950/5"
              >
                <h3 className="text-xl font-semibold">{section.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#0b2f57] p-8 text-white shadow-2xl shadow-blue-950/20">
          <h2 className="text-3xl font-semibold">{cta.primary}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-blue-50">{cta.text}</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0b2f57]"
          >
            {cta.primary}
          </Link>
        </div>
      </section>
    </>
  );
}

function AboutPage({ t }: { t: SiteContent }) {
  return (
    <>
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} intro={t.about.paragraphs[0]} />
      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <div className="flex flex-wrap gap-2">
              {t.about.focus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#1f5f9f]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              {t.about.paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {t.about.profiles.map((profile) => (
              <article
                key={profile.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-blue-950/5"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[#1f5f9f]">
                  {profile.category}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{profile.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {profile.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-blue-950/5">
          <Eyebrow>{t.about.modelTitle}</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.about.modelTitle}
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            {t.about.modelText}
          </p>
        </div>
      </section>
      <CTA t={t} />
    </>
  );
}

function ContactPage({ t }: { t: SiteContent }) {
  return (
    <>
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.intro} />
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-[#0b2f57] p-8 text-white shadow-2xl shadow-blue-950/20">
            <h2 className="text-3xl font-semibold">{t.cta.primary}</h2>
            <p className="mt-4 leading-7 text-blue-50">{t.cta.text}</p>
            <a
              href={`mailto:${t.contact.email}`}
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0b2f57]"
            >
              {t.cta.email}
            </a>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg shadow-blue-950/5">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1f5f9f]">
              Email
            </p>
            <p className="mt-4 text-2xl font-semibold">{t.contact.email}</p>
          </div>
        </div>
      </section>
    </>
  );
}

function InsightsPage({ t }: { t: SiteContent }) {
  return (
    <>
      <PageHero
        eyebrow={t.insights.eyebrow}
        title={t.insights.title}
        intro={t.insights.intro}
      />
      <SectionShell>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.insights.topics.map((topic) => (
            <div
              key={topic}
              className="rounded-3xl border border-slate-200 bg-white p-6 text-lg font-semibold shadow-lg shadow-blue-950/5"
            >
              {topic}
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}

function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="border-b border-slate-200/80 bg-[linear-gradient(135deg,#ffffff_0%,#f3f7fb_52%,#eaf1f8_100%)] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {intro}
        </p>
      </div>
    </section>
  );
}

function CTA({ t }: { t: SiteContent }) {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#0b2f57] p-8 text-white shadow-2xl shadow-blue-950/20 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold">{t.cta.primary}</h2>
            <p className="mt-4 max-w-3xl leading-7 text-blue-50">{t.cta.text}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0b2f57]"
          >
            {t.cta.primary}
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrustStrip({ items }: { items: readonly string[] }) {
  return (
    <section className="border-b border-slate-200 bg-white px-5 py-6 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionShell({ children }: { children: React.ReactNode }) {
  return <section className="px-5 py-20 sm:px-8"><div className="mx-auto max-w-7xl">{children}</div></section>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-widest text-[#1f5f9f]">
      {children}
    </p>
  );
}

function Footer({ t }: { t: SiteContent }) {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
        <p>{t.footer.copyright}</p>
        <p>{t.footer.tagline}</p>
      </div>
    </footer>
  );
}
