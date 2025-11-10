import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { GoogleDriveImage } from './GoogleDriveImage';
import { Download } from 'lucide-react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax effect - image moves slower than content
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pb-0">
      {/* Animated Background Gradient - Deep Space Cinematic */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%'],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
        style={{
          background: 'linear-gradient(180deg, #0B0E13 0%, #101523 50%, #0C0E12 100%)',
          backgroundSize: '100% 200%',
        }}
      />

      {/* Ambient Light Glow Behind Portrait */}
      <motion.div 
        className="absolute right-[22%] top-[25%] w-[500px] h-[500px] z-[1] pointer-events-none"
        animate={{
          opacity: [0.6, 0.8, 0.6],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: 'radial-gradient(circle, rgba(93, 173, 226, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Portrait Image with Parallax */}
      <motion.div 
        className="absolute right-0 top-0 bottom-0 w-[55%] z-[2]"
        style={{ y: imageY }}
      >
        {/* Image Container with Vignette and Gradient Mask */}
        <div className="relative h-full">
          {/* Main Portrait */}
          <div className="absolute inset-0">
            <GoogleDriveImage
              imageUrl="https://drive.google.com/file/d/1RSGr7rPCJe31iz5zXuNkNILWxgCFsz1g/view?usp=drive_link"
              alt="Garv Pandey"
              className="w-full h-full object-cover"
              style={{
                objectPosition: '45% center',
                filter: 'contrast(1.08) brightness(1.02)',
              }}
              fallbackIcon={false}
            />
          </div>

          {/* Radial Dark Vignette */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 55% 65% at 60% 40%, transparent 25%, rgba(12, 14, 18, 0.35) 65%, rgba(12, 14, 18, 0.75) 100%)',
            }}
          />

          {/* Bottom Vertical Gradient Mask - Seamless Fade */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-[35%]"
            style={{
              background: 'linear-gradient(to top, #0C0E12 0%, rgba(12, 14, 18, 0.95) 15%, rgba(12, 14, 18, 0.7) 40%, rgba(12, 14, 18, 0.3) 70%, transparent 100%)',
            }}
          />

          {/* Left Edge Fade */}
          <div 
            className="absolute inset-y-0 left-0 w-[30%]"
            style={{
              background: 'linear-gradient(to right, #0C0E12 0%, rgba(12, 14, 18, 0.8) 30%, transparent 100%)',
            }}
          />

          {/* Subtle Light Focus on Face/Torso */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 35% 45% at 60% 35%, rgba(255, 255, 255, 0.04) 0%, transparent 55%)',
            }}
          />
        </div>
      </motion.div>

      {/* Content with Parallax */}
      <motion.div 
        className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10"
        style={{ y: contentY }}
      >
        <div className="max-w-3xl">
          {/* Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-block mb-8"
          >
            <div className="px-5 py-2.5 border border-[#5DADE2] rounded-full bg-transparent backdrop-blur-sm">
              <span className="text-[#5DADE2] text-sm tracking-wide">
                Available for Opportunities
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#F5F6F7] mb-7"
            style={{
              fontSize: 'clamp(64px, 9vw, 140px)',
              lineHeight: '110%',
              letterSpacing: '-0.02em',
            }}
          >
            GARV PANDEY
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#F5F6F7] mb-12 max-w-2xl"
            style={{
              fontSize: 'clamp(18px, 2vw, 24px)',
              lineHeight: '155%',
              backdropFilter: 'blur(2px)',
            }}
          >
            Aspiring Product Manager & Front-End Creator who blends{' '}
            <span className="text-[#5DADE2]">product strategy</span>,{' '}
            <span className="text-[#5DADE2]">UX clarity</span>, and{' '}
            <span className="text-[#5DADE2]">technical craft</span>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-5"
          >
            {/* Primary Actions Row */}
            <div className="flex flex-wrap gap-5">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-4 bg-[#5DADE2] text-[#0C0E12] rounded-[22px] transition-all overflow-hidden"
                style={{ height: '52px', display: 'flex', alignItems: 'center' }}
              >
                <span className="relative z-10">View Work</span>
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(93, 173, 226, 0.4), transparent 70%)',
                    filter: 'blur(10px)',
                  }}
                />
              </motion.a>

              <motion.a
                href="https://drive.google.com/uc?export=download&id=1fzzBzSXKhxExMeto-d54-zuZxrDcBdAp"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, borderColor: '#5DADE2', color: '#5DADE2' }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 border border-[#F5F6F7] text-[#F5F6F7] rounded-[22px] transition-all bg-transparent backdrop-blur-sm"
                style={{ height: '52px', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Download size={18} />
                <span>Resume</span>
              </motion.a>
            </div>

            {/* Secondary Action Row */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, borderColor: '#5DADE2', color: '#5DADE2' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border border-[#F5F6F7] text-[#F5F6F7] rounded-[22px] transition-all bg-transparent backdrop-blur-sm w-fit"
              style={{ height: '52px', display: 'flex', alignItems: 'center' }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-[#BDC3C7]/30 rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-[#5DADE2] rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>

      {/* Seamless Transition Gradient to About Section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(12, 14, 18, 0.5) 50%, #0C0E12 100%)',
        }}
      />
    </section>
  );
}
