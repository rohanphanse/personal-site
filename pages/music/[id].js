import Layout from "../../components/Layout"
import { songs, songsByID } from "../../data/music"
import Error from "next/error"
import { readFileSync } from "fs"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"


const Song  =  ({ song, body }) => {
    return (
        <>
            {song === "Error" ? (
                <Error />
            ) : (
                <>
                    <Layout page = {song.title}>
                        <div className = "g-center-row">
                            <div className = "g-article">
                                <div className = "back-link">Back to <Link href = "/projects"><a>/projects</a></Link></div>
                                <h1 className = "title g-center-row">
                                    {song.title}
                                    <a
                                        href = {song.url}
                                        target = "_blank"
                                        rel = "noreferrer"
                                        className = "open-link"
                                    >
                                        <FontAwesomeIcon icon = {faArrowUpRightFromSquare} />
                                    </a>
                                </h1>
                                <div className = "date">
                                    {song.date.month + " " + song.date.year}
                                </div>
                                <div className = "wrapper-container">
                                    <div className = "wrapper">
                                        <iframe className = "frame" src = {song.iframe || song.url} />
                                        <div className = "live-demo">Live Demo</div>
                                    </div>
                                </div>
                                <div className = "body-container">
                                    <div className = "body">
                                        <div className = "markdown">
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className = "center">
                                    <Link href = "/projects">
                                        <a className = "back-to-projects">
                                            Back To All Music
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Layout>
                    <style jsx>{`
                        .wrapper-container {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;

                            --width: 800px;
                            --height: 500px;
                            --scale: ${0.75};
                        }

                        .wrapper {
                            width: var(--width);
                            height: var(--height);
                            position: relative;
                        }

                        .frame {
                            width: calc(var(--width) / var(--scale));
                            height: calc(var(--height) / var(--scale));
                            background-color: white;
                            transform: scale(var(--scale));
                            transform-origin: 0 0;
                            border: 1px solid var(--border);
=
                        }

                        .live-demo {
                            position: absolute;
                            bottom: 10px;
                            left: 10px;
                            border-radius: 4px;
                            color: white;
                            padding: 2px 5px;
                            font-size: 0.8rem;
                            background-color:var(--accent);
                        }

                        @media only screen and (max-width: 850px) {
                            .container {
                                --width: 600px;
                                --height: 450px;
                                --scale: 0.6;
                            }
                        }

                        .title {
                            margin-bottom: 2px;
                        }

                        .date {
                            font-size: 1.1rem;
                            color: var(--text);
                            margin-bottom: 12px;
                            text-align: center;
                        }

                        .open-link {
                            color: var(--accent);
                            margin-left: 12px;
                            height: 25px;
                            width: 25px;
                            font-size: 1.5rem;
                        }

                        .body-container {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                        }

                        .body {
                            width: 800px;
                            margin: 20px 0;
                        }

                        @media only screen and (max-width: 800px) {
                            .wrapper-container {
                                --width: 100%;
                                --height: 450px;
                                --scale: 0.6;
                                padding: 0 50px;
                            }

                            .body {
                                width: 100%;
                                padding: 0 50px;
                            }
                        }

                        .center {
                            display: flex;
                            justify-content: center;
                        }

                        .back-to-projects {
                            padding: 10px 15px;
                            border-radius: 4px;
                            background-color: var(--border);
                            color: var(--text);
                            transition-duration: 0.2s;
                        }

                        .back-to-projects:hover {
                            transform: translateY(-2px);
                        }
                    `}</style>
                </>
            )}
        </>
    )
}

export const getStaticProps  =  async (context) => {
    const id = context.params.id
    const song = songsByID[id] || "Error"
    let body = ""

    try {
        body = readFileSync(`${process.cwd()}/data/music/${id}.md`, "utf8")
    } catch (error) {
        console.log(error)
    }

    return {
        props: {
            song,
            body
        }
    }
}

export const getStaticPaths  =  async () => {
    const ids  = songs.map((song) => song.id)
    const paths = ids.map((id) => ({ params: { id } }))

    return {
        paths,
        fallback: false
    }
}

export default Song