import { useState, useEffect, useRef } from 'react';

const SESSION_KEY = 'visitor_counted';

export default function VisitorCounter() {
  const [count, setCount] = useState(null);
  const [animatedCount, setAnimatedCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const trackVisit = async () => {
      try {
        const alreadyCounted = sessionStorage.getItem(SESSION_KEY);

        if (!alreadyCounted) {
          // เซสชันใหม่ — บันทึกสถิติเพิ่มเข้าชม
          const res = await fetch('/api/visit', { method: 'POST' });
          const data = await res.json();
          sessionStorage.setItem(SESSION_KEY, '1');
          setCount(data.count || 0);
        } else {
          // เคยเข้าชมแล้วในรอบนี้ — ดึงสถิติปัจจุบันมาแสดงอย่างเดียว
          const res = await fetch('/api/visit');
          const data = await res.json();
          setCount(data.count || 0);
        }
      } catch (err) {
        console.warn('VisitorCounter: could not reach counter API', err);
        setCount(null);
      }
    };

    trackVisit();
  }, []);

  // แอนิเมชันรันตัวเลขเพิ่มขึ้นตอนเปิดหน้าเว็บ
  useEffect(() => {
    if (count === null || count === 0) {
      if (count === 0) setIsVisible(true);
      return;
    }
    setIsVisible(true);

    const duration = 1200;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      // Ease-out cubic curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedCount(Math.round(eased * count));

      if (current >= steps) {
        clearInterval(timer);
        setAnimatedCount(count);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [count]);

  if (count === null) return null;

  return (
    <div
      className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full"
      style={{
        background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)',
        border: '1px solid rgba(201,168,76,0.2)',
        backdropFilter: 'blur(8px)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
      aria-label={`จำนวนผู้เข้าชมเว็บไซต์ ${count.toLocaleString('th-TH')} ครั้ง`}
    >
      <span
        style={{
          display: 'inline-flex',
          animation: 'visitorPulse 2.5s ease-in-out infinite',
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </span>

      <span
        className="text-white/60 font-light tracking-wide"
        style={{ fontSize: '0.8rem' }}
      >
        ผู้เข้าชม
      </span>

      <span
        className="text-[#C9A84C] font-semibold tabular-nums"
        style={{
          fontSize: '0.95rem',
          letterSpacing: '0.05em',
          minWidth: '2ch',
          textAlign: 'center',
        }}
      >
        {animatedCount.toLocaleString('th-TH')}
      </span>

      <span
        className="text-white/60 font-light"
        style={{ fontSize: '0.8rem' }}
      >
        ครั้ง
      </span>

      <style>{`
        @keyframes visitorPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
