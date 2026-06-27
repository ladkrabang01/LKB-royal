import { useRef, useEffect } from 'react';
import GoldDivider from '@/components/GoldDivider';

const marriageFacts = [
  {
    num: '๑',
    text: 'ทรงอภิเษกสมรสเมื่อวันที่ ๒๘ เมษายน พุทธศักราช ๒๔๙๓ กับพระบาทสมเด็จพระเจ้าอยู่หัว ภูมิพลอดุลยเดชมหาราช',
  },
  {
    num: '๒',
    text: 'ทรงเป็น "สมเด็จพระบรมราชินี" คู่พระบารมี ทรงร่วมเสด็จเยี่ยมราษฎรทั่วประเทศและทรงดูแลพระราชกรณียกิจ',
  },
  {
    num: '๓',
    text: 'ทรงเคียงข้างในหลวง รัชกาลที่ ๙ ด้วยความจงรักภักดี และทรงอุทิศพระวรกายเพื่อความผาสุกของปวงชนชาวไทย',
  },
];

export default function MarriageSection() {
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
      id="marriage"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-8"
      style={{ background: 'linear-gradient(180deg, #111e30 0%, #0F2540 100%)' }}
      aria-label="ราชาภิเษกสมรส"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 fade-in-element">
          <p
            className="text-[#C9A84C] tracking-[0.25em] text-xs mb-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            ROYAL MARRIAGE
          </p>
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: "'Sarabun', sans-serif" }}
          >
            ราชาภิเษกสมรส
          </h2>
          <GoldDivider className="mt-3" />
        </div>

        <div className="flex flex-col items-center gap-10 lg:gap-12">
          <div className="w-full max-w-xl fade-in-element fade-in-delay-1">
            <div className="relative">
              <svg className="absolute -top-3 -left-3" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M0 28 Q0 0 28 0" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
                <path d="M0 20 Q0 8 12 8" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.5"/>
              </svg>
              <svg className="absolute -top-3 -right-3" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M28 28 Q28 0 0 0" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
                <path d="M28 20 Q28 8 16 8" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.5"/>
              </svg>
              <svg className="absolute -bottom-3 -left-3" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M0 0 Q0 28 28 28" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
                <path d="M0 8 Q0 20 12 20" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.5"/>
              </svg>
              <svg className="absolute -bottom-3 -right-3" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M28 0 Q28 28 0 28" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
                <path d="M28 8 Q28 20 16 20" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.5"/>
              </svg>

              <div className="sovereign-frame m-2" style={{ background: '#0a1828' }}>
                <img
                  src="/3.jpeg"
                  alt="พระบรมฉายาลักษณ์ราชาภิเษกสมรส สมเด็จพระนางเจ้าสิริกิติ์ฯ กับในหลวง รัชกาลที่ ๙"
                  className="w-full h-auto block"
                  style={{ filter: 'grayscale(20%) brightness(0.92)' }}
                />
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl">
            <ul className="space-y-5" role="list">
              {marriageFacts.map((item, idx) => (
                <li
                  key={idx}
                  className={`fade-in-element fade-in-delay-${idx + 2} flex gap-4 items-start`}
                >
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] font-semibold text-sm mt-1"
                    aria-hidden="true"
                    style={{ fontFamily: "'Cinzel', serif", minWidth: '2.5rem', minHeight: '2.5rem' }}
                  >
                    {item.num}
                  </span>
                  <p
                    className="text-white/90 leading-[1.9] flex-1"
                    style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}
                  >
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
