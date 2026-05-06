"use client";

import Image from "next/image";
import React, { memo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoStar } from "react-icons/io5";
import { DirectionalButton } from "@/components/ui/DirectionalButton";

interface Testimonial {
  name: string;
  rating: number;
  image: string;
  review: string;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <IoStar
          key={i}
          className={`text-sm ${i < rating ? "text-[#D4AF37]" : "text-zinc-800"}`}
        />
      ))}
    </div>
  );
};

/**
 * Individual Testimonial Card Component
 */
const TestimonialCard = memo(
  ({ testimonial, idx }: { testimonial: Testimonial; idx: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLongReview = testimonial.review.length > 180;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        layout
        className={`bg-zinc-900/20 border border-white/5 rounded-3xl p-8 flex flex-col transition-colors duration-500 group relative ${
          isExpanded ? "h-auto" : "h-[420px]"
        } hover:border-[#D4AF37]/20`}
      >
        {/* Quote Mark Decoration */}
        <div className="absolute top-6 right-8 text-[#D4AF37] opacity-5 text-7xl font-serif pointer-events-none select-none">
          &ldquo;
        </div>

        <div className="flex items-center gap-4 relative z-10 mb-6 shrink-0">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#D4AF37]/20">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              sizes="56px"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg uppercase tracking-tight">
              {testimonial.name}
            </h3>
            <StarRating rating={testimonial.rating} />
          </div>
        </div>

        <div className="flex-grow overflow-hidden relative">
          <p
            className={`text-gray-400 leading-relaxed font-medium transition-all duration-500 ${
              isExpanded ? "" : "line-clamp-[6]"
            }`}
          >
            {testimonial.review}
          </p>

          {isLongReview && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.1em] mt-3 border-b-2 border-transparent hover:border-[#D4AF37] pb-1 transition-all inline-block"
            >
              {isExpanded ? "Show less" : "View more"}
            </button>
          )}
        </div>

        <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between shrink-0">
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
            Verified Guest
          </span>
          <div className="w-8 h-px bg-[#D4AF37]/20" />
        </div>
      </motion.div>
    );
  },
);
TestimonialCard.displayName = "TestimonialCard";

import testimonialsData from "../../../../../public/data/testimonials.json";

/**
 * Main Testimonials Section
 */
export const TestimonialsSection = memo(() => {
  const [visibleCount, setVisibleCount] = useState(3);
  const allTestimonials: Testimonial[] = testimonialsData as Testimonial[];

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, allTestimonials.length));
  };

  const handleHideReviews = () => {
    setVisibleCount(3);
    // Smooth scroll back to section header if needed
    document
      .getElementById("testimonials-heading")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="w-full bg-black py-24 px-6 sm:px-12 md:px-20 border-b border-white/10 relative overflow-hidden z-10 rounded-b-[48px] md:rounded-b-[80px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1920px] mx-auto space-y-20">
        {/* Header */}
        <div className="space-y-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.25em] mb-2">
            Guest Experiences
          </div>
          <h2
            id="testimonials-heading"
            className="text-[#D4AF37] font-black text-5xl md:text-7xl uppercase tracking-tighter leading-none"
          >
            WHAT OUR <span className="text-white">GUESTS SAY</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            The true measure of our legacy is the joy of those we serve. Real
            stories from our beloved community.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <AnimatePresence>
            {allTestimonials.slice(0, visibleCount).map((testimonial, idx) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                idx={idx}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* View More / Hide Button (Bottom) */}
        <div className="flex justify-center pt-12 gap-6">
          {visibleCount < allTestimonials.length ? (
            <DirectionalButton
              variant="primary"
              onClick={handleViewMore}
              className="px-12 py-5 text-sm"
            >
              View More Reviews
            </DirectionalButton>
          ) : (
            <DirectionalButton
              variant="primary"
              onClick={handleHideReviews}
              className="px-12 py-5 text-sm opacity-80 hover:opacity-100"
            >
              Hide Reviews
            </DirectionalButton>
          )}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div
        className="hidden xl:block absolute -left-20 top-1/2 -translate-y-1/2 text-[180px] font-black opacity-[0.01] select-none pointer-events-none rotate-90 whitespace-nowrap text-white"
        aria-hidden="true"
      >
        REVIEWS
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";
