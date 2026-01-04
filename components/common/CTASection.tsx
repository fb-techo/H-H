"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import LeadCaptureForm from "./LeadCaptureForm";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto" ref={ref}>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Get in touch with our team to discuss your specific needs and discover how H&H can help you deliver exceptional experiences.
            </p>
          </motion.div>

          <motion.div
            className="bg-white border border-border rounded-lg p-8 md:p-12"
            style={{ borderRadius: "var(--radius)" }}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <LeadCaptureForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

