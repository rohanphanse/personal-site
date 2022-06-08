import Link from "next/link"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"

const NavBar = (props) => {
    return (
        <>
            <nav className = "navbar">
                <Link href = "/">
                    <a className = "nav-logo-container g-row">
                        <div className = "nav-logo g-row-center">
                            <img src = "/images/logo.png" className = "nav-logo-image" />
                            Rohan Phanse
                        </div>
                    </a>
                </Link>
                <div className = "g-row-center">
                    <NavLink href = "/">Home</NavLink>
                    <NavLink href = "/about">About</NavLink>
                    <NavLink href = "/projects">Projects</NavLink>
                    <NavLink href = "/blog">Blog</NavLink>
                    <NavLink href = "/contact">Contact</NavLink>
                </div>
                <div className = "g-row">
                    <button className = "theme-button" onClick = {() => props.toggleTheme()}>
                        <FontAwesomeIcon icon = {props.theme === "light" ? faMoon : faSun} />
                    </button>
                </div>
            </nav>
            <style jsx>{`
                .navbar {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 600px 1fr;
                    border-bottom: 1px solid var(--border);
                    align-items: center;
                    padding: 10px 0;
                    background-color: var(--background);
                }

                .nav-logo-container {
                    justify-content: flex-end;
                }
                
                .nav-logo {
                    font-size: 1.3rem;
                    font-weight: 800;
                    color: var(--text);
                    letter-spacing: -0.75px;
                }
                
                .nav-logo-image {
                    margin-right: 10px;
                    width: 35px;
                    height: 35px;
                }

                .theme-button {
                    background-color: var(--border);
                    color: var(--text);
                    padding: 5px;
                    height: 30px;
                    width: 30px;
                    border-radius: 4px;
                }
            `}</style>
        </>
    )
}

const NavLink = (props) => {
    const router = useRouter()
    return (
        <>
            <Link href = {props.href}>
                <a className = {`nav-link ${router.pathname === props.href ? "active" : ""}`}>{props.children}</a>
            </Link>
            <style jsx>{`            
                .nav-link {
                    color: var(--text);
                    padding: 5px 10px;
                    margin: 0 7px;
                    border-radius: 15px;
                }

                .nav-link:hover {
                    background-color: var(--border);
                }

                .active {
                    color: var(--text-light);
                    background-color: var(--accent);
                }

                .active:hover {
                    background-color: var(--accent) !important;
                }
            `}</style>
        </>
    )
}

export default NavBar