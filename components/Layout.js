import NavBar from "./NavBar"
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
            <div className = {theme}>
                <NavBar theme = {theme} toggleTheme = {() => toggleTheme()} />
                <div className = "container">
                    {props.children}
                </div>
            </div>
            <style jsx>{`
                .container {
                    width: 100vw;
                    height: 100vh;
                    background-color: var(--background);
                    color: var(--text);
                }
            `}</style>
        </>
    )
}

export default Layout