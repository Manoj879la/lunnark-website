"use client";

import { useEffect, useState } from "react";
import { LightingScene } from "../components/lighting-scene";

type Media = { type: "image" | "video"; src: string; title: string };

const defaultMedia: Media[] = [
  { type: "image", src: "https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png", title: "Cosmic Dome" },
  { type: "image", src: "https://www.lunnark.com/assets/images/home/new-products/AO19_Acous_Disk.png", title: "Echodisk" },
  { type: "image", src: "https://www.lunnark.com/assets/images/home/new-products/DS-64-Bubble.png", title: "Bubble" }
];

const products = [
  ["COSMIC DOME", "Decorative / Technical", defaultMedia[0].src, "/products/cosmic-dome"],
  ["ECHODISK", "Acoustic / Pendant", defaultMedia[1].src, "https://www.lunnark.com/all"],
  ["BUBBLE", "Fabricated / Floor", defaultMedia[2].src, "https://www.lunnark.com/all"],
  ["CONIO", "Acoustic / Suspended", defaultMedia[0].src, "https://www.lunnark.com/all"]
];

const collections = ["Decorative", "Functional", "Kinetic", "Mounting"];
const applications = ["Corporate", "Hospitality", "Retail", "Healthcare", "Education", "Residential"];

export default function Home() {
  const [media, setMedia] = useState<Media[]>(defaultMedia);
  const [emblem, setEmblem] = useState("");
  const [artisans, setArtisans] = useState([
    "Design & R&D", "CNC & Fabrication", "Finishing & Powder Coat",
    "LED Integration", "Assembly & Testing", "Quality & Inspection", "Project Installation"
  ]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lunnark-home-media");
      const savedEmblem = localStorage.getItem("lunnark-emblem");
      const savedArtisans = localStorage.getItem("lunnark-artisans");
      if (saved) setMedia(JSON.parse(saved));
      if (savedEmblem) setEmblem(savedEmblem);
      if (savedArtisans) setArtisans(JSON.parse(savedArtisans));
    } catch {
      // Keep the curated defaults if local browser content is invalid.
    }
  }, []);

  return (
    <main className="triptych-lunnark">
      <header className="brand-nav cinematic-nav">
        <a className="brand-logo" href="/">LUNNARK</a>
        <nav className="brand-nav-links">
          <a href="/">Home</a>
          <a href="/bespoke">Bespoke</a>
          <details><summary>Products</summary><div><a href="https://www.lunnark.com/all">All</a>{collections.slice(0, 3).map(x => <a key={x} href="#collections">{x}</a>)}</div></details>
          <details><summary>Projects</summary><div><a href="https://www.lunnark.com/projects">All Projects</a><a href="#experience">Experience</a></div></details>
          <details><summary>Resources</summary><div><a href="https://www.lunnark.com/resources">Catalogue</a><a href="https://www.lunnark.com/resources">Brochures</a><a href="/make-in-india">Make in India</a></div></details>
          <a href="https://www.lunnark.com/sustainability">Sustainability</a>
          <a href="https://www.lunnark.com/blogs">Blogs</a>
          <details><summary>About Us</summary><div><a href="https://www.lunnark.com/about">About Lunnark</a><a href="https://www.lunnark.com/news-events">News & Events</a></div></details>
        </nav>
        <a className="nav-contact" href="/contact_us">Contact Us</a>
        <button className="nav-menu" aria-label="Menu">☰</button>
      </header>

      <section className="immersive-hero">
        <div className="hero-noise" />
        <div className="hero-topline"><span>01 / LIGHT INNOVATIONS AT ITS BEST</span><span>BEN 12.9716° N / 77.5946° E</span></div>
        <div className="hero-3d"><LightingScene /></div>
        <div className="hero-wordmark">
          <span>LIGHT</span>
          <h1>THAT<br /><em>SHAPES.</em></h1>
          <p>Architectural lighting engineered as objects, systems and experiences.</p>
          <div className="hero-actions"><a href="#products">EXPLORE PRODUCTS ↗</a><a href="/bespoke">BESPOKE ↗</a></div>
        </div>
        <div className="hero-product-orbit">
          <img src={media[0]?.src || defaultMedia[0].src} alt={media[0]?.title || "LunnArk lighting"} />
        </div>
        <div className="hero-footer"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>DESIGNED + MANUFACTURED IN BENGALURU</span></div>
      </section>

      <section id="experience" className="experience-stage">
        <div className="stage-intro"><span>02 / THE EXPERIENCE</span><h2>LIGHT IS<br /><em>A MATERIAL.</em></h2><p>Move through a living sequence of luminaires, materials, spaces and engineering. Built with the same sense of depth as the objects themselves.</p></div>
        <div className="experience-stack">
          {media.slice(0, 4).map((item, i) => (
            <article key={item.src + i} className={"experience-card card-" + (i + 1)}>
              {item.type === "video" ? <video src={item.src} autoPlay muted loop playsInline /> : <img src={item.src} alt={item.title || "LunnArk"} />}
              <div><span>0{i + 1}</span><strong>{item.title || "LUNNARK"}</strong></div>
            </article>
          ))}
          <div className="experience-core"><span>PLAY</span><b>↗</b></div>
        </div>
      </section>

      <section className="statement-stage">
        <span>03 / DESIGN PHILOSOPHY</span>
        <h2>WE DON'T<br /><em>FILL ROOMS.</em><br />WE SHAPE THEM.</h2>
        <div className="statement-meta"><p>Every LunnArk luminaire balances optical performance, material character and architectural intent.</p><a href="https://www.lunnark.com/about">DISCOVER LUNNARK ↗</a></div>
      </section>

      <section id="products" className="products-stage">
        <div className="stage-intro light"><span>04 / THE COLLECTION</span><h2>OBJECTS<br /><em>OF LIGHT.</em></h2></div>
        <div className="product-wall">
          {products.map(([name, type, img, href], i) => (
            <a className="triptych-product" href={href} key={name}>
              <div className="product-visual"><span>0{i + 1}</span><img src={img} alt={name} /></div>
              <small>{type}</small><h3>{name}</h3><b>VIEW PRODUCT ↗</b>
            </a>
          ))}
        </div>
        <a className="stage-link" href="https://www.lunnark.com/all">VIEW ALL PRODUCTS ↗</a>
      </section>

      <section id="collections" className="collection-stage">
        <span>05 / LIGHTING LANGUAGES</span><h2>ONE BRAND.<br /><em>MANY EXPRESSIONS.</em></h2>
        <div className="collection-list">{collections.map((x, i) => <a href="https://www.lunnark.com/all" key={x}><span>0{i + 1}</span><strong>{x}</strong><b>↗</b></a>)}</div>
      </section>

      <section className="india-stage">
        <div className="india-art">
          {emblem ? <img src={emblem} alt="Approved Lion Emblem" /> : <div><span>INDIA</span><strong>◎</strong><small>APPROVED EMBLEM<br />ASSET VIA CONTENT STUDIO</small></div>}
        </div>
        <div className="india-copy"><span>06 / ATMANIRBHAR BHARAT</span><h2>MADE IN INDIA.<br /><em>MADE BY INDIANS.</em></h2><p>LunnArk builds lighting in Bengaluru through local design, engineering, fabrication, assembly, testing and support.</p><a href="https://www.lunnark.com/make_in_india">DISCOVER MAKE IN INDIA ↗</a></div>
        <div className="india-stats"><strong>20,000+</strong><span>SQ. FT. DESIGN + MANUFACTURING</span><strong>10+</strong><span>YEARS OF LED PRODUCT DEVELOPMENT</span></div>
      </section>

      <section className="craft-stage">
        <div className="stage-intro light"><span>07 / CRAFTSMANSHIP OF LIGHT</span><h2>BUILT BY<br /><em>HUMANS.</em></h2><p>Designers, fabricators, lighting engineers and technicians turn raw material into precise light.</p></div>
        <div className="craft-track">{[...artisans, ...artisans].map((x, i) => <article key={x + i}><div className="craft-photo" style={{ backgroundImage: `url(${media[i % media.length]?.src || defaultMedia[0].src})` }}><span>0{(i % artisans.length) + 1}</span></div><strong>{x}</strong><small>TEAM LUNNARK</small></article>)}</div>
        <div className="craft-marquee">{["Designers", "Lighting Engineers", "Mechanical Engineers", "CNC Fabricators", "Powder Coating Specialists", "LED Technicians", "Assemblers", "Quality Engineers"].map(x => <span key={x}>{x} ✦</span>)}</div>
      </section>

      <section className="applications-stage">
        <span>08 / APPLICATIONS</span><h2>LIGHT FOR<br /><em>EVERY SPACE.</em></h2>
        <div className="application-list">{applications.map((x, i) => <a href="/contact_us" key={x}><span>0{i + 1}</span><strong>{x}</strong><b>↗</b></a>)}</div>
      </section>

      <section className="studio-stage">
        <div><span>09 / CONTENT STUDIO</span><h2>THE WEBSITE<br /><em>STAYS ALIVE.</em></h2><p>Upload homepage imagery, videos, approved campaign assets and craftsmanship stories from the visual dashboard.</p><a href="/admin">OPEN CONTENT STUDIO ↗</a></div>
        <div className="studio-card"><span>LIVE / CONTENT</span><div className="studio-grid">{media.slice(0, 4).map((m, i) => <div key={i} style={{ backgroundImage: `url(${m.src})` }} />)}</div></div>
      </section>

      <section className="final-stage"><span>10 / YOUR PROJECT</span><h2>WHAT WILL<br /><em>YOU LIGHT?</em></h2><p>Tell us about your space, design intent and performance requirements.</p><a href="mailto:sales@lunnark.com?subject=LunnArk%20Project%20Enquiry">START A PROJECT ↗</a><footer><span>LUNNARK</span><span>1800 890 2146</span><span>sales@lunnark.com</span><span>BENGALURU / INDIA</span></footer></section>
    </main>
  );
}
