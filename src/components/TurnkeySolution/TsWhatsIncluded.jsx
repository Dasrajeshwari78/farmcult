import React from 'react';

const TsWhatsIncluded = () => {
  return (
    <section className="ts-content-container py-20 lg:py-32 px-[5%]">
      <div className="max-w-6xl mx-auto ts-section-content">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-text-primary mb-8 leading-[1.2]">
              What's Included in our<br className="hidden md:block" /> Turnkey Solution?
            </h2>
            
            <p className="text-[1.1rem] text-[#555] leading-[1.8] mb-10 lg:pr-4">
              Farmcult's turnkey model covers every stage of setting up a high-tech hydroponic farm. From design and infrastructure to crop planning and operational readiness.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
              {/* List Items */}
              {[
                "Farm design & layout",
                "Automation & climate control",
                "Polyhouse construction",
                "Crop planning & agronomy",
                "Hydroponic system installation",
                "Market linkages post-harvest"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#444] text-[1.05rem] leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <div className="pb-[65%] lg:pb-[75%] relative w-full overflow-hidden rounded-[2rem] group">
              <img 
                src="/blogs/WhyHydroponicsFarmsFail.jpg" 
                alt="Turnkey Hydroponic Farm" 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                onError={(e) => { e.target.src = '/ourSolutionCard3.jpg'; }}
              />
              <div className="absolute inset-0 bg-black/5 rounded-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TsWhatsIncluded;
