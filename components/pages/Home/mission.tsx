import Image from "next/image";
import missionImg from "@/public/Home/mission-1.png";
import missionImg2 from "@/public/Home/mission-2.jpg";
import missionImg3 from "@/public/Home/mission-3.jpg";

const Mission = () => {
  return (
    <section className="xl:h-[80vh] flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10">
      {/* Image Grid Section */}
      <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] lg:h-full flex items-center">
        <div className="grid grid-cols-2 grid-rows-5 gap-2 sm:gap-3 md:gap-4 lg:gap-1 h-full w-full">
          {/* Top Right Image */}
          <div className="col-start-2 row-start-1 row-span-2 bg-gray-300 rounded-r-2xl sm:rounded-r-3xl md:rounded-r-4xl overflow-hidden">
            <Image
              src={missionImg}
              alt="Creative young woman expressing herself"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Left Full Height Image */}
          <div className="col-start-1 row-start-1 row-span-5 bg-gray-300 rounded-tl-2xl rounded-bl-2xl sm:rounded-tl-3xl sm:rounded-bl-3xl md:rounded-tl-4xl md:rounded-bl-4xl overflow-hidden">
            <Image
              src={missionImg2}
              alt="Authentic young woman being herself"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="col-start-2 row-start-4 row-span-2 bg-gray-300 rounded-r-2xl sm:rounded-r-3xl md:rounded-r-4xl overflow-hidden">
            <Image
              src={missionImg3}
              alt="Young woman showcasing her talent"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2">
        <p className="text-4xl md:text-7xl xl:text-7xl font-extralight leading-tight text-center lg:text-left">
          Be authentic.
          <span className="block text-5xl md:text-8xl xl:text-8xl font-serif mt-2 italic">
            Be <span className="text-pink-400">creative</span>.
          </span>
          <span className="block text-5xl md:text-8xl md:max-w-2xl xl:text-[6.5rem] font-bold mt-2 not-italic">
            Show us who <span className="text-pink-400">you</span> really are.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Mission;
