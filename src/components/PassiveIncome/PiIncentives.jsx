import React from 'react';

const PiIncentives = () => {
  return (
    <section className="py-20 lg:py-28 bg-white px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-text-primary mb-6 leading-[1.2]">
              Government Incentives<br />Reduce Your Initial Investment
            </h2>
            <p className="text-[1.1rem] text-[#555] leading-[1.8] mb-8">
              Eligible hydroponic projects can receive capital subsidies of up to 50%, helping reduce initial investment and improve long-term viability.
            </p>
            <p className="text-[0.85rem] text-[#888] italic">
              *Availability depends on project eligibility and applicable state or central government schemes.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="pb-[60%] lg:pb-[65%] relative w-full overflow-hidden rounded-3xl group">
              <img
                src="/ourSolutionCard3.jpg"
                alt="Government Incentives"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/5 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PiIncentives;
