import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contactSchema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message || "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process this enquiry right now. Please try again." },
      { status: 500 }
    );
  }
}
