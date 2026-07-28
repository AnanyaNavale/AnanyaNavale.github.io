import "./ChatConversation.css";

export type ChatItem = {
  sender: "BoogieBot" | "You";
  message: React.ReactNode;
  maxWidth: React.CSSProperties["maxWidth"];
};

type ChatConversationProps = {
  label: string;
  labelColor: string;
  chats: ChatItem[];
}

function ChatRow({ sender, message, maxWidth }: ChatItem) {
  return (
    <div
      className="chat-row"
      style={{
        justifyContent: sender === "BoogieBot" ? "flex-start" : "flex-end",
      }}
    >
      {sender === "BoogieBot" ? (
      <div
        className="chat-msg boogiebot"
        style={{
          maxWidth: maxWidth,
          backgroundColor:
            sender === "BoogieBot"
              ? "var(--color-background-light-frame"
              : "var(--color-boogie-primary)",
          borderWidth: sender === "BoogieBot" ? 1 : 0,
        }}
      >
        <h6>{sender}:</h6>
        <p>{message}</p>
      </div>)
    : (<div
        className="chat-msg you"
        style={{
          maxWidth: maxWidth,
          backgroundColor: "var(--color-boogie-primary)",
        }}
      >
        <h6>{sender}</h6>
        <p>{message}</p>
      </div>)}
      
    </div>
  );
}

function ChatConversation({ label, labelColor, chats }: ChatConversationProps) {
  return (
    <div className="chat-conversation">
      <div className="chat-label" style={{ backgroundColor: labelColor }}>
        {label}
      </div>
      <div className="chat-content">
        {chats.map((item) => (
          <ChatRow
            sender={item.sender}
            message={item.message}
            maxWidth={item.maxWidth}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatConversation;