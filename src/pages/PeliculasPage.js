import { useEffect, useContext } from "react";
import { PeliculaContext } from "../context/PeliculaContext";
import { verPeliculas } from "../services";
const PeliculasPage = () => {
  const { peliculas, guardarPeliculas } = useContext(PeliculaContext);

  const getPeliculas = async () => {
    const { data } = await verPeliculas();
    guardarPeliculas(data);
  };

  useEffect(() => {
    getPeliculas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ul>
      {peliculas.map((pelicula, index) => (
        <li key={index}>
          {pelicula.nombre} - {pelicula.año}
        </li>
      ))}
    </ul>
  );
};

export default PeliculasPage;
