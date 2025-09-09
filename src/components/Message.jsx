export default function Message({ message, currentUser }) {
  const isOwn = message.userId === currentUser.id;

  return (
    <div
      style={{
        textAlign: isOwn ? "right" : "left",
        margin: "4px 0",
        padding: "4px 8px",
        borderRadius: "8px",
        backgroundColor: isOwn ? "#DCF8C6" : "#FFF",
      }}
    >
      <p>{message.content}</p>
      <small>{new Date(message.created).toLocaleTimeString()}</small>
    </div>
  );
}
