import Link from "next/link"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons"
import { useState, createRef } from "react"
import ImageModal from "./ImageModal"

const Navbar = (props) => {
    const [dropdown, updateDropdown] = useState(true);
    const dropdownRef = createRef()
    
    function toggleDropdown() {
        const newDropdown = !dropdown
        updateDropdown(newDropdown)
        if (newDropdown) {
            dropdownRef.current.classList.add("show")
        } else {
            dropdownRef.current.classList.remove("show")
        }
    }

    return (
        <>
            <nav className="navbar">
                {props.home ? (
                    <div className="nav-logo-container g-row">
                        <div className="nav-logo g-center-row">
                            <ImageModal>
                                <img src="/images/logo.png" className="nav-logo-image" />
                            </ImageModal>
                            Rohan Phanse
                        </div>
                    </div>
                ) : (
                    <Link href="/">
                        <a className="nav-logo-container g-row">
                            <div className="nav-logo g-center-row">
                                <img src="/images/logo.png" className="nav-logo-image" />
                                Rohan Phanse
                            </div>
                        </a>
                    </Link>
                )}
                <div className="nav-links g-center-row">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                    <NavLink href="/blog">Blog</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </div>
                <div className = "buttons">
                    <div className="theme-button-container g-row">
                        <button className="button" onClick={() => props.toggleTheme()}>
                            <FontAwesomeIcon icon={props.theme === "light" ? faMoon : faSun} />
                        </button>
                    </div>
                    <button className="menu-button button" onClick = {() => toggleDropdown()}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </nav>
            <NavDropdown dropdownRef = {dropdownRef} />
            <style jsx>{`
                .navbar {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 600px 1fr;
                    border-bottom: 1px solid var(--border);
                    align-items: center;
                    padding: 10px 50px;
                    background-color: var(--background);
                }

                @media only screen and (max-width: 1100px) {
                    .navbar {
                        grid-template-columns: 220px 1fr 50px;
                    }

                    .nav-links {
                        justify-content: flex-start !important;
                    }

                    .nav-logo-container {
                        justify-content: flex-start !important;
                    }

                    .theme-button-container {
                        justify-content: flex-end;
                    }
                }

                @media only screen and (max-width: 800px) {
                    .navbar {
                        display: flex;
                        justify-content: space-between;
                    }
                    
                    .nav-links {
                        display: none;
                    }

                    .menu-button {
                        display: flex !important;
                    }
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

                .button {
                    background-color: var(--border);
                    color: var(--text);
                    padding: 5px;
                    height: 30px;
                    width: 30px;
                    border-radius: 4px;
                    cursor: pointer;
                }

                .menu-button {
                    color: var(--text);
                    display: none;
                    padding: 7px;
                    margin-left: 10px;
                }
                
                .buttons {
                    display: flex;
                }
            `}</style>
        </>
    )
}

const NavLink = (props) => {
    const router = useRouter()
    return (
        <>
            <Link href={props.href}>
                <a className={`nav-link ${router.pathname === props.href ? "active" : ""}`}>{props.children}</a>
            </Link>
            <style jsx>{`            
                .nav-link {
                    color: var(--text);
                    padding: ${props.padding || "5px 10px"};
                    margin: ${props.margin || "0 7px"};
                    border-radius: 15px;
                }

                .nav-link:hover {
                    background-color: var(--border);
                }

                .active {
                    color: white;
                    background-color: var(--accent);
                }

                .active:hover {
                    background-color: var(--accent) !important;
                }
            `}</style>
        </>
    )
}

const NavDropdown = (props) => {
    return (
        <>
            <div className = "nav-dropdown g-column show" ref = {props.dropdownRef}>
                <NavDropdownLink href = "/">Home</NavDropdownLink>
                <NavDropdownLink href = "/projects">Projects</NavDropdownLink>
                <NavDropdownLink href = "/blog">Blog</NavDropdownLink>
                <NavDropdownLink href = "/contact">Contact</NavDropdownLink>
            </div>
            <style jsx>{`
                .nav-dropdown {
                    background-color: var(--background);
                    display: none;
                    padding: 5px 0px;
                    border-bottom: 1px solid var(--border);
                }

                @media only screen and (min-width: 800px) {
                    .show {
                        display: none !important;
                    }
                }

                .show {
                    display: flex;
                }

                .button {
                    background-color: var(--border);
                    color: var(--text);
                    padding: 5px;
                    height: 30px;
                    width: 30px;
                    border-radius: 4px;
                    cursor: pointer;
                }
            `}</style>
        </>
    )
}

const NavDropdownLink = (props) => {
    return <NavLink margin = "2px 10px" padding = "5px 12px" href = {props.href}>{props.children}</NavLink>
}

export default Navbar