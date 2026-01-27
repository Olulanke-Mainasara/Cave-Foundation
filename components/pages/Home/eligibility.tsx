import React from "react";
import { Check } from "lucide-react";

export default function Eligibility() {
  const criteria = [
    "Females Aged 16-22",
    "Nigerian Citizen",
    "Demonstrated passion and commitment",
    "Clear vision for use of funds",
    "First 250 Applicants",
  ];

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          {/* Right side on mobile, Left on desktop - Heading */}
          <div className="flex-0 w-full flex items-center justify-center lg:order-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-center lg:text-left leading-tight">
              Eligibility <br className="hidden xl:block" />
              <span className="text-pink-400">criteria</span>
            </h2>
          </div>

          {/* Left side on mobile, Right on desktop - Criteria boxes */}
          <div className="flex-1 w-full lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {criteria.map((criterion, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-neutral-800 rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-5 md:p-6 flex items-center gap-3 sm:gap-4 border-l-4 border-pink-500 hover:scale-105 transform"
                >
                  <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-stone-700 rounded-full flex items-center justify-center">
                    <Check
                      className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                      strokeWidth={3}
                    />
                  </div>
                  <p className="font-medium text-base sm:text-lg">
                    {criterion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
