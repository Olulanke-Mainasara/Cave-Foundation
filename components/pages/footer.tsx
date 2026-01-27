import Image from "next/image";
import footerImg from "@/public/footer.png";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-background via-background via-20% to-pink-400 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
      <p className="text-center text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 md:mb-8 px-4">
        © 2026 CAVE Foundation. All rights reserved.
      </p>

      <p className="text-7xl md:text-[150px] lg:text-[200px] text-center leading-tight px-4 sm:px-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        The <span className="text-pink-400">CAVE</span>.
      </p>

      <div className="w-full">
        <Image
          placeholder="blur"
          src={footerImg}
          alt="Four empowered young Nigerian women showcasing diverse talents and styles"
          className="w-full h-auto object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
