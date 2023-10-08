import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import About from "./components/views/About";
import Detail from "./components/Detail/Detail";
import PATHROUTES from "./Helpers/PathRpute";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  let [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  async function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    try {
      const response = await axios.get(URL, {
        params: { email, password },
      });

      const { data } = response;
      const { access } = data;
      setAccess(data);
      if (access) {
        navigate('/Home');
      }
    } catch (error) {
      console.error(error);
      // Maneja el error aquí
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const { pathname } = useLocation();

  async function onSearch(id) {
    try {
      const response = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);

      const { data } = response;
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.error(error);
      // Maneja el error aquí
    }
  }

  function onClose(id) {
    setCharacters(
      characters.filter((char) => char.id !== Number(id))
    );
  }

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route
          path={PATHROUTES.HOME}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path={PATHROUTES.ABOUT} element={<About />} />
        <Route path={PATHROUTES.DETAIL} element={<Detail />} />
        <Route path={PATHROUTES.LOGIN} element={<Form login={login} />} />
        <Route path={PATHROUTES.FAVORITES} element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
