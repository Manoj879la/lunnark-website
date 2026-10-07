"use client";

import { useEffect, useState } from "react";

type Media = { type:"image"|"video"; src:string; title:string };

const defaults: Media[] = [
  {type:"image",src:"https://www.lunnark.com/assets/images/home/new-products/DS-42-Cosmic-Dome-1.png",title:"Cosmic Dome"},
  {type:"image",src:"https://www.lunnark.com/assets/images/home/new-products/AO19_Acous_Disk.png",title:"Echodisk"},
  {type:"image",src:"https://www.lunnark.com/assets/images/home/new-products/DS-64-Bubble.png",title:"Bubble"},
];

export default function Admin() {
  const [media,setMedia]=useState<Media[]>(defaults);
  const [artisans,setArtisans]=useState(["Design & R&D","CNC & Fabrication","Finishing & Powder Coat","LED Integration","Assembly & Testing","Quality & Inspection","Project Installation"]);
  const [emblem,setEmblem]=useState("");
  const [saved,setSaved]=useState(false);

  useEffect(()=>{
    try{
      const m=localStorage.getItem("lunnark-home-media"); if(m) setMedia(JSON.parse(m));
      const a=localStorage.getItem("lunnark-artisans"); if(a) setArtisans(JSON.parse(a));
      const e=localStorage.getItem("lunnark-emblem"); if(e) setEmblem(e);
    }catch{}
  },[]);

  const readFiles=(files:FileList|null)=>{
    if(!files)return;
    Array.from(files).forEach(file=>{
      const reader=new FileReader();
      reader.onload=()=>setMedia(prev=>[...prev,{type:file.type.startsWith("video/")?"video":"image",src:String(reader.result),title:file.name.replace(/\.[^/.]+$/,"")}]);
      reader.readAsDataURL(file);
    });
  };

  const save=()=>{
    localStorage.setItem("lunnark-home-media",JSON.stringify(media));
    localStorage.setItem("lunnark-artisans",JSON.stringify(artisans.filter(Boolean)));
    if(emblem)localStorage.setItem("lunnark-emblem",emblem);
    setSaved(true); setTimeout(()=>setSaved(false),1800);
  };

  return <main className="admin-page">
    <header className="admin-header"><a href="/" className="admin-logo">LUNNARK</a><div><span>CONTENT STUDIO</span><a href="/">VIEW WEBSITE ↗</a></div></header>
    <section className="admin-hero"><span>HOME / CONTENT MANAGEMENT</span><h1>Control the<br/><em>light.</em></h1><p>Update homepage media, video collage, craftsmanship stories and the India section without touching the website code.</p></section>

    <section className="admin-section">
      <div className="admin-title"><span>01 / VIDEO + IMAGE COLLAGE</span><h2>Homepage media</h2><p>Upload images or MP4/WebM videos. The homepage reads this collection dynamically on this browser.</p></div>
      <label className="upload-zone"><input type="file" accept="image/*,video/*" multiple onChange={e=>readFiles(e.target.files)}/><strong>+ Upload images / videos</strong><small>JPG, PNG, WEBP, MP4, WEBM</small></label>
      <div className="admin-media-grid">{media.map((m,i)=><article key={i}><div>{m.type==="video"?<video src={m.src} controls muted/>:<img src={m.src} alt={m.title}/>}</div><input value={m.title} onChange={e=>setMedia(x=>x.map((v,n)=>n===i?{...v,title:e.target.value}:v))}/><button onClick={()=>setMedia(x=>x.filter((_,n)=>n!==i))}>REMOVE</button></article>)}</div>
    </section>

    <section className="admin-section admin-blue">
      <div className="admin-title"><span>02 / ATMANIRBHAR BHARAT</span><h2>Approved emblem</h2><p>Upload the approved State Emblem asset supplied by LunnArk. The homepage will use this file in the Atmanirbhar Bharat section.</p></div>
      <label className="upload-zone light"><input type="file" accept="image/*,.svg" onChange={e=>{const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>setEmblem(String(r.result));r.readAsDataURL(f)}}/><strong>+ Upload approved Lion Emblem</strong><small>SVG / PNG recommended</small></label>
      {emblem && <div className="emblem-preview"><img src={emblem} alt="Uploaded emblem"/></div>}
    </section>

    <section className="admin-section">
      <div className="admin-title"><span>03 / CRAFTSMANSHIP OF LIGHT</span><h2>Artisans & specialists</h2><p>Edit the people and disciplines shown in the moving craftsmanship strip.</p></div>
      <div className="artisan-editor">{artisans.map((x,i)=><div key={i}><span>0{i+1}</span><input value={x} onChange={e=>setArtisans(a=>a.map((v,n)=>n===i?e.target.value:v))}/><button onClick={()=>setArtisans(a=>a.filter((_,n)=>n!==i))}>×</button></div>)}</div>
      <button className="add-row" onClick={()=>setArtisans(a=>[...a,"New Specialist"])}>+ ADD SPECIALIST</button>
    </section>

    <div className="admin-save"><button onClick={save}>{saved?"SAVED ✓":"SAVE HOMEPAGE CONTENT"}</button><span>Content is stored locally in this browser. A production cloud CMS/storage can be connected next.</span></div>
  </main>
}
