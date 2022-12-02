import { useState, useEffect } from "react";
import PublicRoutesComponent from "./routes/PublicRoutesComponent";

import "./App.css";
import { Container } from "react-bootstrap";

import NavComponent from "./components/Nav";

function App() {
  const [token, setToken] = useState(null);

  const guardarToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const borrarToken = () => {
    setToken(null);
    localStorage.clear();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      guardarToken(token);
    }
  }, []);
  return (
    <>
      <Container>
        <NavComponent token={token} />
        <PublicRoutesComponent
          guardarToken={guardarToken}
          borrarToken={borrarToken}
          token={token}
        />
      </Container>
    </>
  );
}

export default App;
