import "./TextBlock.css";

export type TextBlockItem = {
  size: "body" | "large";
  content: React.ReactNode;
  textAlignment?: React.CSSProperties["textAlign"];
};

type TextBlockProps = {
  text: TextBlockItem[];
  contentAlignment?: React.CSSProperties["alignItems"];
};

function TextBlock({ text, contentAlignment }: TextBlockProps) {
  console.log(contentAlignment);
  
  return (
    <div className="text-block" style={{ alignItems: contentAlignment }}>
      {text.map((item, index) => (
        <p
          key={index}
          className={item.size}
          style={{ textAlign: item.textAlignment }}
        >
          {item.content}
        </p>
      ))}
    </div>
  );
}

export default TextBlock;