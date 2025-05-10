import Layout from "../components/Layout"
import ImageModal from "../components/ImageModal"

const Home = () => {
    return (
        <Layout home>
            <div className = "g-center-row">
                <div className = "g-article">
                    <div className = "bio">
                        <ImageModal>
                            <img src = "/images/rohan-with-handsome-dan.jpg" alt = "Rohan" className = "bio-image" />
                        </ImageModal>
                        <div className = "g-column">
                            <h1>Hello, I&apos;m Rohan.</h1>
                            <div className = "desc">I am a student at Yale University in the Class of &apos;27. I really enjoy CS development and research, and I&apos;m excited to keep exploring these fields in college and beyond. In my free time, I love singing / playing rock songs on my guitar and finding new people to play table tennis with :).</div>
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
                    margin: 30px 60px 40px 60px;
                    width: 200px;
                    border-radius: 8px;
                    transform: scale(1.3);
                    filter: brightness(1.2);
                }

                @media only screen and (max-width: 700px) {
                    .bio {
                        flex-direction: column;
                    }

                    .bio-image {
                        margin-bottom: 60px;
                    }
                }

                .desc {
                    font-size: 1.1rem;
                    line-height: 1.6rem;
                }
            `}</style>
        </Layout>
    )
}

export default Home