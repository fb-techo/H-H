"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function IntegrationBadges() {
  const integrations = [
    { name: "Oracle PMS", logo: "Oracle" },
    { name: "Opera PMS", logo: "Opera" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="py-16 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Seamless Integration
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Deep integration with leading property management systems
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="flex flex-wrap justify-center items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="flex flex-col items-center justify-center p-8 bg-white border border-border rounded-lg"
              style={{ borderRadius: "var(--radius)" }}
            >
              <div className="w-32 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary font-bold text-lg">{integration.logo}</span>
              </div>
              <p className="text-text-primary font-medium">{integration.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-text-secondary mb-6">
            Our systems integrate seamlessly with your existing infrastructure
          </p>
          <motion.ul
            className="inline-flex flex-col sm:flex-row gap-4 text-text-secondary text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <motion.span
                className="w-2 h-2 bg-primary rounded-full mr-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring" }}
              ></motion.span>
              Real-time synchronization
            </motion.li>
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <motion.span
                className="w-2 h-2 bg-primary rounded-full mr-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, type: "spring" }}
              ></motion.span>
              API-first architecture
            </motion.li>
            <motion.li
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <motion.span
                className="w-2 h-2 bg-primary rounded-full mr-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0, type: "spring" }}
              ></motion.span>
              Secure data exchange
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

