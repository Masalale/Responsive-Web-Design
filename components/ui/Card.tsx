"use client";

import { useRef, TouchEvent, useState } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [isTouchHover, setIsTouchHover] = useState(false);

  const handleTouchStart = (e: TouchEvent) => {
    setIsTouchHover(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsTouchHover(false), 300);
  };

  return (
    <article
      ref={cardRef}
      className={`card ${isTouchHover ? "touch-hover" : ""} ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </article>
  );
}
