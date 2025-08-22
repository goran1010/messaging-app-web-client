import AddFriend from "./AddFriend";
import { useRef } from "react";

export default function Friends() {
  const newFriendModal = useRef();
  function handleAddFriend() {
    newFriendModal.current.showModal();
  }

  return (
    <div>
      <AddFriend ref={newFriendModal} />
      <header>
        <button onClick={handleAddFriend}>Add friend</button>
      </header>
    </div>
  );
}
