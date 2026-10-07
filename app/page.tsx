import { LightOrb } from "@/components/light-orb";
import { LightingScene } from "@/components/lighting-scene";
import { ScrollExperience } from "@/components/scroll-experience";

const featuredProducts = [
  {
    name: "COSMIC DOME",
    family: "Fabricated / Decorative Technical",
    copy: "Perforated aluminium dome with direct and indirect illumination.",
    image: "https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png",
    href: "/products/cosmic-dome",
  },
  {
    name: "ECHODISK",
    family: "Acoustic / Pendant",
    copy: "A designer acoustic luminaire for architectural, reception and dining spaces.",
    image: "https://www.lunnark.com/assets/images/home/new-products/AO19_Acous_Disk.png",
    href: "#contact",
  },
  {
    name: "BUBBLE",
    family: "Fabricated / Floor",
    copy: "A sculptural floor luminaire formed from rolled aluminium and frosted glass.",
    image: "https://www.lunnark.com/assets/images/home/new-products/DS-64-Bubble.png",
    href: "#contact",
  },
];

const collections = [
  ["01", "DECORATIVE", "Geometrical shapes, fabricated forms, acoustic, glass, wood, cork and more."],
  ["02", "FUNCTIONAL", "Precision luminaires for workplaces, corridors, commercial and architectural interiors."],
  ["03", "KINETIC", "Dynamic lighting systems using motion, control and DMX-driven experiences."],
  ["04", "ARCHITECTURAL", "Linear, recessed, surface and suspended systems engineered around the space."],
  ["05", "OUTDOOR & FACADE", "Lighting solutions designed to extend architectural expression beyond the envelope."],
  ["06", "CUSTOM & VALUE ENGINEERING", "From one-off concepts to engineered, manufacturable lighting systems."],
];

const applications = [
  "CORPORATE",
  "HOSPITALITY",
  "RETAIL",
  "HEALTHCARE",
  "EDUCATION",
  "INDUSTRIAL",
  "RESIDENTIAL",
  "AUDITORIUMS & STUDIOS",
];

const projects = [
  ["01", "WIPRO TECHNOLOGY", "Gurugram / Bengaluru / Pune / Chennai", "High-performance workplace environments."],
  ["02", "WALMART", "Bengaluru & Chennai", "Retail lighting engineered around visual hierarchy."],
  ["03", "MICROSOFT", "Hyderabad", "Integrated lighting for technology environments."],
  ["04", "INFOSYS", "Bengaluru", "Large-scale workplace and campus illumination."],
  ["05", "BOEING INDIA", "Chennai", "Technical lighting for a demanding workplace."],
  ["06", "PES UNIVERSITY", "Bengaluru", "Lighting across education environments."],
];

const journal = [
  ["COSMIC DOME", "Where art and light converge.", "A sculptural blend of perforated metal, PMMA and shadow."],
  ["HEALTHCARE", "Lighting for patient and staff wellbeing.", "Technical lighting designed around comfort, clarity and performance."],
  ["GLOBAL REACH", "How our LED solutions shape industries.", "From Bengaluru to projects across India and international markets."],
];

export default function Home() {
  return (
    <main className="lunnark-site">
      <ScrollExperience />

      <section className="hero section-dark">
        <div className="utility-bar">
          <span>LIGHTING SYSTEMS / MADE IN INDIA</span>
          <div>
            <a href="tel:18008902146">1800 890 2146</a>
            <span>·</span>
            <a href="mailto:sales@lunnark.com">sales@lunnark.com</a>
          </div>
        </div>

        <header className="site-header">
          <a className="wordmark" href="/">LUNNARK</a>
          <nav>
            <a href="#products">Products</a>
            <a href="#collections">Collections</a>
            <a href="#projects">Projects</a>
            <a href="#studio">Studio</a>
            <a href="#resources">Resources</a>
            <a href="#about">About</a>
          </nav>
          <div className="header-actions">
            <a className="header-search" href="#products">Search / Find a product</a>
            <a className="header-cta" href="#contact">Start a Project ↗</a>
          </div>
        </header>

        <div className="hero-light"><LightOrb /></div>

        <div className="hero-copy reveal">
          <p className="eyebrow">LUNNARK / INTEGRATED LED LIGHTING</p>
          <h1>LIGHT,<br />SCULPTED.</h1>
          <p className="hero-body">
            Cutting-edge lighting solutions shaped by design, engineering and manufacturing.
            Built for architects, designers and extraordinary spaces.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#products">Explore Products</a>
            <a className="text-link" href="#collections">Browse Collections ↗</a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>01 / 07</span>
          <span>SCROLL TO EXPLORE ↓</span>
          <span>BENGALURU / INDIA</span>
        </div>
      </section>

      <section className="quick-discovery section-light">
        <div className="section-index">DISCOVER LUNNARK</div>
        <div className="discovery-grid">
          <a href="#collections"><span>01</span><strong>Shop by collection</strong><small>Decorative · Functional · Kinetic · Architectural</small></a>
          <a href="#applications"><span>02</span><strong>Shop by application</strong><small>Corporate · Hospitality · Healthcare · Retail</small></a>
          <a href="#products"><span>03</span><strong>Find a luminaire</strong><small>Explore products and specification pathways</small></a>
          <a href="#contact"><span>04</span><strong>Talk to an expert</strong><small>Project support, customization & value engineering</small></a>
        </div>
      </section>

      <section className="manifesto section-light">
        <div className="section-index">01 / PHILOSOPHY</div>
        <div>
          <p className="eyebrow">LIGHTING DESIGN / ENGINEERING / EXPERIENCE</p>
          <h2>LIGHTING IS NOT JUST<br /><em>ILLUMINATION.</em></h2>
          <p>
            Every LunnArk luminaire is a blend of precision engineering and artistic vision.
            We design light to shape atmosphere, support wellbeing and give architecture a distinct presence.
          </p>
          <a className="dark-link" href="#about">Discover the LunnArk story ↗</a>
        </div>
      </section>

      <section id="products" className="product-finder section-mid">
        <div className="section-index">02 / PRODUCTS</div>
        <div className="finder-head reveal">
          <div>
            <p className="eyebrow">NEW ARRIVALS / FEATURED LUMINAIRES</p>
            <h2>FIND THE<br /><em>RIGHT LIGHT.</em></h2>
          </div>
          <p>
            Explore LunnArk luminaires by form, application and performance.
            Move from inspiration to technical specification and project support.
          </p>
        </div>

        <div className="finder-filters reveal">
          {["ALL", "DECORATIVE", "FUNCTIONAL", "KINETIC", "ARCHITECTURAL", "ACOUSTIC", "OUTDOOR"].map((filter, i) => (
            <button className={i === 0 ? "active" : ""} key={filter}>{filter}</button>
          ))}
        </div>

        <div className="finder-products">
          {featuredProducts.map((product, i) => (
            <article className="finder-product finder-product-premium reveal" key={product.name}>
              <a className="finder-image" href={product.href}>
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="image-index">0{i + 1}</span>
                <span className="image-view">VIEW PRODUCT ↗</span>
              </a>
              <div className="finder-copy">
                <span>{product.family}</span>
                <strong>{product.name}</strong>
                <p>{product.copy}</p>
                <a href={product.href}>SPECIFY / EXPLORE ↗</a>
              </div>
            </article>
          ))}
        </div>

        <div className="all-products-row">
          <span>100+ lighting forms across LunnArk product families</span>
          <a href="https://www.lunnark.com/all">View all products ↗</a>
        </div>
      </section>

      <section id="collections" className="collections section-light">
        <div className="section-index">03 / COLLECTIONS</div>
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">LIGHTING LANGUAGES</p>
            <h2>FORM FOLLOWS<br /><em>THE EXPERIENCE.</em></h2>
          </div>
          <p>
            LunnArk combines decorative expression with technical performance,
            giving architects and lighting designers a broad platform to specify from.
          </p>
        </div>
        <div className="collection-grid collection-grid-luxury">
          {collections.map(([number, title, copy], i) => (
            <a className="collection-card collection-enhanced reveal" key={number} href="#products">
              <div className="card-top"><span className="card-number">{number}</span><span className="collection-tag">LUNNARK / {String(i + 1).padStart(2, "0")}</span></div>
              <div className="collection-art"><span>{String(i + 1).padStart(2, "0")}</span></div>
              <div className="collection-info"><p>{title}</p><span>{copy}</span><b>EXPLORE ↗</b></div>
            </a>
          ))}
        </div>
      </section>

      <section id="applications" className="application-section section-mid">
        <div className="section-index">04 / APPLICATIONS</div>
        <div className="application-head reveal">
          <div>
            <p className="eyebrow">DESIGNED AROUND PEOPLE + PLACE</p>
            <h2>LIGHT FOR<br /><em>EVERY ENVIRONMENT.</em></h2>
          </div>
          <p>From 10,000 sq. ft. spaces to projects approaching 1 million sq. ft., Team LunnArk manages lighting from design approval through manufacturing, supply, inspection, installation and handover.</p>
        </div>
        <div className="application-grid reveal">
          {applications.map((item, i) => (
            <a href="#contact" key={item}><span>0{i + 1}</span><strong>{item}</strong><b>↗</b></a>
          ))}
        </div>
      </section>

      <section id="studio" className="studio section-dark">
        <div className="section-index">05 / THE STUDIO</div>
        <div className="studio-copy reveal">
          <p className="eyebrow">DESIGN / ENGINEERING / MANUFACTURING / QUALITY</p>
          <h2>FROM IDEA<br />TO <span>LIGHT.</span></h2>
          <p>
            A vertically connected process where materials, optics, fabrication, assembly,
            testing and installation move together under one LunnArk standard.
          </p>
        </div>
        <div className="process-grid reveal">
          {["IDEA", "DESIGN", "ENGINEERING", "FABRICATION", "ASSEMBLY", "QUALITY"].map((item, i) => (
            <div className="process-item" key={item}><span>0{i + 1}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section id="projects" className="projects section-light">
        <div className="section-index">06 / PROJECTS</div>
        <div className="section-heading reveal">
          <div><p className="eyebrow">SELECTED WORK</p><h2>LIGHTING,<br /><em>IN CONTEXT.</em></h2></div>
          <p>Wipro, Walmart, Boeing, Cognizant, HSBC, Wells Fargo, Microsoft, Infosys and more across India and international markets.</p>
        </div>
        <div className="project-list">
          {projects.map(([number, name, location, copy]) => (
            <a className="project-row reveal" href="https://www.lunnark.com/projects" key={number}>
              <span>{number}</span>
              <strong>{name}</strong>
              <small>{location}</small>
              <p>{copy}</p>
              <b>VIEW PROJECT ↗</b>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="origin section-dark">
        <div className="section-index">07 / ABOUT LUNNARK</div>
        <div className="origin-grid">
          <div>
            <p className="eyebrow">BORN IN BENGALURU / MADE IN INDIA</p>
            <h2>ENGINEERED HERE.<br /><em>DESIGNED FOR THE WORLD.</em></h2>
            <p className="origin-body">
              LunnArk is a pioneering brand by Vtech Biotron Private Limited.
              The team brings more than a decade of LED product development, innovation and project execution,
              with a strong focus on customization, sustainability and design.
            </p>
          </div>
          <div className="credential-panel">
            <div><strong>20,000+</strong><span>SQ. FT. DESIGN & MANUFACTURING FACILITY</span></div>
            <div><strong>50,000+</strong><span>SQ. FT. FACTORY WORKSPACE EXPANSION RECORDED IN 2022</span></div>
            <div><strong>4</strong><span>KEY MANAGEMENT / QUALITY CERTIFICATIONS</span></div>
          </div>
        </div>
        <div className="cert-strip">
          <span>ISO 9001:2015</span><span>ISO 14001:2015</span><span>ISO 45001:2018</span><span>BIS CERTIFICATIONS</span><span>DESIGN PATENTS</span>
        </div>
      </section>

      <section id="resources" className="journal-section section-light">
        <div className="section-index">08 / KNOWLEDGE</div>
        <div className="section-heading reveal">
          <div><p className="eyebrow">IDEAS / PROJECTS / TECHNOLOGY</p><h2>EXPLORE THE<br /><em>WORLD OF LIGHT.</em></h2></div>
          <a className="dark-link" href="https://www.lunnark.com/resources">View resources ↗</a>
        </div>
        <div className="journal-grid">
          {journal.map(([tag, title, copy], i) => (
            <a className="journal-card reveal" href="https://www.lunnark.com/blogs" key={tag}>
              <div className="journal-art"><span>0{i + 1}</span><i /></div>
              <p>{tag}</p><h3>{title}</h3><small>{copy}</small><b>READ MORE ↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="scene-stage section-dark">
        <div className="section-index">09 / LIGHT AS OBJECT</div>
        <div className="scene-copy reveal">
          <p className="eyebrow">INTERACTIVE STUDY</p>
          <h2>LIGHT<br /><em>IN MOTION.</em></h2>
          <p>Explore the future of product-scale lighting interactions, material studies and 3D configuration.</p>
        </div>
        <LightingScene />
      </section>

      <section id="contact" className="contact contact-premium section-mid">
        <div className="section-index">10 / YOUR PROJECT</div>
        <div className="contact-main reveal">
          <p className="eyebrow">PROJECT SUPPORT / CUSTOMIZATION / SPECIFICATION</p>
          <h2>WHAT WILL<br /><em>YOU LIGHT?</em></h2>
          <p className="contact-lead">Tell us about the space, the ambition and the performance you need. Team LunnArk can help move the idea from concept to manufactured luminaire.</p>
          <div className="contact-actions">
            <a className="button button-light" href="mailto:sales@lunnark.com?subject=LunnArk%20Project%20Enquiry">Start a Project ↗</a>
            <a className="text-link" href="tel:18008902146">Call 1800 890 2146</a>
          </div>
        </div>
        <footer className="site-footer">
          <div><strong>LUNNARK</strong><span>LIGHT, SCULPTED.</span></div>
          <div><span>#40, 3rd Floor, 2nd Main Road</span><span>Rajajinagar Industrial Town, Bengaluru 560010</span></div>
          <div><a href="mailto:info@lunnark.com">info@lunnark.com</a><a href="mailto:sales@lunnark.com">sales@lunnark.com</a></div>
          <div><span>© 2026 LunnArk®</span><a href="https://www.lunnark.com">Lunnark.com ↗</a></div>
        </footer>
      </section>
    </main>
  );
}
