import { useEffect, useState } from "react";

export function User() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return <div>Hello, {name ? name : "Guest"}!</div>;
}
