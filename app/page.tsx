const products = [
  {
    name: "COSMIC DOME",
    type: "Decorative / Pendant",
    image: "https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png",
    description: "A sculptural perforated-aluminium luminaire that turns the ceiling into an architectural element.",
    href: "/products/cosmic-dome",
  },
  {
    name: "ECHODISK",
    type: "Acoustic / Pendant",
    image: "https://www.lunnark.com/assets/images/home/new-products/AO19_Acous_Disk.png",
    description: "Acoustic performance and integrated illumination in a clean, architectural form.",
    href: "#contact",
  },
  {
    name: "BUBBLE",
    type: "Decorative / Floor",
    image: "https://www.lunnark.com/assets/images/home/new-products/DS-64-Bubble.png",
    description: "A soft sculptural presence formed from aluminium and diffused light.",
    href: "#contact",
  },
];

const capabilities = [
  ["01", "CUSTOM CONFIGURATION", "Dimensions, finishes, optics and mounting can be developed around the project."],
  ["02", "LIGHTING PERFORMANCE", "Integrated LED systems engineered for the intended space, visual comfort and output."],
  ["03", "MANUFACTURING", "Design, fabrication, finishing, assembly and quality control connected under one process."],
  ["04", "PROJECT DELIVERY", "From design approval and sampling through supply, inspection, installation and handover."],
];

const applications = [
  ["Corporate", "Workplaces and technology environments"],
  ["Hospitality", "Hotels, restaurants and experience-led interiors"],
  ["Retail", "Stores, showrooms and branded environments"],
  ["Healthcare", "Comfort-led spaces with technical performance"],
  ["Education", "Campuses, learning spaces and auditoriums"],
  ["Residential", "Private spaces and high-end interiors"],
];

const projects = [
  ["WIPRO", "Technology / Workplace", "Gurugram · Bengaluru · Pune · Chennai"],
  ["WALMART", "Retail", "Bengaluru · Chennai"],
  ["MICROSOFT", "Technology", "Hyderabad"],
  ["INFOSYS", "Workplace / Campus", "Bengaluru"],
  ["BOEING INDIA", "Workplace / Technical", "Chennai"],
  ["PES UNIVERSITY", "Education", "Bengaluru"],
];

export default function Home() {
  return (
    <main className="meteor-inspired">
      <header className="ml-header">
        <a className="ml-logo" href="/">LUNNARK</a>
        <nav>
          <a href="#products">Products</a>
          <a href="#collections">Collections</a>
          <a href="#applications">Applications</a>
          <a href="#projects">Projects</a>
          <a href="#studio">Studio</a>
          <a href="#resources">Resources</a>
        </nav>
        <a className="ml-contact" href="#contact">START A PROJECT ↗</a>
      </header>

      <section className="ml-hero">
        <div className="ml-hero-media">
          <div className="ml-glow" />
          <img src={products[0].image} alt="LunnArk Cosmic Dome" />
          <span>01 / FEATURED LUMINAIRE</span>
        </div>
        <div className="ml-hero-copy">
          <p className="ml-kicker">LUNNARK / LIGHTING SYSTEMS</p>
          <h1>LIGHTING<br /><em>ENGINEERED.</em></h1>
          <p className="ml-lead">Designed in Bengaluru. Engineered for architecture. Manufactured for performance.</p>
          <div className="ml-actions">
            <a className="ml-button" href="#products">EXPLORE PRODUCTS ↗</a>
            <a href="#studio">HOW WE MAKE IT ↓</a>
          </div>
        </div>
      </section>

      <section className="ml-intro">
        <div className="ml-label">LUNNARK</div>
        <div>
          <p className="ml-kicker">DESIGN / ENGINEERING / MANUFACTURING</p>
          <h2>LIGHT THAT BELONGS<br />TO THE <em>ARCHITECTURE.</em></h2>
          <p className="ml-copy">LunnArk creates decorative, architectural and performance-led lighting for spaces where light is part of the design language—not an afterthought.</p>
        </div>
      </section>

      <section id="products" className="ml-products">
        <div className="ml-section-head">
          <div><span>01</span><p className="ml-kicker">PRODUCTS</p><h2>DESIGNED TO<br /><em>PERFORM.</em></h2></div>
          <p>Explore a growing family of luminaires, from sculptural decorative pieces to engineered systems for commercial and architectural environments.</p>
        </div>
        <div className="ml-product-grid">
          {products.map((p, i) => (
            <a className="ml-product-card" href={p.href} key={p.name}>
              <div className="ml-product-image"><img src={p.image} alt={p.name} /><span>0{i + 1}</span><b>VIEW PRODUCT ↗</b></div>
              <p>{p.type}</p><h3>{p.name}</h3><small>{p.description}</small>
            </a>
          ))}
        </div>
        <a className="ml-outline-link" href="https://www.lunnark.com/all">VIEW ALL LUNNARK PRODUCTS ↗</a>
      </section>

      <section id="collections" className="ml-dark-feature">
        <div className="ml-feature-copy">
          <p className="ml-kicker">02 / COLLECTIONS</p>
          <h2>ONE PLATFORM.<br /><em>MANY POSSIBILITIES.</em></h2>
          <p>Decorative. Functional. Architectural. Kinetic. Outdoor. Custom. Build the lighting language around the project.</p>
        </div>
        <div className="ml-feature-visual">
          <div className="ml-ring ring-a" /><div className="ml-ring ring-b" /><div className="ml-ring ring-c" /><i />
          <span>LIGHT / FORM / MATERIAL / CONTROL</span>
        </div>
      </section>

      <section className="ml-capabilities">
        <div className="ml-section-head">
          <div><span>03</span><p className="ml-kicker">CAPABILITIES</p><h2>FROM CONCEPT<br />TO <em>LIGHT.</em></h2></div>
          <p>Our process connects design intent with engineering and manufacturing so the final luminaire performs as beautifully as it looks.</p>
        </div>
        <div className="ml-cap-grid">
          {capabilities.map(([n, title, copy]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p><b>↗</b></article>)}
        </div>
      </section>

      <section id="studio" className="ml-studio">
        <div className="ml-studio-media"><div className="ml-machine-glow" /><div className="ml-machine-line line-one" /><div className="ml-machine-line line-two" /><span>DESIGN / FABRICATION / ASSEMBLY / TESTING</span></div>
        <div className="ml-studio-copy">
          <p className="ml-kicker">04 / LUNNARK STUDIO</p>
          <h2>MADE WITH<br /><em>PRECISION.</em></h2>
          <p>From raw material and CNC fabrication to finishing, LED integration, assembly and testing, every stage is part of the same conversation.</p>
          <div className="ml-process">{["DESIGN","ENGINEER","FABRICATE","ASSEMBLE","TEST","DELIVER"].map((x,i)=><span key={x}><b>0{i+1}</b>{x}</span>)}</div>
        </div>
      </section>

      <section id="applications" className="ml-applications">
        <div className="ml-section-head">
          <div><span>05</span><p className="ml-kicker">APPLICATIONS</p><h2>LIGHT FOR<br /><em>THE SPACE.</em></h2></div>
          <p>Solutions for architects, designers, consultants, contractors and teams specifying lighting at project scale.</p>
        </div>
        <div className="ml-app-grid">{applications.map(([name, copy],i)=><a href="#contact" key={name}><span>0{i+1}</span><strong>{name}</strong><small>{copy}</small><b>↗</b></a>)}</div>
      </section>

      <section id="projects" className="ml-projects">
        <div className="ml-section-head">
          <div><span>06</span><p className="ml-kicker">SELECTED PROJECTS</p><h2>LIGHT<br /><em>IN CONTEXT.</em></h2></div>
          <p>Real spaces, real constraints and lighting engineered around the architecture.</p>
        </div>
        <div className="ml-project-list">{projects.map(([name,type,place],i)=><a href="https://www.lunnark.com/projects" key={name}><span>0{i+1}</span><strong>{name}</strong><small>{type}</small><small>{place}</small><b>VIEW PROJECT ↗</b></a>)}</div>
      </section>

      <section id="resources" className="ml-resources">
        <div className="ml-resource-intro"><p className="ml-kicker">07 / PROFESSIONAL RESOURCES</p><h2>SPECIFY<br /><em>WITH CONFIDENCE.</em></h2><p>Product information, project support and technical pathways for the people who turn lighting concepts into built environments.</p></div>
        <div className="ml-resource-grid">{["PRODUCT FINDER","CAD / BIM","IES FILES","DATASHEETS","SPECIFICATION","PROJECT SUPPORT"].map((x,i)=><a href="#contact" key={x}><span>0{i+1}</span><strong>{x}</strong><b>↗</b></a>)}</div>
      </section>

      <section id="contact" className="ml-final">
        <p className="ml-kicker">08 / YOUR PROJECT</p>
        <h2>WHAT WILL<br /><em>YOU LIGHT?</em></h2>
        <p>Tell us about your space, performance requirements and design intent. We'll help take it from concept to manufactured luminaire.</p>
        <div><a className="ml-button" href="mailto:sales@lunnark.com?subject=LunnArk%20Project%20Enquiry">START A PROJECT ↗</a><a href="tel:18008902146">1800 890 2146</a></div>
        <footer><span>LUNNARK / LIGHT, SCULPTED.</span><span>BENGALURU / INDIA</span><span>sales@lunnark.com</span><span>© 2026 LunnArk®</span></footer>
      </section>
    </main>
  );
}
