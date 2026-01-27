import { NavMenu } from "@/components/nav/nav-menu";
import { NavigationSheet } from "@/components/nav/navigation-sheet";
import Image from "next/image";
import logoImg from "@/public/logo.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ThemeToggler from "./theme-toggler";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background w-full fixed xl:top-5 xl:w-fit z-50 xl:rounded-r-4xl">
      <div className="flex h-full items-center justify-between px-4 md:px-5">
        <div className="flex items-center justify-between xl:justify-start gap-12 w-full">
          <Image src={logoImg} alt="Logo" className="w-24 h-full" />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-4">
            <ThemeToggler />

            <Button
              className="hidden md:flex rounded-full text-base"
              size="lg"
              asChild
            >
              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSf-k7SDEs0sekfM0YoJJOmO7_6e7bDFgYinG664yeRKyPO6cQ/viewform"
                }
                target="_blank"
              >
                Apply Now <ArrowUpRight className="h-5! w-5! text-pink-400" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
