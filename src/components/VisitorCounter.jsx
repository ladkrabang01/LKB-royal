import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState('...');

  useEffect(() => {
    // ใช้บริการ API ภายนอกเพื่อนับจำนวนผู้เข้าชมจริง
    // เปลี่ยน YOUR_NAMESPACE และ YOUR_KEY เป็นชื่อเว็บไซต์ของคุณ (เช่น lkb-royal)
    fetch('https://api.countapi.xyz/hit/lkb-royal/visit-count')
      .then(res => res.json())
      .then(data => setCount(data.value.toLocaleString()))
      .catch(() => setCount('1234')); // ค่าสำรองหากเชื่อมต่อ API ไม่ได้
  }, []);

  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
      style={{
        background: 'rgba(201,168,76,0.08)',
        border: '1px solid rgba(201,168,76,0.25)',
      }}
      aria-label="จำนวนผู้เข้าชมเว็บไซต์"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
      <span className="text-[#C9A84C] font-semibold text-sm">
        {count}
      </span>
    </div>
  );
}
