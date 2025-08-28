import AddChat from "./AddChat";
import { useRef } from "react";
import ShowChats from "./ShowChats";
import { useOutletContext } from "react-router-dom";

export default function Chats() {
  const { user, setUser } = useOutletContext();
  const newFriendModal = useRef();
  function handleAddFriend() {
    newFriendModal.current.showModal();
  }

  return (
    <div>
      <AddChat ref={newFriendModal} user={user} setUser={setUser} />
      <header>
        <button onClick={handleAddFriend}>Add Chat</button>
      </header>
      <ShowChats user={user} setUser={setUser} />
    </div>
  );
}
