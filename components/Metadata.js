import Head from "next/head"

const Metadata = (props) => {
    return (
        <Head>
            <title>{ props.page ? `${props.page} - Rohan Phanse` : "Rohan Phanse" }</title>
            <link rel = "icon" type = "image/png" href = "/images/logo.png" />
        </Head>
    )
}

export default Metadata