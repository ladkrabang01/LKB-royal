import { useRef, useEffect } from 'react';
import GoldDivider from '@/components/GoldDivider';

export default function RemembranceSection() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.querySelectorAll('.fade-in-element').forEach((el) => el.classList.add('visible'));
      });
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="remembrance" ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-8" style={{ background: 'linear-gradient(180deg, #111e30 0%, #0a1828 60%, #060f1c 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 fade-in-element">
          <p className="text-[#C9A84C] tracking-[0.25em] text-xs mb-3" style={{ fontFamily: "'Cinzel', serif" }}>IN ETERNAL REMEMBRANCE</p>
          <h2 className="font-bold text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: "'Sarabun', sans-serif" }}>เสด็จสู่ฟากฟ้าสุราลัย</h2>
          <GoldDivider className="mt-3" />
        </div>
        <div className="flex flex-col items-center gap-10 sm:gap-12">
          <div className="w-full max-w-md sm:max-w-lg fade-in-element fade-in-delay-1">
            <div className="sovereign-frame relative z-10" style={{ background: '#060f1c' }}>
              <img src="/7.jpeg" alt="น้อมรำลึก" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
