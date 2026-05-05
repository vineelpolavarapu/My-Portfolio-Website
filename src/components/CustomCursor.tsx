'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function CustomCursor() {
  const pathname = usePathname();
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const cursorX = useSpring(0, { damping: 25, stiffness: 300 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 300 });
  const ringX = useSpring(0, { damping: 20, stiffness: 150 });
  const ringY = useSpring(0, { damping: 20, stiffness: 150 });

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
    if ('ontouchstart' in window) return;
    if (pathname === '/') return;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, [cursorX, cursorY, ringX, ringY, pathname]);

  if (isTouchDevice || pathname === '/') return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.5 : isHovering ? 0.8 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
          className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.8),0_0_20px_rgba(0,240,255,0.4)]"
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed z-[9999] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.8 : isHovering ? 1.8 : 1,
            opacity: isVisible ? (isHovering ? 0.8 : 0.5) : 0,
            borderColor: isHovering ? 'rgba(168, 85, 247, 0.8)' : 'rgba(0, 240, 255, 0.5)',
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="w-8 h-8 rounded-full border-2 border-cyan-400/50"
          style={{
            boxShadow: isHovering
              ? '0 0 15px rgba(168, 85, 247, 0.3), inset 0 0 15px rgba(168, 85, 247, 0.1)'
              : '0 0 10px rgba(0, 240, 255, 0.2)',
          }}
        />
      </motion.div>
    </>
  );
}
