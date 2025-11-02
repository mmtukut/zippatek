
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Linkedin, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Muhammad Muhammad Tukur",
    title: "Co-Founder & CTO",
    bio: "A tech visionary with a track record in building AI-native solutions. Recognized as a UN Millennium Fellow and McKinsey Forward Champion.",
    imageUrl: "/team/muhammad-tukur.jpg", // Placeholder path
    linkedinUrl: "#",
  },
  {
    name: "Aminu S. Muhammad",
    title: "Co-Founder & COO",
    bio: "A seasoned property industry veteran with over a decade of experience, bringing deep market expertise and government relationships.",
    imageUrl: "/team/aminu-muhammad.jpg", // Placeholder path
    linkedinUrl: "#",
  },
];

export const TeamPreviewSection = () => (
  <section className="bg-white dark:bg-neutral-900 py-20 sm:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-neutral-900 dark:text-white">
          Driven by a World-Class Team
        </h2>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          We are a blend of technologists, real estate experts, and strategists united by a single mission: to build the future of African property intelligence.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
          >
            <Card bordered className="text-center h-full">
              <div className="p-8">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={member.imageUrl}
                    alt={`Portrait of ${member.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                   <div className="absolute inset-0 rounded-full ring-2 ring-offset-4 ring-offset-white dark:ring-offset-neutral-800 ring-primary-200 dark:ring-primary-900"></div>
                </div>
                <h3 className="text-xl font-bold font-heading text-neutral-900 dark:text-white">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary-600 dark:text-accent-cyan">{member.title}</p>
                <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm">
                  {member.bio}
                </p>
                <a 
                  href={member.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-white transition-colors"
                  aria-label={`LinkedIn profile of ${member.name}`}
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button as={Link} href="/team" variant="secondary" size="xl">
          Meet the Entire Team
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  </section>
);
