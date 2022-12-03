import { useEffect, useContext } from "react";
import PublicRoutesComponent from "./routes/PublicRoutesComponent";
import NavComponent from "./components/Nav";
import { Container } from "react-bootstrap";
import { UserContext } from "./context/UserContext";

function App() {
  const { guardarToken } = useContext(UserContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      guardarToken(token);
    }
  }, []);
  return (
    <>
      <NavComponent />
      <Container>
        <PublicRoutesComponent />
      </Container>
    </>
  );
}

export default App;
