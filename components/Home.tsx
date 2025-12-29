import React from 'react';
import { Hero } from './Hero';
import { TrustStrip } from './TrustStrip';
import { HowItWorks } from './HowItWorks';
import { LoanDetails } from './LoanDetails';
import { Partners } from './Partners';
import { Eligibility } from './Eligibility';
import { WhyChoose } from './WhyChoose';
import { SafetyValues } from './SafetyValues';
import { Testimonials } from './Testimonials';
import { FinalCTA } from './FinalCTA';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <LoanDetails />
      <Partners />
      <Eligibility />
      <WhyChoose />
      <Testimonials />
      <SafetyValues />
      <FinalCTA />
    </>
  );
};