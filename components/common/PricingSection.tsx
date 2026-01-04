"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.03,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Flexible Solutions for Every Scale
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Customized pricing based on your property size and requirements
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className={cn(
              "p-8 bg-white border-2 border-border rounded-lg"
            )}
            style={{ borderRadius: "var(--radius)" }}
          >
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">Starter</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-text-primary">Custom</span>
              <p className="text-text-secondary mt-2">Perfect for small properties</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-text-secondary">Up to 50 rooms/units</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-text-secondary">Basic control systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-text-secondary">Email support</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full" asChild>
              <a href="#contact">Request Quote</a>
            </Button>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className={cn(
              "p-8 bg-primary text-white rounded-lg border-2 border-primary"
            )}
            style={{ borderRadius: "var(--radius)" }}
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                Most Popular
              </span>
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">Professional</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">Custom</span>
              <p className="mt-2 opacity-90">Ideal for mid-size properties</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>51-200 rooms/units</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Advanced control systems</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>PMS integration</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Priority support</span>
              </li>
            </ul>
            <Button variant="secondary" className="w-full bg-white text-primary hover:bg-white/90" asChild>
              <a href="#contact">Request Quote</a>
            </Button>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className={cn(
              "p-8 bg-white border-2 border-border rounded-lg"
            )}
            style={{ borderRadius: "var(--radius)" }}
          >
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-text-primary">Custom</span>
              <p className="text-text-secondary mt-2">For large properties & chains</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-text-secondary">200+ rooms/units</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-text-secondary">Full system integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-text-secondary">Custom development</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-text-secondary">Dedicated account manager</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full" asChild>
              <a href="#contact">Request Quote</a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-text-secondary mb-4">
            All plans include setup, training, and ongoing maintenance options
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Schedule a Consultation</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

