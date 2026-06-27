import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import BiographySection from '@/components/sections/BiographySection';
import MarriageSection from '@/components/sections/MarriageSection';
import DutiesSection from '@/components/sections/DutiesSection';
import VirtuesSection from '@/components/sections/VirtuesSection';
import MotherSection from '@/components/sections/MotherSection';
import RemembranceSection from '@/components/sections/RemembranceSection';
import SectionDivider from '@/components/SectionDivider';
import Footer from '@/components/Footer';

// Section background colors (must match the section's actual bg for seamless joins)
// Hero ends → Biography starts: dark navy
// Biography ends → Marriage starts: both dark navy
// Marriage ends → Duties starts: dark → cream
// Duties ends → Virtues starts: cream → dark (Virtues has its own bg image)
// Virtues ends → Mother starts: dark → cream
// Mother ends → Remembrance starts: cream → dark navy

export default function Exhibition() {
  return (
    <div style={{ fontFamily: "'Sarabun', sans-serif", background: '#0F2540' }}>
      <Navigation />

      <main id="main-content">
        <HeroSection />
        {/* Hero (#1a2e4a) → Biography (#1a2e4a) */}
        <SectionDivider bg="#1a2e4a" />

        <BiographySection />
        {/* Biography (#0F2540) → Marriage (#111e30) */}
        <SectionDivider bg="#0F2540" />

        <MarriageSection />
        {/* Marriage (#0F2540) → Duties (cream #F5F0E8) — blend via midpoint */}
        <SectionDivider bg="#0F2540" />

        <DutiesSection />
        {/* Duties (cream #EDE7D9) → Virtues (dark photo) */}
        <SectionDivider bg="#EDE7D9" />

        <VirtuesSection />
        {/* Virtues (dark) → Mother (cream #F5F0E8) */}
        <SectionDivider bg="#0a1828" />

        <MotherSection />
        {/* Mother (cream #EDE7D9) → Remembrance (dark #111e30) */}
        <SectionDivider bg="#EDE7D9" />

        <RemembranceSection />
      </main>

      <Footer />
    </div>
  );
}