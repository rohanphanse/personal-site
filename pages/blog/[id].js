import Layout from "../../components/Layout"
import { articles, articlesByID } from "../../data/blog"
import Error from "next/error"
import { readFileSync } from "fs"
import Link from "next/link"
import { useEffect } from "react"
import Prism from "prismjs"
import { remark } from "remark"
import html from "remark-html"
import remarkPrism from "remark-prism"
require("prismjs/components/prism-rust")
require("prismjs/components/prism-haskell")

async function markdownToHtml(markdown) {
    const result = await remark()
        .use(html, { sanitize: false })
        .use(remarkPrism)
        .process(markdown)
    return result.toString()
}

const Article  =  ({ article, body }) => {
    return (
        <>
            {article === "Error" ? (
                <Error />
            ) : (
                <>
                    <Layout page = {article.title}>
                        <div className = "g-center-row">
                            <div className = "g-article">
                                <div className = "back-link">Back to <Link href = "/blog"><a>/blog</a></Link></div>
                                <h1 className = "title g-center-row">
                                    {article.title}
                                </h1>
                                <div className = "date">
                                    {article.date.month + " " + article.date.year}
                                </div>
                                <img src = {article.thumbnail} alt = {article.title} className = "thumbnail" />
                                <div className = "body-container">
                                    <div className = "body">
                                        <div className = "markdown">
                                            <div dangerouslySetInnerHTML={{ __html: body }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className = "center">
                                    <Link href = "/blog">
                                        <a className = "back-to-articles">
                                            Back To All Articles
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
                            position: relative;

                            --width: 800px;
                            --height: 500px;
                            --scale: ${0.75};
                        }

                        .wrapper {
                            width: var(--width);
                            height: var(--height);
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

                        .languages {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            margin-bottom: 20px;
                        }

                        .open-link {
                            color: var(--accent);
                            margin-left: 12px;
                            height: 25px;
                            width: 25px;
                            font-size: 1.5rem;
                            cursor: pointer;
                        }

                        .body-container {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                        }

                        .body {
                            width: 800px;
                            margin: 0 0 20px 0;
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

                        .back-to-articles {
                            padding: 10px 15px;
                            border-radius: 4px;
                            background-color: var(--border);
                            color: var(--text);
                        }

                        .thumbnail {
                            width: 100%;
                            object-fit: contain;
                            border: 1px solid var(--border);
                            margin-top: 20px;
                        }
                    `}</style>
                </>
            )}
        </>
    )
}

export const getStaticProps  =  async (context) => {
    const id = context.params.id
    const article = articlesByID[id] || "Error"
    let body = ""

    try {
        body = await markdownToHtml(readFileSync(`${process.cwd()}/data/blog/${id}.md`, "utf8"))
    } catch (error) {
        console.log(error)
    }

    return {
        props: {
            article,
            body
        }
    }
}

export const getStaticPaths  =  async () => {
    const ids  = articles.map((article) => article.id)
    const paths = ids.map((id) => ({ params: { id } }))

    return {
        paths,
        fallback: false
    }
}

export default Article