import { useState } from "react";
import "./FlipCard.css";

type FlipCardProps = {
  frontImage: string;
  backImage: string;
  frontLabel: {
    title: string;
    description: React.ReactNode;
  };
  backLabel: {
    title: string;
    description: React.ReactNode;
  };
};

export default function FlipCard({
  frontImage,
  backImage,
  frontLabel,
  backLabel,
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card-container">
      {/* Fading labels */}
      <div className={`flip-card-label ${isFlipped ? "hidden" : ""}`}>
        <h6>{frontLabel.title}</h6>
        <p>{frontLabel.description}</p>
      </div>

      <div className={`flip-card-label ${!isFlipped ? "hidden" : ""}`}>
        <h6>{backLabel.title}</h6>
        <p>{backLabel.description}</p>
      </div>

      {/* Flip card */}
      <div
        className={`flip-card ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={frontImage} alt="" />
          </div>
          <div className="flip-card-back">
            <img src={backImage} alt="" />
          </div>
        </div>
      </div>

      {/* Tap instruction */}
      <p className="flip-card-instruction">
        {isFlipped ? (
          <>
            ◉ TAP TO SEE <span className="emphasized">BEFORE</span>
          </>
        ) : (
          <>
            ◉ TAP TO SEE <span className="emphasized">AFTER</span>
          </>
        )}
      </p>
    </div>
  );
}
