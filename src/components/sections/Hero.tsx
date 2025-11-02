
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { GridPattern } from "@/components/ui/GridPattern";

const stats = [
  { value: "4+", label: "Government Agencies", description: "Trusted by state and federal partners." },
  { value: "2M+", label: "Properties Analyzed", description: "Across six Nigerian states." },
  { value: "₦2T", label: "Market Inefficiency", description: "The annual value of Africa's property visibility gap." },
];

export const Hero = () => (
  <section className="relative w-full overflow-hidden bg-white dark:bg-neutral-900">
    <GridPattern
      className="absolute inset-0 z-0 h-full w-full fill-neutral-100 dark:fill-neutral-800/80 stroke-neutral-200 dark:stroke-neutral-800/50 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
    />
    <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 pb-2">
            Making Africa's Invisible Infrastructure, Visible.
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300">
            We use AI and satellite data to solve Nigeria's ₦2 trillion property visibility problem—unlocking revenue for governments and enabling trust for citizens.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <Button as={Link} href="/products" variant="primary" size="xl">
            Explore Our Platforms
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button as={Link} href="/contact" variant="secondary" size="xl">
            Schedule a Demo
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        className="mt-20 lg:mt-24"
      >
        <Card glass intense bordered className="p-2">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200/50 dark:divide-neutral-700/50">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 text-center">
                <p className="text-4xl font-bold font-heading text-primary-900 dark:text-white">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-neutral-800 dark:text-neutral-200">{stat.label}</p>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  </section>
);
