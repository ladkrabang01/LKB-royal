export default function SectionDivider({ bg = '#0F2540' }) {
  return (
    <div
      className="w-full flex items-center justify-center py-2"
      style={{ background: bg }}
      aria-hidden="true"
    >
      <svg width="320" height="28" viewBox="0 0 320 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 14 Q30 6 60 14 Q90 22 120 14" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4"/>
        <ellipse cx="130" cy="10" rx="4" ry="7" fill="none" stroke="#C9A84C" strokeWidth="0.7" opacity="0.4" transform="rotate(-20 130 10)"/>
        <ellipse cx="138" cy="7" rx="3" ry="6" fill="none" stroke="#C9A84C" strokeWidth="0.7" opacity="0.3" transform="rotate(-10 138 7)"/>
        <path d="M160 4 L165 14 L160 24 L155 14 Z" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.7"/>
        <circle cx="160" cy="14" r="2.5" fill="#C9A84C" opacity="0.7"/>
        <ellipse cx="182" cy="10" rx="4" ry="7" fill="none" stroke="#C9A84C" strokeWidth="0.7" opacity="0.4" transform="rotate(20 182 10)"/>
        <ellipse cx="190" cy="7" rx="3" ry="6" fill="none" stroke="#C9A84C" strokeWidth="0.7" opacity="0.3" transform="rotate(10 190 7)"/>
        <path d="M200 14 Q230 22 260 14 Q290 6 320 14" stroke="#C9A84C" strokeWidth="0.8" fill="none" opacity="0.4"/>
        <line x1="0" y1="14" x2="148" y2="14" stroke="#C9A84C" strokeWidth="0.4" opacity="0.25"/>
        <line x1="172" y1="14" x2="320" y2="14" stroke="#C9A84C" strokeWidth="0.4" opacity="0.25"/>
      </svg>
    </div>
  );
}