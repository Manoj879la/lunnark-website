import { LightOrb } from "@/components/light-orb";

const collections = [
  ["01", "DECORATIVE", "Sculptural light with a point of view."],
  ["02", "ARCHITECTURAL", "Integrated illumination for precise spaces."],
  ["03", "FUNCTIONAL", "Performance-first light, refined."],
  ["04", "KINETIC", "Light that changes with the environment."],
  ["05", "OUTDOOR", "Built for architecture beyond the envelope."],
  ["06", "BESPOKE", "Designed when the standard is not enough."],
];

export default function Home() {
  return (
    <main>
      <section className="hero section-dark">
        <header className="site-header">
          <div className="wordmark">LUNNARK</div>
          <nav>
            <a href="#collections">Collections</a>
            <a href="#bespoke">Bespoke</a>
            <a href="#projects">Projects</a>
            <a href="#studio">Studio</a>
            <a href="#about">About</a>
          </nav>
          <a className="header-cta" href="#contact">Start a Project ↗</a>
        </header>

        <div className="hero-light"><LightOrb /></div>

        <div className="hero-copy">
          <p className="eyebrow">LUNNARK / LIGHTING SYSTEMS</p>
          <h1>LIGHT,<br />SCULPTED.</h1>
          <p className="hero-body">Architectural lighting engineered for extraordinary spaces.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#collections">Explore Collections</a>
            <a className="text-link" href="#bespoke">Create Bespoke ↗</a>
          </div>
        </div>

        <div className="scroll-cue">SCROLL TO EXPLORE ↓</div>
      </section>

      <section className="manifesto section-light">
        <div className="section-index">01 / PHILOSOPHY</div>
        <div>
          <h2>LIGHT IS NOT<br /><em>ILLUMINATION.</em><br />IT IS EXPERIENCE.</h2>
          <p>We create lighting systems that shape atmosphere, rhythm and architectural presence. From first sketch to final installation, every detail is engineered with intent.</p>
        </div>
      </section>

      <section id="studio" className="studio section-dark">
        <div className="section-index">02 / THE STUDIO</div>
        <div className="studio-copy">
          <p className="eyebrow">DESIGN / ENGINEERING / MANUFACTURING</p>
          <h2>FROM IDEA<br />TO <span>LIGHT.</span></h2>
          <p>One integrated process. Materials, optics, fabrication, testing and installation under one LunnArk standard.</p>
        </div>
        <div className="process-grid">
          {["IDEA", "DESIGN", "ENGINEERING", "MANUFACTURING", "ASSEMBLY", "QUALITY"].map((item, i) => (
            <div className="process-item" key={item}><span>0{i + 1}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section id="collections" className="collections section-mid">
        <div className="section-index">03 / THE COLLECTIONS</div>
        <div className="section-heading">
          <div><p className="eyebrow">SIX LIGHTING LANGUAGES</p><h2>LIGHT, WITH A<br /><em>POINT OF VIEW.</em></h2></div>
          <p>Distinct typologies. One LunnArk standard.</p>
        </div>
        <div className="collection-grid">
          {collections.map(([number, title, copy]) => (
            <article className="collection-card" key={number}>
              <div className="card-number">{number}</div><div className="card-light" />
              <div><p>{title}</p><span>{copy}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section id="bespoke" className="bespoke section-dark">
        <div className="section-index">04 / BESPOKE</div>
        <div className="bespoke-layout">
          <div><p className="eyebrow">CUSTOM LUMINAIRES</p><h2>IF IT DOESN&apos;T EXIST,<br /><em>WE DESIGN IT.</em></h2></div>
          <p className="bespoke-intro">For architects, designers and brands with a precise idea. We translate intent into a manufacturable, testable and installable lighting system.</p>
        </div>
        <div className="bespoke-steps">
          {["IMAGINE", "DESIGN", "PROTOTYPE", "ENGINEER", "MANUFACTURE", "INSTALL"].map((step, i) => (
            <div key={step}><span>0{i + 1}</span><strong>{step}</strong></div>
          ))}
        </div>
        <a className="button button-light" href="#contact">Start a Bespoke Project →</a>
      </section>

      <section id="projects" className="projects section-light">
        <div className="section-index">05 / SELECTED WORK</div>
        <div className="section-heading">
          <div><p className="eyebrow">LIGHTING, IN CONTEXT</p><h2>BUILT FOR<br /><em>REAL SPACES.</em></h2></div>
          <p>Corporate, hospitality, retail and high-performance environments.</p>
        </div>
        <div className="project-band">
          {["CORPORATE", "HOSPITALITY", "RETAIL", "HEALTHCARE"].map((item, i) => (
            <div className="project-panel" key={item}><span>0{i + 1}</span><strong>{item}</strong><small>CASE STUDY ↗</small></div>
          ))}
        </div>
      </section>

      <section id="about" className="origin section-dark">
        <div className="section-index">06 / ORIGIN</div>
        <div>
          <p className="eyebrow">MADE IN INDIA</p>
          <h2>BORN IN BENGALURU.<br /><em>BUILT FOR THE WORLD.</em></h2>
          <p className="origin-body">A 20,000+ sq. ft. manufacturing environment where design approval flows through engineering, fabrication, quality and installation.</p>
        </div>
        <div className="origin-stat"><strong>20,000+</strong><span>SQ. FT. MANUFACTURING FACILITY</span></div>
      </section>

      <section id="contact" className="contact section-mid">
        <div className="section-index">07 / YOUR PROJECT</div>
        <div className="contact-main">
          <p className="eyebrow">LET&apos;S MAKE SOMETHING GLOW</p>
          <h2>WHAT WILL<br /><em>YOU LIGHT?</em></h2>
          <a className="button button-dark" href="mailto:hello@lunnark.com">Start a Project ↗</a>
        </div>
        <footer><span>LUNNARK / LIGHT, SCULPTED.</span><span>BENGALURU / INDIA</span></footer>
      </section>
    </main>
  );
}
