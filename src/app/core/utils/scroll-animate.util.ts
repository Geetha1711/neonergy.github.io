/**
 * Creates an IntersectionObserver that adds `visibleClass` to each matching
 * element once it enters the viewport, then stops observing it.
 */
export function observeScrollIn(
  selector: string,
  visibleClass: string,
  threshold = 0.15,
): IntersectionObserver {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(visibleClass);
        observer.unobserve(entry.target);
      }
    }),
    { threshold },
  );
  document.querySelectorAll(selector).forEach(el => observer.observe(el));
  return observer;
}
