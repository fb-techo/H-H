"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import productsData from "@/content/products.json";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardHoverVariants = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function ProductShowcase() {
  const { segment } = useTheme();
  const products = productsData[segment as keyof typeof productsData] || [];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Comprehensive technology solutions tailored for your industry
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={cardHoverVariants.hover}
              custom={index}
              className={cn(
                "p-8 bg-white border border-border rounded-lg"
              )}
              style={{ borderRadius: "var(--radius)" }}
            >
              <div className="h-full">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  {product.name}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, featureIndex) => (
                    <motion.span
                      key={featureIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + featureIndex * 0.05 }}
                      className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full"
                      style={{ borderRadius: "var(--radius)" }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

