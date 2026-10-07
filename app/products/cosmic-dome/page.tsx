"use client";

import { useState } from "react";

const specs = [
  ["Light source", "Integrated LED"],
  ["Colour temperature", "2700K / 3000K / 4000K"],
  ["CRI", "90+"],
  ["Dimming", "DALI / 0-10V / Phase"],
  ["Body", "Aluminium / custom finish"],
  ["Application", "Interior / hospitality / corporate"],
];

const finishes = ["Natural Aluminium", "Matte Black", "Warm Brass", "Custom RAL"];

export default function ProductPage() {
  const [finish, setFinish] = useState(finishes[0]);
  const [cct, setCct] = useState("3000K");

  return (
    <main className="product-page section-dark">
      <header className="product-header">
        <a href="/">LUNNARK</a>
        <a href="/#products">BACK TO PRODUCTS ↗</a>
      </header>

      <section className="product-hero">
        <div className="product-visual">
          <div className="product-ring"><i /></div>
          <span>INTERACTIVE PRODUCT VIEW</span>
        </div>
        <div className="product-intro">
          <p className="eyebrow">DECORATIVE / PENDANT</p>
          <h1>COSMIC<br /><em>DOME.</em></h1>
          <p>A sculptural luminaire designed to become an architectural presence. Refined geometry, controlled optics and configurable finishes.</p>
          <a className="button button-light" href="#specify">REQUEST SPECIFICATION ↗</a>
        </div>
      </section>

      <section className="product-config section-mid">
        <div className="section-index">01 / CONFIGURE</div>
        <div className="config-grid">
          <div><p className="eyebrow">FINISH</p><div className="option-grid">{finishes.map(item => <button className={finish === item ? "option active" : "option"} onClick={() => setFinish(item)} key={item}>{item}</button>)}</div></div>
          <div><p className="eyebrow">COLOUR TEMPERATURE</p><div className="option-grid">{["2700K","3000K","4000K"].map(item => <button className={cct === item ? "option active" : "option"} onClick={() => setCct(item)} key={item}>{item}</button>)}</div></div>
        </div>
        <div className="config-summary"><span>SELECTED FINISH</span><strong>{finish}</strong><span>CCT</span><strong>{cct}</strong></div>
      </section>

      <section id="technical" className="technical section-light">
        <div className="section-index">02 / TECHNICAL</div>
        <div className="technical-layout">
          <div><p className="eyebrow">SPECIFICATION</p><h2>ENGINEERED<br /><em>TO SPECIFY.</em></h2><p className="technical-copy">Every LunnArk product is designed to move from visual concept to a buildable, documented lighting system.</p></div>
          <div className="spec-table">{specs.map(([label, value]) => <div className="spec-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
        </div>
        <div className="downloads"><a href="#specify">DATASHEET ↗</a><a href="#specify">IES / PHOTOMETRY ↗</a><a href="#specify">CAD / BIM ↗</a></div>
      </section>

      <section id="specify" className="product-enquiry section-dark">
        <div className="section-index">03 / PROJECT SUPPORT</div>
        <div className="enquiry-layout">
          <div><p className="eyebrow">ARCHITECTS / DESIGNERS / CONTRACTORS</p><h2>READY TO<br /><em>SPECIFY?</em></h2></div>
          <div><p>Tell us about your project, required quantities and technical intent. LunnArk can support selection, customization, documentation and manufacturing.</p><a className="button button-light" href="mailto:hello@lunnark.com?subject=LunnArk%20Product%20Specification">REQUEST PRODUCT SUPPORT ↗</a></div>
        </div>
      </section>
    </main>
  );
}
