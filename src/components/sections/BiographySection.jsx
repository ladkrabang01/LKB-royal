import { useRef, useEffect } from 'react';
import GoldDivider from '@/components/GoldDivider';

const bioBullets = [
  {
    num: '๑',
    text: 'ทรงพระราชสมภพเมื่อวันที่ ๑๒ สิงหาคม พุทธศักราช ๒๔๗๕ ณ กรุงเทพมหานคร',
  },
  {
    num: '๒',
    text: 'เป็นพระราชธิดาใน พลเอก พระวรวงศ์เธอ กรมหมื่นจันทบุรีสุรนาถ กับหม่อมหลวงบัว กิติยากร',
  },
  {
    num: '๓',
    text: 'ทรงได้รับพระราชทานนาม "สิริกิติ์" มีความหมายว่า "ผู้เป็นศรีแห่งราชสกุลกิติยากร"',
  },
];

export default function BiographySection() {
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
      id="biography"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-8"
      style={{ background: 'linear-gradient(180deg, #1a2e4a 0%, #0F2540 100%)' }}
      aria-label="พระราชประวัติ"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 fade-in-element">
          <p
            className="text-[#C9A84C] tracking-[0.25em] text-xs mb-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            ROYAL BIOGRAPHY
          </p>
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: "'Sarabun', sans-serif" }}
          >
            พระราชประวัติ
          </h2>
          <GoldDivider className="mt-3" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full max-w-md lg:max-w-lg flex-shrink-0 fade-in-element fade-in-delay-1">
            <div className="relative">
              <span className="ghost-number absolute -top-8 -left-6 select-none text-white/5" aria-hidden="true">
                ๒
              </span>
              <div className="sovereign-frame" style={{ background: '#0F2540', borderColor: '#C9A84C' }}>
                <img
                  src="/2.jpeg"
                  alt="พระบรมฉายาลักษณ์ สมเด็จพระนางเจ้าสิริกิติ์ฯ"
                  className="w-full h-auto block"
                  style={{ filter: 'grayscale(15%) brightness(0.93)', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <ul className="space-y-6 sm:space-y-8" role="list">
              {bioBullets.map((item, idx) => (
                <li
                  key={idx}
                  className={`fade-in-element fade-in-delay-${idx + 2} relative flex gap-4 sm:gap-6`}
                >
                  <span
                    className="flex-shrink-0 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] font-semibold text-base sm:text-lg mt-1"
                    aria-hidden="true"
                    style={{ fontFamily: "'Cinzel', serif", minWidth: '2.75rem', minHeight: '2.75rem' }}
                  >
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <p
                      className="text-white/90 leading-[1.9]"
                      style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}
                    >
                      {item.text}
                    </p>
                    {idx < bioBullets.length - 1 && (
                      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-20" />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
