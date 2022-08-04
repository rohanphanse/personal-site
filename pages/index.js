import Layout from "../components/Layout"

const Home = () => {
    return (
        <Layout>
            <div className = "g-center-row">
                <div className = "g-article">
                    <div className = "bio">
                        <img src = "/images/rohan.jpg" alt = "Rohan's beautiful face :)" className = "bio-image" />
                        <div className = "g-column">
                            <h1>Hi I&apos;m Rohan.</h1>
                            <p>I&apos;m a rising 12th grader at Palo Alto High School. I&apos;m passionate about computer science and creating music. I&apos;m the Founder and President of Paly Python (<a href = "https://palypython.com" target = "_blank" rel="noreferrer">palypython.com</a>). In my free time, I love reading (Seven Realms ❤️) and listening to music (Kanye West & Kid Cudi 🔥).</p>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .bio {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }

                .bio-image {
                    margin: 0 40px 20px 0;
                    width: 200px;
                    border-radius: 8px;
                }

                @media only screen and (max-width: 600px) {
                    .bio {
                        flex-direction: column;
                    }
                }
            `}</style>
        </Layout>
    )
}

export default Home