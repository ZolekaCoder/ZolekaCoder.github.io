import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypeWriterProps {
  text: string;
  className?: string;
  cursorColor?: string;
}

const TypeWriter = ({ text, className = '', cursorColor = '#FB923C' }: TypeWriterProps) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const cursor = {
    blink: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start("hidden").then(() => {
      controls.start("visible");
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      className="inline-block relative"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <motion.span
        variants={container}
        initial="hidden"
        animate={controls}
        className={className}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.span>
      <motion.span
        variants={cursor}
        animate="blink"
        className="inline-block ml-1 -mr-1 w-[2px] h-[1em] bg-accent"
        style={{ backgroundColor: cursorColor }}
      />
    </motion.div>
  );
};

export default TypeWriter; 