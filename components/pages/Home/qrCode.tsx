import Image from "next/image";
import QrCodeImg from "@/public/Home/qr-code.jpg";
import { ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const QrCode = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10">
      {/* Left Side - Text and Button */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 gap-4 sm:gap-5 order-2 lg:order-1">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold w-fit max-w-full sm:max-w-md md:max-w-lg lg:max-w-[500px] flex  items-center justify-center gap-2 text-center">
          Scan to <span className="text-pink-400">apply</span>{" "}
          <ArrowUp className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 shrink-0 lg:hidden" />
          <ArrowRight className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 shrink-0 hidden lg:block" />
        </p>

        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
          OR
        </p>

        <Button
          className="rounded-full text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl px-8 sm:px-12 md:px-16 h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 cursor-pointer"
          asChild
        >
          <Link
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSf-k7SDEs0sekfM0YoJJOmO7_6e7bDFgYinG664yeRKyPO6cQ/viewform"
            }
            target="_blank"
          >
            Apply Now <ArrowUpRight className="text-pink-400 lg:size-10" />
          </Link>
        </Button>
      </div>

      {/* Right Side - QR Code */}
      <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <Image
            src={QrCodeImg}
            alt="QR code to apply for CAVE Foundation scholarship"
            className="w-full h-auto rounded-2xl sm:rounded-3xl md:rounded-4xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default QrCode;
