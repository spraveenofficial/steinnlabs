// Hook for setting aka Next & Previous for Home Corousel
const setCorousel = (elementRef) => {
  let gap = 10;
  const nextFunction = () => {
    const element = elementRef.current;
    const carousel = element.querySelector(".carousel-main"),
      content = element.querySelector(".carousel-content"),
      next = element.querySelector(".carousel-next"),
      prev = element.querySelector(".carousel-prev");

    let width = carousel.offsetWidth;
    carousel.scrollBy(width + gap, 0);
    if (carousel.scrollWidth !== 0) {
      prev.style.opacity = 2;
    }
    if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.opacity = 0.2;
    }
    window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
  };

  const prevFunction = () => {
    const element = elementRef.current;
    const carousel = element.querySelector(".carousel-main"),
      content = element.querySelector(".carousel-content"),
      next = element.querySelector(".carousel-next"),
      prev = element.querySelector(".carousel-prev");
    let width = carousel.offsetWidth;
    carousel.scrollBy(-(width + gap), 0);
    if (carousel.scrollLeft - width - gap <= 0) {
      prev.style.opacity = 0.2;
    }
    if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
      next.style.opacity = 2;
    }
    window.addEventListener("resize", (e) => (width = carousel.offsetWidth));
  };
  return { next: nextFunction, prev: prevFunction };
};
export { setCorousel };
