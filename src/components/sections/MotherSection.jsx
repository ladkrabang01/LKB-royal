import { useRef, useEffect } from 'react';
import GoldDivider from '@/components/GoldDivider';

export default function MotherSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in-element').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="mother"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-8"
      style={{ background: 'linear-gradient(180deg, #F5F0E8 0%, #EDE7D9 100%)' }}
      aria-label="แม่ของแผ่นดิน"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12 sm:mb-16 fade-in-element">
          <p
            className="text-[#C9A84C] tracking-[0.25em] text-xs mb-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            MOTHER OF THE NATION
          </p>
          <h2
            className="font-bold text-[#0F2540]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: "'Sarabun', sans-serif" }}
          >
            แม่ของแผ่นดิน
          </h2>
          <GoldDivider className="mt-3" />
        </div>

        {/* Split: image left, text right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
          {/* Image — larger */}
          <div className="w-full max-w-md lg:max-w-lg flex-shrink-0 fade-in-element fade-in-delay-1">
            <div className="relative">
              <span className="ghost-number absolute -top-6 -right-4 select-none" aria-hidden="true" style={{ color: 'rgba(201,168,76,0.06)' }}>
                แม่
              </span>
              <div className="sovereign-frame">
                <img
                  src="/6.jpg"
                  alt="สมเด็จพระนางเจ้าสิริกิติ์ฯ แม่ของแผ่นดิน"
                  className="w-full h-auto block"
                  style={{ filter: 'grayscale(15%) brightness(0.95) saturate(0.9)' }}
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 fade-in-element fade-in-delay-2">
            <blockquote className="mb-8">
              <div className="w-1 h-16 bg-[#C9A84C] mb-4" />
              <p
                className="text-[#0F2540] font-bold leading-[1.7]"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}
              >
                "แม่ของแผ่นดิน"
              </p>
              <p
                className="text-[#A8865A] font-light mt-2 leading-[1.9]"
                style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}
              >
                ที่รักและห่วงใยประชาชนดุจลูก
              </p>
            </blockquote>

            <div className="space-y-5">
              <div className="flex gap-3 items-start fade-in-element fade-in-delay-3">
                <span className="text-[#C9A84C] text-xl mt-0.5 flex-shrink-0" aria-hidden="true">◆</span>
                <p
                  className="text-[#0F2540] leading-[1.9]"
                  style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}
                >
                  ทรงเป็น "แม่ของแผ่นดิน" ที่รักและห่วงใยประชาชนดุจลูก ทรงสอนให้คนไทยรู้จักพึ่งพาตนเองและรักษาวัฒนธรรมไทย
                </p>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-30" />
              <div className="flex gap-3 items-start fade-in-element fade-in-delay-4">
                <span className="text-[#C9A84C] text-xl mt-0.5 flex-shrink-0" aria-hidden="true">◆</span>
                <p
                  className="text-[#0F2540] leading-[1.9]"
                  style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}
                >
                  วันเฉลิมพระชนมพรรษา <strong>๑๒ สิงหาคม</strong> จึงถือเป็น{' '}
                  <strong className="text-[#A8865A]">"วันแม่แห่งชาติ"</strong>{' '}
                  สะท้อนความรักของพระองค์ที่มีต่อประชาชนชาวไทยอย่างหาที่สุดมิได้
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
