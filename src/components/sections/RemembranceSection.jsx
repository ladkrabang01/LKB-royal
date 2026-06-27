const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useRef, useEffect } from 'react';
import GoldDivider from '@/components/GoldDivider';

export default function RemembranceSection() {
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
      id="remembrance"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-8"
      style={{ background: 'linear-gradient(180deg, #111e30 0%, #0a1828 60%, #060f1c 100%)' }}
      aria-label="น้อมรำลึก เสด็จสู่ฟากฟ้าสุราลัย"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12 sm:mb-16 fade-in-element">
          <p
            className="text-[#C9A84C] tracking-[0.25em] text-xs mb-3"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            IN ETERNAL REMEMBRANCE
          </p>
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: "'Sarabun', sans-serif" }}
          >
            เสด็จสู่ฟากฟ้าสุราลัย
          </h2>
          <GoldDivider className="mt-3" />
        </div>

        {/* Layout: image centered with soft text around */}
        <div className="flex flex-col items-center gap-10 sm:gap-12">
          {/* Portrait — larger */}
          <div className="w-full max-w-md sm:max-w-lg fade-in-element fade-in-delay-1">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-sm"
                style={{ boxShadow: '0 0 80px rgba(201,168,76,0.12)', zIndex: 0 }}
                aria-hidden="true"
              />
              <div className="sovereign-frame relative z-10" style={{ background: '#060f1c' }}>
                <img
                  src="https://media.db.com/images/public/user_6a3e826c0b269a98bf7b02df/be7bfadae_IMG_7423.jpg"
                  alt="พระบรมฉายาลักษณ์ สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง"
                  className="w-full h-auto block"
                  style={{ filter: 'grayscale(30%) brightness(0.88)' }}
                />
              </div>
            </div>
          </div>

          {/* Remembrance text */}
          <div className="max-w-2xl w-full text-center fade-in-element fade-in-delay-2">
            <div
              className="inline-block border border-[#C9A84C]/40 px-6 py-3 mb-6 rounded-sm"
              style={{ background: 'rgba(201,168,76,0.04)' }}
            >
              <p
                className="text-white/70 font-light tracking-wide"
                style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1rem)', fontFamily: "'Sarabun', sans-serif" }}
              >
                สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง
              </p>
              <p
                className="text-white font-semibold mt-1"
                style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
              >
                เสด็จสวรรคตเมื่อวันที่ ๒๔ ตุลาคม พุทธศักราช ๒๕๖๘
              </p>
            </div>

            <p
              className="text-white/85 leading-[2] mb-6"
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                letterSpacing: '0.02em',
              }}
            >
              ปวงชนชาวไทยต่างน้อมรำลึก
              <br />
              ในพระมหากรุณาธิคุณอันหาที่สุดมิได้
            </p>

            <GoldDivider className="my-5" />

            <p
              className="text-[#C9A84C] font-light leading-[2] italic"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', letterSpacing: '0.04em' }}
            >
              "พระองค์จะสถิตอยู่ในใจไทย
              <br />
              ตราบนิรันดร์"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}