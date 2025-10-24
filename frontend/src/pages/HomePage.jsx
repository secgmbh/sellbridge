import React from 'react';
import HeroSection from '../components/HeroSection';
import MarketplacesSection from '../components/MarketplacesSection';
import ServicesSection from '../components/ServicesSection';
import BenefitsSection from '../components/BenefitsSection';
import ProcessSection from '../components/ProcessSection';
import DashboardSection from '../components/DashboardSection';
import StatsSection from '../components/StatsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MarketplacesSection />
      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <DashboardSection />
      <StatsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default HomePage;