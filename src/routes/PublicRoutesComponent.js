import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import RegistroPage from "../pages/RegistroPage";
import PeliculasPage from "../pages/PeliculasPage";

const PublicRoutesComponent = ({ guardarToken, token }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {token && <Route path="/about" element={<AboutPage />} />}
      {!token && (
        <Route
          path="/login"
          element={<LoginPage guardarToken={guardarToken} />}
        />
      )}
      {!token && (
        <Route
          path="/registro"
          element={<RegistroPage guardarToken={guardarToken} />}
        />
      )}
      {token && <Route path="/peliculas" element={<PeliculasPage />} />}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default PublicRoutesComponent;
