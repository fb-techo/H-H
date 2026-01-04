import { z } from "zod";

export const leadCaptureSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  segment: z.enum(["hotels", "hospitals", "f-and-b", "property-developers"]),
  useCase: z.string().optional(),
  message: z.string().optional(),
});

export type LeadCaptureFormData = z.infer<typeof leadCaptureSchema>;

