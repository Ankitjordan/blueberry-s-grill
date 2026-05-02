import Link from "next/link";
import { motion } from "framer-motion";

function HeroContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full h-full z-10 mt-[80px] text-center px-4">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-6 max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Top Tagline */}
        <motion.div 
          variants={itemVariants}
          className="inline-block border border-white/30 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5"
        >
          <span className="text-white text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
            North Myrtle Beach&apos;s Finest
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1] drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
          Savor the True <br />
          <span className="text-yellow-400 italic font-serif font-light pr-2 tracking-[1px] drop-shadow-[0_5px_20px_rgba(250,204,21,0.5)]">Taste</span> 
          of Excellence
        </motion.h1>

        {/* Description */}
        <motion.p variants={itemVariants} className="text-white/90 text-sm md:text-base lg:text-lg max-w-2xl font-light tracking-wide leading-relaxed drop-shadow-md">
           Discover a vibrant harvest of fresh flavors, premium cuts, and unforgettable dining experiences. Blueberry&apos;s Grill offers a modern twist on classic coastal cuisine in an elegant, airy atmosphere.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5 pt-8">
          <Link
            href="#menu"
            className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-500 ease-out hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)]"
          >
            Explore Menu
          </Link>
          <Link
            href="#reservations"
            className="w-full sm:w-auto bg-transparent border border-white/60 text-white px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-500 ease-out hover:-translate-y-[2px] hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm"
          >
            Reserve a Table
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroContent;
