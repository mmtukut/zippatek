
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, BarChart, Home, Zap } from 'lucide-react';

const products = [
  {
    icon: BarChart,
    title: "FastFind360",
    description: "The definitive tool for governments to identify unmapped properties, unlock lost revenue, and drive economic development with AI-powered satellite data.",
    href: "/products/fastfind360",
    badge: "For Government",
    color: "cyan"
  },
  {
    icon: Home,
    title: "Propabridge",
    description: "Nigeria's most trusted property marketplace. We connect buyers and renters with verified listings, eliminating fraud and streamlining the search for your next home.",
    href: "/products/propabridge",
    badge: "For Consumers",
    color: "orange"
  },
  {
    icon: Zap,
    title: "What's Next",
    description: "From climate-resilient construction analytics to decentralized land registries, we are building the future of African proptech.",
    href: "/about",
    badge: "Innovation Pipeline",
    color: "blue"
  },
];

export const ProductShowcaseSection = () => (
  <section className="py-20 sm:py-24 bg-white dark:bg-neutral-900">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading text-neutral-900 dark:text-white">
          Two Platforms. One Mission.
        </h2>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          We're transforming Nigeria's property ecosystem from two different angles—providing fiscal clarity for governments and transactional confidence for citizens.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
          >
            <Card hover bordered className="flex flex-col h-full p-8">
              <div className="flex-grow">
                <div className={`p-3 bg-${product.color}-100 dark:bg-${product.color}-900/50 rounded-lg inline-block mb-4`}>
                  <product.icon className={`w-8 h-8 text-${product.color}-500`} />
                </div>
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-${product.color}-100 text-${product.color}-800 dark:bg-${product.color}-900/50 dark:text-${product.color}-200 mb-4`}>
                  {product.badge}
                </span>
                <h3 className="text-2xl font-bold font-heading text-neutral-900 dark:text-white">{product.title}</h3>
                <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                  {product.description}
                </p>
              </div>
              <div className="mt-8">
                <Link href={product.href} passHref>
                  <Button variant={product.color === 'cyan' ? 'primary' : product.color === 'orange' ? 'accent' : 'secondary'} fullWidth>
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
