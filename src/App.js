import "./App.css";
import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import About from "./components/views/About";
import Home from "./components/views/Home";
import Detail from "./components/Detail/Detail";
import PATHROUTES from "./Helpers/PathRpute";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  let [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  let EMAIL = "joaquindalessa@gmail.com";
  let PASSWORD = "Messi10";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const { pathname } = useLocation();

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    setCharacters(
      characters.filter((char) => {
        //con esto agarro los psj y los filtro para que cuando ejecute el onClose(la X) no aparezcan mas.
        return char.id !== Number(id);
        //Esto lo que hace es dejar todos los ids, menos el que me ejecuto, por ende lo cierra.
      })
    );
  }

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      {/*       <Nav onSearch={onSearch} /> */}

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
