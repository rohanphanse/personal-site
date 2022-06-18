import Navbar from "./Navbar"
import Metadata from "./Metadata"
import { useState, useEffect } from "react"

const Layout = (props) => {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        const localTheme = localStorage.getItem("theme")
        if (localTheme) {
            setTheme(localTheme)
        }
    }, [])

    function toggleTheme() {
        const newTheme = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    }

    return (
        <>
            <Metadata page = {props.page} />
            <div className = {theme}>
                <Navbar theme = {theme} toggleTheme = {() => toggleTheme()} />
                <div className = "container">
                    {props.children}
                </div>
            </div>
            <style jsx>{`
                .container {
                    width: 100vw;
                    min-height: 100vh;
                    background-color: var(--background);
                    color: var(--text);
                }
            `}</style>
        </>
    )
}

export default Layout