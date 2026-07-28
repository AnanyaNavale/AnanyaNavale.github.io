import "./QuoteCard.css"

export type QuoteCardProps = {
  quote: React.ReactNode;
  attr: string;
  borderColor: string;
}

export default function QuoteCard({ quote, attr, borderColor }: QuoteCardProps) {
  return (
    <div className="quote-card" style={{ borderLeftColor: borderColor }}>
      <p className="quote-card-text">{quote}</p>
      <p className="quote-card-attr">{attr}</p>
    </div>
  );
}