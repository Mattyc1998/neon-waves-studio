import { motion } from "framer-motion";

const AnimatedShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Pink Triangle */}
      <motion.div
        className="absolute top-[10%] left-[10%] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-secondary opacity-40 mix-blend-screen"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Cyan Circle */}
      <motion.div
        className="absolute top-[40%] right-[15%] w-24 h-24 rounded-full border-4 border-accent opacity-40 mix-blend-screen"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Lime Green Square */}
      <motion.div
        className="absolute bottom-[20%] left-[20%] w-20 h-20 border-4 border-primary opacity-40 mix-blend-screen"
        animate={{
          y: [0, -40, 0],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Another Pink Circle */}
      <motion.div
        className="absolute bottom-[30%] right-[30%] w-16 h-16 rounded-full bg-secondary opacity-20 mix-blend-screen blur-md"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedShapes;
