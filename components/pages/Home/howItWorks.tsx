import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    title: "Apply",
    description:
      "Complete the online application form sharing your passion, goals, and vision for how you'll use the scholarship funds.",
  },
  {
    title: "Review",
    description:
      "Our team carefully evaluates all applications based on passion, commitment, vision, and potential impact of your project.",
  },
  {
    title: "Selection",
    description:
      "Two outstanding applicants are chosen as winners based on their demonstrated dedication and clear plan for success.",
  },
  {
    title: "Award",
    description:
      "Winners receive ₦500,000 each to invest in their passion projects, skills development, and creative pursuits.",
  },
];

export default function HowItWorks() {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 md:gap-12 lg:gap-10">
      {/* Heading Section */}
      <div className="flex justify-center w-full lg:w-1/2 lg:sticky lg:top-24">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl lg:max-w-64 xl:max-w-96 text-center lg:text-left">
          How it <span className="text-pink-400">works</span>
        </h2>
      </div>

      {/* Timeline Section */}
      <div className="relative w-full lg:w-1/2 max-w-full sm:max-w-md md:max-w-lg lg:max-w-[480px]">
        {/* Timeline line */}
        <div className="absolute inset-y-0 left-5 sm:left-6 md:left-0 border-l-2 border-pink-400" />

        {steps.map(({ title, description }, index) => (
          <div
            className="relative pb-8 sm:pb-10 pl-14 sm:pl-16 md:pl-10 last:pb-0"
            key={index}
          >
            {/* Timeline Icon */}
            <div className="absolute left-5 md:left-px flex h-10 w-10 sm:h-12 sm:w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-muted-foreground/40 bg-accent ring-4 sm:ring-6 md:ring-8 ring-background">
              <span className="font-semibold text-xl sm:text-2xl md:text-3xl">
                {index + 1}
              </span>
            </div>

            {/* Content */}
            <div className="space-y-2 sm:space-y-3 pt-1">
              <h3 className="font-semibold text-xl sm:text-2xl tracking-[-0.01em]">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {description}
              </p>

              {index === 0 ? (
                <Button
                  className="rounded-full text-sm sm:text-base mt-3 sm:mt-4"
                  size="lg"
                  asChild
                >
                  <Link
                    href={
                      "https://docs.google.com/forms/d/e/1FAIpQLSf-k7SDEs0sekfM0YoJJOmO7_6e7bDFgYinG664yeRKyPO6cQ/viewform"
                    }
                    target="_blank"
                  >
                    Apply Now <ArrowUpRight className="h-5 w-5 text-pink-400" />
                  </Link>
                </Button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
