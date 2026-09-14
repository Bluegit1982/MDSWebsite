"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contactSchema, ContactFormValues } from "@/lib/validation/contactSchema";

const defaultValues: Partial<ContactFormValues> = {
  service: "Puppy Classes",
};

export function ContactForm() {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitState("idle");
    setServerMessage("");

    const subject = encodeURIComponent(`Enquiry from ${values.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone}`,
        `Service: ${values.service}`,
        `Dog name: ${values.dogName || "Not provided"}`,
        `Location: ${values.location || "Not provided"}`,
        "",
        values.message,
      ].join("\n")
    );

    window.open(`mailto:hello@mellordogschool.co.uk?subject=${subject}&body=${body}`, "_self");
    reset();
    setSubmitState("success");
    setServerMessage("Your email app is opening with the enquiry ready to send.");
  };

  const inputClassName =
    "mt-2 w-full rounded-2xl border border-[#D8CCB3] bg-white px-4 py-3 text-base text-[#173A2A] outline-none transition focus:border-[#173A2A] focus:ring-2 focus:ring-[#173A2A]/10";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-[2rem] border border-[#E5DCCB] bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-[#173A2A]">Full name</label>
          <input id="name" {...register("name")} className={inputClassName} placeholder="Your name" />
          {errors.name && <p className="mt-2 text-sm text-[#B14E4E]">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-[#173A2A]">Email address</label>
          <input id="email" type="email" {...register("email")} className={inputClassName} placeholder="you@example.com" />
          {errors.email && <p className="mt-2 text-sm text-[#B14E4E]">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-[#173A2A]">Phone number</label>
          <input id="phone" type="tel" {...register("phone")} className={inputClassName} placeholder="Your contact number" />
          {errors.phone && <p className="mt-2 text-sm text-[#B14E4E]">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className="text-sm font-semibold text-[#173A2A]">Service interested in</label>
          <select id="service" {...register("service")} className={inputClassName}>
            <option value="">Select a service</option>
            <option value="Puppy Classes">Puppy Classes</option>
            <option value="Doggy Day Care">Doggy Day Care</option>
            <option value="Obedience Training">Obedience Training</option>
            <option value="Gundog Training">Gundog Training</option>
            <option value="Protection Training">Protection Training</option>
            <option value="Sheep Dog Training">Sheep Dog Training</option>
            <option value="One-to-One Training">One-to-One Training</option>
          </select>
          {errors.service && <p className="mt-2 text-sm text-[#B14E4E]">{errors.service.message}</p>}
        </div>

        <div>
          <label htmlFor="dogName" className="text-sm font-semibold text-[#173A2A]">Dog name (optional)</label>
          <input id="dogName" {...register("dogName")} className={inputClassName} placeholder="Dog’s name" />
        </div>

        <div>
          <label htmlFor="location" className="text-sm font-semibold text-[#173A2A]">Location (optional)</label>
          <input id="location" {...register("location")} className={inputClassName} placeholder="Town or postcode" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-[#173A2A]">How can we help?</label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className={`${inputClassName} resize-none`}
          placeholder="Tell us about your dog, your goals, and the kind of support you need."
        />
        {errors.message && <p className="mt-2 text-sm text-[#B14E4E]">{errors.message.message}</p>}
      </div>

      {serverMessage ? (
        <div
          className={submitState === "success" ? "rounded-2xl bg-[#EAF5EE] p-4 text-sm text-[#173A2A]" : "rounded-2xl bg-[#FDECEC] p-4 text-sm text-[#7B2F2F]"}
        >
          <div className="flex items-center gap-2 font-medium">
            {submitState === "success" ? <CheckCircle2 size={16} /> : null}
            {serverMessage}
          </div>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#173A2A] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#214b3c] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Sending enquiry
          </>
        ) : (
          "Send enquiry"
        )}
      </button>
    </form>
  );
}
