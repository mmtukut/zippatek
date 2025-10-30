import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Footer } from '@/components/layout/Footer';
import { ProblemStatementSection } from '@/components/sections/ProblemStatement';
import { ProductShowcaseSection } from '@/components/sections/ProductShowcase';
import { WhyZippatekSection } from '@/components/sections/WhyZippatek';
import { ImpactMetricsSection } from '@/components/sections/ImpactMetrics';
import { TeamPreviewSection } from '@/components/sections/TeamPreview';
import { PressRecognitionSection } from '@/components/sections/PressRecognition';
import { FinalCtaSection } from '@/components/sections/FinalCta';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemStatementSection />
        <ProductShowcaseSection />
        <WhyZippatekSection />
        <ImpactMetricsSection />
        <TeamPreviewSection />
        <PressRecognitionSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
