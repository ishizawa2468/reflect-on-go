import { useEffect, useState } from "react";

export function User() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/user/1")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return (
    <>
      <div>Hello, {name ? name : "Guest"}!</div>
    </>
  );
}
