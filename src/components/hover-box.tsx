"use client";

import { useRef, type ElementRef, type PointerEvent } from "react";

export default function HoverBox() {
  const boxRef = useRef<ElementRef<"div">>(null);

  const updatePosition = (event: PointerEvent<HTMLDivElement>) => {
    if (boxRef.current) {
      // because we're starting in the middle
      const x = event.nativeEvent.offsetX - boxRef.current.offsetWidth / 2;
      const y = event.nativeEvent.offsetY - boxRef.current.offsetHeight / 2;

      boxRef.current.style.setProperty("--x", `${x}px`);
      boxRef.current.style.setProperty("--y", `${y}px`);
    }
  };

  return (
    <div
      className="hover-box"
      ref={boxRef}
      onPointerMove={updatePosition}
      onPointerOut={updatePosition}
    ></div>
  );
}
