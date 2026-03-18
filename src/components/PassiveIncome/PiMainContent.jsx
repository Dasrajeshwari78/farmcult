import React from 'react';

const PiMainContent = () => {
  return (
    <section className="pi-content-container py-[100px] lg:py-[140px] px-[5%]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <h2 className="pi-section-title text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-text-primary mb-6 leading-[1.2]">
            Earn Tax-Free Without Moving a Finger
          </h2>
          <p className="pi-section-desc text-[#555] text-[1.1rem] leading-[1.8]">
            We manage setup, cultivation, monitoring, and operations enabling stable returns without day to day involvement.
          </p>
        </div>

        {/* Stats / Features Layout */}
        <div className="pi-stats-grid grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12 relative">
          {/* Divider lines conceptually visible on desktop */}
          <div className="hidden md:block absolute top-[10%] bottom-[10%] left-[33%] w-[1px] bg-gray-200"></div>
          <div className="hidden md:block absolute top-[10%] bottom-[10%] left-[66%] w-[1px] bg-gray-200"></div>

          {/* Feature 1 */}
          <div className="pi-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 group flex-1">
            <h3 className="text-[clamp(2rem,2.8vw,2.5rem)] font-semibold text-text-primary mb-3">
              Up to 50%
            </h3>
            <p className="text-[1.2rem] font-medium text-[#444] mb-3">Capital Subsidy</p>
            <p className="text-[1rem] text-[#666] leading-[1.6]">
              Available under National Horticulture Board schemes for eligible projects.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="pi-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 group flex-1">
            <h3 className="text-[clamp(2rem,2.8vw,2.5rem)] font-semibold text-text-primary mb-3">
              3% <span className="text-[1.3rem] font-medium text-[#444] tracking-normal inline-block ml-1">Interest Subsidy</span>
            </h3>
            <p className="text-[1.2rem] font-medium text-[#444] mb-3">Available</p>
            <p className="text-[1rem] text-[#666] leading-[1.6]">
              Loan interest support available under the Agriculture Infrastructure Fund scheme.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="pi-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 group flex-1">
            <h3 className="text-[clamp(2rem,2.8vw,2.5rem)] font-semibold text-text-primary mb-3">
              Tax-Free
            </h3>
            <p className="text-[1.2rem] font-medium text-[#444] mb-3">Returns</p>
            <p className="text-[1rem] text-[#666] leading-[1.6]">
              Agricultural income qualifies for tax exemptions under Indian law.
            </p>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="pi-whats-included mt-24 md:mt-32 pt-16 md:pt-24 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-bold text-text-primary mb-8 leading-[1.2]">
                What's Included in our<br className="hidden md:block" /> Passive Income Solution?
              </h2>

              <p className="text-[1.1rem] text-[#555] leading-[1.8] mb-6">
                Farmcult's passive income model is designed for investors and landowners who want exposure to modern agriculture without managing daily farm operations.
              </p>

              <p className="text-[1.1rem] text-[#555] leading-[1.8] mb-10">
                We handle the setup, cultivation, monitoring, and farm management while you benefit from a structured agricultural asset.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6">
                {/* List Item 1 */}
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#444] text-[1.05rem]">End-to-end farm setup</span>
                </div>

                {/* List Item 4 */}
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#444] text-[1.05rem]">Farm operations management</span>
                </div>

                {/* List Item 2 */}
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#444] text-[1.05rem]">IoT monitoring &amp; reporting</span>
                </div>

                {/* List Item 5 */}
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#444] text-[1.05rem]">Crop planning &amp; yield optimisation</span>
                </div>

                {/* List Item 3 */}
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#444] text-[1.05rem]">Market linkage &amp; sales coordination</span>
                </div>

                {/* List Item 6 */}
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#444] text-[1.05rem]">Ongoing performance oversight</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
              <div className="pb-[60%] lg:pb-[70%] relative w-full h-full overflow-hidden rounded-3xl group">
                <img
                  src="/ourSolutionCard2.jpg"
                  alt="Passive Income Farming"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/5 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PiMainContent;
