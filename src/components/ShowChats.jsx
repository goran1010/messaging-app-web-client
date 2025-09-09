import Chat from "./Chat";

export default function ShowChats({ user }) {
  if (!user?.chats || user.chats.length === 0) {
    return <p>No chats yet</p>;
  }

  return (
    <div>
      {user.chats.map((chat) => (
        <Chat key={chat.id} chat={chat} currentUser={user} />
      ))}
    </div>
  );
}
