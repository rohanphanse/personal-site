import Metadata from "../components/Metadata"
import "../styles/global.css"

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Metadata />
            <Component {...pageProps} />
        </>
    )
}

export default App
