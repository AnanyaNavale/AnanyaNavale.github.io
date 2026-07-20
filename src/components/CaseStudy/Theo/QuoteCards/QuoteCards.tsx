import "./QuoteCards.css"

import QuoteCard, { type QuoteCardProps } from "./QuoteCard/QuoteCard";

type QuoteCardsProps = {
  firstRow: QuoteCardProps[];
  secondRow: QuoteCardProps[];
}

function QuoteCards({ firstRow, secondRow }: QuoteCardsProps) {
  return (
    <div className="quote-cards">
      <div className="quote-cards-first-row">
        {firstRow.map((quote) => (
          <QuoteCard
            quote={quote.quote}
            attr={quote.attr}
            borderColor={quote.borderColor}
          />
        ))}
      </div>
      <div className="quote-cards-second-row">
        {secondRow.map((quote) => (
          <QuoteCard
            quote={quote.quote}
            attr={quote.attr}
            borderColor={quote.borderColor}
          />
        ))}
      </div>
    </div>
  );
}

export default QuoteCards;