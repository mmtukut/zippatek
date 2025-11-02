
"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const metrics = [
  {
    value: 2300000,
    label: "Properties Identified",
    prefix: "",
    suffix: "+",
    description: "Mapped across six Nigerian states and counting."
  },
  {
    value: 500,
    label: "Billion Naira",
    prefix: "₦",
    suffix: "B+",
    description: "In newly-identified revenue potential for our partners."
  },
  {
    value: 94,
    label: "Detection Accuracy",
    prefix: "",
    suffix: "%",
    description: "Our satellite AI models outperform traditional survey methods."
  },
  {
    value: 85,
    label: "Reduction in Survey Time",
    prefix: "",
    suffix: "%",
    description: "Accelerating the pace of property registration and formalization."
  }
];

export const ImpactMetricsSection = () => (
  <section className="bg-primary-900 text-white py-20 sm:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-heading">
          Our Impact, By The Numbers
        </h2>
        <p className="mt-4 text-lg text-primary-100">
          We are delivering measurable results that translate into economic growth, increased efficiency, and greater transparency for Nigeria.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            className="text-center p-6 bg-primary-800/50 rounded-xl"
          >
            <div className="text-5xl font-bold font-heading text-accent-cyan">
              <CountUp
                start={0}
                end={metric.value}
                duration={3}
                separator=","
                prefix={metric.prefix}
                suffix={metric.suffix}
                enableScrollSpy
                scrollSpyDelay={200}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">{metric.label}</h3>
            <p className="mt-2 text-sm text-primary-200">{metric.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
