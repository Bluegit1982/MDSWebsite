import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please add a phone number."),
  service: z.string().min(1, "Please choose the service you are interested in."),
  dogName: z.string().optional(),
  location: z.string().optional(),
  message: z.string().min(20, "Please share a few more details so we can help."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
