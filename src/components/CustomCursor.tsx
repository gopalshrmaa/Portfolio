import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const outlineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current!;
    const outline = outlineRef.current!;
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    let raf = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX - 6}px, ${mouseY - 6}px, 0)`;
    };

    const loop = () => {
      outlineX += (mouseX - outlineX) * 0.16;
      outlineY += (mouseY - outlineY) * 0.16;
      outline.style.transform = `translate3d(${outlineX - 16}px, ${outlineY - 16}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const addHover = () => {
      dot.classList.add("cursor-hover");
      outline.classList.add("cursor-hover");
    };
    const removeHover = () => {
      dot.classList.remove("cursor-hover");
      outline.classList.remove("cursor-hover");
    };

    const hoverTargets = document.querySelectorAll("a, button, .stack-card, .hire-btn");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    document.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot pointer-events-none" />
      <div ref={outlineRef} className="custom-cursor-outline pointer-events-none" />
    </>
  );
}
