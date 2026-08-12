"use client";
import { useEffect, useState } from "react";

function Mark({ size = 42 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true"><path d="M8 12h48v10H37v30H27V22H8z" fill="currentColor"/><path d="M14 30h12v10H14zM38 30h12v10H38z" fill="currentColor" opacity=".88"/></svg>;
}


function GenesisMark({ size = 86 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" aria-hidden="true" className="product-mark-svg">
      <path d="M29 17h31c10 0 17 4 22 10L70 39c-3-4-7-6-12-6H35L23 48l12 15h21c6 0 10-2 14-6l-10-9H44V36h23l17 17c-4 15-15 26-31 26H29L6 48 29 17Z" fill="currentColor"/>
      <path d="M62 66h17l-8 13H54l8-13Z" fill="var(--red-bright)"/>
    </svg>
  );
}

function CieMark({ size = 74 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 88 88" aria-hidden="true" className="product-mark-svg">
      <rect x="8" y="8" width="72" height="72" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M28 27h32M28 44h21M28 61h32" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="square"/>
      <rect x="55" y="39" width="9" height="9" transform="rotate(45 59.5 43.5)" fill="var(--red-bright)"/>
    </svg>
  );
}

function MarketRouteMark({ size = 62 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 88 88" aria-hidden="true" className="product-mark-svg">
      <path d="M17 63V39l14 13 18-19 12 10 12-23" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="square" strokeLinejoin="miter"/>
      <path d="M61 20h14v14" fill="none" stroke="currentColor" strokeWidth="8"/>
      <path d="M17 63V30" fill="none" stroke="currentColor" strokeWidth="8" opacity=".55"/>
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
];
const services = [
  ["AI Platforms", "Purpose-built intelligent software designed around real operational and commercial challenges."],
  ["Commerce Platforms", "Bespoke Shopify and e-commerce systems engineered around the way a business sells."],
  ["SaaS Products", "Scalable cloud software designed from concept through production deployment."],
  ["Business Automation", "Reliable systems that remove repetitive work and improve operational consistency."],
  ["Internal Business Systems", "Operational software tailored to the way an organisation actually works."],
  ["System Integration", "Cohesive connections between platforms, data sources, APIs and existing business systems."],
];
const process = ["Discover", "Understand", "Design", "Engineer", "Deploy", "Support"];

export default function Home() {
  const [intro, setIntro] = useState(true);
  const [typed, setTyped] = useState("");
  const phrase = "Engineering Intelligent Software.";
  useEffect(() => {
    let i = 0;
    const timer = window.setInterval(() => { i += 1; setTyped(phrase.slice(0, i)); if (i >= phrase.length) window.clearInterval(timer); }, 44);
    const exit = window.setTimeout(() => setIntro(false), 2500);
    return () => { window.clearInterval(timer); window.clearTimeout(exit); };
  }, []);
  return <main>
    <div className={`intro ${intro ? "show" : "hide"}`} aria-hidden={!intro}><div className="intro-mark"><Mark size={76}/></div><div className="intro-line"><span>{typed}</span><span className="cursor">|</span></div></div>
    <header className="nav"><a href="#top" className="brand"><span className="brand-mark"><Mark size={31}/></span><span>TRUTH INDEX SYSTEMS</span></a><nav><a href="#technology">Technology</a><a href="#products">Product</a><a href="#solutions">Engineering Solutions</a><a href="#about">About</a><a href="#contact">Contact</a></nav></header>

    <section className="hero" id="top"><div className="grid-bg"/><div className="eyebrow">TRUTH INDEX SYSTEMS</div><h1>Engineering<br/><span><em className="accent">Intelligent</em> Software.</span></h1><p className="hero-copy">We engineer intelligent software platforms, proprietary technologies and bespoke business systems that solve real commercial problems.</p><div className="actions"><a className="btn primary" href="#technology">Explore our technology</a><a className="btn ghost" href="#products">View MarketRoute</a></div><div className="hero-rule"><span>PRECISION OVER NOISE</span><span>BUILT ON TRUTH</span></div></section>

    <section className="section truth" id="about"><div className="section-kicker">01 / PRINCIPLE</div><div className="split"><div><h2>Built on<br/>Truth.</h2></div><div className="lead-column"><p className="lead">Great software begins with understanding reality.</p><p>We engineer systems around evidence, structured reasoning and dependable software — not hype, black-box claims or unnecessary complexity.</p></div></div><div className="pillars">{[["Engineering","Software designed with discipline, clarity and real-world constraints in mind."],["Evidence","Decisions grounded in what can be observed, verified and explained."],["Reliability","Production systems should remain understandable when conditions become difficult."],["Partnership","We work alongside clients from the first problem definition through deployment."]].map(([title,desc],i)=><article className="pillar" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

    <section className="section technology" id="technology"><div className="section-kicker">02 / PROPRIETARY TECHNOLOGY</div><div className="genesis-wrap"><div className="genesis-badge"><div className="genesis-core"><GenesisMark size={132}/></div><div className="genesis-orbit orbit-a"/><div className="genesis-orbit orbit-b"/></div><div><div className="micro">TRUTH INDEX SYSTEMS / GENESIS</div><div className="product-lockup genesis-lockup"><GenesisMark size={54}/><span>GENESIS <b>T8</b></span></div><h2>Genesis T8<span>™</span></h2><h3>The <em className="accent">Intelligence</em> Engine.</h3><p>Genesis T8 is the proprietary intelligence platform developed by Truth Index Systems. It provides a structured foundation for reasoning, evidence assessment and intelligent software systems.</p></div></div><div className="signal-chain">{["Knowledge","Reasoning","Evidence","Intelligence","Software"].map((x,i)=><div className="signal" key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></div>)}</div></section>

    <section className="section cie"><div className="section-kicker">03 / COMMERCIAL INTELLIGENCE ENGINE</div><div className="split cie-head"><div><div className="product-lockup cie-lockup"><CieMark size={52}/><span>CIE <b>v1.0</b></span></div><h2>CIE <span>v1.0</span></h2><h3>Commercial <em className="accent">intelligence</em>,<br/>engineered.</h3></div><p className="lead-column">The Commercial Intelligence Engine is the first production intelligence engine built on Genesis T8, transforming structured reasoning into practical commercial intelligence.</p></div><div className="capability-grid">{capabilities.map(([title,desc],i)=><article className="capability" key={title}><div className="capability-top"><span>{String(i+1).padStart(2,"0")}</span><i/></div><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

    <section className="section product" id="products"><div className="section-kicker">04 / FLAGSHIP PRODUCT</div><div className="market-card"><div className="market-content"><div className="market-logo"><MarketRouteMark size={54}/><strong>Market<span>Route</span></strong></div><div className="micro blue">POWERED BY GENESIS T8™</div><h2>Find the <em className="accent">route.</em><br/>Not just the lead.</h2><p>MarketRoute is a commercial intelligence platform that researches markets, discovers companies and identifies evidence-backed routes to opportunity.</p><a className="btn blue-btn" href="https://www.marketroute.co.uk" target="_blank" rel="noreferrer">Visit marketroute.co.uk</a></div><div className="route-visual" aria-hidden="true"><div className="route-grid"/><div className="node n1"/><div className="node n2"/><div className="node n3"/><div className="node n4"/><div className="node n5"/><svg viewBox="0 0 500 420"><path d="M68 320 C165 260, 190 120, 305 150 S410 285,455 90"/><path className="soft" d="M45 155 C160 210, 235 360, 450 300"/></svg></div></div></section>

    <section className="section bespoke" id="solutions"><div className="section-kicker">05 / ENGINEERING SOLUTIONS</div><div className="split"><div><h2>Every business has<br/>unique <em className="accent">challenges.</em></h2><h3 className="solutions-line">We engineer the <em className="accent">solution.</em></h3></div><div className="lead-column"><p>Every organisation is different. We design and engineer software around your operations, objectives and future growth rather than forcing your business to adapt to generic tools.</p></div></div><div className="solutions-intro-rule"><span>ENGINEERING CAPABILITIES</span><span>BUILT AROUND THE PROBLEM</span></div><div className="service-grid">{services.map(([title,desc])=><article key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

    <section className="section process"><div className="section-kicker">06 / HOW WE WORK</div><div className="split"><div><h2>From problem<br/>to <em className="accent">production.</em></h2></div><p className="lead-column">Good engineering starts before implementation. We work from the business problem outward, then build the smallest system that solves it properly.</p></div><div className="process-line">{process.map((step,i)=><div className="process-step" key={step}><span>{String(i+1).padStart(2,"0")}</span><strong>{step}</strong></div>)}</div></section>

    <section className="section why"><div className="section-kicker">07 / OUR STANDARD</div><div className="why-grid"><div className="why-intro"><h2>Authority in<br/><em className="accent">engineering.</em></h2><p>We do not need to shout. The work should speak clearly enough.</p></div>{[["Engineering first","Architecture and implementation decisions are made for the problem, not for the trend."],["Built on truth","Evidence before assumption. Explanation before exaggeration."],["Production ready","Reliability, recoverability and clarity matter as much as the demonstration."],["Long-term thinking","We build foundations that can evolve rather than disposable prototypes."]].map(([title,desc])=><article key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

    <section className="final-cta" id="contact"><div className="contact-pill"><a href="mailto:jaspal.sanghera@truthindexsystems.co.uk"><span className="contact-icon">✉</span><span className="contact-email">jaspal.sanghera@truthindexsystems.co.uk</span></a></div>
<div className="section-kicker centered">08 / START A CONVERSATION</div><h2>Let&apos;s build something<br/><em className="accent">exceptional.</em></h2><p>Tell us what needs to exist. We&apos;ll help work out how it should be engineered.</p><a className="btn primary" href="mailto:jaspal.sanghera@truthindexsystems.co.uk">Start a conversation</a><small>jaspal.sanghera@truthindexsystems.co.uk</small></section>

    <footer><div className="footer-brand"><span className="brand-mark"><Mark size={28}/></span><div><strong>TRUTH INDEX SYSTEMS</strong><span>Engineering Intelligent Software.</span></div></div><div className="footer-links"><div><strong>Technology</strong><a href="#technology">Genesis T8™</a><a href="#technology">CIE v1.0</a></div><div><strong>Product</strong><a href="https://www.marketroute.co.uk">MarketRoute</a></div><div><strong>Solutions</strong><a href="#solutions">Engineering Solutions</a><a href="#solutions">AI &amp; Software Platforms</a></div><div><strong>Contact</strong><a href="mailto:jaspal.sanghera@truthindexsystems.co.uk">jaspal.sanghera@truthindexsystems.co.uk</a></div></div><div className="footer-bottom"><span>© 2026 Truth Index Systems</span><span>Built on Truth.</span></div></footer>
  </main>;
}
