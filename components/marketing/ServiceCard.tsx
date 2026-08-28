import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  accent: string;
};

export function ServiceCard({ title, description, href, accent }: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full rounded-[2rem] border border-[#E5DCCB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`mb-6 h-2 w-20 rounded-full bg-gradient-to-r ${accent}`} />
      <h3 className="mb-3 text-2xl font-semibold text-[#173A2A]">{title}</h3>
      <p className="mb-6 text-base leading-7 text-[#4B5B5B]">{description}</p>
      <span className="inline-flex items-center text-sm font-semibold text-[#173A2A] group-hover:text-[#2B5648]">
        Learn more →
      </span>
    </Link>
  );
}
