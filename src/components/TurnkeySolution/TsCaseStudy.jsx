import React from 'react';

const TsCaseStudy = () => {
  return (
    <section className="ts-casestudy-container py-20 lg:py-28 bg-[#FAFAFA] px-[5%]">
      <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-center justify-end p-8 lg:p-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/ourSolutionCard2.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/10 z-0"></div>

        {/* Floating Card */}
        <div className="ts-casestudy-card relative z-10 bg-white rounded-3xl p-8 lg:p-12 w-full max-w-[450px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col justify-start">
          <span className="inline-block bg-green-100 text-green-700 text-[0.8rem] font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-wide self-start">
            Case Study
          </span>
          <h3 className="text-[2.2rem] lg:text-[2.8rem] font-bold text-text-primary leading-[1.1] mb-6 font-outfit">
            2 Acres.<br />24,000 Plants.
          </h3>
          <p className="text-[1.05rem] text-[#555] leading-[1.8] mb-10">
            What was once idle land is now a working hydroponic farm. Results from Farmcult's first operational hydroponic farm in Garhmukteshwar.
          </p>
          <p className="text-green-600 font-bold text-[1.1rem]">
            Jan 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default TsCaseStudy;
