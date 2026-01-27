import whatWeOfferImg from "@/public/Home/what-we-offer-1.jpg";
import whatWeOfferImg2 from "@/public/Home/what-we-offer-2.png";
import whatWeOfferImg3 from "@/public/Home/what-we-offer-3.jpg";
import { DollarSign, Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Passion Projects",
    description:
      "Turn your creative dreams into reality with funding to kickstart projects that fuel your passion.",
    image: whatWeOfferImg,
    icon: <Sparkles className="text-pink-400" />,
  },
  {
    title: "Skill Development",
    description:
      "Access resources and opportunities to refine your talents and learn new techniques in your chosen field.",
    image: whatWeOfferImg2,
    icon: <TrendingUp className="text-pink-400" />,
  },
  {
    title: "Financial Support",
    description:
      "Receive ₦500,000 to cover equipment, training, materials, or any resources you need, to achieve your goals.",
    image: whatWeOfferImg3,
    icon: <DollarSign className="text-pink-400" />,
  },
];

const Benefits = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="w-full grow sm:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg) xl:max-w-(--breakpoint-2xl)">
        <div className="flex items-center justify-center gap-5">
          <div className="w-40 h-2 bg-pink-400 rounded-l-4xl"></div>
          <h2 className="text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-center">
            Benefits
          </h2>
          <div className="w-40 h-2 bg-pink-400 rounded-r-4xl"></div>
        </div>

        <div className="mt-10 grid w-full gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              className="flex w-full flex-col text-start"
              key={feature.title}
            >
              <div className="mb-5 aspect-4/5 w-full rounded-xl bg-muted sm:mb-6 overflow-hidden">
                <Image
                  placeholder="blur"
                  src={feature.image}
                  alt={feature.title}
                  className="h-full object-cover w-full hover:scale-105 duration-300 object-top"
                />
              </div>
              <span className="font-semibold text-2xl xl:text-4xl flex items-center justify-center gap-2 text-center tracking-[-0.015em]">
                {feature.icon}
                {feature.title}
              </span>
              <p className="mt-2 text-[17px] text-center max-w-[350px] mx-auto text-foreground/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
