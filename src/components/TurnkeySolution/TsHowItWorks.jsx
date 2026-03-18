import React from 'react';

const TsHowItWorks = () => {
  return (
    <section className="ts-howitworks-container py-20 lg:py-28 bg-white px-[5%]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="ts-hiw-header text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-text-primary mb-6">
            How It Works
          </h2>
          <p className="ts-hiw-header text-[1.1rem] text-[#555] leading-[1.8]">
            We follow a clear, step-by-step process to set up your hydroponic farm. Farmcult manages each stage with clear timelines and support.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12 relative w-full items-start">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-[1px] border-t border-dashed border-gray-300 z-0"></div>

          {/* Step 1 */}
          <div className="ts-hiw-step flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                1
              </div>
              <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {/* Map marker / search icon for site feasibility */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-text-primary text-[1.05rem] mb-2 leading-[1.3] px-1">Site<br className="hidden lg:block" /> Feasibility</h3>
            <p className="text-[0.85rem] text-[#666] leading-relaxed px-2">Land and resource assessment</p>
          </div>

          {/* Step 2 */}
          <div className="ts-hiw-step flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                2
              </div>
              <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {/* Document icon for paperwork */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-text-primary text-[1.05rem] mb-2 leading-[1.3] px-1">Paperwork &<br className="hidden lg:block" /> Planning</h3>
            <p className="text-[0.85rem] text-[#666] leading-relaxed px-2">Documentation and farm planning</p>
          </div>

          {/* Step 3 */}
          <div className="ts-hiw-step flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                3
              </div>
              <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {/* Tools/hammer icon for construction */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-text-primary text-[1.05rem] mb-2 leading-[1.3] px-1">Construction &<br className="hidden lg:block" /> Installation</h3>
            <p className="text-[0.85rem] text-[#666] leading-relaxed px-2">Greenhouse and system setup</p>
          </div>

          {/* Step 4 */}
          <div className="ts-hiw-step flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                4
              </div>
              <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {/* Sprout/leaf icon for planting */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            </div>
            <h3 className="font-semibold text-text-primary text-[1.05rem] mb-2 leading-[1.3] px-1">Crops<br className="hidden lg:block" /> Planted</h3>
            <p className="text-[0.85rem] text-[#666] leading-relaxed px-2">Crop plantation begins</p>
          </div>

          {/* Step 5 */}
          <div className="ts-hiw-step flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                5
              </div>
              <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {/* Basket/harvest icon for harvested */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="font-semibold text-text-primary text-[1.05rem] mb-2 leading-[1.3] px-1">Crops<br className="hidden lg:block" /> Harvested</h3>
            <p className="text-[0.85rem] text-[#666] leading-relaxed px-2">Crops grown and harvested</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TsHowItWorks;
