import { useState, createContext } from "react";

// !1.- Crear el contexto para el usuario
const UserContext = createContext();

// !2.- Obtener Provider (contiene el estado global)
const { Provider } = UserContext;

// !3.- Crear componente donde utilizaremos nuestros estados
const UserProvider = ({ children }) => {
  // !4.- Creamos nuestro estado global
  const initialState = {
    token: null,
  };
  const [user, setUser] = useState(initialState);

  // !5.- Manejar el estado

  const guardarToken = (newToken) => {
    setUser({
      ...user,
      token: newToken,
    });
    localStorage.setItem("token", newToken);
  };

  const borrarToken = () => {
    setUser(initialState);
    localStorage.clear();
  };

  // !6 Retornamos el componnete
  return (
    <Provider
      value={{
        user,
        guardarToken,
        borrarToken,
      }}
    >
      {children}
    </Provider>
  );
};

// !7.- Exportamos provider y context
export { UserContext, UserProvider };
