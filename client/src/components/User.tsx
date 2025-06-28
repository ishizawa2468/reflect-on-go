import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type User = {
  id: number;
  name: string;
};

export function User() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedId, setSelectedId] = useState<number>(1);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    if (selectedId !== null) {
      fetch(`http://localhost:8080/api/users/${selectedId}`)
        .then((res) => res.json())
        .then((data) => setName(data.name));
    }
  }, [selectedId]);

  return (
    <>
      <div>Hello, {name ? name : "Guest"}!</div>
      <div>
        {users.map((user) => (
          <label key={user.id} style={{ marginRight: "1em" }}>
            <input
              type="radio"
              name="user"
              value={user.id}
              checked={selectedId === user.id}
              onChange={() => setSelectedId(user.id)}
            />
            {user.name}
          </label>
        ))}
      </div>
      <div>
        <Link to="/register">Register new user</Link>
      </div>
    </>
  );
}
