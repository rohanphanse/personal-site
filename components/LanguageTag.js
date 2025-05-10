const LanguageTag = ({ language }) => {
    const languageTags = {
        HTML: { color: "#e34c26", text: "light" },
        CSS: { color: "#264de4", text: "light" },
        JavaScript: { color: "#f7df1e" },
        JS: { color: "#f7df1e" },
        Python: { color: "#ffe873" },
        Snap: { color: "#e0a817" },
        React: { color: "#61dbfb" },
        "Next.js": { color: "white", border: "var(--text)" },
        "AssemblyScript": { color: "#1791e3", text: "light" },
        "NEAR": { color: "white", border: "var(--text)" },
        "Rust": { color: "#b7410e", text: "light" },
        "Node.js": { color: "#6cc24a", text: "light" },
        "QuTip": { color: "linear-gradient(135deg, #00cfff, #d24aff)", text: "light" },
        "React.js": { color: "#61dbfb" },
        "C++": { color: "linear-gradient(135deg, #659AD2, #003B70)", text: "light" },
        "OpenMP": { color: "#007690", text: "light" },
        "ParlayLib": { color: "#C41230", text: "light" },
        "CUDA": { color: "#6cc24a", text: "light" },
        "PyTorch": { color: "#EE4C2C", text: "light" },
    }
    const { color, text, border } = languageTags[language] || { color: "rgb(228, 230, 232)" }
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
                    margin: 3px 3px;
                    background: ${color};
                }
            `}</style>
        </>
    )
}

export default LanguageTag