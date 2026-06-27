import { useState, useEffect } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'hero', label: 'บทนำ' },
  { id: 'biography', label: 'พระราชประวัติ' },
  { id: 'marriage', label: 'ราชาภิเษกสมรส' },
  { id: 'duties', label: 'พระราชกรณียกิจ' },
  { id: 'virtues', label: 'พระราชจริยวัตร' },
  { id: 'mother', label: 'แม่ของแผ่นดิน' },
  { id: 'remembrance', label: 'น้อมรำลึก' },
];

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);
const LOGO_URL = '/logo.png';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(15,37,64,0.93)] backdrop-blur-lg border-b border-[rgba(201,168,76,0.3)]'
          : 'glass-nav'
      }`}
      role="navigation"
      aria-label="เมนูหลัก"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 min-h-[44px] text-left"
            aria-label="กลับสู่หน้าแรก"
          >
            <img
              src={LOGO_URL}
              alt="โลโก้ศูนย์ส่งเสริมการเรียนรู้"
              className="h-12 w-12 object-contain flex-shrink-0"
              style={{ filter: 'brightness(1.05)', opacity: 0.95 }}
            />
            <span className="text-white font-light tracking-wide leading-tight block whitespace-nowrap" style={{ fontSize: 'clamp(0.6rem, 2.2vw, 0.825rem)' }}>
              ศูนย์ส่งเสริมการเรียนรู้ระดับเขตลาดกระบัง
            </span>
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 min-h-[44px] min-w-[44px] ${
                      isActive ? 'text-[#C9A84C]' : 'text-white/85 hover:text-white'
                    }`}
                    aria-current={isActive ? 'location' : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-[#C9A84C] rounded-full"
                        style={{ animation: 'growUnderline 0.35s ease forwards', width: '80%' }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 rounded focus:outline-none focus-visible:outline-dashed focus-visible:outline-[#C9A84C]"
            aria-label={menuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ${
            menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="py-2 border-t border-[rgba(201,168,76,0.2)]">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 text-base font-medium transition-colors duration-200 min-h-[44px] ${
                      isActive
                        ? 'text-[#C9A84C] bg-[rgba(201,168,76,0.08)]'
                        : 'text-white/85 hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                    }`}
                  >
                    {isActive && <span className="mr-2 text-[#C9A84C]">◆</span>}
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
