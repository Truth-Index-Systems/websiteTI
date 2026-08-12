"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

const EMAIL = "jaspal.sanghera@truthindexsystems.co.uk";

function Mark({ size = 42 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M8 12h48v10H37v30H27V22H8z" fill="currentColor" />
      <path d="M14 30h12v10H14zM38 30h12v10H38z" fill="currentColor" opacity=".88" />
    </svg>
  );
}

function GenesisMark({ size = 86 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" aria-hidden="true" className="product-mark-svg">
      <path d="M29 17h31c10 0 17 4 22 10L70 39c-3-4-7-6-12-6H35L23 48l12 15h21c6 0 10-2 14-6l-10-9H44V36h23l17 17c-4 15-15 26-31 26H29L6 48 29 17Z" fill="currentColor" />
      <path d="M62 66h17l-8 13H54l8-13Z" fill="var(--red-hot)" />
    </svg>
  );
}

function CieMark({ size = 74 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 88 88" aria-hidden="true" className="product-mark-svg">
      <rect x="8" y="8" width="72" height="72" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M28 27h32M28 44h21M28 61h32" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
      <rect x="55" y="39" width="9" height="9" transform="rotate(45 59.5 43.5)" fill="var(--red-hot)" />
    </svg>
  );
}

function MarketRouteMark({ size = 62 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 88 88" aria-hidden="true" className="product-mark-svg">
      <path d="M17 63V39l14 13 18-19 12 10 12-23" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="square" strokeLinejoin="miter" />
      <path d="M61 20h14v14" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M17 63V30" fill="none" stroke="currentColor" strokeWidth="8" opacity=".55" />
    </svg>
  );
}

const capabilities = [
  ["Commercial Understanding", "Structures market, company and offer context into a usable commercial model."],
  ["Commercial Reasoning", "Applies deterministic reasoning to evaluate fit, constraints and viable paths."],
  ["Evidence Assessment", "Keeps conclusions tied to evidence strength, coverage and uncertainty."],
  ["Opportunity Intelligence", "Identifies commercially credible opportunities rather than merely plausible ones."],
  ["Research Orchestration", "Directs research toward the most valuable gaps instead of collecting indiscriminately."],
  ["Explainable Decision Support", "Produces outputs that can be inspected, challenged and improved."],
] as const;

const solutions = [
  ["AI Platforms", "Purpose-built intelligent software designed around real operational and commercial challenges."],
  ["Commerce Platforms", "Bespoke commerce systems engineered around how a business actually sells and serves customers."],
  ["SaaS Products", "Cloud software designed from product definition through production deployment."],
  ["Business Automation", "Reliable systems that remove repetitive work and improve operational consistency."],
  ["Internal Systems", "Operational software tailored to the way an organisation actually works."],
  ["System Integration", "Cohesive connections between platforms, data sources, APIs and existing systems."],
] as const;

const principles = [
  ["Engineering", "Discipline, clarity and real-world constraints before novelty."],
  ["Evidence", "What can be observed, verified and explained before assumption."],
  ["Reliability", "Production systems designed to remain understandable under pressure."],
  ["Accountability", "Clear reasoning, clear ownership and no hiding behind complexity."],
] as const;

const process = ["Discover", "Understand", "Design", "Engineer", "Deploy", "Support"] as const;

function Intro() {
  const phrase = "Engineering Intelligent Software.";
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = window.sessionStorage.getItem("tis-intro-seen") === "1";

    if (reduceMotion || seen) return;

    setVisible(true);
    let i = 0;
    const typing = window.setInterval(() => {
      i += 1;
      setTyped(phrase.slice(0, i));
      if (i >= phrase.length) window.clearInterval(typing);
    }, 32);

    const close = window.setTimeout(() => {
      setVisible(false);
      window.sessionStorage.setItem("tis-intro-seen", "1");
    }, 1850);

    return () => {
      window.clearInterval(typing);
      window.clearTimeout(close);
    };
  }, []);

  if (!visible) return null;

  return (
    <button className="intro" type="button" onClick={() => setVisible(false)} aria-label="Skip introduction">
      <span className="intro-mark"><Mark size={72} /></span>
      <span className="intro-copy">{typed}<i aria-hidden="true" /></span>
      <span className="intro-skip">CLICK TO ENTER</span>
    </button>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [open]);

  const items = [
    ["Technology", "#technology"],
    ["MarketRoute", "#product"],
    ["Solutions", "#solutions"],
    ["About", "#principle"],
  ] as const;

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Truth Index Systems home">
          <span className="brand-mark"><Mark size={30} /></span>
          <span className="brand-wordmark">TRUTH INDEX SYSTEMS</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {items.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a className="header-contact" href={`mailto:${EMAIL}`}><span />Contact</a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <span /><span />
          <b className="sr-only">Menu</b>
        </button>
      </header>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-inner">
          {items.map(([label, href], index) => (
            <a key={label} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</a>
          ))}
          <a className="mobile-contact" href={`mailto:${EMAIL}`}>Start a conversation <b>↗</b></a>
        </div>
      </div>
    </>
  );
}

function SectionLabel({ index, children }: { index: string; children?: ReactNode }) {
  return <div className="section-label"><span>{index}</span><b>{children}</b><i /></div>;
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Intro />
      <Header />

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-ambient" aria-hidden="true" />
        <div className="hero-content" id="main-content">
          <p className="overline">TRUTH INDEX SYSTEMS <span>／</span> SOFTWARE ENGINEERING</p>
          <h1>Engineering<br /><em>Intelligent</em> Software.</h1>
          <div className="hero-bottom">
            <p>We engineer intelligent software platforms, proprietary technologies and bespoke systems that solve real commercial problems.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#technology">Explore technology <span>↘</span></a>
              <a className="text-link" href="#product">View MarketRoute <span>↘</span></a>
            </div>
          </div>
        </div>
        <div className="hero-index" aria-label="Truth Index Systems focus areas">
          <div><span>01</span><b>Technology</b><small>Genesis T8</small></div>
          <div><span>02</span><b>Product</b><small>MarketRoute</small></div>
          <div><span>03</span><b>Solutions</b><small>Software Engineering</small></div>
        </div>
        <div className="hero-signature"><span>PRECISION OVER NOISE</span><span>BUILT ON TRUTH</span></div>
      </section>

      <section className="section principle" id="principle">
        <SectionLabel index="01">PRINCIPLE</SectionLabel>
        <div className="editorial-split">
          <h2>Built on<br />Truth.</h2>
          <div className="editorial-copy">
            <p className="statement">Great software begins with understanding reality.</p>
            <p>We engineer systems around evidence, structured reasoning and dependable software — not hype, black-box claims or unnecessary complexity.</p>
          </div>
        </div>
        <div className="principle-rail">
          {principles.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section genesis" id="technology">
        <SectionLabel index="02">PROPRIETARY TECHNOLOGY</SectionLabel>
        <div className="genesis-stage">
          <div className="genesis-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="genesis-emblem"><GenesisMark size={126} /></div>
            <span className="coordinate coordinate-a">T8 / 01</span>
            <span className="coordinate coordinate-b">REASONING SYSTEM</span>
          </div>
          <div className="genesis-copy">
            <div className="tech-lockup"><GenesisMark size={34} /><span>GENESIS <b>T8</b></span></div>
            <h2>The <em>Intelligence</em><br />Engine.</h2>
            <p>Genesis T8 is the proprietary intelligence platform developed by Truth Index Systems. It provides a structured foundation for reasoning, evidence assessment and intelligent software systems.</p>
            <div className="system-note"><span>DESIGN PRINCIPLE</span><p>Structure the problem. Test the evidence. Expose the reasoning.</p></div>
          </div>
        </div>
        <div className="logic-rail" aria-label="Genesis T8 reasoning flow">
          {["Knowledge", "Reasoning", "Evidence", "Intelligence", "Software"].map((item, index) => (
            <div key={item}><span>0{index + 1}</span><b>{item}</b>{index < 4 && <i>→</i>}</div>
          ))}
        </div>
      </section>

      <section className="section cie" id="cie">
        <SectionLabel index="03">COMMERCIAL INTELLIGENCE ENGINE</SectionLabel>
        <div className="cie-intro">
          <div>
            <div className="tech-lockup cie-lockup"><CieMark size={34} /><span>CIE <b>v1.0</b></span></div>
            <h2>Commercial <em>intelligence</em>,<br />engineered.</h2>
          </div>
          <p>The Commercial Intelligence Engine is the first production intelligence engine built on Genesis T8, transforming structured reasoning into practical commercial intelligence.</p>
        </div>
        <div className="capability-system">
          <div className="capability-axis" aria-hidden="true"><span>INPUT</span><i /><span>REASONING</span><i /><span>OUTPUT</span></div>
          <div className="capability-list">
            {capabilities.map(([title, copy], index) => (
              <article key={title}>
                <span className="cap-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <i className="cap-node" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product" id="product">
        <SectionLabel index="04">FLAGSHIP PRODUCT</SectionLabel>
        <div className="market-frame">
          <div className="market-copy">
            <div className="market-lockup"><MarketRouteMark size={50} /><span>Market<b>Route</b></span></div>
            <p className="product-meta">POWERED BY GENESIS T8™ <i /> COMMERCIAL INTELLIGENCE</p>
            <h2>Find the <em>route.</em><br />Not just the lead.</h2>
            <p className="market-description">MarketRoute researches markets, discovers companies and identifies evidence-backed routes to commercial opportunity.</p>
            <a className="button button-blue" href="https://www.marketroute.co.uk" target="_blank" rel="noreferrer">Explore MarketRoute <span>↗</span></a>
          </div>
          <div className="route-stage" aria-hidden="true">
            <div className="route-grid" />
            <div className="route-label route-label-a">MARKET</div>
            <div className="route-label route-label-b">ROUTE</div>
            <div className="route-label route-label-c">OPPORTUNITY</div>
            <div className="route-node rn1" /><div className="route-node rn2" /><div className="route-node rn3" /><div className="route-node rn4" /><div className="route-node rn5" />
            <svg viewBox="0 0 560 470" preserveAspectRatio="none">
              <path d="M58 365 C164 315, 190 128, 315 168 S426 306,505 86" />
              <path className="route-soft" d="M42 160 C172 205, 242 385, 517 328" />
            </svg>
          </div>
        </div>
      </section>

      <section className="section solutions" id="solutions">
        <SectionLabel index="05">ENGINEERING SOLUTIONS</SectionLabel>
        <div className="solutions-head">
          <div>
            <h2>Every business has<br />unique <em>challenges.</em></h2>
            <h3>We engineer the <em>solution.</em></h3>
          </div>
          <p>Every organisation is different. We design and engineer software around your operations, objectives and future growth rather than forcing your business to adapt to generic tools.</p>
        </div>
        <div className="solution-matrix">
          {solutions.map(([title, copy], index) => (
            <article key={title}>
              <div className="solution-top"><span>0{index + 1}</span><i /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process" id="process">
        <SectionLabel index="06">HOW WE WORK</SectionLabel>
        <div className="process-head">
          <h2>From problem<br />to <em>production.</em></h2>
          <p>Good engineering starts before implementation. We work from the business problem outward, then build the smallest system that solves it properly.</p>
        </div>
        <ol className="process-track">
          {process.map((item, index) => (
            <li key={item}><span>0{index + 1}</span><i /><b>{item}</b></li>
          ))}
        </ol>
      </section>

      <section className="section standard">
        <SectionLabel index="07">OUR STANDARD</SectionLabel>
        <div className="standard-grid">
          <div className="standard-statement">
            <h2>Authority in<br /><em>engineering.</em></h2>
            <p>We do not need to shout. The work should speak clearly enough.</p>
          </div>
          <article><span>01</span><h3>Engineering first.</h3><p>Architecture and implementation decisions are made for the problem, not for the trend.</p></article>
          <article><span>02</span><h3>Evidence before assumption.</h3><p>Claims should be supported. Reasoning should be inspectable. Uncertainty should be visible.</p></article>
          <article><span>03</span><h3>Built for production.</h3><p>Reliability, recoverability and clarity matter as much as the demonstration.</p></article>
          <article><span>04</span><h3>Think beyond version one.</h3><p>We engineer foundations that can evolve instead of disposable prototypes.</p></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orbit" aria-hidden="true"><span><Mark size={82} /></span></div>
        <SectionLabel index="08">START A CONVERSATION</SectionLabel>
        <h2>Let&apos;s build something<br /><em>exceptional.</em></h2>
        <p>Tell us what needs to exist. We&apos;ll help work out how it should be engineered.</p>
        <a className="button button-light" href={`mailto:${EMAIL}`}>Start a conversation <span>↗</span></a>
        <a className="contact-pill" href={`mailto:${EMAIL}`}><span>✉</span>{EMAIL}</a>
      </section>

      <footer>
        <div className="footer-top">
          <a className="footer-brand" href="#top"><span><Mark size={28} /></span><div><b>TRUTH INDEX SYSTEMS</b><small>Engineering Intelligent Software.</small></div></a>
          <div className="footer-nav">
            <div><span>Technology</span><a href="#technology">Genesis T8™</a><a href="#cie">CIE v1.0</a></div>
            <div><span>Product</span><a href="https://www.marketroute.co.uk" target="_blank" rel="noreferrer">MarketRoute ↗</a></div>
            <div><span>Company</span><a href="#principle">Principle</a><a href="#solutions">Engineering Solutions</a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 Truth Index Systems</span><span>BUILT ON TRUTH.</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
      </footer>
    </main>
  );
}
