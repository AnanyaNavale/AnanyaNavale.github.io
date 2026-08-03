import { useState, useRef, useEffect } from "react";
import "./Carousel.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type CarouselProps = {
  items: React.ReactNode[];
  paginationColors?: string[];
  inactiveDotColor?: string;
};

export default function Carousel({
  items,
  paginationColors = [],
  inactiveDotColor = "#EAEAEA",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const [translateBase, setTranslateBase] = useState(0);

  // Directly measure the active item's real layout position and center it.
  // offsetLeft/offsetWidth are unaffected by transform, so this is always accurate,
  // regardless of gap size, borders, or any drift between CSS and JS constants.
  useEffect(() => {
    const measure = () => {
      const itemEl = itemsRef.current?.children[currentIndex] as
        | HTMLElement
        | undefined;
      const track = carouselRef.current;
      if (itemEl && track) {
        const itemCenter = itemEl.offsetLeft + itemEl.offsetWidth / 2;
        const trackCenter = track.offsetWidth / 2;
        setTranslateBase(trackCenter - itemCenter);
      }
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (carouselRef.current) ro.observe(carouselRef.current);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [currentIndex, items.length]);

  // Refs to read latest state inside the native listener without re-binding it
  const stateRef = useRef({
    startX,
    startY,
    isDragging,
    scrollLocked: false,
    currentIndex,
  });
  stateRef.current.startX = startX;
  stateRef.current.startY = startY;
  stateRef.current.isDragging = isDragging;
  stateRef.current.currentIndex = currentIndex;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === items.length - 1 ? items.length - 1 : prev + 1,
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
    stateRef.current.scrollLocked = false;
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const onTouchMove = (e: TouchEvent) => {
      const s = stateRef.current;
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = Math.abs(currentX - s.startX);
      const diffY = Math.abs(currentY - s.startY);

      if (!s.scrollLocked && !s.isDragging) {
        if (diffX > 10 || diffY > 10) {
          if (diffX > diffY) {
            setIsDragging(true);
            s.isDragging = true;
            s.scrollLocked = true;
            e.preventDefault();
          } else {
            s.scrollLocked = true;
            return;
          }
        }
      }

      if (s.isDragging) {
        e.preventDefault();
        setTranslateX(currentX - s.startX);
      }
    };

    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => el.removeEventListener("touchmove", onTouchMove);
  }, []);

  const handleTouchEnd = () => {
    if (!isDragging) return;

    const threshold = 50;

    if (translateX > threshold && currentIndex > 0) {
      handlePrevious();
    } else if (translateX < -threshold && currentIndex < items.length - 1) {
      handleNext();
    }

    setTranslateX(0);
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTranslateX(e.clientX - startX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    const threshold = 50;

    if (translateX > threshold) {
      handlePrevious();
    } else if (translateX < -threshold) {
      handleNext();
    }

    setTranslateX(0);
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setTranslateX(0);
      setIsDragging(false);
    }
  };

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === items.length - 1;

  return (
    <div className="carousel-wrapper">
      <button
        className={`carousel-arrow carousel-arrow-left glass ${isFirstSlide ? "carousel-arrow-hidden" : ""}`}
        onClick={handlePrevious}
        aria-label="Previous"
        disabled={isFirstSlide}
      >
        <MdChevronLeft />
      </button>

      <div
        ref={carouselRef}
        className="carousel-track"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={itemsRef}
          className="carousel-items"
          style={{
            transform: `translateX(${translateBase + translateX}px)`,
            transition: isDragging
              ? "none"
              : "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{
                opacity: index === currentIndex ? 1 : 0.5,
                transition: "opacity 0.5s ease",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <button
        className={`carousel-arrow carousel-arrow-right glass ${isLastSlide ? "carousel-arrow-hidden" : ""}`}
        onClick={handleNext}
        aria-label="Next"
        disabled={isLastSlide}
      >
        <MdChevronRight />
      </button>

      <div className="carousel-pagination">
        {items.map((_, index) => (
          <button
            key={index}
            className="carousel-dot"
            onClick={() => setCurrentIndex(index)}
            style={{
              backgroundColor:
                index === currentIndex
                  ? paginationColors[index] || inactiveDotColor
                  : inactiveDotColor,
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
