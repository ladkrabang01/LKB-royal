import { useRef, useEffect } from 'react';
import GoldDivider from '@/components/GoldDivider';

export default function MotherSection() {
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
    <section id="mother" ref={sectionRef} className="py-20 sm:py-28 px-4 sm:px-8" style={{ background: 'linear-gradient(180deg, #F5F0E8 0%, #EDE7D9 100%)' }} aria-label="แม่ของแผ่นดิน">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 fade-in-element">
          <p className="text-[#C9A84C] tracking-[0.25em] text-xs mb-3" style={{ fontFamily: "'Cinzel', serif" }}>MOTHER OF THE NATION</p>
          <h2 className="font-bold text-[#0F2540]" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: "'Sarabun', sans-serif" }}>แม่ของแผ่นดิน</h2>
          <GoldDivider className="mt-3" />
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
          <div className="w-full max-w-md lg:max-w-lg flex-shrink-0 fade-in-element fade-in-delay-1">
            <div className="sovereign-frame">
              <img src="/6.jpeg" alt="แม่ของแผ่นดิน" className="w-full h-auto block" />
            </div>
          </div>
          <div className="flex-1 fade-in-element fade-in-delay-2">
            <p className="text-[#0F2540] font-bold leading-[1.7]" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>"แม่ของแผ่นดิน"</p>
            <p className="text-[#A8865A] font-light mt-2 leading-[1.9]" style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}>ที่รักและห่วงใยประชาชนดุจลูก</p>
          </div>
        </div>
      </div>
    </section>
  );
}
