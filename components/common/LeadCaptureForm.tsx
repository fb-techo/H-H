"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadCaptureSchema, type LeadCaptureFormData } from "@/lib/form-schema";
import { useTheme } from "@/components/providers/ThemeProvider";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function LeadCaptureForm() {
  const { segment } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadCaptureFormData>({
    resolver: zodResolver(leadCaptureSchema),
    defaultValues: {
      segment: segment,
    },
  });

  const onSubmit = async (data: LeadCaptureFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-8 bg-green-50 border-2 border-green-200 rounded-lg text-center" style={{ borderRadius: "var(--radius)" }}>
        <p className="text-green-800 text-lg font-medium">Thank you! We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
            Name *
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-text-primary"
            style={{ borderRadius: "var(--radius)" }}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
            Email *
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-text-primary"
            style={{ borderRadius: "var(--radius)" }}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
            Phone
          </label>
          <input
            {...register("phone")}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-text-primary"
            style={{ borderRadius: "var(--radius)" }}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
            Company
          </label>
          <input
            {...register("company")}
            type="text"
            id="company"
            className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-text-primary"
            style={{ borderRadius: "var(--radius)" }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="segment" className="block text-sm font-medium text-text-primary mb-2">
          Industry Segment *
        </label>
        <select
          {...register("segment")}
          id="segment"
          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-text-primary"
          style={{ borderRadius: "var(--radius)" }}
        >
          <option value="hotels">Hotels</option>
          <option value="hospitals">Hospitals</option>
          <option value="f-and-b">F&B</option>
          <option value="property-developers">Property Developers</option>
        </select>
        {errors.segment && <p className="mt-1 text-sm text-red-600">{errors.segment.message}</p>}
      </div>

      <div>
        <label htmlFor="useCase" className="block text-sm font-medium text-text-primary mb-2">
          Use Case
        </label>
        <input
          {...register("useCase")}
          type="text"
          id="useCase"
          placeholder="Tell us about your specific needs"
          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-text-primary"
          style={{ borderRadius: "var(--radius)" }}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
          Message
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          placeholder="Additional information..."
          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-text-primary resize-none"
          style={{ borderRadius: "var(--radius)" }}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Request Consultation"}
      </Button>
    </form>
  );
}

