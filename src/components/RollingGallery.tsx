import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimation, useTransform, PanInfo, ResolvedValues } from 'motion/react';

const IMGS: string[] = [
  'public/20250907_022633.jpg',
  'public/20250907_163909.jpg',
  'public/WhatsApp Image 2025-09-21 at 13.42.06_0a0aa89a.jpg',
  'public/20250907_163454.jpg',
  'public/WhatsApp Image 2025-09-21 at 13.42.06_51e195c7.jpg',
  'public/WhatsApp Image 2025-09-21 at 13.42.09_28e6fdfd.jpg',
  'public/DSC_1410.JPG',
  'public/WhatsApp Image 2025-09-21 at 13.42.06_51e195c7.jpg',
  'public/WhatsApp Image 2025-09-21 at 13.42.07_0c2ac010.jpg'
  ];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  const galleryImages = images.length > 0 ? images : IMGS;
  const [screenSize, setScreenSize] = useState<'xs' | 'sm' | 'md' | 'lg'>(() => {
    if (typeof window === 'undefined') return 'lg';
    const width = window.innerWidth;
    if (width < 480) return 'xs';
    if (width < 640) return 'sm';
    if (width < 1024) return 'md';
    return 'lg';
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setScreenSize('xs');
      else if (width < 640) setScreenSize('sm');
      else if (width < 1024) setScreenSize('md');
      else setScreenSize('lg');
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive cylinder dimensions
  const getCylinderWidth = () => {
    switch (screenSize) {
      case 'xs': return 800;
      case 'sm': return 1000;
      case 'md': return 1400;
      default: return 1800;
    }
  };

  const cylinderWidth: number = getCylinderWidth();
  const faceCount: number = galleryImages.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
  const radius: number = cylinderWidth / (2 * Math.PI);
  const dragFactor: number = screenSize === 'xs' || screenSize === 'sm' ? 0.08 : 0.05;

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const transform = useTransform(rotation, (val: number) => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity
      }
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest: ResolvedValues) => {
    if (typeof latest.rotateY === 'number') {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  // Get responsive image dimensions
  const getImageDimensions = () => {
    switch (screenSize) {
      case 'xs': return { maxHeight: 80, maxWidth: 160 };
      case 'sm': return { maxHeight: 90, maxWidth: 180 };
      case 'md': return { maxHeight: 100, maxWidth: 220 };
      default: return { maxHeight: 120, maxWidth: 300 };
    }
  };

  const imageDimensions = getImageDimensions();

  return (
    <div className="relative h-[200px] w-full overflow-hidden touch-pan-x">
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          dragConstraints={{ left: 0, right: 0 }}
          dragMomentum={false}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d'
          }}
          className="flex min-h-[200px] cursor-grab active:cursor-grabbing items-center justify-center [transform-style:preserve-3d] touch-none"
        >
          {galleryImages.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[4%] [backface-visibility:hidden] xs:p-[6%] sm:p-[8%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`
              }}
            >
              <img
                src={url}
                alt={`Gallery image ${i + 1}`}
                loading="lazy"
                className="pointer-events-none rounded-[8px] border-[2px] border-white object-contain transition-transform duration-300 ease-out group-hover:scale-105 xs:rounded-[10px] xs:border-[2px] sm:rounded-[12px] sm:border-[3px] md:rounded-[15px]"
                style={{
                  maxHeight: `${imageDimensions.maxHeight}px`,
                  maxWidth: `${imageDimensions.maxWidth}px`
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Mobile swipe indicator */}
      {(screenSize === 'xs' || screenSize === 'sm') && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white/60 text-xs flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>Swipe to explore</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default RollingGallery;