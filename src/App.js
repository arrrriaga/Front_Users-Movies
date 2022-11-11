import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    correo: " ",
    password: " ",
  });

  const onChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const login = async () => {
    const { data } = await axios.post(
      "https://users-2lcqjx55x-arrrriaga.vercel.app/v1/user/login",
      form
    );
    console.log(data);
  };
  return (
    <div className="App">
      <input
        type="email"
        placeholder="correo"
        name="correo"
        onChange={onChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={onChange}
      />
      <button onClick={login}>Guardar</button>
    </div>
  );
}

export default App;
