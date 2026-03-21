import React from 'react';

const EtWorkshops = () => {
  return (
    <section className="et-content-container py-20 lg:py-32 bg-white px-[5%]">
      <div className="max-w-6xl mx-auto et-section-content">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-text-primary mb-6 leading-[1.2]">
              Hydroponics Workshops
            </h2>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="bg-[#E8F5E9] text-[#2E7D32] px-4 py-1.5 rounded-full text-[0.85rem] font-semibold">
                Chandigarh, India
              </span>
              <span className="bg-[#E8F5E9] text-[#2E7D32] px-4 py-1.5 rounded-full text-[0.85rem] font-semibold">
                Online
              </span>
            </div>

            <p className="text-[1.1rem] text-[#555] leading-[1.8] mb-10 lg:pr-4">
              Farmcult's onsite training is designed to build real, practical hydroponics skills. Learn directly at our Chandigarh facility through hands on sessions and guided practice.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 mb-10">
              {/* List Items from Figma design mapping left column first then right column conceptually, or alternating */}
              {[
                "Fundamentals of hydroponics",
                "System selection & setup",
                "Nutrient management",
                "pH balancing",
                "Crop planning",
                "Practical troubleshooting"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#444] text-[1.05rem] leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[1.05rem] text-[#555] leading-[1.8] lg:pr-4">
              Workshops are available both online and offline, with a strong focus on clarity and real-world application.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <div className="pb-[70%] lg:pb-[75%] relative w-full overflow-hidden rounded-[2rem] group">
              <img
                src="/HyWorkshop.jpg"
                alt="Hydroponics Workshop"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                onError={(e) => { e.target.src = '/contactFromimg.jpg'; }}
              />
              <div className="absolute inset-0 bg-black/5 rounded-[2rem]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EtWorkshops;
