"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
import Button from "@/components/ui/Button";
import { Segment } from "@/lib/utils";

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
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
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

export default function Home() {
  const segments: { key: Segment; label: string; path: string; description: string }[] = [
    {
      key: "hotels",
      label: "Hotels",
      path: "/hotels",
      description: "GRMS and control systems for luxury hospitality",
    },
    {
      key: "hospitals",
      label: "Hospitals",
      path: "/hospitals",
      description: "Nurse call systems and healthcare technology",
    },
    {
      key: "f-and-b",
      label: "F&B",
      path: "/f-and-b",
      description: "QR menus, tablet ordering, and KOT systems",
    },
    {
      key: "property-developers",
      label: "Property Developers",
      path: "/property-developers",
      description: "Smart building automation and amenities",
    },
  ];

  return (
    <>
      <Navigation />
      <main>
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
                Hospitality & Healthcare Technology Solutions
              </motion.h1>
              <motion.p
                className="text-2xl md:text-3xl text-secondary font-heading mb-4"
                variants={itemVariants}
              >
                High-End Experience, Deep Integration
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Comprehensive GRMS, control systems, and automation solutions for hotels, hospitals, restaurants, and property developments.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                variants={itemVariants}
              >
                <Button variant="primary" size="lg" asChild>
                  <Link href="#segments">Explore Solutions</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">Get Started</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="segments" className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                Solutions for Every Industry
              </h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Choose your industry to explore tailored solutions
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {segments.map((segment, index) => (
                <motion.div
                  key={segment.key}
                  custom={index}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Link
                    href={segment.path}
                    className="group p-8 bg-white border-2 border-border rounded-lg block"
                    style={{ borderRadius: "var(--radius)" }}
                  >
                    <h3 className="text-2xl font-heading font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                      {segment.label}
                    </h3>
                    <p className="text-text-secondary mb-4">{segment.description}</p>
                    <span className="text-primary font-medium group-hover:underline">
                      Explore {segment.label} Solutions →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-text-secondary mb-8">
                Contact us to discuss your specific needs and discover the perfect solution for your property.
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/hotels#contact">Request Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

