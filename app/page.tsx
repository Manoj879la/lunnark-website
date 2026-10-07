"use client";

import { useEffect, useState } from "react";

type Slide = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
  cta: string;
  href: string;
};

const slides: Slide[] = [
  {
    eyebrow: "01 / ATMANIRBHAR BHARAT",
    title: "Strength through",
    accent: "innovation.",
    description:
      "Local solutions for a stronger tomorrow — design, technology and manufacturing brought together in Bengaluru.",
    image: "/media/atmanirbhar.avif",
    cta: "Discover our story",
    href: "https://www.lunnark.com/make_in_india",
  },
  {
    eyebrow: "02 / CRAFTSMANSHIP OF LIGHT",
    title: "Designed by people.",
    accent: "Made with precision.",
    description:
      "From concept and prototyping to fabrication, LED integration, finishing and testing — every luminaire passes through skilled hands.",
    image: "/media/craftsmanship.avif",
    cta: "Explore manufacturing",
    href: "https://www.lunnark.com/about",
  },
  {
    eyebrow: "03 / NEW ARRIVALS",
    title: "Light that becomes",
    accent: "architecture.",
    description:
      "Meet Cosmic Dome — a perforated dome luminaire combining direct and indirect light to create a distinctive spatial effect.",
    image:
      "https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png",
    cta: "View Cosmic Dome",
    href: "/products/cosmic-dome",
  },
];

const products = [
  {
    number: "01",
    name: "Cosmic Dome",
    type: "Decorative / Technical",
    description:
      "A perforated dome luminaire combining direct and indirect lighting with designer forms.",
    image:
      "https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png",
    href: "/products/cosmic-dome",
  },
  {
    number: "02",
    name: "Echodisk",
    type: "Acoustic / Pendant",
    description:
      "A designer acoustic luminaire shaped as a disk, with a connected acoustic housing for a homogeneous appearance.",
    image:
      "https://www.lunnark.com/assets/images/home/new-products/AO19_Acous_Disk.png",
    href: "https://www.lunnark.com/all",
  },
  {
    number: "03",
    name: "Bubble",
    type: "Fabricated / Floor",
    description:
      "A customized floor luminaire formed from rolled aluminium and frosted glass globes.",
    image:
      "https://www.lunnark.com/assets/images/home/new-products/DS-64-Bubble.png",
    href: "https://www.lunnark.com/all",
  },
  {
    number: "04",
    name: "Conio",
    type: "Acoustic / Suspended",
    description:
      "An acoustic suspended luminaire using a powder-coated outer body and stretch fabric or PMMA diffusers.",
    image:
      "https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png",
    href: "https://www.lunnark.com/all",
  },
];

const collections = ["Decorative", "Functional", "Kinetic", "Mounting"];

const applications = [
  "Corporate",
  "Hospitality",
  "Retail",
  "Healthcare",
  "Education",
  "Residential",
];

const projects = [
  ["Walmart", "Bengaluru + Chennai"],
  ["Boeing India", "Chennai"],
  ["Cognizant", "Hyderabad"],
  ["Wipro", "Gurugram"],
  ["HSBC Software", "Pune"],
  ["Wells Fargo", "Bangalore"],
];

const blogs = [
  ["Global Reach", "How our LED solutions are shaping industries worldwide", "03.09.2024"],
  ["Healthcare", "LED lighting and the wellbeing of patients and staff", "02.09.2024"],
  ["Interior", "Designing the perfect interior lighting scheme with LEDs", "30.08.2024"],
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      5200
    );
    return () => window.clearInterval(timer);
  }, []);

  const next = () => setActive((current) => (current + 1) % slides.length);
  const previous = () =>
    setActive((current) => (current - 1 + slides.length) % slides.length);

  return (
    <main className="fresh-site">
      <header className="site-header">
        <a href="/" className="wordmark" aria-label="LunnArk home">
          LUNN<span>A</span>RK<sup>®</sup>
        </a>

        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          <a href="/">Home</a>
          <a href="/bespoke">Bespoke</a>
          <a href="https://www.lunnark.com/all">Products</a>
          <a href="https://www.lunnark.com/projects">Projects</a>
          <a href="https://www.lunnark.com/resources">Resources</a>
          <a href="https://www.lunnark.com/sustainability">Sustainability</a>
          <a href="https://www.lunnark.com/blogs">Blogs</a>
          <a href="https://www.lunnark.com/about">About Us</a>
        </nav>

        <a className="header-contact" href="/contact_us">
          Contact <span>↗</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <i />
          <i />
        </button>
      </header>

      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />

        <div className="hero-copy">
          <p className="kicker">LIGHT INNOVATIONS AT ITS BEST</p>
          <h1>
            LIGHT
            <br />
            <span>BEYOND</span>
            <br />
            <em>SPACES.</em>
          </h1>
          <p className="hero-description">
            LunnArk creates integrated LED lighting solutions where design,
            engineering and manufacturing work as one.
          </p>
          <div className="hero-actions">
            <a href="https://www.lunnark.com/all">Explore products <b>↗</b></a>
            <a href="/bespoke">Build bespoke <b>↗</b></a>
          </div>
        </div>

        <div className="hero-object">
          <div className="hero-object-ring" />
          <img
            src="https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png"
            alt="LunnArk Cosmic Dome luminaire"
          />
          <div className="hero-object-tag">
            <span>01</span>
            <small>DESIGNED + MANUFACTURED</small>
            <strong>BENGALURU / INDIA</strong>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span>01 — 06</span>
        </div>
      </section>

      <section className="intro">
        <div className="section-index">01 / THE BRAND</div>
        <div className="intro-content">
          <p className="eyebrow">BORN IN BENGALURU</p>
          <h2>
            Lighting is not just
            <br />
            illumination. It is
            <br />
            <em>experience.</em>
          </h2>
          <p className="intro-body">
            LunnArk is a global lighting brand born in Bengaluru and a
            pioneering brand by Vtech Biotron Private Limited. We create
            integrated LED solutions for architects and lighting designers,
            combining design, technology, engineering and benchmark luminaire
            standards.
          </p>
          <a className="text-link" href="https://www.lunnark.com/about">
            Discover LunnArk <span>↗</span>
          </a>
        </div>
        <div className="intro-side">
          <span>DESIGN</span>
          <span>ENGINEERING</span>
          <span>MANUFACTURING</span>
          <span>TECHNOLOGY</span>
        </div>
      </section>

      <section className="session" id="session">
        <div className="session-top">
          <div>
            <p className="eyebrow">02 / VISUAL SESSION</p>
            <h2>Stories in <em>light.</em></h2>
          </div>
          <p>
            A moving triptych of the ideas, people and products behind
            LunnArk.
          </p>
        </div>

        <div className="session-window">
          <div className="session-track">
            {slides.map((slide, index) => {
              const distance = (index - active + slides.length) % slides.length;
              const x = distance === 0 ? 0 : distance === 1 ? 103 : -103;
              return (
                <article
                  className={
                    distance === 0
                      ? "session-slide active"
                      : "session-slide"
                  }
                  key={slide.title}
                  style={{
                    transform: `translate3d(${x}%,0,0) scale(${
                      distance === 0 ? 1 : 0.86
                    })`,
                    opacity: distance === 0 ? 1 : 0.48,
                    zIndex: distance === 0 ? 3 : 1,
                  }}
                >
                  <img src={slide.image} alt={slide.title} />
                  <div className="session-overlay" />
                  <div className="session-caption">
                    <span>{slide.eyebrow}</span>
                    <h3>
                      {slide.title}
                      <br />
                      <em>{slide.accent}</em>
                    </h3>
                    <p>{slide.description}</p>
                    <a href={slide.href}>{slide.cta} ↗</a>
                  </div>
                </article>
              );
            })}
          </div>

          <button className="session-arrow left" onClick={previous} aria-label="Previous slide">
            ←
          </button>
          <button className="session-arrow right" onClick={next} aria-label="Next slide">
            →
          </button>
        </div>

        <div className="session-controls">
          <div className="session-progress">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                onClick={() => setActive(index)}
                className={index === active ? "selected" : ""}
                aria-label={`Show slide ${index + 1}`}
              >
                <span>0{index + 1}</span>
                <i />
              </button>
            ))}
          </div>
          <span>RIGHT → LEFT / AUTO PLAY</span>
        </div>
      </section>

      <section className="product-world" id="products">
        <div className="product-heading">
          <div className="section-index light">03 / PRODUCT WORLD</div>
          <h2>
            Objects that
            <br />
            <em>shape space.</em>
          </h2>
          <a href="https://www.lunnark.com/all" className="round-link">
            View all products <span>↗</span>
          </a>
        </div>

        <div className="product-list">
          {products.map((product) => (
            <a className="product-row" href={product.href} key={product.name}>
              <span className="product-number">{product.number}</span>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-meta">
                <small>{product.type}</small>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
              <span className="product-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="collections">
        <div className="section-index">04 / COLLECTIONS</div>
        <div className="collection-intro">
          <p className="eyebrow">ONE BRAND / MANY LANGUAGES</p>
          <h2>
            Four ways
            <br />
            to speak <em>light.</em>
          </h2>
        </div>
        <div className="collection-list">
          {collections.map((collection, index) => (
            <a href="https://www.lunnark.com/all" key={collection}>
              <span>0{index + 1}</span>
              <strong>{collection}</strong>
              <i>↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="bespoke-band">
        <div className="bespoke-image">
          <img
            src="https://www.lunnark.com/assets/images/home/new-products/AO19_Acous_Disk.png"
            alt="LunnArk acoustic lighting"
          />
        </div>
        <div className="bespoke-copy">
          <p className="eyebrow">05 / BESPOKE</p>
          <h2>
            Your idea.
            <br />
            Our <em>craft.</em>
          </h2>
          <p>
            From consultation and design development to prototyping and
            seamless installation, LunnArk builds lighting around your vision.
          </p>
          <div className="process">
            <span><b>01</b> Consultation</span>
            <span><b>02</b> Design development</span>
            <span><b>03</b> Prototyping</span>
            <span><b>04</b> Installation</span>
          </div>
          <a className="text-link" href="/bespoke">
            Start a bespoke project <span>↗</span>
          </a>
        </div>
      </section>

      <section className="projects">
        <div className="section-index light">06 / PROJECTS</div>
        <div className="projects-heading">
          <p className="eyebrow">LIGHTING ACROSS SCALE</p>
          <h2>
            Spaces already
            <br />
            <em>shaped by us.</em>
          </h2>
          <a href="https://www.lunnark.com/projects" className="round-link">
            All projects <span>↗</span>
          </a>
        </div>
        <div className="project-grid">
          {projects.map(([name, location], index) => (
            <a href="https://www.lunnark.com/projects" key={name} className="project-card">
              <span>0{index + 1}</span>
              <strong>{name}</strong>
              <small>{location}</small>
              <i>↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="india">
        <div className="india-copy">
          <p className="eyebrow">07 / MADE IN INDIA</p>
          <h2>
            Designed here.
            <br />
            Made <em>here.</em>
          </h2>
          <p>
            Our design and manufacturing facility in Rajajinagar, Bengaluru
            brings together skilled professionals, local sourcing, engineering
            and product development. LunnArk is committed to building world
            class luminaires while strengthening the local ecosystem.
          </p>
          <div className="india-stats">
            <span><b>20,000+</b> SQ. FT. DESIGN + MANUFACTURING</span>
            <span><b>50,000+</b> SQ. FT. WORKSPACE EXPANSION IN 2022</span>
            <span><b>10+</b> YEARS OF LED PRODUCT DEVELOPMENT</span>
          </div>
          <a className="text-link" href="https://www.lunnark.com/make_in_india">
            Explore Make in India <span>↗</span>
          </a>
        </div>
        <div className="india-mark">
          <span>INDIA</span>
          <strong>INDIA</strong>
          <small>LOCAL SOLUTIONS<br />FOR A STRONGER TOMORROW</small>
        </div>
      </section>

      <section className="applications">
        <div className="section-index">08 / APPLICATIONS</div>
        <div className="applications-heading">
          <p className="eyebrow">ONE SYSTEM / MANY CONTEXTS</p>
          <h2>
            Light for
            <br />
            <em>every space.</em>
          </h2>
        </div>
        <div className="application-list">
          {applications.map((application, index) => (
            <a href="/contact_us" key={application}>
              <span>0{index + 1}</span>
              <strong>{application}</strong>
              <i>↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="journal">
        <div className="section-index light">09 / JOURNAL</div>
        <div className="journal-heading">
          <p className="eyebrow">IDEAS / INSIGHTS / LIGHT</p>
          <h2>
            The LunnArk
            <br />
            <em>journal.</em>
          </h2>
          <a href="https://www.lunnark.com/blogs" className="round-link">
            Read all <span>↗</span>
          </a>
        </div>
        <div className="blog-list">
          {blogs.map(([category, title, date], index) => (
            <a href="https://www.lunnark.com/blogs" key={title}>
              <span>0{index + 1}</span>
              <small>{date} / {category}</small>
              <strong>{title}</strong>
              <i>↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="final-ring" />
        <p className="eyebrow">10 / YOUR PROJECT</p>
        <h2>
          What will you
          <br />
          <em>light?</em>
        </h2>
        <p>
          Tell us about your space, design intent and performance requirements.
        </p>
        <a href="mailto:sales@lunnark.com?subject=LunnArk%20Project%20Enquiry">
          Start a project <span>↗</span>
        </a>
        <footer>
          <span>LUNNARK / LIGHTING BEYOND SPACES</span>
          <span>1800 890 2146</span>
          <span>sales@lunnark.com</span>
          <span>BENGALURU / INDIA</span>
        </footer>
      </section>
    </main>
  );
}
