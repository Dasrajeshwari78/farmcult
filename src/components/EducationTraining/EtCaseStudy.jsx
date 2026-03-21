import React from 'react';

const EtCaseStudy = () => {
  return (
    <section className="et-case-study-container py-20 lg:py-24 bg-white px-[5%]">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative w-full rounded-[24px] lg:rounded-[32px] overflow-hidden min-h-[500px] lg:min-h-[640px] flex items-center justify-center lg:justify-end shadow-[0_4px_24px_rgba(0,0,0,0.06)] group">
          {/* Background Image */}
          <img
            src="/case-studies/case-study3.jpg"
            alt="Kids Explore the Magic of Growing Without Soil"
            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            onError={(e) => { e.target.src = '/ourSolutionCard2.jpg'; }}
          />

          {/* Overlay Gradient (adds deeper contrast if needed, but the original was plain) */}
          <div className="absolute inset-0 bg-black/5"></div>

          {/* Content Card */}
          <div className="relative z-10 bg-white rounded-[24px] p-10 lg:p-14 w-[90%] sm:w-[80%] lg:w-[480px] my-12 lg:my-0 lg:mr-16 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
            <span className="inline-block bg-[#E8F5E9] text-[#2E7D32] px-4 py-1.5 rounded-full text-[0.85rem] font-semibold mb-6">
              Case Study
            </span>

            <h2 className="text-[2rem] lg:text-[2.4rem] font-bold text-[#111827] leading-[1.2] mb-5 tracking-tight">
              Kids Explore the<br className="hidden sm:block" /> Magic of Growing<br className="hidden sm:block" /> Without Soil
            </h2>

            <p className="text-[1.05rem] text-[#4B5563] leading-[1.65] mb-12">
              A fun and educational workshop at Elante Mall introducing children to hydroponics, urban farming, and healthy eating
            </p>

            <div className="text-[#2E7D32] font-semibold text-[1.05rem]">
              Jan 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtCaseStudy;
