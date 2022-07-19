import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";

import EventDescr from "./components/EventDescr"

import Navbar from "./components/Navbar";

import Events from './components/Events'

import SearchBar from './components/SearchBar'
import EventNew from "./components/EventNew";
import Artist from "./components/artists/Artist";


const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
      <Route path="/" element={<EventNew />}></Route>

      <Route path="home" element={<Home />}></Route>

        <Route path="event" element={<EventDescr />}></Route>

        <Route path="events" element = {<Events />}></Route>

        <Route path="test" element = {<SearchBar />}></Route>

        <Route path="artist" element = {<Artist />}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
