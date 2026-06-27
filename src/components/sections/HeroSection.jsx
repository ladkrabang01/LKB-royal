const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useEffect, useRef } from 'react';
import GoldDivider from '@/components/GoldDivider';

export default function HeroSection() {
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    el.classList.add('ken-burns');
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="บทนำเฉลิมพระเกียรติ"
    >
      {/* Background: dark gradient only, no portrait as bg to avoid face obstruction */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #0a1828 0%, #0F2540 45%, #1a2e4a 100%)' }} />

      {/* Subtle gold texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Bottom fade — matches Biography dark background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to bottom, transparent, #1a2e4a)' }}
      />

      {/* Content: side-by-side layout — text left, portrait right, portrait never obscured */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 py-28 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* Left: text block */}
        <div className="flex-1 text-center lg:text-left">
          <p
            className="text-[#C9A84C] font-light tracking-[0.3em] text-xs sm:text-sm mb-4 opacity-90"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            ROYAL ONLINE EXHIBITION
          </p>

          <h1
            className="text-white font-bold leading-[1.5] mb-4 text-center lg:text-left"
            style={{
              fontSize: 'clamp(1.5rem, 6vw, 3.2rem)',
              textShadow: '0 2px 12px rgba(0,0,0,0.5)',
              wordBreak: 'keep-all',
              overflowWrap: 'normal',
            }}
          >
            <span className="inline-block whitespace-nowrap">สมเด็จพระนางเจ้าสิริกิติ์</span>{' '}
            <span className="inline-block whitespace-nowrap">พระบรมราชินีนาถ</span>{' '}
            <span className="inline-block whitespace-nowrap text-[#C9A84C]">พระบรมราชชนนีพันปีหลวง</span>
          </h1>

          <GoldDivider className="lg:justify-start my-5" />

          <p
            className="text-white/90 font-light mb-3 leading-[1.9]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}
          >
            สถิตในดวงใจตราบนิรันดร์
          </p>

          <p
            className="text-white/75 font-light mb-6 leading-[2]"
            style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.125rem)' }}
          >
            น้อมศิระกราน กราบแทบพระยุคลบาท
            <br />
            ด้วยสำนึกในพระมหากรุณาธิคุณเป็นล้นพ้นอันหาที่สุดมิได้
          </p>

          <div className="mt-6 border-l-2 border-[#C9A84C] pl-4 lg:pl-5">
            <p
              className="text-white/65 font-light leading-[1.9]"
              style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1rem)' }}
            >
              ข้าพระพุทธเจ้า ผู้บริหาร บุคลากร คณะครู และนักศึกษา
              <br />
              <strong className="text-white/85 font-semibold">ศูนย์ส่งเสริมการเรียนรู้ระดับเขตลาดกระบัง</strong>
            </p>
          </div>
        </div>

        {/* Right: portrait — displayed as a standalone image, face never covered */}
        <div className="flex-shrink-0 w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[400px]">
          <div
            className="sovereign-frame rounded-sm overflow-hidden"
            style={{ boxShadow: '0 0 60px rgba(201,168,76,0.2), 0 8px 40px rgba(0,0,0,0.4)' }}
          >
            <img
              ref={imgRef}
              src="https://media.db.com/images/public/user_6a3e826c0b269a98bf7b02df/83ff7813c_IMG_7416.jpg"
              alt="พระบรมฉายาลักษณ์ สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง"
              className="w-full h-auto block"
              style={{ filter: 'grayscale(20%) brightness(0.95)', transformOrigin: 'center center' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center items-center">
        <div className="flex flex-col items-center gap-1 text-white/40 animate-bounce">
          <span className="text-xs tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>SCROLL</span>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path d="M8 0 L8 16 M2 10 L8 16 L14 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}