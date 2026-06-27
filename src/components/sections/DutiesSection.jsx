import { useRef, useEffect } from 'react';
import GoldDivider from '@/components/GoldDivider';

const dutyCards = [
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4 C20 4 8 10 8 20 C8 28 14 34 20 36 C26 34 32 28 32 20 C32 10 20 4 20 4Z" stroke="#C9A84C" strokeWidth="1.2" fill="none"/>
        <path d="M14 20 Q17 16 20 20 Q23 24 26 20" stroke="#C9A84C" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <circle cx="20" cy="12" r="2" fill="#C9A84C" opacity="0.7"/>
      </svg>
    ),
    title: 'มูลนิธิส่งเสริมศิลปาชีพ',
    body: 'ทรงริเริ่มก่อตั้ง "มูลนิธิส่งเสริมศิลปาชีพ" เพื่อสร้างอาชีพและรายได้แก่ราษฎรผู้ยากไร้ทั่วทุกภูมิภาค',
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="24" height="20" rx="1" stroke="#C9A84C" strokeWidth="1.2" fill="none"/>
        <line x1="8" y1="16" x2="32" y2="16" stroke="#C9A84C" strokeWidth="0.8"/>
        <line x1="8" y1="22" x2="32" y2="22" stroke="#C9A84C" strokeWidth="0.8"/>
        <line x1="14" y1="10" x2="14" y2="30" stroke="#C9A84C" strokeWidth="0.8"/>
        <line x1="20" y1="10" x2="20" y2="30" stroke="#C9A84C" strokeWidth="0.8"/>
        <line x1="26" y1="10" x2="26" y2="30" stroke="#C9A84C" strokeWidth="0.8"/>
        <path d="M8 6 L12 10 M32 6 L28 10" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    title: 'อนุรักษ์ผ้าไทย',
    body: 'ทรงส่งเสริมการอนุรักษ์ผ้าไทยและศิลปหัตถกรรมพื้นบ้าน ฟื้นฟูภูมิปัญญาท้องถิ่นให้คงคุณค่าสืบต่อไป',
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="14" stroke="#C9A84C" strokeWidth="1.2" fill="none"/>
        <path d="M20 10 L20 20 L27 20" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="20" r="2" fill="#C9A84C"/>
        <path d="M12 32 Q16 28 20 30 Q24 32 28 28" stroke="#C9A84C" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    title: 'พัฒนาชาติ',
    body: 'ทรงอุทิศพระวรกายในการพัฒนาการเกษตร การแพทย์ การศึกษา และสิ่งแวดล้อม เพื่อความผาสุกของปวงชนชาวไทย',
  },
];

export default function DutiesSection() {
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
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="duties"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-8"
      style={{ background: 'linear-gradient(180deg, #F5F0E8 0%, #EDE7D9 100%)' }}
      aria-label="พระราชกรณียกิจเพื่อปวงชนชาวไทย"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 fade-in-element">
          <p
            className="text-[#C9A84C] tracking-[0.25em] text-xs mb-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            ROYAL DUTIES
          </p>
          <h2
            className="font-bold text-[#0F2540]"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: "'Sarabun', sans-serif" }}
          >
            พระราชกรณียกิจ
            <br />
            <span style={{ fontSize: '0.65em', fontWeight: 400, color: '#A8865A' }}>เพื่อปวงชนชาวไทย</span>
          </h2>
          <GoldDivider className="mt-3" />
        </div>

        <div className="fade-in-element fade-in-delay-1 mb-12 sm:mb-14 max-w-3xl mx-auto">
          <div className="sovereign-frame">
            <img
              src="/4.jpeg"
              alt="สมเด็จพระนางเจ้าสิริกิติ์ฯ ทรงปฏิบัติพระราชกรณียกิจ"
              className="w-full h-auto block"
              style={{ filter: 'grayscale(10%) brightness(0.95)' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {dutyCards.map((card, idx) => (
            <div
              key={idx}
              className={`duty-card fade-in-element fade-in-delay-${idx + 2} border border-[#C9A84C]/30 rounded-sm p-6 sm:p-8 text-center`}
              style={{
                background: 'rgba(15,37,64,0.05)',
                backdropFilter: 'blur(4px)',
              }}
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3
                className="font-semibold text-[#0F2540] mb-3"
                style={{ fontSize: '1.1rem', fontFamily: "'Sarabun', sans-serif" }}
              >
                {card.title}
              </h3>
              <div className="w-8 h-px bg-[#C9A84C] mx-auto mb-3 opacity-60" />
              <p
                className="text-[#3D3D3D] leading-[1.9]"
                style={{ fontSize: '0.95rem' }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
