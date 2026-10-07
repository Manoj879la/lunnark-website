"use client";

import { useEffect, useState } from "react";

const heroSlides = [
  {
    image:"https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png",
    title:"Cosmic Dome",
    text:"The Cosmic Dome Linio luminaire stands out as a unique masterpiece in the realm of perforated dome lighting. This extraordinary fixture combines direct and indirect lighting to create a stunning visual effect, enhanced by designer shapes.",
    href:"/products/cosmic-dome"
  },
  {
    image:"https://www.lunnark.com/assets/images/home/new-products/AO19_Acous_Disk.png",
    title:"Echodisk",
    text:"Echodisk is a designer acoustic luminaire with its shape resembling a disk from our collection of acoustic pendant lights. The housing is made of acoustic shade connected to create a homogenous appearance.",
    href:"/all"
  },
  {
    image:"https://www.lunnark.com/assets/images/home/new-products/DS-64-Bubble.png",
    title:"Bubble",
    text:"The bubble is a customized luminaire with its shape resembling a set of bubbles floating from our collection of floor mount lights. The housing is fabricated from rolled aluminium and a pair of frosted glass globes.",
    href:"/all"
  },
  {
    image:"https://www.lunnark.com/assets/images/home/new-products/AO10_Acous_K.png",
    title:"Conio",
    text:"Conio is a suspended luminaire composed of an acoustic housing with powder-coated outer body finish. Stretch fabric or PMMA diffusers are used to provide spotless and glare-free light distribution.",
    href:"/all"
  }
];

const products=[
  ["Cosmic Dome","Decorative / Technical","https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png","/products/cosmic-dome"],
  ["Echodisk","Acoustic / Pendant","https://www.lunnark.com/assets/images/home/new-products/AO19_Acous_Disk.png","/all"],
  ["Bubble","Fabricated / Floor","https://www.lunnark.com/assets/images/home/new-products/DS-64-Bubble.png","/all"],
  ["Conio","Acoustic / Suspended","https://www.lunnark.com/assets/images/home/new-products/AO10_Acous_K.png","/all"]
];

const blogs=[
  ["03-09-2024","Global Reach: How Our LED Solutions Are Shaping Industries Worldwide"],
  ["02-09-2024","LED Lighting in Healthcare: Improving Patient and Staff Wellbeing"],
  ["30-08-2024","Designing the Perfect Interior Lighting Scheme with LEDs"],
  ["27-08-2024","Case Study: LED Lighting Solutions for a Major Industrial Complex"]
];

function Header(){
  return <header className="clone-header">
    <a className="clone-logo" href="/"><span>LUNN</span><b>A</b><span>RK</span><sup>®</sup></a>
    <nav>
      <a href="/">Home</a>
      <a href="/bespoke">Bespoke</a>
      <div className="nav-drop"><button>Products <i>⌄</i></button><div><a href="/all">All</a><a href="/all/decorative">Decorative</a><a href="/all/functional">Functional</a><a href="/all/kinetic">Kinetic</a><a href="/all/mounting">Mounting</a></div></div>
      <div className="nav-drop"><button>Projects <i>⌄</i></button><div><a href="/projects">All Projects</a><a href="/video_gallery">Video Gallery</a></div></div>
      <div className="nav-drop"><button>Resources <i>⌄</i></button><div><a href="/resources">Catalogue</a><a href="/resources">Brochures</a><a href="/patents">Patents</a><a href="/make_in_india">Make in India</a></div></div>
      <a href="/sustainability">Sustainability</a>
      <a href="/blogs">Blogs</a>
      <div className="nav-drop"><button>About Us <i>⌄</i></button><div><a href="/about">About Lunnark</a><a href="/news-events">News &amp; Events</a></div></div>
    </nav>
    <a className="clone-contact" href="/contact_us">Contact Us</a>
    <a className="mobile-menu" aria-label="Menu" href="/all">☰</a>
  </header>
}

function Footer(){
 return <footer className="clone-footer">
   <div className="footer-top">
     <div className="footer-brand">
       <a className="clone-logo footer-logo" href="/"><span>LUNN</span><b>A</b><span>RK</span><sup>®</sup></a>
       <p>LIGHTING BEYOND SPACES</p>
       <div className="socials"><a href="#">f</a><a href="#">in</a><a href="#">◎</a><a href="#">p</a></div>
     </div>
     <div><h4>Quick Links</h4><a href="/all">Products</a><a href="/resources">Resources</a><a href="/contact_us">Contact Us</a><a href="https://www.lunnark.com/terms">Terms &amp; Conditions</a><a href="https://www.lunnark.com/privacy">Privacy</a></div>
     <div><h4>Contact</h4><p>1800 890 2146</p><p>080 - 23507469</p><p>info@lunnark.com</p><p>info@vtechbiotron.com</p><p>sales@lunnark.com</p></div>
     <div><h4>Lunnark Corporate Office</h4><p>#40, 3rd Floor, 2nd Main road,<br/>Rajajnagar Industrial Town,<br/>Magadi Main road, Bengaluru,<br/>Karnataka 560010</p></div>
   </div>
   <div className="footer-bottom"><span>© 2025 LunnArk® . All Rights Reserved</span><span>LIGHTING BEYOND SPACES</span></div>
 </footer>
}

export default function Home(){
 const [slide,setSlide]=useState(0);
 useEffect(()=>{const t=setInterval(()=>setSlide(s=>(s+1)%heroSlides.length),5000);return()=>clearInterval(t)},[]);
 const current=heroSlides[slide];
 return <main className="lunnark-clone">
   <Header/>

   <section className="home-hero">
     <div className="hero-image"><img src={current.image} alt={current.title}/></div>
     <div className="hero-shade"/>
     <div className="hero-copy">
       <span>NEW ARRIVALS</span>
       <h1>{current.title}</h1>
       <p>{current.text}</p>
       <a href={current.href}>View More <b>→</b></a>
     </div>
     <div className="hero-arrows">
       <button aria-label="Previous" onClick={()=>setSlide((slide-1+heroSlides.length)%heroSlides.length)}>❮</button>
       <button aria-label="Next" onClick={()=>setSlide((slide+1)%heroSlides.length)}>❯</button>
     </div>
     <div className="hero-dots">{heroSlides.map((x,i)=><button key={x.title} className={i===slide?"active":""} onClick={()=>setSlide(i)} aria-label={x.title}/>)}</div>
   </section>

   <section className="new-arrivals">
     <div className="section-heading"><span>NEW ARRIVALS</span><h2>Featured Luminaires</h2><p>Explore our latest lighting solutions, designed to elevate spaces with exceptional quality and functionality.</p></div>
     <div className="product-grid">
       {products.map(([name,type,image,href])=><a className="product-card" href={href} key={name}>
         <div className="product-photo"><img src={image} alt={name}/><span>View More <b>→</b></span></div>
         <small>{type}</small><h3>{name}</h3>
       </a>)}
     </div>
   </section>

   <section className="collections-section">
     <div className="section-heading centered"><span>EXPLORE OUR COLLECTIONS</span><h2>Explore our collections</h2></div>
     <div className="collections-grid">
       {["Decorative","Functional","Kinetic","Mounting"].map((x,i)=><a href="/all" key={x} className={"collection c"+i}><span>0{i+1}</span><h3>{x}</h3><b>Explore →</b></a>)}
     </div>
   </section>

   <section className="brand-section">
     <div className="brand-visual"><div className="rings"/><img src="https://www.lunnark.com/assets/images/home/new-products/AO10_Acous_K.png" alt="LunnArk lighting"/></div>
     <div className="brand-copy"><span>ABOUT LUNNARK</span><h2>Lunnark is a global lighting brand born in Bengaluru.</h2><p>LunnArk®️, a pioneering brand by Vtech Biotron Private Limited, offers cutting-edge, integrated LED lighting solutions distinguished by their exceptional design and adherence to benchmark luminaire standards. Our innovative products enhance the visions of architects and lighting designers, providing unparalleled quality and functionality.</p><a href="/about">Learn More <b>→</b></a></div>
   </section>

   <section className="blog-section">
     <div className="section-heading"><span>BLOGS</span><h2>Ideas, inspiration &amp; light</h2><p>Discover our blogs about Lighting designs, creative ideas and unique solutions to your customization preferences.</p></div>
     <div className="blog-grid">{blogs.map(([date,title],i)=><a className="blog-card" href="/blogs" key={title}><div className="blog-image"><img src={products[i%products.length][2]} alt="LunnArk blog"/></div><small>{date}</small><h3>{title}</h3><span>Read More <b>→</b></span></a>)}</div>
     <a className="all-link" href="/blogs">View all blogs →</a>
   </section>

   <section className="contact-strip">
     <div><span>LET'S TALK</span><h2>Have a project in mind?</h2><p>Connect with the LunnArk team for lighting solutions and customization.</p></div>
     <a href="/contact_us">Contact Us <b>→</b></a>
   </section>
   <Footer/>
 </main>
}
