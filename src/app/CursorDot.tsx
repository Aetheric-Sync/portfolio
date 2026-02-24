"use client";
import React, { useEffect, useRef } from "react";

const CursorDot = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const dot = dotRef.current;
      const shadow = shadowRef.current;
      if (dot && shadow) {
        dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        // Shadow lags behind for trailing effect
        shadow.animate(
          [
            { transform: shadow.style.transform },
            { transform: `translate(${e.clientX + 12}px, ${e.clientY + 12}px)` }
          ],
          { duration: 220, fill: 'forwards' }
        );
        shadow.style.transform = `translate(${e.clientX + 12}px, ${e.clientY + 12}px)`;
      }
    };

    // Hover effect for buttons/links
    const handlePointerOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"], input[type="button"], input[type="submit"]')) {
        if (dotRef.current) {
          dotRef.current.style.transform += ' scale(2.2)';
          dotRef.current.style.boxShadow = '0 0 32px 12px #4DB5FF99, 0 0 0 24px #4DB5FF22';
        }
      }
    };
    const handlePointerOut = (e: Event) => {
      if (dotRef.current) {
        // Remove scale and restore shadow
        dotRef.current.style.transform = dotRef.current.style.transform.replace(/ scale\([^)]*\)/, '');
        dotRef.current.style.boxShadow = '0 0 16px 4px #4DB5FF55';
      }
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('pointerover', handlePointerOver);
    document.addEventListener('pointerout', handlePointerOut);
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
    };
  }, []);

  return (
    <>
      <div
        ref={shadowRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: 'rgba(77,181,255,0.18)',
          pointerEvents: 'none',
          zIndex: 9998,
          filter: 'blur(8px)',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.22s cubic-bezier(.17,.67,.83,.67)',
        }}
      />
      <div
        ref={dotRef}
        id="dot-cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: '#4DB5FF',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.12s cubic-bezier(.17,.67,.83,.67), box-shadow 0.2s',
          boxShadow: '0 0 16px 4px #4DB5FF55',
        }}
      />
    </>
  );
};

export default CursorDot;
