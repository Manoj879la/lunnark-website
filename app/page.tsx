import { LightOrb } from "@/components/light-orb";
import { LightingScene } from "@/components/lighting-scene";
import { ScrollExperience } from "@/components/scroll-experience";

const featuredProducts = [
  ["COSMIC DOME", "Perforated dome luminaire", "https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png"],
  ["ECHODISK", "Acoustic pendant luminaire", "https://www.lunnark.com/assets/images/home/new-products/AO19_Acous_Disk.png"],
  ["BUBBLE", "Custom floor-mounted luminaire", "https://www.lunnark.com/assets/images/home/new-products/DS-64-Bubble.png"],
];

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
    <main><ScrollExperience />
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

        <div className="hero-copy reveal">
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
        <div className="studio-copy reveal">
          <p className="eyebrow">DESIGN / ENGINEERING / MANUFACTURING</p>
          <h2>FROM IDEA<br />TO <span>LIGHT.</span></h2>
          <p>One integrated process. Materials, optics, fabrication, testing and installation under one LunnArk standard.</p>
        </div>
        <div className="process-grid reveal">
          {["IDEA", "DESIGN", "ENGINEERING", "MANUFACTURING", "ASSEMBLY", "QUALITY"].map((item, i) => (
            <div className="process-item" key={item}><span>0{i + 1}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section id="collections" className="collections section-mid">
        <div className="section-index">03 / THE COLLECTIONS</div>
        <div className="section-heading reveal">
          <div><p className="eyebrow">SIX LIGHTING LANGUAGES</p><h2>LIGHT, WITH A<br /><em>POINT OF VIEW.</em></h2></div>
          <p>Distinct typologies. One LunnArk standard.</p>
        </div>
        <div className="collection-grid">
          {collections.map(([number, title, copy]) => (
            <article className="collection-card reveal" key={number}>
              <div className="card-number">{number}</div><div className="card-light parallax-light" />
              <div><p>{title}</p><span>{copy}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section id="bespoke" className="bespoke section-dark">
        <div className="section-index">04 / BESPOKE</div>
        <div className="bespoke-layout reveal">
          <div><p className="eyebrow">CUSTOM LUMINAIRES</p><h2>IF IT DOESN&apos;T EXIST,<br /><em>WE DESIGN IT.</em></h2></div>
          <p className="bespoke-intro">For architects, designers and brands with a precise idea. We translate intent into a manufacturable, testable and installable lighting system.</p>
        </div>
        <div className="bespoke-steps reveal">
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
        <div className="case-grid">
          {[
            ["01", "CORPORATE", "WIPRO", "A lighting language for high-performance workspaces.", "wipro"],
            ["02", "RETAIL", "WALMART", "Uniform illumination, controlled glare and visual hierarchy.", "walmart"],
            ["03", "HOSPITALITY", "SELECTED INTERIORS", "Atmosphere designed around arrival, pause and movement.", "hospitality"],
            ["04", "HEALTHCARE", "PRECISION SPACES", "Technical lighting where comfort and performance meet.", "healthcare"]
          ].map(([number, type, name, copy, image]) => (
            <article className="case-card reveal" key={number}>
              <div className={`case-image case-function () { [native code] }`}><div className="case-glow" /><span>LIGHT / SPACE</span></div>
              <div className="case-overlay"><span>{number} / {type}</span><strong>{name}</strong><p>{copy}</p><small>VIEW CASE STUDY ↗</small></div>
            </article>
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
        <div className="origin-stat reveal"><strong>20,000+</strong><span>SQ. FT. MANUFACTURING FACILITY</span></div>
      </section>

      <section id="contact" className="contact section-mid">
        <div className="section-index">07 / YOUR PROJECT</div>
        <div className="contact-main reveal">
          <p className="eyebrow">LET&apos;S MAKE SOMETHING GLOW</p>
          <h2>WHAT WILL<br /><em>YOU LIGHT?</em></h2>
          <a className="button button-dark" href="mailto:hello@lunnark.com">Start a Project ↗</a>
        </div>
        <footer><span>LUNNARK / LIGHT, SCULPTED.</span><span>BENGALURU / INDIA</span></footer>
      </section>
    <section className="scene-stage section-dark"><div className="section-index">08 / LIGHT AS OBJECT</div><div className="scene-copy reveal"><p className="eyebrow">INTERACTIVE STUDY</p><h2>LIGHT<br /><em>IN MOTION.</em></h2><p>WebGL becomes the foundation for product-scale lighting interactions, material studies and future 3D configurators.</p></div><LightingScene /></section></main>
  );
}
