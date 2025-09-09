import { useState } from "react";
import Message from "./Message";

export default function Chat({ chat, currentUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const friend = chat.users.find((user) => user.id !== currentUser.id);

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
          {chat.messages.length === 0 && <p>No messages yet</p>}
          {chat.messages.map((msg) => (
            <Message key={msg.id} message={msg} currentUser={currentUser} />
          ))}
        </div>
      )}
    </div>
  );
}
