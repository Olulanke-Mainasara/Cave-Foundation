const Stats = () => {
  return (
    <section className="mx-auto max-w-(--breakpoint-xl) text-center px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-evenly items-center gap-8 sm:gap-x-6 md:gap-x-8 lg:gap-x-12 gap-y-10 sm:gap-y-12 md:gap-y-16">
        {/* Applicants Stat */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center">
          <span className="font-semibold text-7xl lg:text-8xl xl:text-9xl">
            20<span className="text-pink-400">+</span>
          </span>
          <p className="text-lg sm:text-xl md:text-2xl">Applicants</p>
        </div>

        {/* Scholarships Stat */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center">
          <span className="font-semibold text-7xl lg:text-8xl xl:text-9xl">
            ₦500<span className="text-pink-400">,</span>000
          </span>
          <p className="text-lg sm:text-xl md:text-2xl">Scholarships</p>
        </div>

        {/* Winners Stat */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center">
          <span className="font-semibold text-7xl lg:text-8xl xl:text-9xl text-pink-400">
            2
          </span>
          <p className="text-lg sm:text-xl md:text-2xl">Winners</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
