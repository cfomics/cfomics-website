"use client";

import Image from "next/image";
import { useState } from "react";

type Language = "en" | "bg";

const content = {
  en: {
    nav: {
      services: "Services",
      experience: "Experience",
      expertise: "Expertise",
      approach: "Approach",
      about: "About",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Finance Advisory | CFO Support | Governance",
      title: "Finance Advisory for Stronger Management and Scalable Governance",
      body: "CFOmics helps businesses strengthen financial management, optimize processes, and build scalable governance frameworks. Our core focus is finance advisory, CFO support, reporting, budgeting, forecasting, internal controls and finance transformation.",
      note: "We also support selected clients with IT risk, security and compliance advisory where it complements their broader governance needs.",
      primaryCta: "Book a consultation",
      secondaryCta: "Explore our services",
      dashboardTitle: "Finance Operating View",
      dashboardSubtitle: "Signals CFO teams need to manage growth with clarity.",
      dashboardStatus: "Live",
      metrics: [
        { label: "Cash Flow Visibility", value: "92%", detail: "rolling view" },
        { label: "Reporting Rhythm", value: "M+5", detail: "close cadence" },
        { label: "Budget Accuracy", value: "88%", detail: "forecast control" },
        { label: "Internal Controls", value: "7", detail: "priority areas" },
        { label: "Compliance Readiness", value: "On track", detail: "selected frameworks" },
      ],
    },
    trust: [
      "18+ years finance leadership",
      "CFO advisory & transformation",
      "Reporting & internal controls",
      "Selected compliance expertise",
    ],
    services: {
      eyebrow: "Services",
      title: "Finance-first advisory with selected risk and compliance support.",
      intro: "Practical support for companies that need senior finance capability, stronger reporting and scalable governance without unnecessary complexity.",
      financeLabel: "Core finance practice",
      complianceLabel: "Additional advisory capability",
      finance: [
        {
          badge: "CFO",
          title: "Fractional CFO & Finance Advisory",
          text: "Senior finance guidance for planning, decision support, governance and leadership cadence.",
        },
        {
          badge: "FP&A",
          title: "Budgeting, Forecasting & Financial Planning",
          text: "Structured budgets, rolling forecasts and planning routines tied to business drivers.",
        },
        {
          badge: "RPT",
          title: "Financial Reporting & Management Dashboards",
          text: "Management packs and dashboards that improve visibility, accountability and action.",
        },
        {
          badge: "OPS",
          title: "Finance Process Optimization",
          text: "Process mapping, simplification and operating rhythms for faster, cleaner finance work.",
        },
        {
          badge: "CASH",
          title: "Treasury & Cash Flow Management",
          text: "Cash visibility, working capital focus and practical treasury routines.",
        },
        {
          badge: "CTRL",
          title: "Internal Controls & Governance",
          text: "Control design, responsibilities and governance practices that scale with the company.",
        },
        {
          badge: "ACC",
          title: "Accounting & Reporting Support",
          text: "Hands-on support for reporting quality, close discipline and finance operations.",
        },
        {
          badge: "AI",
          title: "AI-enabled Finance Transformation",
          text: "Automation ideas and AI-enabled workflows for reporting, analysis and finance productivity.",
        },
      ],
      compliance: [
        "IT Risk & Compliance Advisory",
        "PCI DSS Readiness",
        "SOC 1 / SOC 2 Readiness",
        "ISO 27001 Advisory",
        "Security Governance",
        "Third-Party Risk Reviews",
        "Secure SDLC & Cloud Security Advisory",
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Experience Across Finance, Governance and Compliance",
      intro: "Our team has experience supporting organizations with financial management, budgeting, forecasting, reporting, treasury, internal controls, process optimization, finance transformation and selected compliance frameworks.",
      cards: [
        {
          label: "Finance leadership",
          title: "CFO advisory and transformation",
          items: ["Budgeting and forecasting", "Treasury and cash flow", "Working capital management"],
        },
        {
          label: "Visibility",
          title: "Reporting and management insight",
          items: ["Management dashboards", "Performance reporting", "Business intelligence"],
        },
        {
          label: "Governance",
          title: "Controls and process discipline",
          items: ["Internal controls", "Process mapping", "AI-enabled finance workflows"],
        },
        {
          label: "Selected compliance",
          title: "Risk frameworks where needed",
          items: ["PCI DSS and payment security", "SOC readiness", "ISO 27001 advisory"],
        },
      ],
    },
    expertise: {
      eyebrow: "Expertise",
      title: "Expertise Behind CFOmics",
      intro: "CFOmics brings together senior finance, operations, analytics and compliance experience to support companies that need practical, business-oriented advisory without unnecessary complexity.",
      profileLabel: "Advisor",
      profiles: [
        {
          badge: "01",
          title: "Strategic Finance & Transformation Advisor",
          description: "Senior finance executive with 18+ years of experience in financial management, accounting, treasury, controlling and business transformation across multinational organizations. Strong focus on process optimization, financial governance, operational excellence, internal controls and AI-driven finance transformation.",
          areas: ["CFO Advisory", "Financial Strategy", "Budgeting & Forecasting", "Finance Transformation", "Treasury & Cash Flow Management", "Internal Controls", "Process Optimization", "AI for Finance"],
        },
        {
          badge: "02",
          title: "Finance Operations & Business Analytics Advisor",
          description: "Finance professional with experience in financial planning, reporting, performance management and business analytics within global organizations. Background includes financial operations, management reporting, data analysis and process improvement. Strong analytical profile with ACCA studies and experience in business intelligence tools.",
          areas: ["Financial Reporting", "Business Analytics", "FP&A", "Performance Management", "Financial Operations", "Data Visualization", "Business Intelligence"],
        },
        {
          badge: "03",
          title: "Risk, Security & Compliance Advisor",
          description: "Information security and compliance professional with experience supporting organizations in payment security, IT governance, risk management and regulatory compliance. Background includes PCI DSS, SOC reporting, ISO 27001, cloud security, security governance and secure software development advisory.",
          areas: ["PCI DSS & Payment Security", "SOC 1 / SOC 2 Readiness", "ISO 27001", "Security Governance", "IT Risk Management", "Cloud Security", "Secure SDLC", "Third-Party Assessments"],
        },
      ],
    },
    approach: {
      eyebrow: "Approach",
      title: "Practical finance support. Clear priorities. Scalable governance.",
      steps: [
        {
          title: "Understand the operating rhythm",
          text: "We assess the business model, finance cadence, reporting needs and current governance environment.",
        },
        {
          title: "Prioritize what matters",
          text: "We map gaps to business impact and define priorities that are realistic for the organization and its stage of growth.",
        },
        {
          title: "Build usable governance",
          text: "We combine finance experience, process improvement, analytics, controls and selected compliance expertise.",
        },
      ],
    },
    about: {
      eyebrow: "About CFOmics",
      title: "Boutique finance advisory for better visibility and control.",
      paragraphs: [
        "CFOmics is a boutique advisory firm focused on finance transformation, CFO support and practical governance. We help companies improve financial visibility, strengthen internal controls, optimize finance operations and make better business decisions through structured reporting and advisory support.",
        "Our approach combines hands-on finance experience with process improvement, analytics and selected compliance expertise. We work with growing companies, local businesses and international organizations that need senior-level support without building a large internal advisory team.",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Book a consultation",
      text: "Need senior finance support or practical advisory for your next stage of growth? Let's discuss how CFOmics can help you improve visibility, strengthen controls and scale with confidence.",
      emailLabel: "Email CFOmics",
      secondary: "Start with a focused conversation about your finance priorities, reporting needs and governance roadmap.",
    },
    footer: {
      copyright: "Copyright 2026 CFOmics. All rights reserved.",
      tagline: "Finance Advisory | CFO Support | Governance",
    },
  },
  bg: {
    nav: {
      services: "Услуги",
      experience: "Опит",
      expertise: "Експертиза",
      approach: "Подход",
      about: "За нас",
      contact: "Контакт",
    },
    hero: {
      eyebrow: "Финансово консултиране | CFO подкрепа | Управление и контрол",
      title: "Финансово консултиране за по-силно управление и устойчив растеж",
      body: "CFOmics помага на бизнеси да подобрят финансовото управление, да оптимизират процесите и да изградят мащабируеми рамки за управление и контрол. Основният ни фокус е финансово консултиране, CFO подкрепа, отчетност, бюджетиране, прогнозиране, вътрешни контроли и финансова трансформация.",
      note: "Подкрепяме избрани клиенти и с консултиране в областта на IT риска, сигурността и съответствието, когато това допълва по-широките им нужди от управление и контрол.",
      primaryCta: "Запазете консултация",
      secondaryCta: "Вижте услугите",
      dashboardTitle: "Финансов оперативен изглед",
      dashboardSubtitle: "Сигнали, от които CFO екипите имат нужда, за да управляват растежа ясно.",
      dashboardStatus: "Активно",
      metrics: [
        { label: "Видимост на паричните потоци", value: "92%", detail: "обновяем поглед" },
        { label: "Ритъм на отчетност", value: "M+5", detail: "месечен ритъм" },
        { label: "Точност на бюджета", value: "88%", detail: "контрол на прогнозата" },
        { label: "Вътрешни контроли", value: "7", detail: "приоритетни области" },
        { label: "Готовност за съответствие", value: "В ход", detail: "избрани рамки" },
      ],
    },
    trust: [
      "18+ години финансово лидерство",
      "CFO консултиране и трансформация",
      "Отчетност и вътрешни контроли",
      "Избрана compliance експертиза",
    ],
    services: {
      eyebrow: "Услуги",
      title: "Финансово консултиране на първо място, с допълваща подкрепа по риск и съответствие.",
      intro: "Практическа подкрепа за компании, които имат нужда от опитен финансов капацитет, по-силна отчетност и мащабируемо управление без излишна сложност.",
      financeLabel: "Основна финансова практика",
      complianceLabel: "Допълваща консултантска практика",
      finance: [
        {
          badge: "CFO",
          title: "Fractional CFO и финансово консултиране",
          text: "Опитна финансова подкрепа за планиране, управленски решения, контрол и лидерски ритъм.",
        },
        {
          badge: "FP&A",
          title: "Бюджетиране, прогнозиране и финансово планиране",
          text: "Структурирани бюджети, rolling прогнози и планиране, свързано с бизнес драйверите.",
        },
        {
          badge: "RPT",
          title: "Финансова отчетност и управленски табла",
          text: "Управленски отчети и dashboard-и за по-добра видимост, отчетност и действие.",
        },
        {
          badge: "OPS",
          title: "Оптимизация на финансови процеси",
          text: "Картографиране, опростяване и работен ритъм за по-бърза и чиста финансова работа.",
        },
        {
          badge: "CASH",
          title: "Управление на ликвидност и парични потоци",
          text: "Видимост върху паричните средства, фокус върху работния капитал и практични процеси за ликвидност.",
        },
        {
          badge: "CTRL",
          title: "Вътрешни контроли и управление",
          text: "Дизайн на контроли, отговорности и управленски практики, които растат с компанията.",
        },
        {
          badge: "ACC",
          title: "Счетоводна и отчетна подкрепа",
          text: "Практическа подкрепа за качество на отчетността, дисциплина при затваряне и финансови операции.",
        },
        {
          badge: "AI",
          title: "Финансова трансформация с AI",
          text: "Идеи за автоматизация и AI процеси за отчетност, анализ и финансова продуктивност.",
        },
      ],
      compliance: [
        "IT риск и compliance консултиране",
        "PCI DSS готовност",
        "SOC 1 / SOC 2 готовност",
        "ISO 27001 консултиране",
        "Управление на сигурността",
        "Оценки на трети страни",
        "Secure SDLC и консултиране по облачна сигурност",
      ],
    },
    experience: {
      eyebrow: "Опит",
      title: "Опит във финанси, управление, контрол и съответствие",
      intro: "Екипът ни има опит в подкрепа на организации с финансово управление, бюджетиране, прогнозиране, отчетност, treasury, вътрешни контроли, оптимизация на процеси, финансова трансформация и избрани compliance рамки.",
      cards: [
        {
          label: "Финансово лидерство",
          title: "CFO консултиране и трансформация",
          items: ["Бюджетиране и прогнозиране", "Ликвидност и парични потоци", "Управление на работен капитал"],
        },
        {
          label: "Видимост",
          title: "Отчетност и управленски поглед",
          items: ["Управленски табла", "Отчетност за представянето", "Бизнес анализи"],
        },
        {
          label: "Управление",
          title: "Контроли и процесна дисциплина",
          items: ["Вътрешни контроли", "Картографиране на процеси", "Финансови процеси с AI"],
        },
        {
          label: "Избрано съответствие",
          title: "Рамки за риск при нужда",
          items: ["PCI DSS и платежна сигурност", "SOC готовност", "ISO 27001 консултиране"],
        },
      ],
    },
    expertise: {
      eyebrow: "Експертиза",
      title: "Експертизата зад CFOmics",
      intro: "CFOmics обединява опит във финанси, операции, анализи и съответствие, за да подкрепя компании, които имат нужда от практично, бизнес ориентирано консултиране без излишна сложност.",
      profileLabel: "Консултант",
      profiles: [
        {
          badge: "01",
          title: "Стратегически финансов и трансформационен консултант",
          description: "Опитен финансов ръководител с 18+ години опит във финансово управление, счетоводство, управление на ликвидност, контролинг и бизнес трансформация в международни организации. Силен фокус върху оптимизация на процеси, финансово управление, оперативно съвършенство, вътрешни контроли и финансова трансформация с AI.",
          areas: ["CFO консултиране", "Финансова стратегия", "Бюджетиране и прогнозиране", "Финансова трансформация", "Ликвидност и парични потоци", "Вътрешни контроли", "Оптимизация на процеси", "AI за финанси"],
        },
        {
          badge: "02",
          title: "Консултант по финансови операции и бизнес анализи",
          description: "Финансов професионалист с опит във финансово планиране, отчетност, управление на представянето и бизнес анализи в глобални организации. Опитът включва финансови операции, управленска отчетност, анализ на данни и подобрение на процеси. Силен аналитичен профил с ACCA обучение и опит с инструменти за бизнес анализи.",
          areas: ["Финансова отчетност", "Бизнес анализи", "FP&A", "Управление на представянето", "Финансови операции", "Визуализация на данни", "Инструменти за бизнес анализи"],
        },
        {
          badge: "03",
          title: "Консултант по риск, сигурност и съответствие",
          description: "Професионалист по информационна сигурност и съответствие с опит в подкрепа на организации в платежна сигурност, IT управление, управление на риска и регулаторно съответствие. Опитът включва PCI DSS, SOC отчетност, ISO 27001, облачна сигурност, управление на сигурността и консултиране по сигурна разработка на софтуер.",
          areas: ["PCI DSS и платежна сигурност", "SOC 1 / SOC 2 готовност", "ISO 27001", "Управление на сигурността", "IT риск", "Облачна сигурност", "Secure SDLC", "Оценки на трети страни"],
        },
      ],
    },
    approach: {
      eyebrow: "Подход",
      title: "Практична финансова подкрепа. Ясни приоритети. Мащабируем контрол.",
      steps: [
        {
          title: "Разбираме оперативния ритъм",
          text: "Оценяваме бизнес модела, финансовия цикъл, нуждите от отчетност и текущата среда за управление.",
        },
        {
          title: "Приоритизираме важното",
          text: "Свързваме пропуските с бизнес ефекта и определяме реалистични приоритети според етапа на развитие.",
        },
        {
          title: "Изграждаме използваем контрол",
          text: "Комбинираме финансов опит, подобрение на процеси, анализи, контроли и избрана compliance експертиза.",
        },
      ],
    },
    about: {
      eyebrow: "За CFOmics",
      title: "Бутиково финансово консултиране за по-добра видимост и контрол.",
      paragraphs: [
        "CFOmics е бутикова консултантска фирма с фокус върху финансова трансформация, CFO подкрепа и практично управление. Помагаме на компании да подобрят финансовата видимост, да засилят вътрешните контроли, да оптимизират финансовите операции и да вземат по-добри бизнес решения чрез структурирана отчетност и консултантска подкрепа.",
        "Подходът ни комбинира практически финансов опит с подобрение на процеси, анализи и избрана експертиза по съответствие. Работим с растящи компании, местни бизнеси и международни организации, които имат нужда от опитна подкрепа без изграждане на голям вътрешен консултантски екип.",
      ],
    },
    contact: {
      eyebrow: "Контакт",
      title: "Запазете консултация",
      text: "Имате нужда от опитна финансова подкрепа или практично консултиране за следващия етап на растеж? Нека обсъдим как CFOmics може да помогне за по-добра видимост, по-силни контроли и уверено мащабиране.",
      emailLabel: "Пишете на CFOmics",
      secondary: "Започнете с фокусиран разговор за финансовите приоритети, отчетността и пътната карта за управление и контрол.",
    },
    footer: {
      copyright: "2026 CFOmics. Всички права запазени.",
      tagline: "Финансово консултиране | CFO подкрепа | Управление и контрол",
    },
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = content[language];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9fc] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a href="#" className="flex shrink-0 items-center">
            <Image
              src="/logo.png"
              alt="CFOmics logo"
              width={180}
              height={50}
              priority
              className="h-10 w-auto"
            />
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            <a href="#services" className="transition hover:text-slate-950">
              {t.nav.services}
            </a>
            <a href="#experience" className="transition hover:text-slate-950">
              {t.nav.experience}
            </a>
            <a href="#expertise" className="transition hover:text-slate-950">
              {t.nav.expertise}
            </a>
            <a href="#approach" className="transition hover:text-slate-950">
              {t.nav.approach}
            </a>
            <a href="#about" className="transition hover:text-slate-950">
              {t.nav.about}
            </a>
            <a href="#contact" className="transition hover:text-slate-950">
              {t.nav.contact}
            </a>
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

      <section className="relative border-b border-slate-200/80 bg-[radial-gradient(circle_at_15%_20%,rgba(52,112,181,0.18),transparent_32%),linear-gradient(135deg,#ffffff_0%,#f3f7fb_48%,#eaf1f8_100%)] px-5 py-16 sm:px-8 md:py-20">
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-slate-300/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase text-[#1f5f9f] shadow-sm">
              {t.hero.eyebrow}
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              {t.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {t.hero.body}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              {t.hero.note}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-[#0b2f57] px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-950/15 transition hover:bg-[#123f6f]"
              >
                {t.hero.primaryCta}
              </a>

              <a
                href="#services"
                className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-center text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-200 hover:text-[#0b2f57]"
              >
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-8 h-24 w-24 rounded-3xl border border-white/70 bg-white/40 blur-sm" />
            <div className="relative rounded-[2rem] border border-white/80 bg-white/85 p-4 shadow-2xl shadow-blue-950/15 backdrop-blur md:p-6">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-inner md:p-6">
                <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm font-semibold text-blue-200">
                      {t.hero.dashboardTitle}
                    </p>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">
                      {t.hero.dashboardSubtitle}
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                    {t.hero.dashboardStatus}
                  </span>
                </div>

                <div className="mt-6 grid gap-3">
                  {t.hero.metrics.map((metric, index) => (
                    <div
                      key={metric.label}
                      className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">
                          {metric.label}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          {metric.detail}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-blue-100">
                          {metric.value}
                        </p>
                        <div className="mt-2 h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-300 to-emerald-300"
                            style={{ width: `${92 - index * 10}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-5 py-6 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.trust.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1f5f9f]">
                {t.services.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {t.services.title}
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              {t.services.intro}
            </p>
          </div>

          <div className="mt-12 rounded-[2rem] border border-blue-100 bg-white p-4 shadow-xl shadow-blue-950/5 sm:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full bg-[#0b2f57] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                {t.services.financeLabel}
              </span>
              <span className="text-sm font-medium text-slate-500">
                CFOmics
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {t.services.finance.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-xs font-black text-[#0b2f57] ring-1 ring-blue-100">
                    {service.badge}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white/75 p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
                {t.services.complianceLabel}
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {t.services.compliance.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-slate-200 bg-white px-5 py-20 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1f5f9f]">
              {t.experience.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {t.experience.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {t.experience.intro}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.experience.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#1f5f9f]">
                  {card.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">
                  {card.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1f5f9f]">
                {t.expertise.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {t.expertise.title}
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              {t.expertise.intro}
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.expertise.profiles.map((profile) => (
              <article
                key={profile.title}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-lg shadow-blue-950/5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b2f57] text-sm font-bold text-white shadow-md shadow-blue-950/20">
                    {profile.badge}
                  </span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#1f5f9f]">
                    {t.expertise.profileLabel}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-snug text-slate-950">
                  {profile.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {profile.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {profile.areas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="relative overflow-hidden bg-[#081f38] px-5 py-20 text-white sm:px-8"
      >
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-200">
                {t.approach.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {t.approach.title}
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.approach.steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-slate-950/20 backdrop-blur"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-black text-[#0b2f57]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1f5f9f]">
              {t.about.eyebrow}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {t.about.title}
            </h2>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-lg shadow-blue-950/5 sm:p-8">
            {t.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-5 text-lg leading-8 text-slate-600 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0b2f57] p-6 text-white shadow-2xl shadow-blue-950/20 sm:p-10 md:p-12">
            <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-blue-300/20 blur-3xl" />
            <div className="absolute -bottom-16 left-1/3 h-56 w-56 rounded-full bg-cyan-200/10 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-200">
                  {t.contact.eyebrow}
                </p>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {t.contact.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-blue-50">
                  {t.contact.text}
                </p>
                <p className="mt-4 text-sm leading-6 text-blue-100/80">
                  {t.contact.secondary}
                </p>
              </div>

              <a
                href="mailto:office@cfomics.com"
                className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0b2f57] shadow-lg shadow-slate-950/20 transition hover:bg-blue-50"
              >
                {t.contact.emailLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </footer>
    </main>
  );
}
