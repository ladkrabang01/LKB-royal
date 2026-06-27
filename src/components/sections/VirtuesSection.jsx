import { useRef, useEffect } from 'react';
import GoldDivider from '@/components/GoldDivider';

const virtueLines = [
  'ทรงเป็นแบบอย่างของสตรีไทย ในความอ่อนโยน กตัญญู และเสียสละ',
  'ทรงมีพระเมตตาและความเรียบง่าย',
  'ทรงงานด้วยหัวใจแห่งความรัก',
  'ทรงถือพระพุทธศาสนาเป็นหลักในการดำเนินพระชนมชีพ',
  'ทรงเป็นศูนย์รวมแห่งความจงรักภักดีของพสกนิกรไทย',
];

const IMAGE_URL = '/5.jpg';

export default function VirtuesSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const rect = bgRef.current.getBoundingClientRect();
      const scrolled = -rect.top * 0.2;
      bgRef.current.style.backgroundPositionY = `calc(50% + ${scrolled}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="virtues" ref={sectionRef} aria-label="พระราชจริยวัตรอันงดงาม">

      {/* ===== MOBILE LAYOUT (< md) ===== */}
      <div className="md:hidden" style={{ background: '#0a1828' }}>
        {/* 1. Header */}
        <div className="fade-in-element text-center px-4 pt-12 pb-6">
          <p className="text-[#C9A84C] tracking-[0.25em] text-xs mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
            ROYAL VIRTUES
          </p>
          <h2 className="font-bold text-white mb-4" style={{ fontSize: '1.45rem', lineHeight: 1.6 }}>
            พระราชจริยวัตรอันงดงาม
          </h2>
          <GoldDivider />
        </div>

        {/* 2. Image — full width, not cropped */}
        <div className="fade-in-element fade-in-delay-1 flex justify-center px-4 pb-8">
          <div
            className="sovereign-frame"
            style={{ width: '90%', maxWidth: '400px' }}
          >
            <img
              src={IMAGE_URL}
              alt="พระราชจริยวัตรอันงดงาม"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* 3. Text content below image */}
        <div className="px-5 pb-12">
          <ul className="space-y-4" role="list">
            {virtueLines.map((line, idx) => (
              <li
                key={idx}
                className={`fade-in-element fade-in-delay-${Math.min(idx + 1, 4)} text-white/90 leading-[1.9] flex items-start gap-2`}
                style={{ fontSize: '0.95rem' }}
              >
                <span className="text-[#C9A84C] mt-1 flex-shrink-0">◆</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="fade-in-element fade-in-delay-4 mt-8 border-t border-[rgba(201,168,76,0.35)] pt-6 text-center">
            <p className="text-[#C9A84C] font-light italic leading-[1.9]" style={{ fontSize: '0.95rem' }}>
              "ทรงเป็นศูนย์รวมใจชาวไทยทั้งแผ่นดิน"
            </p>
          </div>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT (≥ md) — unchanged parallax overlay ===== */}
      <div className="hidden md:block relative overflow-hidden py-32 px-8">
        {/* Parallax background */}
        <div
          ref={bgRef}
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${IMAGE_URL}")`,
            backgroundSize: 'cover',
            backgroundPosition: '50% 50%',
            willChange: 'background-position',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(10,20,36,0.88) 0%, rgba(10,20,36,0.78) 60%, rgba(10,20,36,0.85) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="fade-in-element">
            <p className="text-[#C9A84C] tracking-[0.25em] text-xs mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
              ROYAL VIRTUES
            </p>
            <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textShadow: '0 2px 16px rgba(0,0,0,0.7)' }}>
              พระราชจริยวัตรอันงดงาม
            </h2>
            <GoldDivider className="mb-10" />
          </div>
          <ul className="space-y-5" role="list">
            {virtueLines.map((line, idx) => (
              <li
                key={idx}
                className={`fade-in-element fade-in-delay-${Math.min(idx + 1, 4)} text-white leading-[1.9]`}
                style={{ fontSize: 'clamp(0.95rem, 2vw, 1.2rem)', textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}
              >
                {line}
              </li>
            ))}
          </ul>
          <div className="fade-in-element fade-in-delay-4 mt-10 border-t border-[rgba(201,168,76,0.35)] pt-8">
            <p className="text-[#C9A84C] font-light italic leading-[1.9]" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
              "ทรงเป็นศูนย์รวมใจชาวไทยทั้งแผ่นดิน"
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
