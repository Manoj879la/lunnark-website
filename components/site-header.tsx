"use client";

import { useState } from "react";

export default function SiteHeader(){
  const [open,setOpen]=useState(false);
  return <header className="site-header">
    <a className="site-logo" href="/"><span>LUNN</span><b>A</b><span>RK</span><sup>®</sup></a>
    <nav className="desktop-nav">
      <a href="/">Home</a><a href="/bespoke">Bespoke</a>
      <div className="site-drop"><button>Products <i>⌄</i></button><div>
        <a href="/all">All</a><a href="/all/decorative">Decorative</a><a href="/all/functional">Functional</a><a href="/all/kinetic">Kinetic</a><a href="/all/mounting">Mounting</a>
      </div></div>
      <div className="site-drop"><button>Projects <i>⌄</i></button><div><a href="/projects">All Projects</a><a href="/video_gallery">Video Gallery</a></div></div>
      <div className="site-drop"><button>Resources <i>⌄</i></button><div><a href="/resources">Catalogue</a><a href="/resources">Brochures</a><a href="/patents">Patents</a><a href="/make_in_india">Make in India</a></div></div>
      <a href="/sustainability">Sustainability</a><a href="/blogs">Blogs</a>
      <div className="site-drop"><button>About Us <i>⌄</i></button><div><a href="/about">About Lunnark</a><a href="/news-events">News &amp; Events</a></div></div>
    </nav>
    <a className="site-contact" href="/contact_us">Contact Us</a>
    <button className="site-menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?"×":"☰"}</button>
    {open && <div className="mobile-nav">
      <a href="/">Home</a><a href="/bespoke">Bespoke</a><a href="/all">Products</a><a href="/projects">Projects</a><a href="/resources">Resources</a><a href="/sustainability">Sustainability</a><a href="/blogs">Blogs</a><a href="/about">About Us</a><a href="/contact_us">Contact Us</a>
    </div>}
  </header>
}