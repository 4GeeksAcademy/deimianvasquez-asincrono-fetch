import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {

    const [links, setLinks] = useState([
        {
            href: "/",
            name: "Home"
        },
        {
            href: "/todos",
            name: "Todos"
        },
        {
            href: "/rick-and-morty",
            name: "Rick And Morty"
        },
    ])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* <NavLink
                            // className="nav-link active"
                            className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"}
                            aria-current="page"
                            to="/"
                        >Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"} to="/rick-and-morty">Rick And Morty</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"} to="/todos">Todos</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"} to="/contact">Contact</NavLink> */}
                        {
                            links.map((item) => {
                                return (
                                    <NavLink
                                        className={({ isActive }) => isActive ? "nav-link text-danger bg-green" : "nav-link"}
                                        to={`${item.href}`}>{item.name}</NavLink>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar