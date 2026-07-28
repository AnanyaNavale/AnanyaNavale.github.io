// src/components/InfiniteCarousel/InfiniteCarousel.tsx

import "./InfiniteCarousel.css";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export type CarouselCard = {
  title: string;
  skills: string[];
};

type InfiniteCarouselProps = {
  cards: CarouselCard[];
};

export default function InfiniteCarousel({ cards }: InfiniteCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getCardClass = (index: number) => {
    if (index === currentIndex) return "carousel-card carousel-card-center";

    const diff = (index - currentIndex + cards.length) % cards.length;

    if (diff === 1 || diff === cards.length - 1) {
      return "carousel-card carousel-card-side";
    }

    return "carousel-card carousel-card-hidden";
  };

  const getCardPosition = (index: number) => {
    const diff = (index - currentIndex + cards.length) % cards.length;

    if (index === currentIndex) return "center";
    if (diff === 1) return "right";
    if (diff === cards.length - 1) return "left";
    return "hidden";
  };

  return (
    <div className="infinite-carousel">
      <div className="carousel-track">
        {cards.map((card, index) => (
          <div
            key={index}
            className={getCardClass(index)}
            data-position={getCardPosition(index)}
            onClick={() => {
              const pos = getCardPosition(index);
              if (pos === "left") goToPrev();
              if (pos === "right") goToNext();
            }}
          >
            <h3 className="carousel-card-title">{card.title}</h3>
            <div className="carousel-card-skills">
              {card.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <button
          className="carousel-button carousel-button-prev"
          onClick={goToPrev}
          aria-label="Previous card"
        >
          <BsChevronLeft size={20} />
        </button>

        <div className="carousel-indicators">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="carousel-button carousel-button-next"
          onClick={goToNext}
          aria-label="Next card"
        >
          <BsChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}