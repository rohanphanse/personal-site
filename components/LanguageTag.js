const LanguageTag = ({ language }) => {
    const languageTags = {
        HTML: { color: "#e34c26", text: "light" },
        CSS: { color: "#264de4", text: "light" },
        JavaScript: { color: "#f7df1e" },
        Python: { color: "#ffe873" },
        Snap: { color: "#e0a817" },
        React: { color: "#61dbfb" },
        "Next.js": { color: "white", border: "var(--text)" },
        "AssemblyScript": { color: "#1791e3", text: "light" },
        "NEAR": { color: "white", border: "var(--text)" }
    }
    const { color, text, border } = languageTags[language]
    return (
        <>
            <div className="tag">{language}</div>
            <style jsx>{`
                .tag {
                    color: ${text === "light" ? "white" : "black"};
                    font-size: 0.7rem;
                    padding: 3px 7px;
                    border-radius: 4px;
                    border: 1px solid ${border || color};
                    margin: 0 3px;
                    background-color: ${color};
                }
            `}</style>
        </>
    )
}

export default LanguageTag