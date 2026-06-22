import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const MagneticCursor = ({
  size = 20,
  hoverSize = 50,
  color = '#1e3a8a',
  hoverColor = '#2563eb',
  springConfig = { damping: 25, stiffness: 400, mass: 0.5 },
  hoverSpringConfig = { damping: 20, stiffness: 300, mass: 0.8 },
}) => {
  const cursorRef = useRef(null);
  const [isLink, setIsLink] = useState(false);
  const isHoveringRef = useRef(false);

  // Check touch device
  const isTouchDevice = typeof window !== 'undefined' 
    ? window.matchMedia('(pointer: coarse)').matches 
    : false;

  // Raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring following
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Hover state animation
  const cursorSize = useMotionValue(size);
  const smoothSize = useSpring(cursorSize, hoverSpringConfig);

  // Color interpolation
  const currentColor = useTransform(
    smoothSize,
    [size, hoverSize],
    [color, hoverColor]
  );

  // Background opacity for circle mode
  const bgOpacity = useTransform(
    smoothSize,
    [size, hoverSize],
    ['transparent', `${hoverColor}15`]
  );

  // Center offset
  const centerOffset = useTransform(smoothSize, (v) => -v / 2);

  useEffect(() => {
    if (isTouchDevice) return;

    const onMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onMouseOver = (e) => {
      const interactive = e.target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover], label'
      );
      if (interactive) {
        isHoveringRef.current = true;
        cursorSize.set(hoverSize);
        // Check if it's specifically a link (<a> tag)
        setIsLink(!!interactive.closest('a'));
      }
    };

    const onMouseOut = (e) => {
      const interactive = e.target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover], label'
      );
      if (interactive) {
        isHoveringRef.current = false;
        cursorSize.set(size);
        setIsLink(false);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Inject global cursor-none styles
    const style = document.createElement('style');
    style.id = 'framer-cursor-styles';
    style.textContent = `
      a, button, [role="button"], input, textarea, select, [data-cursor-hover], label {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.body.style.cursor = '';
      const existing = document.getElementById('framer-cursor-styles');
      if (existing) existing.remove();
    };
  }, [mouseX, mouseY, cursorSize, size, hoverSize, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: smoothX,
        y: smoothY,
        width: smoothSize,
        height: smoothSize,
        translateX: centerOffset,
        translateY: centerOffset,
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        willChange: 'transform',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Circle mode (default / non-link hover) */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: `2px solid`,
          borderColor: currentColor,
          backgroundColor: bgOpacity,
          opacity: isLink ? 0 : 1,
          scale: isLink ? 0.5 : 1,
        }}
        animate={{ opacity: isLink ? 0 : 1, scale: isLink ? 0.5 : 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Plus icon mode (link hover) */}
      <motion.div
        className='flex items-center justify-center'
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: `2px solid`,
          borderColor: currentColor,
          backgroundColor: bgOpacity,
          opacity: isLink ? 0 : 1,
          scale: isLink ? 0.5 : 1,
        }}
        animate={{ opacity: isLink ? 1 : 0, scale: isLink ? 1 : 0.5 }}
        transition={{ duration: 0.2 }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="black"
          stroke='currentColor'
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export const MagneticElement = ({
  children,
  strength = 0.3,
  springConfig = { damping: 15, stiffness: 150, mass: 0.1 },
  className = '',
}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};
