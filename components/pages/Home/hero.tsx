import { ArrowUpRight, List } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import mainHeroImg from "@/public/Home/main-hero-2.png";
import sideHeroImg from "@/public/Home/side-hero.webp";
import sideHeroImg2 from "@/public/Home/side-hero-2.jpg";

export default function Hero() {
  return (
    <section className="flex xl:h-screen items-center justify-center overflow-hidden pt-20 xl:py-8 xl:mb-16">
      <div className="mx-auto flex h-full w-full max-w-(--breakpoint-2xl) flex-col xl:flex-row gap-8 md:gap-12">
        {/* Left Content Section */}
        <div className="my-auto w-full xl:w-1/2 flex flex-col items-center xl:items-start text-center xl:text-left">
          <Badge
            asChild
            className="rounded-full border-border px-3 py-1 text-sm"
            variant="secondary"
          >
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSf-k7SDEs0sekfM0YoJJOmO7_6e7bDFgYinG664yeRKyPO6cQ/viewform"
              target="_blank"
            >
              Application is open<span className="text-pink-400">!</span>
            </Link>
          </Badge>

          <h1 className="mt-6 max-w-[15ch] xl:max-w-[22ch] font-semibold text-4xl md:text-7xl lg:text-8xl xl:text-[5.5rem] leading-[1.2] tracking-[-0.035em]">
            Support for <span className="text-pink-400">Young</span>{" "}
            <span className="text-pink-400">Nigerian</span> Women
          </h1>

          <p className="mt-4 sm:mt-6 max-w-[50ch] text-foreground/80 text-base sm:text-lg px-4 xl:px-0">
            This scholarship supports passion projects and skill development
            across creative, fashion, sports, and other talent-driven fields.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto px-4 xl:px-0">
            <Button
              className="rounded-full text-base w-full sm:w-auto"
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
            <Button
              className="rounded-full text-base shadow-none w-full sm:w-auto"
              size="lg"
              variant="outline"
            >
              <List className="h-5 w-5" /> Full Details
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="h-[400px] sm:h-[500px] md:h-[600px] xl:h-full w-full xl:w-1/2 rounded-3xl sm:rounded-4xl bg-accent relative overflow-hidden">
          {/* Top Left Corner Image */}
          <div className="absolute top-0 left-0 rounded-br-3xl sm:rounded-br-4xl rounded-tl-3xl sm:rounded-tl-4xl border-r-8 sm:border-r-12 md:border-r-20 border-b-8 sm:border-b-12 md:border-b-20 aspect-square bg-accent border-background dark:border-background w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 overflow-hidden">
            <Image
              src={sideHeroImg}
              alt="Young woman pursuing creative passion"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Bottom Right Corner Image */}
          <div className="absolute bottom-0 right-0 rounded-tl-3xl sm:rounded-tl-4xl rounded-br-3xl sm:rounded-br-4xl border-l-8 sm:border-l-12 md:border-l-20 border-t-8 sm:border-t-12 md:border-t-20 aspect-square bg-accent border-background dark:border-background w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 overflow-hidden">
            <Image
              src={sideHeroImg2}
              alt="Young woman in sports activities"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Main Center Image */}
          <Image
            src={mainHeroImg}
            alt="Empowered young Nigerian woman"
            className="h-full w-full object-cover object-center sm:object-left md:object-top xl:object-left"
          />
        </div>
      </div>
    </section>
  );
}
