"use client";
import { useEffect, useRef } from "react";

export function LightOrb() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 18;
      const y = (event.clientY / window.innerHeight - 0.5) * 18;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node.style.transform = `translate3d(${x}px,${y}px,0)`;
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div ref={root} className="orb-wrap" aria-hidden="true">
      <div className="orb halo-outer" />
      <div className="orb halo-mid" />
      <div className="orb halo-inner" />
      <div className="orb core" />
      <div className="orb specular" />
    </div>
  );
}
