import Banner from "@/components/pages/Home/banner";
import Eligibility from "@/components/pages/Home/eligibility";
import Hero from "@/components/pages/Home/hero";
import HowItWorks from "@/components/pages/Home/howItWorks";
import Banner2 from "@/components/pages/Home/banner2";
import Stats from "@/components/pages/Home/stats";
import Benefits from "@/components/pages/Home/benefits";
import Mission from "@/components/pages/Home/mission";
import QrCode from "@/components/pages/Home/qrCode";

export default function Home() {
  return (
    <main className="min-h-screen px-4 md:px-5 space-y-28">
      <Hero />
      <Stats />
      <Banner />
      <Benefits />
      <Eligibility />
      <Banner2 />
      <HowItWorks />
      <Mission />
      <QrCode />
    </main>
  );
}
