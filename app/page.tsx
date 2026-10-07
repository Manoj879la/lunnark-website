"use client";

import { useEffect, useState } from "react";

const defaultMedia = [
  { type: "image", src: "https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png", title: "Cosmic Dome" },
  { type: "image", src: "https://www.lunnark.com/assets/images/home/new-products/AO19_Acous_Disk.png", title: "Echodisk" },
  { type: "image", src: "https://www.lunnark.com/assets/images/home/new-products/DS-64-Bubble.png", title: "Bubble" },
];

const products = [
  ["COSMIC DOME", "Decorative / Technical", "https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png", "/products/cosmic-dome"],
  ["ECHODISK", "Acoustic / Pendant", "https://www.lunnark.com/assets/images/home/new-products/AO19_Acous_Disk.png", "#contact"],
  ["BUBBLE", "Fabricated / Floor", "https://www.lunnark.com/assets/images/home/new-products/DS-64-Bubble.png", "#contact"],
  ["CONIO", "Acoustic / Suspended", "https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png", "#contact"],
];

const collections = ["Decorative", "Functional", "Kinetic", "Mounting"];
const applications = ["Corporate", "Hospitality", "Retail", "Healthcare", "Education", "Residential"];

export default function Home() {
  const [media, setMedia] = useState(defaultMedia);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lunnark-home-media");
      if (saved) setMedia(JSON.parse(saved));
    } catch {}
  }, []);

  return (
    <main className="lunnark-blue-site">
      <header className="brand-nav">
        <a className="brand-logo" href="/">LUNNARK</a>
        <nav className="brand-nav-links">
          <a href="/">Home</a>
          <a href="/bespoke">Bespoke</a>
          <details><summary>Products</summary><div><a href="https://www.lunnark.com/all">All</a>{collections.slice(0,3).map(x=><a key={x} href="#collections">{x}</a>)}</div></details>
          <details><summary>Projects</summary><div><a href="https://www.lunnark.com/projects">All Projects</a><a href="#video-gallery">Video Gallery</a></div></details>
          <details><summary>Resources</summary><div><a href="https://www.lunnark.com/resources">Catalogue</a><a href="https://www.lunnark.com/resources">Brochures</a><a href="/make-in-india">Make in India</a></div></details>
          <a href="https://www.lunnark.com/sustainability">Sustainability</a>
          <a href="https://www.lunnark.com/blogs">Blogs</a>
          <details><summary>About Us</summary><div><a href="https://www.lunnark.com/about">About Lunnark</a><a href="https://www.lunnark.com/news-events">News & Events</a></div></details>
        </nav>
        <a className="nav-contact" href="/contact_us">Contact Us</a>
        <button className="nav-menu" aria-label="Menu">☰</button>
      </header>

      <section className="blue-hero">
        <div className="hero-copy">
          <span className="blue-eyebrow">LIGHT INNOVATIONS AT ITS BEST</span>
          <h1>LIGHTING<br /><strong>THAT SHAPES.</strong></h1>
          <p>LunnArk creates innovative, integrated LED lighting solutions where design, engineering and manufacturing work as one.</p>
          <div className="hero-buttons"><a href="#products">Explore Products ↗</a><a href="/bespoke">Create Bespoke ↗</a></div>
        </div>
        <div className="hero-product">
          <img src={media[0]?.src || defaultMedia[0].src} alt={media[0]?.title || "LunnArk lighting"} />
          <div className="hero-orbit" />
          <span>DESIGNED + MANUFACTURED IN BENGALURU</span>
        </div>
      </section>

      <section id="video-gallery" className="video-collage">
        <div className="compact-heading">
          <span>01 / EXPERIENCE LUNNARK</span>
          <h2>LIGHT. <em>IN MOTION.</em></h2>
          <p>A living collage of luminaires, spaces, materials and the people behind the light.</p>
        </div>
        <div className="video-grid">
          {media.slice(0,4).map((item, i) => (
            <div className={"video-tile tile-"+(i+1)} key={item.src + i}>
              {item.type === "video" ? <video src={item.src} autoPlay muted loop playsInline /> : <img src={item.src} alt={item.title || "LunnArk"} />}
              <span>0{i+1} / {item.title || "LUNNARK"}</span>
            </div>
          ))}
          <div className="video-center"><b>PLAY / EXPLORE</b><span>VIDEO COLLAGE</span></div>
        </div>
      </section>

      <section className="compact-intro">
        <span>02 / THE BRAND</span>
        <div><h2>LIGHTING IS MORE<br />THAN <em>ILLUMINATION.</em></h2><p>As manufacturers, we understand every luminaire as a blend of precision engineering and artistic vision—designed to shape spaces, experiences and wellbeing.</p><a href="https://www.lunnark.com/about">Discover LunnArk ↗</a></div>
      </section>

      <section id="products" className="products-blue">
        <div className="compact-heading light">
          <span>03 / NEW ARRIVALS</span><h2>DESIGNED FOR<br /><em>ARCHITECTURE.</em></h2>
        </div>
        <div className="product-strip">
          {products.map(([name,type,img,href], i) => <a className="product-card-blue" href={href} key={name}><div><img src={img} alt={name}/><span>0{i+1}</span></div><small>{type}</small><h3>{name}</h3><b>VIEW MORE ↗</b></a>)}
        </div>
        <a className="blue-outline" href="https://www.lunnark.com/all">VIEW ALL PRODUCTS ↗</a>
      </section>

      <section id="collections" className="collections-compact">
        <div className="compact-heading"><span>04 / COLLECTIONS</span><h2>ONE BRAND.<br /><em>MANY LIGHTING LANGUAGES.</em></h2></div>
        <div className="collection-row">{collections.map((x,i)=><a href="https://www.lunnark.com/all" key={x}><span>0{i+1}</span><strong>{x}</strong><b>↗</b></a>)}</div>
      </section>

      <section className="atmanirbhar">
        <div className="atmanirbhar-emblem">
          <div className="emblem-placeholder">
            <span>INDIA</span>
            <strong>ॐ</strong>
            <small>APPROVED<br />EMBLEM ASSET</small>
          </div>
        </div>
        <div className="atmanirbhar-copy">
          <span className="blue-eyebrow">05 / ATMANIRBHAR BHARAT</span>
          <h2>MADE IN INDIA.<br /><em>MADE BY INDIANS.</em></h2>
          <p>LunnArk manufactures its product line in Bengaluru, building lighting solutions through local sourcing, engineering, innovation, manufacturing, service and support.</p>
          <p>Our commitment to the local ecosystem is central to our journey toward a more self-reliant lighting industry.</p>
          <a href="https://www.lunnark.com/make_in_india">Discover Make in India ↗</a>
        </div>
        <div className="atmanirbhar-stats"><div><strong>20,000+</strong><span>SQ. FT. DESIGN & MANUFACTURING</span></div><div><strong>50,000+</strong><span>SQ. FT. WORKSPACE EXPANSION RECORDED IN 2022</span></div><div><strong>10+</strong><span>YEARS OF LED PRODUCT DEVELOPMENT</span></div></div>
      </section>

      <section className="craftsmanship">
        <div className="craft-head"><span>06 / CRAFTSMANSHIP OF LIGHT</span><h2>ENGINEERED BY<br /><em>PEOPLE.</em></h2><p>Behind every luminaire is a team of designers, engineers, fabricators, technicians and quality professionals turning material into light.</p></div>
        <div className="craft-slider">
          {["Design & R&D","CNC & Fabrication","Finishing & Powder Coat","LED Integration","Assembly & Testing","Quality & Inspection","Project Installation"].map((x,i)=><article key={x}><div className="craft-image" style={{backgroundImage:"url(https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png)"}}><span>0{i+1}</span></div><strong>{x}</strong><small>TEAM LUNNARK</small></article>)}
        </div>
        <div className="artisan-marquee"><div>{["Designers","Lighting Engineers","Mechanical Engineers","CNC Fabricators","Powder Coating Specialists","LED Technicians","Assemblers","Quality Engineers","Installation Teams"].map(x=><span key={x}>{x} <i>✦</i></span>)}</div></div>
      </section>

      <section className="applications-blue">
        <div className="compact-heading light"><span>07 / APPLICATIONS</span><h2>LIGHT FOR<br /><em>EVERY SPACE.</em></h2></div>
        <div className="application-grid">{applications.map((x,i)=><a href="/contact_us" key={x}><span>0{i+1}</span><strong>{x}</strong><b>↗</b></a>)}</div>
      </section>

      <section className="dashboard-promo">
        <div><span>08 / LUNNARK CONTENT STUDIO</span><h2>A WEBSITE THAT<br /><em>EVOLVES WITH YOU.</em></h2><p>Manage homepage images, video collage items, banners, craftsmanship stories and campaign content from one visual dashboard.</p><a href="/admin">OPEN CONTENT DASHBOARD ↗</a></div>
        <div className="dashboard-ui"><span>LIVE CONTENT</span><div/><div/><div/><div/></div>
      </section>

      <section id="contact" className="blue-final"><span>09 / YOUR PROJECT</span><h2>WHAT WILL<br /><strong>YOU LIGHT?</strong></h2><p>Tell us about your space, design intent and performance requirements.</p><a href="mailto:sales@lunnark.com?subject=LunnArk%20Project%20Enquiry">START A PROJECT ↗</a><footer><span>LUNNARK / LIGHT INNOVATIONS AT ITS BEST</span><span>1800 890 2146</span><span>sales@lunnark.com</span><span>BENGALURU / INDIA</span></footer></section>
    </main>
  );
}
