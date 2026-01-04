"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import segmentsData from "@/content/segments.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + index * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.2,
    },
  },
};

export default function HotelHero() {
  const data = segmentsData.hotels;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary mb-6 leading-tight"
            variants={itemVariants}
          >
            {data.title}
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-secondary font-heading mb-4"
            variants={itemVariants}
          >
            {data.subtitle}
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {data.description}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Button variant="primary" size="lg" asChild>
              <a href="#products">{data.heroCta}</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Request Consultation</a>
            </Button>
          </motion.div>
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {data.valueProps.map((prop, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover="hover"
                className="p-6 bg-background/80 backdrop-blur-sm border border-border rounded-lg"
                style={{ borderRadius: "var(--radius)" }}
              >
                <p className="text-text-primary font-medium">{prop}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

