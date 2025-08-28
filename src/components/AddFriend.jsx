import { forwardRef, useState } from "react";
const VITE_URL = import.meta.env.VITE_URL || "http://localhost:3000";

const AddFriend = forwardRef((props, ref) => {
  const [username, setUsername] = useState("");
  const { setUser } = props;
  function handleUsername(e) {
    setUsername(e.target.value);
  }

  async function handleAddFriend() {
    const response = await fetch(
      `${VITE_URL}/api/add-friend?username=${username}`,
      { method: "PUT", mode: "cors", credentials: "include" }
    );
    const result = await response.json();
    setUser(result);
  }

  return (
    <dialog ref={ref}>
      <h2>Add a Friend</h2>
      <form method="dialog" onSubmit={handleAddFriend}>
        <input
          type="text"
          placeholder="Friend's username"
          value={username}
          onChange={handleUsername}
        />
        <menu>
          <button value="cancel">Cancel</button>
          <button value="ok">Add</button>
        </menu>
      </form>
    </dialog>
  );
});

export default AddFriend;
