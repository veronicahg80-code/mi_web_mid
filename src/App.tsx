/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { VideoSection } from './components/VideoSection';
import { ProblemSolution } from './components/ProblemSolution';
import { CurriculumExplorer } from './components/CurriculumExplorer';
import { BonusesSection } from './components/BonusesSection';
import { RoiCalculator } from './components/RoiCalculator';
import { FitSection } from './components/FitSection';
import { ThreeSteps } from './components/ThreeSteps';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { PosterModal } from './components/PosterModal';
import { WhatsAppModal } from './components/WhatsAppModal';

export default function App() {
  const [posterModal, setPosterModal] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
  }>({
    isOpen: false,
    imageSrc: '',
    title: ''
  });

  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);

  const handleOpenPoster = (imageSrc: string, title: string) => {
    setPosterModal({
      isOpen: true,
      imageSrc,
      title
    });
  };

  const handleClosePoster = () => {
    setPosterModal(prev => ({ ...prev, isOpen: false }));
  };

  const handleScrollToVideo = () => {
    const el = document.getElementById('presentacion');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F5F3EF] flex flex-col font-sans">
      {/* 3-Zone Clean Header */}
      <Navbar onOpenConsult={() => setWhatsAppModalOpen(true)} />

      <main className="flex-1">
        {/* 1. Value Proposition Hero */}
        <Hero onWatchVideo={handleScrollToVideo} />

        {/* 2. Micro Marquee Strip */}
        <MarqueeStrip />

        {/* 3. Official Video Presentation Section */}
        <VideoSection />

        {/* 4. Empathy & Problem/Solution Diagnosis */}
        <ProblemSolution />

        {/* 5. Interactive 8-Module Syllabus Explorer */}
        <CurriculumExplorer onOpenPosterModal={handleOpenPoster} />

        {/* 6. High-Value Bonuses Showcase */}
        <BonusesSection onOpenPosterModal={handleOpenPoster} />

        {/* 7. Interactive ROI & Break-even Simulator */}
        <RoiCalculator />

        {/* 8. Ethical Qualification (Who it is for vs Who it is not for) */}
        <FitSection />

        {/* 9. Simple 3-Step Journey */}
        <ThreeSteps />

        {/* 10. Real Student Testimonials & Case Studies */}
        <TestimonialsSection />

        {/* 11. Epicenter Offer & Hotmart Checkout */}
        <OfferSection />

        {/* 11. Searchable FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Professional Legal Footer */}
      <Footer />

      {/* Sticky Bottom Bar on Mobile (Compliant <15% height) */}
      <StickyMobileBar />

      {/* Modals */}
      <PosterModal
        isOpen={posterModal.isOpen}
        onClose={handleClosePoster}
        imageSrc={posterModal.imageSrc}
        title={posterModal.title}
      />

      <WhatsAppModal
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
      />
    </div>
  );
}
