import NewMessage from "./NewMessage";
import Message from "./Message";
import { useState } from "react";

export default function Chat({ chat, currentUser, setUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(chat.messages || []);

  const friend = chat.users.find((u) => u.id !== currentUser.id);

  return (
    <div className="chat">
      <div
        className="chat-header"
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ cursor: "pointer" }}
      >
        {friend.username}
      </div>

      {isOpen && (
        <div className="chat-messages">
          {messages.map((msg) => (
            <Message key={msg.id} message={msg} currentUser={currentUser} />
          ))}

          <NewMessage
            setUser={setUser}
            chatId={chat.id}
            currentUser={currentUser}
            onNewMessage={(msg) => setMessages((prev) => [...prev, msg])}
          />
        </div>
      )}
    </div>
  );
}
