import { useEffect, useRef } from 'react';

export function useFadeIn(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: options.threshold || 0.15, rootMargin: options.rootMargin || '0px 0px -60px 0px' }
    );

    const elements = el.querySelectorAll('.fade-in-element');
    elements.forEach((elem) => observer.observe(elem));

    // Also observe the root element itself if it has the class
    if (el.classList.contains('fade-in-element')) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}