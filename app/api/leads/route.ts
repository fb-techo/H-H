// Note: This API route will not work with static export (GitHub Pages)
// For static hosting, use an external form service like Formspree, FormSubmit, or EmailJS
// Or deploy to Vercel/Netlify for full Next.js API support

import { NextRequest, NextResponse } from "next/server";
import { leadCaptureSchema } from "@/lib/form-schema";

export async function POST(request: NextRequest) {
  // For static export, this will be handled client-side with an external service
  // This file exists for development/testing purposes only
  
  try {
    const body = await request.json();
    const validatedData = leadCaptureSchema.parse(body);

    // In production with static export, send to external service:
    // - Formspree: https://formspree.io
    // - FormSubmit: https://formsubmit.co
    // - EmailJS: https://www.emailjs.com
    
    // For now, log to console (in development)
    console.log('Lead captured:', validatedData);

    return NextResponse.json(
      { success: true, message: "Lead captured successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process lead" },
      { status: 400 }
    );
  }
}
