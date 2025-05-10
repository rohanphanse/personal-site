import Layout from "../../components/Layout"
import LanguageTag from "../../components/LanguageTag"
import { projects, projectsByID } from "../../data/projects"
import Error from "next/error"
import { readFileSync } from "fs"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"
import Prism from "prismjs"
import ReactMarkdown from "react-markdown"
import rehypePrism from "rehype-prism-plus"
import rehypeRaw from "rehype-raw"
require("prismjs/components/prism-rust")
require("prismjs/components/prism-haskell")
import ImageModal from "../../components/ImageModal"
import { visit } from "unist-util-visit"
require("prismjs/components/prism-bash")

function rehypeExternalLinks() {
    return (tree) => {
        visit(tree, "element", (node) => {
            if (node.tagName === "a" && node.properties) {
                node.properties.target = "_blank"
                node.properties.rel = "noopener noreferrer"
            }
        })
    }
}

const Project  =  ({ project, body }) => {
    useEffect(() => {
        Prism.highlightAll()
      }, [])
    return (
        <>
            {project === "Error" ? (
                <Error />
            ) : (
                <>
                    <Layout page = {project.title}>
                        <div className = "g-center-row">
                            <div className = "g-article">
                                <div className = "back-link">Back to <Link href = "/projects"><a>/projects</a></Link></div>
                                <h1 className = "title g-center-row">
                                    {project.title}
                                    {project.category === "programming" && (
                                        <a
                                            href = {project.url}
                                            target = "_blank"
                                            rel = "noreferrer"
                                            className = "open-link"
                                        >
                                            <FontAwesomeIcon icon = {faArrowUpRightFromSquare} />
                                        </a>
                                    )}
                                </h1>
                                <div className = "date">
                                    {project.date.month + " " + project.date.year}
                                </div>
                                <div className = "languages">
                                    {project.languages.map((language) => (
                                        <LanguageTag language = {language} key = {language} />
                                    ))}
                                </div>
                                {project.url ?
                                    <div className = "wrapper-container">
                                        <div className = "wrapper">
                                            {project.image ? (
                                                <ImageModal>
                                                    <img src = {project.url} className = "frame-image"></img>
                                                </ImageModal>
                                            ) : (
                                                <>
                                                    <iframe className = "frame" src = {project.url} />
                                                    <div className = "live-demo">Live Demo</div>
                                                </>
                                            )}
        
                                        </div>
                                    </div>
                                : 
                                    <img src = {project.thumbnail} alt = {project.title} className = "thumbnail" />
                                }
                                <div className = "body-container">
                                    <div className = "body">
                                        <div className = "markdown">
                                            <ReactMarkdown remarkPlugins = {[]} rehypePlugins = {[rehypeRaw, rehypePrism, rehypeExternalLinks]} components={{ 
                                                img: ({ node, ...props }) => <ImageModal><img {...props} /></ImageModal>
                                            }}>{body}</ReactMarkdown>
                                        </div>
                                    </div>
                                </div>
                                <div className = "center">
                                    <Link href = "/projects">
                                        <a className = "back-to-projects">
                                            Back To All Projects
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
                        }

                        .frame-image {
                            width: var(--width);
                            height: var(--height);
                            object-fit: contain;
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
                        margin-top: 10px;
                            margin-bottom: 2px;
                        }

                        .date {
                            font-size: 1.1rem;
                            color: var(--text);
                            margin-bottom: 12px;
                            text-align: center;
                        }

                        .languages {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            margin-bottom: 20px;
                        }

                        .open-link {
                            flex-shrink: 0;
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

                        .thumbnail {
                            width: 100%;
                            object-fit: contain;
                            border: 1px solid var(--border);
                        }
                    `}</style>
                </>
            )}
        </>
    )
}

export const getStaticProps  =  async (context) => {
    const id = context.params.id
    const project = projectsByID[id] || "Error"
    let body = ""

    try {
        body = readFileSync(`${process.cwd()}/data/projects/${id}.md`, "utf8")
    } catch (error) {
        console.log(error)
    }

    return {
        props: {
            project,
            body
        }
    }
}

export const getStaticPaths  =  async () => {
    const ids  = projects.map((project) => project.id)
    const paths = ids.map((id) => ({ params: { id } }))

    return {
        paths,
        fallback: false
    }
}

export default Project