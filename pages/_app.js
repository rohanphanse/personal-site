import MetaData from "../components/MetaData"
import "../styles/global.css"

const App = ({ Component, pageProps }) => {
    return (
        <>
            <MetaData />
            <Component {...pageProps} />
        </>
    )
}

export default App
