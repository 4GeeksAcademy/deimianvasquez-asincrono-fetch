import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Todos from "./views/Todos.jsx";
import Home from "./views/Home.jsx";
import RickAndMorty from "./views/RickAndMorty.jsx";
import Navbar from "./component/Navbar.jsx";
import Detail from "./views/Detail.jsx"

const Layout = () => {
    return (
        <>
            {/* <Todos />
            <h1>Hola ¿qué tal? Soy layout</h1>
 */}
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rick-and-morty" element={<RickAndMorty />} />
                    <Route path="/rick-and-morty/:theid" element={<Detail />} />
                    <Route path="/todos" element={<Todos />} />
                    <Route path="*" element={<h1>Not found</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default Layout;