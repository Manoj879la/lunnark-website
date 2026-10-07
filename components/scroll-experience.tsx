"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollExperience() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) =>
        gsap.fromTo(el,{y:55,opacity:0},{y:0,opacity:1,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 82%",once:true}})
      );
      gsap.utils.toArray<HTMLElement>(".parallax-light").forEach((el) =>
        gsap.to(el,{yPercent:-18,ease:"none",scrollTrigger:{trigger:el,start:"top bottom",end:"bottom top",scrub:1}})
      );
    },root);
    return () => ctx.revert();
  },[]);
  return <div ref={root} aria-hidden="true" />;
}
