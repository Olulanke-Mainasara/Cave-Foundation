import Image from "next/image";
import bannerImg from "@/public/Home/banner.png";

const Banner = () => {
  return (
    <section className="h-[500px] sm:min-h-[600px] md:min-h-[700px] xl:h-[90vh] bg-pink-200 overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-4xl relative">
      <Image
        placeholder="blur"
        src={bannerImg}
        alt="Three empowered young Nigerian women"
        className="w-full h-full object-cover object-top"
      />

      <div className="absolute inset-0 backdrop-brightness-50 flex flex-col justify-between pt-4 pl-4 sm:pt-6 sm:pl-6 md:pt-8 md:pl-8 lg:pt-5 lg:pl-5">
        {/* Welcome Text - Top */}
        <div className="max-w-full">
          <p className="sm:text-2xl lg:text-3xl xl:text-5xl max-w-[20ch] sm:max-w-xs md:max-w-md lg:max-w-96 text-white leading-tight">
            Welcome to the{" "}
            <span className="block text-pink-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] leading-none mt-2">
              CAVE
            </span>
          </p>
        </div>

        {/* Mission Statement - Bottom */}
        <div className="flex justify-center sm:justify-end">
          <p className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-[530px] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl bg-background p-4 sm:p-5 md:p-6 lg:p-5 rounded-tl-2xl sm:rounded-tl-3xl md:rounded-tl-4xl">
            At <span className="text-pink-400 font-semibold">CAVE</span>, we
            believe that success isn&apos;t a one-size-fits-all. We are here to
            celebrate the young girls and women who never gave up on their
            creative dream; we celebrate{" "}
            <span className="text-pink-400 font-semibold">YOU</span>!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
