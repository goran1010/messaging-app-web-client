import { useEffect, useState } from "react";
const VITE_URL = import.meta.env.VITE_URL || "http://localhost:3000";

export default function ShowFriends() {
  const [friendsInfo, setFriendsInfo] = useState(null);

  useEffect(() => {
    async function getFriends() {
      const response = await fetch(`${VITE_URL}/api/friends`, {
        mode: "cors",
        method: "GET",
        credentials: "include",
      });
      const friends = await response.json();
      setFriendsInfo(friends);
    }
    getFriends();
  }, []);
  if (!friendsInfo) {
    return <div>No friends.</div>;
  }
  return (
    <div>
      {friendsInfo.friends.map((friend) => {
        return <div key={friend.id}>{friend.username}</div>;
      })}
    </div>
  );
}
