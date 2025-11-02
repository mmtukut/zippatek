
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const recognitions = [
  { name: "UN Millennium Fellowship", logoUrl: "/logos/un-millennium-fellowship.png", alt: "UN Millennium Fellowship Logo" },
  { name: "McKinsey Forward", logoUrl: "/logos/mckinsey-forward.png", alt: "McKinsey Forward Logo" },
  { name: "NIGCOMSAT Accelerator", logoUrl: "/logos/nigcomsat.png", alt: "NIGCOMSAT Logo" },
  { name: "Google Developer Groups", logoUrl: "/logos/google-developers.png", alt: "Google Developer Groups Logo" },
];

export const PressRecognitionSection = () => (
  <section className="bg-neutral-50 dark:bg-neutral-800 py-20 sm:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-neutral-900 dark:text-white">
          Recognized for Innovation
        </h2>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          Our work and leadership have been acknowledged by global and national institutions at the forefront of technology, social impact, and business.
        </p>
      </div>

      <div className="mt-16">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {recognitions.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative h-16 w-48 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={rec.logoUrl}
                alt={rec.alt}
                layout="fill"
                objectFit="contain"
                className="opacity-70 dark:invert dark:opacity-60"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
