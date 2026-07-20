import "./TextBlock.css";

export type TextBlockItem = {
  size: "body" | "large";
  content: React.ReactNode;
  alignment?: React.CSSProperties["textAlign"];
};

type TextBlockProps = {
  text: TextBlockItem[];
};

function TextBlock({ text }: TextBlockProps) {
  return (
    <div className="text-block">
      {text.map((item, index) => (
        <p key={index} className={item.size} style={{ textAlign: item.alignment }}>
          {item.content}
        </p>
      ))}
    </div>
  );
}

export default TextBlock;