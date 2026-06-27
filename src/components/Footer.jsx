const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import VisitorCounter from '@/components/VisitorCounter';

const LOGO_URL = 'https://media.db.com/images/public/6a3e82989cca8745119fa420/91bcee984_IMG_7424-removebg-preview.png';

export default function Footer() {
  return (
    <footer
      className="py-10 sm:py-14 px-4 text-center"
      style={{
        background: 'linear-gradient(180deg, #060f1c 0%, #030a12 100%)',
        borderTop: '1px solid rgba(201,168,76,0.25)',
      }}
      aria-label="ส่วนท้ายของเว็บไซต์"
    >
      <div className="max-w-2xl mx-auto">
        {/* Institution logo */}
        <div className="flex justify-center mb-4">
          <img
            src={LOGO_URL}
            alt="โลโก้ศูนย์ส่งเสริมการเรียนรู้ระดับเขตลาดกระบัง"
            className="h-28 w-28 object-contain"
            style={{ filter: 'brightness(1.05)', opacity: 0.85 }}
          />
        </div>

        {/* Gold divider ornament */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C9A84C] opacity-30" />
          <svg width="8" height="8" viewBox="0 0 8 8" fill="#C9A84C" opacity="0.6">
            <path d="M4 0 L5 3 L8 4 L5 5 L4 8 L3 5 L0 4 L3 3 Z"/>
          </svg>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C9A84C] opacity-30" />
        </div>

        <p
          className="text-white/60 font-light leading-[1.9]"
          style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1rem)' }}
        >
          จัดทำโดย
        </p>
        <p
          className="text-white/50 font-light leading-[1.9]"
          style={{ fontSize: 'clamp(0.8rem, 1.6vw, 0.95rem)' }}
        >
          งานประชาสัมพันธ์
        </p>
        <p
          className="text-[#C9A84C]/80 font-semibold leading-[1.9]"
          style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}
        >
          ศูนย์ส่งเสริมการเรียนรู้ระดับเขตลาดกระบัง
        </p>

        {/* Visitor counter */}
        <div className="mt-6 flex justify-center">
          <VisitorCounter />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <div className="h-px flex-1 max-w-[60px] bg-[#C9A84C] opacity-20" />
          <p
            className="text-white/25 font-light"
            style={{ fontSize: '0.78rem', fontFamily: "'Cinzel', serif", letterSpacing: '0.1em' }}
          >
            IN MEMORIAM
          </p>
          <div className="h-px flex-1 max-w-[60px] bg-[#C9A84C] opacity-20" />
        </div>
      </div>
    </footer>
  );
}