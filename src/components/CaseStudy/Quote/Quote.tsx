import "./Quote.css";

type QuoteProps = {
  content: React.ReactNode;
  attr: React.ReactNode;
}

function Quote({ content, attr }: QuoteProps) {
  return (
    <div className="quote">
      <div className="quote-text">
        <div className="quote-content">{content}</div>
        <div className="quote-attr">{attr}</div>
      </div>
    </div>
  );
}

export default Quote;