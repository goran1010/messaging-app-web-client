import { useState } from "react";

const VITE_URL = import.meta.env.VITE_URL || "http://localhost:3000";

export default function NewMessage({ chatId, onNewMessage, setUser }) {
  const [content, setContent] = useState("");

  async function handleSendMessage(e) {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      const response = await fetch(`${VITE_URL}/api/messages`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatId, content }),
      });

      const data = await response.json();

      if (onNewMessage) onNewMessage(data.message);
      setUser(data.user);
      setContent("");
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  }

  return (
    <form onSubmit={handleSendMessage} style={{ display: "flex", gap: "8px" }}>
      <input
        type="text"
        placeholder="Type a message..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ flex: 1, padding: "8px" }}
      />
      <button type="submit">Send</button>
    </form>
  );
}
