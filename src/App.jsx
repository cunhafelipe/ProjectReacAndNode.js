import { useEffect, useState } from "react";

import TelaLogin from "./TelaLogin.jsx";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/exemplo")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);
  return (
    <>
      <TelaLogin />
      <p>{message}</p>
    </>
  );
}

export default App;
