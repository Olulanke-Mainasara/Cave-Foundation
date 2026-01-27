"use client";

import { useState } from "react";
import {
  Music,
  Palette,
  Dumbbell,
  Camera,
  Code,
  Sparkles,
  CheckCircle,
  Award,
  Wallet,
  Users,
  Target,
  ChevronDown,
} from "lucide-react";
import QrCode from "@/components/pages/Home/qrCode";
import Image from "next/image";
import detailsImg from "@/public/details.png";

export default function ScholarshipDetails() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fields = [
    {
      icon: Music,
      title: "Music & Performance",
      description: "Recording, instruments, studio time, music lessons",
    },
    {
      icon: Palette,
      title: "Creative Arts",
      description: "Painting, drawing, digital art, art supplies",
    },
    {
      icon: Sparkles,
      title: "Fashion Design",
      description: "Sewing equipment, fabrics, fashion courses",
    },
    {
      icon: Dumbbell,
      title: "Sports & Athletics",
      description: "Training equipment, coaching, competitions",
    },
    {
      icon: Camera,
      title: "Content Creation",
      description: "Cameras, editing software, equipment",
    },
    {
      icon: Code,
      title: "Technology",
      description: "Coding bootcamps, software, tech equipment",
    },
  ];

  const timeline = [
    {
      date: "Jan 1 - Jan 25, 2026",
      title: "Application Period",
      description: "Submit your application online",
    },
    {
      date: "Jan 26 - Feb 5, 2026",
      title: "Review Process",
      description: "Applications evaluated by our team",
    },
    {
      date: "Feb 10, 2026",
      title: "Winners Announced",
      description: "Two winners notified via email and phone",
    },
    {
      date: "Feb 15 - Feb 20, 2026",
      title: "Fund Disbursement",
      description: "₦500,000 transferred to each winner",
    },
  ];

  const criteria = [
    {
      icon: Users,
      title: "Passion & Commitment",
      description: "Demonstrated dedication to your chosen field",
    },
    {
      icon: Target,
      title: "Clear Vision",
      description: "Well-defined goals and plan for fund usage",
    },
    {
      icon: CheckCircle,
      title: "Eligibility",
      description: "Female, 16-22 years, Nigerian citizen",
    },
    {
      icon: Sparkles,
      title: "Creativity",
      description: "Unique approach and innovative thinking",
    },
  ];

  const faqs = [
    {
      question: "Who can apply for this scholarship?",
      answer:
        "The scholarship is open to Nigerian females aged 16-22 who have demonstrated passion and commitment in creative, fashion, sports, or other talent-driven fields. You must be among the first 250 applicants.",
    },
    {
      question: "What can I use the ₦500,000 for?",
      answer:
        "You can use the funds for anything that supports your passion project: equipment, training, courses, materials, software, studio time, coaching, competitions, or any other resources needed to develop your skills and pursue your goals.",
    },
    {
      question: "How many winners will be selected?",
      answer:
        "Two outstanding applicants will be selected as winners, each receiving ₦500,000 to invest in their passion projects and skill development.",
    },
    {
      question: "When is the application deadline?",
      answer:
        "Applications close on January 25, 2026. Only the first 250 applicants will be considered, so we encourage you to apply as early as possible.",
    },
    {
      question: "How will I know if I've been selected?",
      answer:
        "Winners will be announced on February 10, 2026, and will be notified directly via email and phone. We will also announce the winners on our social media platforms.",
    },
    {
      question: "Do I need to submit any documents with my application?",
      answer:
        "You'll need to provide basic personal information and clearly explain your passion project, goals, and how you plan to use the scholarship funds. Any supporting materials that showcase your work or commitment are welcome but not required.",
    },
    {
      question: "Can I apply if I'm still in school?",
      answer:
        "Yes! We encourage students to apply. Your age and citizenship are the main eligibility requirements, regardless of your current educational status.",
    },
    {
      question: "What if my field isn't listed in the examples?",
      answer:
        "We support all talent-driven fields! If you have a passion project that doesn't fit the common categories (music, fashion, sports, etc.), you're still encouraged to apply. We celebrate all forms of creativity and talent.",
    },
  ];

  return (
    <main className="min-h-screen xl:px-5 max-w-6xl mx-auto">
      {/* Header */}
      <section className="bg-pink-400 text-white pb-20 pt-32 rounded-b-[100px] xl:rounded-b-[200px]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">
            Scholarship
            <br /> Program Details
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-sm md:max-w-2xl mx-auto opacity-90 px-4">
            Everything you need to know about the CAVE Foundation Scholarship
            for Young Nigerian Women
          </p>
        </div>
      </section>

      <section className="px-4 md:px-5">
        {/* Program Overview */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8">
              Program <span className="text-pink-400">Overview</span>
            </h2>
            <div className="flex flex-col md:flex-row md:max-h-[60dvh] xl:max-h-full overflow-hidden rounded-4xl">
              <Image
                placeholder="blur"
                src={detailsImg}
                alt="3 empowered Black women"
                className="object-cover md:w-1/2"
              />
              <div className="md:bg-white dark:bg-neutral-800 p-5 md:w-1/2 flex flex-col gap-4 justify-center xl:text-lg">
                <p className="leading-relaxed">
                  The <span className="text-pink-400">CAVE</span> Foundation
                  Scholarship is designed to empower young Nigerian women aged
                  <span className="text-pink-400">16-22</span> to pursue their
                  passions without financial constraints. We believe that
                  talent, creativity, and dedication deserve support, regardless
                  of traditional academic paths.
                </p>
                <p className="leading-relaxed">
                  This scholarship{" "}
                  <span className="text-pink-400">supports</span> passion
                  projects and skill development across creative, fashion,
                  sports, and other{" "}
                  <span className="text-pink-400">talent-driven</span> fields.
                  Whether you&apos;re a musician dreaming of a professional
                  studio session, an athlete needing quality training equipment,
                  a fashion designer requiring materials and tools, or a content
                  creator seeking better equipment, we&apos;re here to help make
                  it happen.
                </p>
                <p className="hidden lg:block leading-relaxed">
                  Our <span className="text-pink-400">mission</span> is simple:
                  celebrate and support young women who never gave up on their
                  creative dreams. We&apos;re here to celebrate{" "}
                  <span className="text-pink-400">YOU</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fields Covered */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8 md:mb-12">
              Fields We <span className="text-pink-400">Support</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {fields.map((field, index) => {
                const IconComponent = field.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-pink-400 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
                      {field.title}
                    </h3>
                    <p className="text-sm sm:text-base">{field.description}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-base sm:text-lg text-muted-foreground mt-8 sm:mt-10 md:mt-12 italic">
              ...and many more! If your passion isn&apos;t listed here,
              you&apos;re still encouraged to apply.
            </p>
          </div>
        </section>

        {/* Prize Details */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8 md:mb-12">
              <span className="text-pink-400">Prize</span> Details
            </h2>
            <div className="bg-pink-400 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 text-white mb-8 sm:mb-10 md:mb-12">
              <div className="text-center mb-6 sm:mb-8">
                <Award className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6" />
                <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 sm:mb-4">
                  ₦500,000
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl opacity-90">
                  Per Winner
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-pink-500">
                <Wallet className="w-10 h-10 sm:w-12 sm:h-12 text-pink-500 mb-4" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  What You Can Use It For
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                    <span>Professional equipment and tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                    <span>Training, courses, and workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                    <span>Materials and supplies for your craft</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                    <span>Studio time or workspace rental</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                    <span>Competition fees or entry costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                    <span>Software, apps, or digital resources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                    <span>Any other resources to support your passion</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border-l-4 border-purple-500">
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-purple-500 mb-4" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                  No Strings Attached
                </h3>
                <p className="text-sm sm:text-base leading-relaxed mb-4">
                  This is your money to invest in your dreams. We trust you to
                  use it wisely to advance your passion and skills. There are no
                  complex requirements or rigid restrictions—just a commitment
                  to pursuing excellence in your chosen field.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  We only ask that you stay dedicated to your craft and continue
                  working toward your goals. Your success is our success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-12 sm:py-16 md:py-20 max-w-2xl mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8 md:mb-12">
              Program <span className="text-pink-400">Timeline</span>
            </h2>
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-4 sm:left-6 md:left-1/2 w-0.5 bg-pink-400 hidden sm:block" />
              <div className="space-y-8 sm:space-y-12 flex flex-col items-center md:block">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4"
                  >
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "sm:text-right" : "sm:order-2"
                      }`}
                    >
                      <div className="bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all">
                        <p className="text-pink-500 font-semibold text-sm sm:text-base mb-1 sm:mb-2">
                          {item.date}
                        </p>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-full items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg z-10">
                      {index + 1}
                    </div>
                    <div className="flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Selection Criteria */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8 md:mb-12">
              Selection <span className="text-pink-400">Criteria</span>
            </h2>
            <p className="text-center text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
              We&apos;re looking for young women who demonstrate exceptional
              passion and commitment to their chosen field. Here&apos;s what
              matters most:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 sm:gap-8">
              {criteria.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-pink-500"
                  >
                    <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-pink-500 mb-4" />
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 sm:py-16 md:pt-20 md:pb-40">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8 md:mb-12">
              Frequently Asked <span className="text-pink-400">Questions</span>
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border rounded-xl sm:rounded-2xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-4 sm:p-6 flex items-center justify-between hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-pink-500 shrink-0 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-4 sm:px-6 pt-1 pb-4 sm:pb-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <QrCode />
    </main>
  );
}
