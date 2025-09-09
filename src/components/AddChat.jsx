import { forwardRef, useState } from "react";
const VITE_URL = import.meta.env.VITE_URL || "http://localhost:3000";

const AddChat = forwardRef((props, ref) => {
  const [friend, setFriend] = useState("");
  const { setUser } = props;

  function handleFriend(e) {
    setFriend(e.target.value);
  }

  async function handleStartChat(e) {
    e.preventDefault();
    const response = await fetch(`${VITE_URL}/api/add-chat?friend=${friend}`, {
      method: "PUT",
      mode: "cors",
      credentials: "include",
    });
    const result = await response.json();
    setUser(result);
  }

  return (
    <dialog ref={ref}>
      <h2>Start Chat</h2>
      <form onSubmit={handleStartChat}>
        <input
          type="text"
          placeholder="Friend's username"
          value={friend}
          onChange={handleFriend}
        />
        <menu>
          <button
            type="button"
            value="cancel"
            onClick={() => ref.current.close()}
          >
            Cancel
          </button>
          <button value="ok">Start</button>
        </menu>
      </form>
    </dialog>
  );
});

export default AddChat;
