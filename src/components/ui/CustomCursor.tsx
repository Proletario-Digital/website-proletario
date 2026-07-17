import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position of cursor (offsets to center the cursor elements)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Springs for the outer cursor (slower, lagging behind)
  const outerX = useSpring(cursorX, { damping: 30, stiffness: 200, mass: 0.6 });
  const outerY = useSpring(cursorY, { damping: 30, stiffness: 200, mass: 0.6 });

  // Springs for the inner cursor (faster, almost instant)
  const innerX = useSpring(cursorX, { damping: 40, stiffness: 400, mass: 0.2 });
  const innerY = useSpring(cursorY, { damping: 40, stiffness: 400, mass: 0.2 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // 12px offset centers the 24px outer ring
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Smooth outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border pointer-events-none z-[9999] hidden md:block"
        style={{
          x: outerX,
          y: outerY,
          scale: isHovered ? 2 : 1,
          backgroundColor: isHovered ? 'rgba(115, 179, 184, 0.15)' : 'transparent',
          borderColor: isHovered ? 'hsl(var(--accent))' : 'hsl(var(--primary))',
        }}
        transition={{
          scale: { type: 'spring', stiffness: 350, damping: 25 },
        }}
      />
      {/* Snappy inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          // offset by 8px to center the 8px dot inside the 24px ring (12px - 4px)
          x: innerX,
          y: innerY,
          translateX: 8,
          translateY: 8,
          scale: isHovered ? 0.4 : 1,
        }}
        transition={{
          scale: { duration: 0.15 }
        }}
      />
    </>
  );
}
