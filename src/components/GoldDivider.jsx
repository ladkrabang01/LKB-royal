export default function GoldDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-2 ${className}`}>
      <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 8 Q10 2 20 8 Q30 14 40 8 Q50 2 60 8" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.7"/>
        <circle cx="30" cy="8" r="2" fill="#C9A84C" opacity="0.9"/>
        <circle cx="18" cy="8" r="1.2" fill="#C9A84C" opacity="0.6"/>
        <circle cx="42" cy="8" r="1.2" fill="#C9A84C" opacity="0.6"/>
      </svg>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0 L8.5 5.5 L14 7 L8.5 8.5 L7 14 L5.5 8.5 L0 7 L5.5 5.5 Z" fill="#C9A84C" opacity="0.85"/>
      </svg>
      <svg width="60" height="16" viewBox="0 0 60 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 8 Q10 14 20 8 Q30 2 40 8 Q50 14 60 8" stroke="#C9A84C" strokeWidth="1" fill="none" opacity="0.7"/>
        <circle cx="30" cy="8" r="2" fill="#C9A84C" opacity="0.9"/>
        <circle cx="18" cy="8" r="1.2" fill="#C9A84C" opacity="0.6"/>
        <circle cx="42" cy="8" r="1.2" fill="#C9A84C" opacity="0.6"/>
      </svg>
    </div>
  );
}