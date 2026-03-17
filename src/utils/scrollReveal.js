// Scroll reveal utility using IntersectionObserver
// - Adds animation classes to elements with `reveal-on-scroll` or `reveal-stagger`

const DEFAULT_OPTIONS = {
  root: null,
  rootMargin: '0px 0px -15% 0px',
  threshold: 0.12,
};

const animationMap = {
  fadeInUp: 'animate-fadeInUp',
  fadeIn: 'animate-fadeIn',
  scaleIn: 'animate-scaleIn',
  slideLeft: 'animate-slideInFromLeft',
  slideRight: 'animate-slideInFromRight',
  hero: 'animate-heroReveal',
  card: 'animate-card-entrance',
};

function applyReveal(el, animationName, index, staggerDelay) {
  const cls = animationMap[animationName] || animationMap.fadeInUp;
  if (typeof index === 'number' && staggerDelay) {
    el.style.animationDelay = `${(index * staggerDelay).toFixed(2)}s`;
  }
  el.classList.add(cls);
}

export function initScrollReveal(options = {}) {
  const opts = Object.assign({}, DEFAULT_OPTIONS, options);

  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const target = entry.target;

      // Stagger container
      if (target.classList.contains('reveal-stagger') || target.dataset.stagger === 'true') {
        const itemSelector = target.dataset.item || '.reveal-item';
        const staggerDelay = parseFloat(target.dataset.staggerDelay) || 0.08;
        const animation = target.dataset.animation || 'fadeInUp';
        const items = Array.from(target.querySelectorAll(itemSelector));
        items.forEach((it, i) => applyReveal(it, it.dataset.animation || animation, i, staggerDelay));
        obs.unobserve(target);
        return;
      }

      // Single element reveal
      if (target.classList.contains('reveal-on-scroll') || target.dataset.reveal) {
        const animation = target.dataset.reveal || 'fadeInUp';
        applyReveal(target, animation);
        obs.unobserve(target);
      }
    });
  }, opts);

  // Observe elements
  const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-stagger, [data-reveal], [data-stagger="true"]');
  elements.forEach(el => {
    // Ensure items start hidden when JS runs
    if (el.classList.contains('reveal-stagger') || el.dataset.stagger === 'true') {
      const itemSelector = el.dataset.item || '.reveal-item';
      el.querySelectorAll(itemSelector).forEach(it => {
        it.style.opacity = '0';
      });
    } else {
      el.style.opacity = '0';
    }
    observer.observe(el);
  });

  return observer;
}

// Auto-init on module load for convenience in the client app
if (typeof window !== 'undefined') {
  // Delay init slightly to allow SSR/rehydration
  window.addEventListener('load', () => {
    setTimeout(() => initScrollReveal(), 120);
  });
}

export default initScrollReveal;
