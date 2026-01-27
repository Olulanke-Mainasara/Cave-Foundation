import React from "react";
import {
  Music,
  Palette,
  Scissors,
  Camera,
  Dumbbell,
  Mic2,
  Brush,
  Code,
  Heart,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

const Banner2 = () => {
  const icons = [
    {
      Icon: Music,
      position: "top-10 left-10",
      size: 40,
      rotation: 15,
      mobileSize: 24,
    },
    {
      Icon: Palette,
      position: "top-20 right-20",
      size: 35,
      rotation: -20,
      mobileSize: 22,
    },
    {
      Icon: Scissors,
      position: "top-1/4 left-1/4",
      size: 30,
      rotation: 45,
      mobileSize: 20,
    },
    {
      Icon: Camera,
      position: "top-1/3 right-1/3",
      size: 38,
      rotation: -15,
      mobileSize: 24,
    },
    {
      Icon: Dumbbell,
      position: "bottom-20 left-16",
      size: 42,
      rotation: 25,
      mobileSize: 26,
    },
    {
      Icon: Mic2,
      position: "bottom-1/4 right-1/4",
      size: 36,
      rotation: -30,
      mobileSize: 22,
    },
    {
      Icon: Brush,
      position: "top-40 left-1/2",
      size: 33,
      rotation: 60,
      mobileSize: 20,
    },
    {
      Icon: Code,
      position: "bottom-1/3 left-1/3",
      size: 35,
      rotation: -45,
      mobileSize: 22,
    },
    {
      Icon: Heart,
      position: "top-1/2 left-20",
      size: 28,
      rotation: 0,
      mobileSize: 18,
    },
    {
      Icon: Sparkles,
      position: "top-1/2 right-24",
      size: 32,
      rotation: 15,
      mobileSize: 20,
    },
    {
      Icon: Star,
      position: "bottom-40 right-12",
      size: 30,
      rotation: -25,
      mobileSize: 20,
    },
    {
      Icon: Zap,
      position: "bottom-10 left-1/2",
      size: 34,
      rotation: 35,
      mobileSize: 22,
    },
    {
      Icon: Music,
      position: "top-32 right-40",
      size: 28,
      rotation: -40,
      mobileSize: 18,
    },
    {
      Icon: Camera,
      position: "bottom-32 left-40",
      size: 31,
      rotation: 20,
      mobileSize: 20,
    },
    {
      Icon: Palette,
      position: "top-2/3 left-16",
      size: 36,
      rotation: -10,
      mobileSize: 22,
    },
    {
      Icon: Scissors,
      position: "bottom-16 right-1/3",
      size: 29,
      rotation: 50,
      mobileSize: 18,
    },
  ];

  return (
    <section className="min-h-[500px] sm:min-h-[600px] md:min-h-[700px] xl:h-[90vh] bg-stone-700 overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-4xl relative">
      {/* Scattered Icons */}
      {icons.map((item, index) => {
        const IconComponent = item.Icon;
        return (
          <div
            key={index}
            className={`absolute ${item.position} text-pink-400 opacity-20 animate-pulse`}
            style={{
              transform: `rotate(${item.rotation}deg)`,
              animationDelay: `${index * 0.2}s`,
              animationDuration: "3s",
            }}
          >
            <IconComponent
              size={item.size}
              strokeWidth={1.5}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
          </div>
        );
      })}

      <div className="absolute inset-0 backdrop-brightness-50 flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-5 text-white z-10">
        <div className="flex items-stretch gap-3 sm:gap-4 md:gap-5">
          <p className="max-w-xs sm:max-w-md md:max-w-[600px] lg:max-w-[700px] xl:max-w-[930px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center leading-relaxed sm:leading-relaxed md:leading-relaxed">
            From the <span className="text-pink-400">musician</span> recording
            beats at midnight, to the fashion{" "}
            <span className="text-pink-400">designer</span> sketching in class,
            to the <span className="text-pink-400">athlete</span> training in
            her backyard, to the content creator{" "}
            <span className="text-pink-400">building</span> her brand, we
            celebrate you all.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
