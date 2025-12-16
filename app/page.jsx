'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { viet } from './fonts';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const pageVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay,
    },
  }),
};

const Container = ({ className = '', children }) => (
  <div
    className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}
  >
    {children}
  </div>
);

const SectionHeading = ({ eyebrow, title, align = 'left' }) => (
  <div
    className={`space-y-4 ${
      align === 'center' ? 'text-center' : 'text-left'
    }`}
  >
    {eyebrow && (
      <p className="text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-[#fed137]">
        {eyebrow}
      </p>
    )}
    <h2 className="text-2xl md:text-3xl lg:text-4xl lg:leading-snug font-semibold text-[#191919]">
      {title}
    </h2>
  </div>
);

const FadeIn = ({ delay = 0, className = '', children }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={pageVariants}
    custom={delay}
  >
    {children}
  </motion.div>
);

const BossChallengeLanding = () => {
  const [hasHovered, setHasHovered] = React.useState(false);

  const handleCodeBlockHover = () => {
    if (!hasHovered) {
      setHasHovered(true);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .code-highlight-wrapper * {
          transition: color 0.2s ease-in-out !important;
        }
        .group:not(:hover):not(.default-highlighted) .code-highlight-wrapper * {
          color: rgba(255, 255, 255, 0.8) !important;
        }
        .code-blocks-container:has(.group:hover) .default-highlighted:not(:hover) .code-highlight-wrapper * {
          color: rgba(255, 255, 255, 0.8) !important;
        }
      `}} />
      {/* Fixed vignette overlays - BRD25 style */}
      <div className="fixed z-0 top-0 left-0 w-full h-full bg-gradient-to-b from-[#1a1a1a]/30 from-0% to-[#1a1a1a]/0 to-30%"></div>
      <div className="fixed z-0 bottom-0 left-0 w-full h-full bg-gradient-to-b from-[#1a1a1a]/0 from-50% to-[#1a1a1a]/30 to-100%"></div>
      
      {/* Main wrapper with gradient background - BRD25 style */}
      <div className={`${viet.className} bg-[length:100%_300vh] bg-gradient-to-b from-[#0a0a0a] 0%, via-[#1a1a1a] 15%, via-[#ffffff] 35%, via-[#fefefe] 70%, to-[#f8f8f8] 100% relative`}>
        {/* Global grid pattern */}
        <div className="fixed z-0 inset-0 bg-[linear-gradient(rgba(254,209,54,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(254,209,54,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-60 pointer-events-none"></div>
        
        <main className="relative z-1 pb-0 mb-0">
        {/* Navigation Header */}
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Container className="py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <a href="#hero" className="text-xl md:text-2xl font-bold text-[#fed137] hover:text-[#fed137]/80 transition-colors">
                ₿OSS Challenge
              </a>
              
              {/* Navigation Links */}
              <div className="flex items-center gap-6 md:gap-8">
                <a href="#about" className="text-sm md:text-base font-medium text-white hover:text-[#fed137] transition-colors uppercase tracking-wide">
                  About
                </a>
                <a href="#alum" className="text-sm md:text-base font-medium text-white hover:text-[#fed137] transition-colors uppercase tracking-wide">
                  Alum
                </a>
                <a href="#resources" className="text-sm md:text-base font-medium text-white hover:text-[#fed137] transition-colors uppercase tracking-wide">
                  Resources
                </a>
                <a 
                  href="https://job-boards.greenhouse.io/chaincodelabs/jobs/4055270009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center px-6 py-2.5 bg-[#FED136] text-black font-bold rounded-full hover:bg-[#FEC503] transition-all hover:scale-105 text-sm"
                >
                  Apply
                </a>
              </div>
        </div>
          </Container>
        </motion.nav>

    {/* Hero Section */}
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#1a1a1a] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FED136]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#FED136]/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid pattern - notebook/cahier style - stronger in hero */}
        <div className="absolute inset-0 top-[10%] bg-[linear-gradient(rgba(254,209,54,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(254,209,54,0.25)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_90%_60%_at_50%_60%,black,transparent)]" />
        
        {/* Radial gradient overlay - subtle */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      <Container className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.05} className="text-center space-y-8 md:space-y-10">
            
            {/* Top Label
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#FED136]/10 border border-[#FED136]/30 rounded-full backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FED136] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FED136]"></span>
                </span>
                <span className="text-xs md:text-sm font-bold text-[#fed137] uppercase tracking-[0.2em]">
                  ₿OSS Challenge
                </span>
              </div>
            </motion.div> */}

            {/* Main Heading - The powerful message */}
            <div className="space-y-4">
              <h1 className="text-4xl leading-[1.1] sm:text-5xl sm:leading-[1.1] md:text-6xl md:leading-[1.1] lg:text-7xl lg:leading-[1.05] xl:text-8xl xl:leading-[1.05] font-black text-white tracking-tight px-4">
                <span className="block">START YOUR</span>
                <span className="block">CAREER IN</span>
                <span className="block bg-gradient-to-r from-[#FED136] via-[#FEC503] to-[#FED136] bg-clip-text text-transparent animate-gradient">
                  BITCOIN OPEN SOURCE
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
              The <span className="text-[#fed137] font-semibold">₿OSS Challenge</span> is a Chaincode Labs initiative for coders serious about beginning a career in bitcoin open source software
            </p>

            {/* CTA Button */}
            <div id="apply" className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <motion.a
                href="https://job-boards.greenhouse.io/chaincodelabs/jobs/4055270009"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center rounded-full bg-[#FED136] px-10 py-5 md:px-14 md:py-6 text-lg md:text-xl font-black text-[#000000] shadow-[0_0_50px_rgba(254,209,54,0.5)] transition-all hover:shadow-[0_0_80px_rgba(254,209,54,0.7)] overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <span className="relative">Apply Now</span>
              </motion.a>
            </div>

            {/* Features Pills
            <div className="flex flex-wrap gap-3 justify-center items-center pt-8 px-4">
              {[
                '1 Month Core',
                '+2 Months Extension',
                '1:1 Mentorship',
                'Funding Opportunities'
              ].map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs md:text-sm text-gray-300 font-medium hover:bg-white/10 hover:border-[#FED136]/30 transition-all"
                >
                  {feature}
                </motion.div>
              ))}
            </div> */}

          </FadeIn>
        </div>
      </Container>

      {/* Scroll indicator
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-[#FED136]/40 rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-3 bg-[#FED136] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
        </div>
      </motion.div> */}
    </section>

    {/* Unified Gradient Background Wrapper for all sections after hero */}
    <div className="relative" style={{ background: 'linear-gradient(to bottom, #FFFFFF 0%, #FFF5E6 15%, #FFFFFF 30%, #E8E8E3 45%, #FFFFFF 60%, #FFF5E6 75%, #FFFFFF 90%, #E8E8E3 100%)' }}>
      
    {/* Program Overview Section */}
    <section id="about" className="py-24 md:py-32 lg:py-40 scroll-mt-20 relative overflow-hidden">
      
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <FadeIn delay={0.05}>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#191919]">
                About the Challenge
              </h2>
            </div>
          </FadeIn>

          {/* Content and Image Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Left Column - Text Content */}
            <FadeIn delay={0.1}>
              <div className="space-y-8">
                
                {/* First paragraph with emphasis */}
                <div className="relative">
                  <p className="text-base md:text-lg lg:text-xl text-[#191919]/90 leading-relaxed font-light">
                    It's no secret that getting started in ₿OSS (Bitcoin Open Source Software) can be difficult. Sometimes it's not obvious where to begin, and other times it takes an extra nudge. No matter the situation, the <span className="font-semibold text-[#191919]">₿OSS Challenge is ready to tackle obstacles</span> like these by providing guidance and scaffolding for the journey.
                  </p>
                </div>

                {/* Divider */}
                <div className="w-16 h-1 bg-[#FED136]"></div>

                {/* Second paragraph */}
                <div className="relative">
                  <p className="text-base md:text-lg lg:text-xl text-[#191919]/90 leading-relaxed font-light">
                    At the heart of the challenge is a set of <span className="font-semibold text-[#191919]">programming exercises and hands-on activities</span> spanning the course of a month. Once that month is complete, participants that are ready to continue the adventure have the opportunity to <span className="font-semibold text-[#191919]">extend the program for two additional months</span>.
                  </p>
                </div>

              </div>
            </FadeIn>

            {/* Right Column - Technical Diagram */}
            <FadeIn delay={0.12} className="hidden lg:block">
              <div className="relative w-full h-full min-h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/img/section-background.png"
                  alt="Bitcoin Open Source Ecosystem Flow"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Top Performers Card - Below Content and Image
          <FadeIn delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFF9F0] to-[#FFF3E0] border border-[#FED136]/20 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(254,209,54,0.15)] transition-all duration-300">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start gap-5 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#FED136] to-[#FEC503] flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-[#191919]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-[#191919] mb-2">
                      Top Performers Get Extra Support
                    </h3>
                    <p className="text-sm md:text-base text-[#191919]/80 leading-relaxed">
                      Top performers from month 1 may be offered <span className="font-semibold text-[#191919]">extra support and 1:1 mentorship</span> during months 2 and 3, with the goal of <span className="font-semibold text-[#191919]">securing full-time funding</span> in the ₿OSS ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn> */}
        </div>
      </Container>
    </section>


    {/* How It Works Section - Redesigned with Full-Width Image */}
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Section Header - Contained */}
      <Container>
        <div className="max-w-7xl mx-auto">
          <FadeIn delay={0.05}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#191919] mb-4">
                How It Works
              </h2>
              <p className="text-lg md:text-xl text-[#191919]/70 max-w-3xl mx-auto">
                A structured 3-month journey from learning to contributing
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Main Content: 3 Levels with alternating card/image layout */}
      <Container>
        <div className="max-w-7xl mx-auto space-y-8 lg:space-y-12">
          
          {/* Level 1: Month 1 Card on left, Image on right */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Month 1 Card */}
            <FadeIn delay={0.1}>
              <div className="group relative bg-gradient-to-br from-white/90 to-[#FFF9F0]/90 backdrop-blur-sm rounded-3xl border-2 border-[#FED136]/20 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(254,209,54,0.25)] hover:border-[#FED136]/50 transition-all duration-300 hover:-translate-y-2">
                {/* Month Badge */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FED136] to-[#FEC503] shadow-lg mb-4">
                  <span className="text-2xl font-black text-[#191919]">1</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-[#191919] mb-2 group-hover:text-[#FED136] transition-colors">
                  Month One
                </h3>
                
                {/* Subtitle */}
                <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-[#FED136]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Foundation & Core Learning
                </div>

                {/* Description */}
                <p className="text-sm text-[#191919]/80 leading-relaxed">
                  {/* Chaincode curates each cohort, arranges curriculum, and provides ongoing support. Expect to prep for <strong>minimum 10 hours per week</strong>. Taught and mentored by ₿OSS contributors with async chat discussions and support throughout. */}
                  Chaincode curates each cohort, arranges curriculum, and provides ongoing support throughout the program. You will be expected to prep for a  <strong>minimum 10 hours per week</strong>. Outside of the first week, there are no scheduled calls. This program will be taught and mentored by ₿OSS contributors that have stood in your shoes. Throughout the week, there will be async chat discussions and support. If you are willing to do the work, we'll give you what you need to get to where you want to go.
                </p>
              </div>
            </FadeIn>

            {/* Image - Stage 1 */}
            <FadeIn delay={0.15}>
              <div className="relative h-[300px] md:h-[400px] lg:h-[350px] rounded-2xl overflow-hidden">
                <Image
                  src="/img/stage1.png"
                  alt="Stage 1 - Foundation & Core Learning"
                  fill
                  className="object-contain"
                />
              </div>
            </FadeIn>
          </div>

          {/* Level 2: Image on left, Month 2-3 Card on right */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Image - Stage 2 */}
            <FadeIn delay={0.2} className="order-2 lg:order-1">
              <div className="relative h-[300px] md:h-[400px] lg:h-[350px] rounded-2xl overflow-hidden">
                <Image
                  src="/img/stage2.png"
                  alt="Stage 2 - Advanced Programs & Partnerships"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            {/* Months 2-3 Card */}
            <FadeIn delay={0.25} className="order-1 lg:order-2">
              <div className="group relative bg-gradient-to-br from-white/90 to-[#FFF9F0]/90 backdrop-blur-sm rounded-3xl border-2 border-[#FED136]/20 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(254,209,54,0.25)] hover:border-[#FED136]/50 transition-all duration-300 hover:-translate-y-2">
                {/* Month Badge */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FED136] to-[#FEC503] shadow-lg mb-4">
                  <span className="text-lg font-black text-[#191919]">2-3</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-[#191919] mb-2 group-hover:text-[#FED136] transition-colors">
                  Months 2 & 3
                </h3>
                
                {/* Subtitle */}
                <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-[#FED136]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Advanced Programs & Partnerships
                </div>

                {/* Description */}
                <p className="text-sm text-[#191919]/80 leading-relaxed">
                  You will have the opportunity to participate in a program with a partner organization. Chaincode will also run a seminar and provide a list of supplemental resources. Advanced participants may be selected for additional opportunities.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Level 3: Your Journey Card on left, Image on right */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Your Journey Card */}
            <FadeIn delay={0.3}>
              <div className="group relative bg-gradient-to-br from-[#191919]/90 to-[#2a2a2a]/90 backdrop-blur-sm rounded-3xl border-2 border-[#FED136]/50 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgba(254,209,54,0.4)] hover:border-[#FED136] transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FED136]/20 to-transparent rounded-bl-[100px] blur-xl"></div>
                
                {/* Icon Badge */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FED136] to-[#FEC503] shadow-lg mb-4 relative z-10">
                  <svg className="w-7 h-7 text-[#191919]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 relative z-10 group-hover:text-[#FED136] transition-colors">
                  Your Journey
                </h3>
                
                {/* Subtitle */}
                <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-[#FED136] relative z-10">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Beyond the Program
                </div>

                {/* Description */}
                <p className="text-sm text-white/90 leading-relaxed relative z-10">
                  The journey to becoming a <strong className="text-[#FED136]">full-time ₿OSS contributor</strong> is long, winding, and different for everybody. It is not a straight path. This challenge is not only designed to give you some supports along the way, but to foster the proactive, self-starter spirit that is required in open source. Join the challenge and see how far you can go!
                </p>
              </div>
            </FadeIn>

            {/* Image - Stage 3 */}
            <FadeIn delay={0.35}>
              <div className="relative h-[300px] md:h-[400px] lg:h-[350px] rounded-2xl overflow-hidden">
                <Image
                  src="/img/stage3.png"
                  alt="Stage 3 - Your Journey"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

        </div>
      </Container>

    </section>



    {/* Unified Alumni Section */}
    <section id="alum" className="py-24 md:py-32 lg:py-40 scroll-mt-20 relative overflow-hidden">
      <Container>
        <div className="max-w-7xl mx-auto relative z-[1]">
          {/* Main Section Heading */}
          <FadeIn delay={0.05}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#191919] mb-4">
                ₿OSS Alumni
            </h2>
              <p className="text-lg md:text-xl text-[#191919]/70 max-w-2xl mx-auto">
                Meet the talented developers who have completed the challenge and are now contributing to bitcoin open source projects
              </p>
            </div>
          </FadeIn>

          {/* Alumni Card Component */}
          {(() => {
            const AlumniCard = ({ alum }) => (
                <div
                  key={alum.name}
                  onClick={() => window.open(alum.github, '_blank')}
                  className="group block rounded-3xl border-2 border-[#222222]/10 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(254,209,54,0.2)] hover:border-[#FED136]/30 transition-all hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex flex-col items-center gap-4 text-center">
                    {/* Profile Image */}
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#FED136]/30 group-hover:border-[#FED136] transition-colors">
                      <Image
                        src={`/img/boss-alum/${alum.image}`}
                        alt={alum.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Name and Info */}
                  <div className="space-y-2 w-full">
                      <div className="flex items-center justify-center gap-2">
                        <h3 className="text-lg font-bold text-[#191919] group-hover:text-[#fed137] transition-colors">{alum.name}</h3>
                        
                      {/* Social Icons */}
                        <span 
                          className="text-gray-600 group-hover:text-[#FED136] transition-colors"
                          title="GitHub"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </span>
                        {alum.blog && (
                          <span 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(alum.blog, '_blank');
                            }}
                            className="text-gray-600 hover:text-[#FED136] transition-colors cursor-pointer"
                            title="Blog"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#191919]/70 leading-relaxed">
                      {(() => {
                        // Handle funding info
                        let fundingContent;
                        if (alum.name === 'Rob') {
                          fundingContent = (
                            <>
                              Funded by{' '}
                              <a href={alum.fundedByUrl} target="_blank" rel="noopener noreferrer" className="text-[#FED136] font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>BDK Foundation</a>
                            {', '}
                              <a href={alum.fundedByUrl2} target="_blank" rel="noopener noreferrer" className="text-[#FED136] font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>OpenSats</a>
                            {', and '}
                              <a href={alum.fundedByUrl3} target="_blank" rel="noopener noreferrer" className="text-[#FED136] font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>2140</a>
                            </>
                          );
                        } else if (alum.name === 'David') {
                          fundingContent = (
                            <>
                              Funded by{' '}
                              <a href={alum.fundedByUrl} target="_blank" rel="noopener noreferrer" className="text-[#FED136] font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>OpenSats</a>
                            {' and '}
                              <a href={alum.fundedByUrl2} target="_blank" rel="noopener noreferrer" className="text-[#FED136] font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>localhost</a>
                            </>
                          );
                        } else if (alum.name === 'Elnosh') {
                          fundingContent = (
                            <>
                              Funded by{' '}
                              <a href={alum.fundedByUrl} target="_blank" rel="noopener noreferrer" className="text-[#FED136] font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>OpenSats</a>
                              {' and '}
                              <a href={alum.fundedByUrl2} target="_blank" rel="noopener noreferrer" className="text-[#FED136] font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>Chaincode</a>
                            </>
                          );
                        } else if (alum.name === 'Beulah') {
                          fundingContent = (
                            <>
                              Funded by{' '}
                              <a href={alum.fundedByUrl} target="_blank" rel="noopener noreferrer" className="text-[#FED136] font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>Vora</a>
                              {' and '}
                              <a href={alum.fundedByUrl2} target="_blank" rel="noopener noreferrer" className="text-[#FED136] font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>Second</a>
                            </>
                          );
                        } else if (alum.fundedByUrl) {
                          fundingContent = (
                            <>
                              Funded by{' '}
                              <a href={alum.fundedByUrl} target="_blank" rel="noopener noreferrer" className="text-[#FED136] font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>{alum.fundedBy}</a>
                            </>
                          );
                        } else {
                          fundingContent = (
                            <>
                              Funded by <span className="text-[#FED136] font-semibold">{alum.fundedBy}</span>
                            </>
                          );
                        }

                        // Handle project info
                        let projectContent;
                        if (alum.name === 'Rob') {
                          projectContent = (
                            <>
                        {' to contribute to '}
                              <a href={alum.projectUrl} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[#FED136] transition-colors" onClick={(e) => e.stopPropagation()}>BDK</a>
                              {' and '}
                              <a href={alum.projectUrl2} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[#FED136] transition-colors" onClick={(e) => e.stopPropagation()}>kyoto</a>
                            </>
                          );
                        } else if (alum.name === 'Elnosh') {
                          projectContent = (
                            <>
                              {' to contribute to '}
                              <a href={alum.projectUrl} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[#FED136] transition-colors" onClick={(e) => e.stopPropagation()}>LDK</a>
                            {' and '}
                              <a href={alum.projectUrl2} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[#FED136] transition-colors" onClick={(e) => e.stopPropagation()}>Channel Jamming Research</a>
                            </>
                          );
                        } else {
                          projectContent = (
                            <>
                              {' to contribute to '}
                              <a href={alum.projectUrl} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-[#FED136] transition-colors" onClick={(e) => e.stopPropagation()}>{alum.project}</a>
                            </>
                          );
                        }

                        return <>{fundingContent}{projectContent}</>;
                      })()}
                </p>
              </div>
                  </div>
                </div>
            );

            return (
              <>
                {/* 2025 Alumni Subsection */}
                <FadeIn delay={0.1}>
                  <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FED136]/30 to-[#FED136]/30"></div>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#FED136] to-[#FEC503] text-[#191919] font-black text-lg shadow-lg">2025</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#191919]">₿OSS Alumni</h3>
            </div>
                      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#FED136]/30 to-[#FED136]/30"></div>
        </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                        { name: 'Sangbida', image: 'sangbida.jpg', github: 'https://github.com/sangbida', fundedBy: 'Blockstream', fundedByUrl: 'https://blockstream.com/', project: 'Core Lightning', projectUrl: 'https://github.com/ElementsProject/lightning' },
                        { name: 'Daniel', image: 'daniel.jpg', github: 'https://github.com/purplekarrot', fundedBy: 'ANNOUNCED SOON', fundedByUrl: null, project: 'Bitcoin Core', projectUrl: 'https://github.com/bitcoin/bitcoin' },
                        { name: 'Ben', image: 'ben.jpg', github: 'https://github.com/benalleng', fundedBy: 'Maelstrom', fundedByUrl: 'https://maelstrom.fund/bitcoin-grant-program/', project: 'PayJoin', projectUrl: 'https://github.com/payjoin/rust-payjoin/' },
                        { name: 'Zealsham', image: 'zealsham.jpg', github: 'https://github.com/zealsham/', fundedBy: '₿trust', fundedByUrl: 'https://btrust.tech', project: 'PayJoin', projectUrl: 'https://github.com/payjoin/rust-payjoin/' },
                        { name: 'MacGyver', image: 'macgyver.png', github: 'https://github.com/macgyver13', fundedBy: 'Maelstrom', fundedByUrl: 'https://maelstrom.fund/bitcoin-grant-program/', project: 'Silent Payments', projectUrl: 'https://silentpayments.xyz/' },
                        { name: 'Beulah', image: 'beulah.jpg', github: 'BEULAHEVANJALIN', fundedBy: 'Vora and Second', fundedByUrl: 'https://vora.io', fundedByUrl2: 'https://second.tech', project: 'FROST', projectUrl: 'https://github.com/BEULAHEVANJALIN/frost-td-prework' },
                        { name: 'Rita', image: 'rita.jpg', github: 'https://github.com/camillarhi', fundedBy: '₿trust', fundedByUrl: 'https://btrust.tech', project: 'LDK Node', projectUrl: 'https://github.com/lightningdevkit/ldk-node' },
                        { name: 'Janb84', image: 'janb.png', github: 'https://github.com/janb84', fundedBy: 'OpenSats', fundedByUrl: 'https://opensats.org', project: 'Bitcoin Core', projectUrl: 'https://github.com/bitcoin/bitcoin' },
                        { name: 'Chuks', image: 'chuks.jpg', github: 'https://github.com/chuksys', fundedBy: '₿trust', fundedByUrl: 'https://btrust.tech', project: 'LDK Node', projectUrl: 'https://github.com/lightningdevkit/ldk-node' },
                        { name: 'Elnosh', image: 'elnosh.jpg', github: 'https://github.com/elnosh', fundedBy: 'OpenSats and Chaincode', fundedByUrl: 'https://opensats.org', fundedByUrl2: 'https://chaincode.com', project: 'LDK and Channel Jamming Research', projectUrl: 'https://lightningdevkit.org/', projectUrl2: 'https://github.com/carlaKC/jam-ln/' },
                        { name: 'Martin', image: 'martin.png', github: 'https://github.com/martinsaposnic', fundedBy: 'Spiral', fundedByUrl: 'https://spiral.xyz/', project: 'LDK', projectUrl: 'https://github.com/lightningdevkit/rust-lightning' },
                        { name: 'Ram', image: 'ram.jpg', github: 'https://github.com/pseudoramdom', fundedBy: 'ANNOUNCED SOON', fundedByUrl: null, project: 'Bitcoin Core', projectUrl: 'https://github.com/bitcoin/bitcoin' },
                      ].map((alum) => <AlumniCard key={alum.name} alum={alum} />)}
                    </div>
                  </div>
                </FadeIn>

                {/* Divider between years */}
                <div className="my-16 flex items-center justify-center">
                  <div className="flex items-center gap-4 w-full max-w-2xl">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FED136]/20 to-[#FED136]/20"></div>
                    <div className="w-2 h-2 rounded-full bg-[#FED136]/40"></div>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#FED136]/20 to-[#FED136]/20"></div>
                  </div>
                      </div>

                {/* 2024 Alumni Subsection */}
                <FadeIn delay={0.15}>
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FED136]/30 to-[#FED136]/30"></div>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#FED136] to-[#FEC503] text-[#191919] font-black text-lg shadow-lg">2024</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#191919]">₿OSS Alumni</h3>
                    </div>
                      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#FED136]/30 to-[#FED136]/30"></div>
                  </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {[
                        { name: 'Nick', image: 'nick.png', github: 'https://github.com/nyonson', blog: 'https://blog.yonson.dev', fundedBy: 'Spiral', fundedByUrl: 'https://spiral.xyz/', project: 'Rust Bitcoin', projectUrl: 'https://github.com/rust-bitcoin/' },
                        { name: 'Rob', image: 'rob.jpg', github: 'https://github.com/rustaceanrob', fundedBy: 'BDK Foundation, OpenSats, and 2140', fundedByUrl: 'https://bitcoindevkit.org/', fundedByUrl2: 'https://opensats.org', fundedByUrl3: 'https://2140.dev', project: 'BDK and kyoto', projectUrl: 'https://bitcoindevkit.org/', projectUrl2: 'https://github.com/rustaceanrob/kyoto' },
                        { name: 'David', image: 'david.jpg', github: 'https://github.com/davidgumberg', fundedBy: 'OpenSats and localhost', fundedByUrl: 'https://opensats.org', fundedByUrl2: 'https://lclhost.org/', project: 'Bitcoin Core', projectUrl: 'https://github.com/bitcoin/bitcoin' },
                        { name: 'Rkrux', image: 'rkrux.jpg', github: 'https://github.com/rkrux', fundedBy: 'Maelstrom', fundedByUrl: 'https://maelstrom.fund/bitcoin-grant-program/', project: 'Bitcoin Core', projectUrl: 'https://github.com/bitcoin/bitcoin' },
                        { name: 'Hodlinator', image: 'hodlinator.jpg', github: 'https://github.com/Hodlinator/', fundedBy: 'OpenSats', fundedByUrl: 'https://opensats.org', project: 'Bitcoin Core', projectUrl: 'https://github.com/bitcoin/bitcoin' },
                        { name: 'Tdb3', image: 'tdb3.png', github: 'https://github.com/tdb3', fundedBy: 'OpenSats', fundedByUrl: 'https://opensats.org', project: 'Bitcoin Core', projectUrl: 'https://github.com/bitcoin/bitcoin' },
                        { name: 'Spacebear', image: 'spacebear.png', github: 'https://github.com/spacebear21', fundedBy: 'Spiral', fundedByUrl: 'https://spiral.xyz/', project: 'PayJoin', projectUrl: 'https://github.com/payjoin/rust-payjoin/' },
                        { name: 'Marco', image: 'marco.jpg', github: 'https://github.com/marcofleon', fundedBy: 'Brink', fundedByUrl: 'https://brink.dev', project: 'Bitcoin Core', projectUrl: 'https://github.com/bitcoin/bitcoin' },
                      ].map((alum) => <AlumniCard key={alum.name} alum={alum} />)}
                </div>
            </div>
          </FadeIn>
              </>
            );
          })()}
        </div>
      </Container>
    </section>

    {/* Resources Section */}
    <section id="resources" className="py-24 md:py-32 lg:py-40 scroll-mt-20 relative overflow-y-visible overflow-x-clip">
      
      <Container>
        <div className="max-w-7xl mx-auto relative z-[1]">
          <FadeIn delay={0.05}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#191919] mb-4">
                Learning Resources
              </h2>
              <p className="text-xl text-[#191919]/70">
                Free, world-class content to accelerate your Bitcoin journey
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
              {[
                {
                  title: 'Self Paced Seminars',
                  description: 'Materials are available for anyone to use with readings and discussion questions on various Bitcoin and Lightning topics.',
                  icon: '/img/lightning.png',
                  url: 'https://chaincode.gitbook.io/seminars/',
                  bgGradient: 'from-[#FEF3C7] to-[#FDE68A]', // Soft yellow
                  hoverGradient: 'group-hover:from-[#FED136]/20 group-hover:to-[#FEC503]/20'
                },
                {
                  title: 'Onboarding to Bitcoin Core',
                  description: 'Covering both the technical components such as, architecture, consensus, validation, the wallet, P2P, and script, and also introduces the under-documented social aspects like PR etiquette and the decentralized development process.',
                  icon: '/img/bitcoin-core.png',
                  url: 'https://bitcoincore.academy',
                  bgGradient: 'from-[#DBEAFE] to-[#BFDBFE]', // Soft blue
                  hoverGradient: 'group-hover:from-[#93C5FD]/30 group-hover:to-[#60A5FA]/30'
                },
                {
                  title: 'Bitcoin Development Philosophy',
                  description: 'A guide for Bitcoin developers who already understand the basics of concepts and processes such as Proof-of-Work, block building, and the transaction life cycle, and who want to level up by gaining a deeper understanding of Bitcoin\'s design trade-offs and philosophy.',
                  icon: '/img/bitcoindev-philosophy.png',
                  url: 'https://bitcoindevphilosophy.com',
                  bgGradient: 'from-[#CCFBF1] to-[#99F6E4]', // Soft teal
                  hoverGradient: 'group-hover:from-[#5EEAD4]/30 group-hover:to-[#2DD4BF]/30'
                },
                {
                  title: 'Rust for Bitcoiners',
                  description: 'Master the fundamentals of Rust and bitcoin. Start your journey to becoming a bitcoin rust contributor.',
                  icon: '/img/rust-for-bitcoiners.png',
                  url: 'https://btcdemy.thinkific.com',
                  bgGradient: 'from-[#FED7AA] to-[#FDBA74]', // Soft orange/rust
                  hoverGradient: 'group-hover:from-[#FB923C]/30 group-hover:to-[#F97316]/30'
                }
              ].map((resource, idx) => (
                <div
                  key={resource.title}
                  onClick={() => window.open(resource.url, '_blank')}
                  className={`group relative overflow-hidden rounded-3xl border-2 border-[#222222]/10 bg-gradient-to-br ${resource.bgGradient} shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(254,209,54,0.2)] transition-all hover:-translate-y-2 hover:border-[#FED136]/50 flex flex-col h-full cursor-pointer`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent ${resource.hoverGradient} transition-all duration-300`} />
                  
                  {/* Top Image Section */}
                  <div className="relative h-52 flex-shrink-0 bg-white/80 overflow-hidden group-hover:bg-white/90 transition-all">
                    <Image
                      src={resource.icon}
                      alt={resource.title}
                      fill
                      className="object-cover"
                    />
                    {/* Arrow in top right */}
                    <div className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-white group-hover:bg-[#FED136] transition-all shadow-md z-10">
                      <svg className="w-4 h-4 text-[#191919] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="relative p-6 bg-white/90 flex flex-col flex-1">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-[#191919] group-hover:text-[#fed137] transition-colors mb-3">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-[#191919]/70 leading-relaxed line-clamp-3">
                        {resource.description}
                      </p>
                    </div>

                    {/* Learn More Link - Always at bottom */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#191919] group-hover:text-[#fed137] transition-colors pt-4 mt-auto">
                      <span>Check it out</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>

    {/* About Chaincode Section */}
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-gradient-to-b from-white via-[#FAFAFA] to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #191919 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <Container>
        <div className="max-w-7xl mx-auto relative z-[1]">
          <FadeIn delay={0.05}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#191919] mb-6">
              About Chaincode
            </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FED136] to-transparent mx-auto"></div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              {/* Chaincode Logo */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FED136]/20 to-[#FEC503]/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-full h-full min-h-[320px] md:min-h-[400px] rounded-3xl bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#000000] border-2 border-[#222222]/20 p-10 md:p-12 flex items-center justify-center overflow-hidden shadow-2xl hover:shadow-[0_30px_80px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-[1.02] hover:border-[#FED136]/30">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FED136]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-full h-full z-10">
                  <Image
                    src="/img/chaincode-logo.png"
                    alt="Chaincode Labs"
                    fill
                      className="object-contain drop-shadow-2xl"
                  />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <div className="bg-gradient-to-br from-white via-white to-[#F8F9FA] rounded-3xl border-2 border-[#222222]/10 p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] transition-all duration-300 flex-1 flex flex-col justify-center">
                  {/* Decorative accent */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#FED136] to-transparent"></div>
                    <div className="w-2 h-2 rounded-full bg-[#FED136]"></div>
                  </div>
                  
                <div className="space-y-6 text-base md:text-lg text-[#191919]/90 leading-relaxed">
                    <p className="text-[#191919]/90">
                    Chaincode Labs is a Bitcoin research and development center based in New York City. We focus on the development of the bitcoin network and related technologies. A critical part of our work is creating a space for those seeking a solid foundation with which to contribute to the bitcoin ecosystem.
                  </p>
                    <p className="text-[#191919]/90">
                    Since 2016, our residency program has helped to train and develop the next generation of Bitcoin and Lightning protocol and application engineers.
                  </p>
                  </div>
                  
                  {/* Bottom accent */}
                  <div className="flex items-center gap-3 mt-8 justify-end">
                    <div className="w-2 h-2 rounded-full bg-[#FED136]"></div>
                    <div className="w-12 h-0.5 bg-gradient-to-l from-[#FED136] to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>

    </div>
    {/* End of unified gradient wrapper */}


    {/* Learn Build Get Funded Section + Footer - Combined Final Section */}
    <section className="relative h-screen w-full overflow-hidden flex flex-col">
      {/* Full-width grid with no container to get true 60/40 split */}
      <div className="grid lg:grid-cols-[60%_40%] flex-1">
        
        {/* Left Side - 60% - Dark background */}
        <div className="relative bg-[#1a1a1a] flex items-center justify-center lg:justify-start px-8 md:px-12 lg:px-16 xl:px-24">
          <FadeIn delay={0.05}>
            <div className="max-w-3xl space-y-12 lg:space-y-16">
              
              {/* Large serif typography */}
              <div className="space-y-2 md:space-y-3">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white/70 leading-[0.95] tracking-tight" style={{ fontFamily: 'Georgia, Palatino, Times New Roman, serif' }}>
                  Learn.
                </h2>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white/70 leading-[0.95] tracking-tight" style={{ fontFamily: 'Georgia, Palatino, Times New Roman, serif' }}>
                  Contribute.
                </h2>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white/70 leading-[0.95] tracking-tight" style={{ fontFamily: 'Georgia, Palatino, Times New Roman, serif' }}>
                  Get Started.
                </h2>
              </div>
              
              {/* CTA Button - minimal rounded style */}
              <div className="pt-4">
                <a
                  href="https://job-boards.greenhouse.io/chaincodelabs/jobs/4055270009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-10 py-4 bg-[#FED136] text-[#1a1a1a] font-medium text-sm md:text-base rounded-full hover:bg-[#FEC503] transition-all duration-300 tracking-wide"
                >
                  Apply to the ₿OSS Challenge
                </a>
              </div>
              
            </div>
          </FadeIn>
        </div>

        {/* Right Side - 40% - Dark background with code and abstract patterns */}
        <div className="relative bg-[#0f0f0f] overflow-hidden h-full">
            {/* Abstract curved pattern - Similar to Aptos flowing curves */}
          <div className="absolute inset-0 opacity-40 z-0">
              {/* Curved SVG pattern */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0.1 }} />
                  </linearGradient>
                </defs>
                {/* Flowing curves */}
                <path d="M0,100 Q100,50 200,100 T400,100 L400,200 Q300,250 200,200 T0,200 Z" fill="url(#grad1)" />
                <path d="M0,300 Q150,250 300,300 T400,350 L400,450 Q250,500 100,450 T0,400 Z" fill="url(#grad1)" opacity="0.8" />
                <path d="M0,550 Q100,500 200,550 T400,600 L400,700 Q300,750 200,700 T0,650 Z" fill="url(#grad1)" opacity="0.6" />
              </svg>
            </div>

          {/* Code blocks overlay - Real Bitcoin Core source code - Aptos style */}
          <FadeIn delay={0.15}>
            <div className="code-blocks-container hidden md:block absolute inset-0 px-4 md:px-8 lg:px-12 overflow-hidden" style={{ height: '100%' }}>
              
              {/* Code Block 1 - Bitcoin's 21 Million Supply Cap - Top Left */}
              <div className={`absolute group ${!hasHovered ? 'default-highlighted' : ''}`} onMouseEnter={handleCodeBlockHover} style={{ top: '10%', left: 0, zIndex: 10, maxWidth: '28rem', width: 'auto', maxHeight: 'calc(100% - 20%)' }}>
                <div className="bg-[#1a1a1a]/90 backdrop-blur-md rounded-tr-xl rounded-br-xl p-4 md:p-5 border-t border-r border-b border-white/20 shadow-lg hover:shadow-xl hover:border-t-white/30 hover:border-r-white/30 hover:border-b-white/30 transition-all duration-300 overflow-hidden">
                  <div className="text-white/60 text-[0.65rem] font-mono mb-2">consensus/amount.h</div>
                <div className="code-highlight-wrapper">
                  <SyntaxHighlighter
                    language="cpp"
                    style={{
                      ...tomorrow,
                      'pre[class*="language-"]': {
                        ...tomorrow['pre[class*="language-"]'],
                        background: 'transparent',
                        margin: 0,
                        padding: 0,
                        fontSize: '0.75rem',
                        lineHeight: '1.6',
                        overflow: 'visible',
                      },
                      'code[class*="language-"]': {
                        ...tomorrow['code[class*="language-"]'],
                        background: 'transparent',
                        fontSize: '0.75rem',
                        textShadow: 'none',
                        overflow: 'visible',
                      },
                    }}
                    customStyle={{
                      background: 'transparent',
                      padding: 0,
                      margin: 0,
                      fontSize: '0.75rem',
                      overflow: 'visible',
                    }}
                    codeTagProps={{
                      style: {
                        fontSize: '0.75rem',
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                        wordBreak: 'break-word',
                        overflowWrap: 'break-word',
                      }
                    }}
                  >
{`static constexpr CAmount COIN = 100000000;
static constexpr CAmount MAX_MONEY = 21000000 * COIN;`}
                  </SyntaxHighlighter>
                </div>
                </div>
              </div>

              {/* Code Block 2 - Genesis Block - Mid Right */}
              <div className="absolute group" onMouseEnter={handleCodeBlockHover} style={{ top: '30%', right: 0, zIndex: 10, maxWidth: '18rem', maxHeight: 'calc(100% - 30%)' }}>
                <div className="bg-[#1a1a1a]/90 backdrop-blur-md rounded-tl-xl rounded-bl-xl p-4 md:p-5 border-t border-l border-b border-white/20 shadow-lg hover:shadow-xl hover:border-t-white/30 hover:border-l-white/30 hover:border-b-white/30 transition-all duration-300 overflow-hidden">
                  <div className="text-white/60 text-[0.65rem] font-mono mb-2">chainparams.cpp</div>
                  <div className="code-highlight-wrapper">
                    <SyntaxHighlighter
                      language="cpp"
                      style={{
                        ...tomorrow,
                        'pre[class*="language-"]': {
                          ...tomorrow['pre[class*="language-"]'],
                          background: 'transparent',
                          margin: 0,
                          padding: 0,
                          fontSize: '0.75rem',
                          lineHeight: '1.6',
                          overflow: 'visible',
                        },
                        'code[class*="language-"]': {
                          ...tomorrow['code[class*="language-"]'],
                          background: 'transparent',
                          fontSize: '0.75rem',
                          textShadow: 'none',
                          overflow: 'visible',
                        },
                      }}
                      customStyle={{
                        background: 'transparent',
                        padding: 0,
                        margin: 0,
                        fontSize: '0.75rem',
                        overflow: 'visible',
                      }}
                      codeTagProps={{
                        style: {
                          fontSize: '0.75rem',
                          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                        }
                      }}
                    >
{`const char* pszTimestamp = 
    "The Times 03/Jan/2009 Chancellor on brink "
    "of second bailout for banks";
genesis = CreateGenesisBlock(1231006505, 2083236893, 
                             0x1d00ffff, 1, 50 * COIN);`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>

              {/* Code Block 3 - Proof of Work - Mid Left */}
              <div className="absolute group" onMouseEnter={handleCodeBlockHover} style={{ top: '55%', left: 0, zIndex: 10, maxWidth: '28rem', width: 'auto', maxHeight: 'calc(100% - 55%)' }}>
                <div className="bg-[#1a1a1a]/90 backdrop-blur-md rounded-tr-xl rounded-br-xl p-4 md:p-5 border-t border-r border-b border-white/20 shadow-lg hover:shadow-xl hover:border-t-white/30 hover:border-r-white/30 hover:border-b-white/30 transition-all duration-300 overflow-hidden">
                  <div className="text-white/60 text-[0.65rem] font-mono mb-2">pow.cpp</div>
                  <div className="code-highlight-wrapper">
                    <SyntaxHighlighter
                      language="cpp"
                      style={{
                        ...tomorrow,
                        'pre[class*="language-"]': {
                          ...tomorrow['pre[class*="language-"]'],
                          background: 'transparent',
                          margin: 0,
                          padding: 0,
                          fontSize: '0.75rem',
                          lineHeight: '1.6',
                          overflow: 'visible',
                        },
                        'code[class*="language-"]': {
                          ...tomorrow['code[class*="language-"]'],
                          background: 'transparent',
                          fontSize: '0.75rem',
                          textShadow: 'none',
                          overflow: 'visible',
                        },
                      }}
                      customStyle={{
                        background: 'transparent',
                        padding: 0,
                        margin: 0,
                        fontSize: '0.75rem',
                        overflow: 'visible',
                      }}
                      codeTagProps={{
                        style: {
                          fontSize: '0.75rem',
                          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                        }
                      }}
                    >
{`bool CheckProofOfWork(uint256 hash, unsigned int nBits) {
    bnTarget.SetCompact(nBits, &fNegative, &fOverflow);
    if (fNegative || bnTarget == 0 || fOverflow)
        return false;
    if (UintToArith256(hash) > bnTarget)
        return false;
    return true;
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>

              {/* Code Block 4 - Merkle Root - Bottom Right */}
              <div className="absolute group" onMouseEnter={handleCodeBlockHover} style={{ top: '80%', right: 0, zIndex: 10, maxWidth: '18rem', maxHeight: 'calc(100% - 80%)' }}>
                <div className="bg-[#1a1a1a]/90 backdrop-blur-md rounded-tl-xl rounded-bl-xl p-4 md:p-5 border-t border-l border-b border-white/20 shadow-lg hover:shadow-xl hover:border-t-white/30 hover:border-l-white/30 hover:border-b-white/30 transition-all duration-300 overflow-hidden">
                  <div className="text-white/60 text-[0.65rem] font-mono mb-2">merkletree.cpp</div>
                  <div className="code-highlight-wrapper">
                    <SyntaxHighlighter
                      language="cpp"
                      style={{
                        ...tomorrow,
                        'pre[class*="language-"]': {
                          ...tomorrow['pre[class*="language-"]'],
                          background: 'transparent',
                          margin: 0,
                          padding: 0,
                          fontSize: '0.75rem',
                          lineHeight: '1.6',
                          overflow: 'visible',
                        },
                        'code[class*="language-"]': {
                          ...tomorrow['code[class*="language-"]'],
                          background: 'transparent',
                          fontSize: '0.75rem',
                          textShadow: 'none',
                          overflow: 'visible',
                        },
                      }}
                      customStyle={{
                        background: 'transparent',
                        padding: 0,
                        margin: 0,
                        fontSize: '0.75rem',
                        overflow: 'visible',
                      }}
                      codeTagProps={{
                        style: {
                          fontSize: '0.75rem',
                          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                          wordBreak: 'break-word',
                          overflowWrap: 'break-word',
                        }
                      }}
                    >
{`uint256 ComputeMerkleRoot(
    const std::vector<uint256>& leaves,
    bool* mutated) {
    if (leaves.size() == 0) {
        return uint256();
    }
    return ComputeMerkleRootFromBranch(
        leaves, leaves.size(), 0);
}`}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>

              {/* Decorative diagonal lines in background - subtle */}
              <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-10 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-[2px] bg-gradient-to-r from-transparent via-white to-transparent transform -rotate-45"
                    style={{
                      width: '150%',
                      top: `${i * 15}%`,
                      left: '-25%',
                      opacity: 0.3 - i * 0.04,
                    }}
                  />
                ))}
              </div>

            </div>
          </FadeIn>
        </div>

      </div>

      <div className="w-full bg-[#0f0f0f] border-t border-white/10 py-6 md:py-8 px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-6">
          {/* Copyright */}
          <div className="text-left">
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} Chaincode Labs
            </p>
          </div>

          {/* Umami tracking notice */}
          <div className="text-sm text-white/60">
            <a 
              href="https://visits.bitcoindevs.xyz/share/ywq0vWouFt4XWH4d/bosschallenge.xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#FED136] transition-colors underline"
            >
              Public visit count
            </a>
          </div>

          {/* Chaincode Labs Branding */}
          <div className="flex items-center gap-3 md:ml-auto">
            <div className="text-sm text-white/70 font-medium">
              ₿OSS Challenge
            </div>
          </div>
        </div>
      </div>
    </section>

        </main>
      </div>
    </>
  );
};

export default BossChallengeLanding;
