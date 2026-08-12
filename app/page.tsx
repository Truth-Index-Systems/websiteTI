"use client";
import { useEffect, useState } from "react";

function Mark({ size = 42 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true"><path d="M8 12h48v10H37v30H27V22H8z" fill="currentColor"/><path d="M14 30h12v10H14zM38 30h12v10H38z" fill="currentColor" opacity=".88"/></svg>;
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
  ["AI Applications", "Purpose-built intelligent software for real operational and commercial use cases."],
  ["Shopify Solutions", "Bespoke storefronts, custom workflows and commercial functionality beyond standard themes."],
  ["Business Automation", "Systems that remove repetitive work and improve the reliability of business processes."],
  ["SaaS Platforms", "Customer-facing software products designed from concept through production deployment."],
  ["Internal Systems", "Operational software engineered around the way your organisation actually works."],
  ["API Integrations", "Reliable connections between platforms, data sources and third-party services."],
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
    <header className="nav"><a href="#top" className="brand"><span className="brand-mark"><Mark size={31}/></span><span>TRUTH INDEX SYSTEMS</span></a><nav><a href="#technology">Technology</a><a href="#products">Product</a><a href="#bespoke">Bespoke Software</a><a href="#about">About</a><a href="#contact">Contact</a></nav></header>

    <section className="hero" id="top"><div className="grid-bg"/><div className="eyebrow">TRUTH INDEX SYSTEMS</div><h1>Engineering<br/><span>Intelligent Software.</span></h1><p className="hero-copy">We engineer intelligent software platforms, proprietary technologies and bespoke business systems that solve real commercial problems.</p><div className="actions"><a className="btn primary" href="#technology">Explore our technology</a><a className="btn ghost" href="#products">View MarketRoute</a></div><div className="hero-rule"><span>PRECISION OVER NOISE</span><span>BUILT ON TRUTH</span></div></section>

    <section className="section truth" id="about"><div className="section-kicker">01 / PRINCIPLE</div><div className="split"><div><h2>Built on<br/>Truth.</h2></div><div className="lead-column"><p className="lead">Great software begins with understanding reality.</p><p>We engineer systems around evidence, structured reasoning and dependable software — not hype, black-box claims or unnecessary complexity.</p></div></div><div className="pillars">{[["Engineering","Software designed with discipline, clarity and real-world constraints in mind."],["Evidence","Decisions grounded in what can be observed, verified and explained."],["Reliability","Production systems should remain understandable when conditions become difficult."],["Partnership","We work alongside clients from the first problem definition through deployment."]].map(([title,desc],i)=><article className="pillar" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

    <section className="section technology" id="technology"><div className="section-kicker">02 / PROPRIETARY TECHNOLOGY</div><div className="genesis-wrap"><div className="genesis-badge"><div className="genesis-core">G</div><div className="genesis-orbit orbit-a"/><div className="genesis-orbit orbit-b"/></div><div><div className="micro">TRUTH INDEX SYSTEMS / GENESIS</div><h2>Genesis T8<span>™</span></h2><h3>The Intelligence Engine.</h3><p>Genesis T8 is the proprietary intelligence platform developed by Truth Index Systems. It provides a structured foundation for reasoning, evidence assessment and intelligent software systems.</p></div></div><div className="signal-chain">{["Knowledge","Reasoning","Evidence","Intelligence","Software"].map((x,i)=><div className="signal" key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></div>)}</div></section>

    <section className="section cie"><div className="section-kicker">03 / COMMERCIAL INTELLIGENCE ENGINE</div><div className="split cie-head"><div><h2>CIE <span>v1.0</span></h2><h3>Commercial intelligence,<br/>engineered.</h3></div><p className="lead-column">The Commercial Intelligence Engine is the first production intelligence engine built on Genesis T8, transforming structured reasoning into practical commercial intelligence.</p></div><div className="capability-grid">{capabilities.map(([title,desc],i)=><article className="capability" key={title}><div className="capability-top"><span>{String(i+1).padStart(2,"0")}</span><i/></div><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

    <section className="section product" id="products"><div className="section-kicker">04 / FLAGSHIP PRODUCT</div><div className="market-card"><div className="market-content"><div className="market-logo"><div className="route-icon"><span/><span/><span/></div><strong>MarketRoute</strong></div><div className="micro blue">POWERED BY GENESIS T8™</div><h2>Find the route.<br/>Not just the lead.</h2><p>MarketRoute is a commercial intelligence platform that researches markets, discovers companies and identifies evidence-backed routes to opportunity.</p><a className="btn blue-btn" href="https://www.marketroute.co.uk" target="_blank" rel="noreferrer">Visit marketroute.co.uk</a></div><div className="route-visual" aria-hidden="true"><div className="route-grid"/><div className="node n1"/><div className="node n2"/><div className="node n3"/><div className="node n4"/><div className="node n5"/><svg viewBox="0 0 500 420"><path d="M68 320 C165 260, 190 120, 305 150 S410 285,455 90"/><path className="soft" d="M45 155 C160 210, 235 360, 450 300"/></svg></div></div></section>

    <section className="section bespoke" id="bespoke"><div className="section-kicker">05 / BESPOKE SOFTWARE</div><div className="split"><div><h2>Engineering software<br/>around your business.</h2></div><div className="lead-column"><p>Alongside our proprietary platforms, Truth Index Systems designs and engineers bespoke software tailored to the way organisations actually operate.</p></div></div><div className="portfolio"><article className="case handover"><div className="case-top"><div className="handover-icon">H</div><div><div className="micro teal">BESPOKE PLATFORM</div><h3>HandoverAI</h3></div></div><p>Workplace knowledge-transfer software designed to capture operational knowledge, improve continuity and reduce the cost of information leaving with people.</p><a href="https://www.handoverai.co.uk" target="_blank" rel="noreferrer">Visit handoverai.co.uk ↗</a></article><article className="case sample"><div className="case-top"><div className="sample-icon">S</div><div><div className="micro">CLIENT PROJECT / IN DEVELOPMENT</div><h3>Sample Studios</h3></div></div><p>Bespoke commerce platform combining a premium storefront with custom token-based purchasing and account functionality.</p><span className="status"><i/> In development</span></article></div><div className="service-grid">{services.map(([title,desc])=><article key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

    <section className="section process"><div className="section-kicker">06 / HOW WE WORK</div><div className="split"><div><h2>From problem<br/>to production.</h2></div><p className="lead-column">Good engineering starts before implementation. We work from the business problem outward, then build the smallest system that solves it properly.</p></div><div className="process-line">{process.map((step,i)=><div className="process-step" key={step}><span>{String(i+1).padStart(2,"0")}</span><strong>{step}</strong></div>)}</div></section>

    <section className="section why"><div className="section-kicker">07 / OUR STANDARD</div><div className="why-grid"><div className="why-intro"><h2>Authority in<br/>engineering.</h2><p>We do not need to shout. The work should speak clearly enough.</p></div>{[["Engineering first","Architecture and implementation decisions are made for the problem, not for the trend."],["Built on truth","Evidence before assumption. Explanation before exaggeration."],["Production ready","Reliability, recoverability and clarity matter as much as the demonstration."],["Long-term thinking","We build foundations that can evolve rather than disposable prototypes."]].map(([title,desc])=><article key={title}><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

    <section className="final-cta" id="contact"><div className="cta-mark"><Mark size={86}/></div><div className="section-kicker centered">08 / START A CONVERSATION</div><h2>Let&apos;s build something<br/>exceptional.</h2><p>Tell us what needs to exist. We&apos;ll help work out how it should be engineered.</p><a className="btn primary" href="#contact">Start a conversation</a><small>Connect final business contact details before production launch.</small></section>

    <footer><div className="footer-brand"><span className="brand-mark"><Mark size={28}/></span><div><strong>TRUTH INDEX SYSTEMS</strong><span>Engineering Intelligent Software.</span></div></div><div className="footer-links"><div><strong>Technology</strong><a href="#technology">Genesis T8™</a><a href="#technology">CIE v1.0</a></div><div><strong>Product</strong><a href="https://www.marketroute.co.uk">MarketRoute</a></div><div><strong>Bespoke</strong><a href="https://www.handoverai.co.uk">HandoverAI</a><a href="#bespoke">Client Solutions</a></div></div><div className="footer-bottom"><span>© 2026 Truth Index Systems</span><span>Built on Truth.</span></div></footer>
  </main>;
}
