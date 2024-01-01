import Layout from "../../components/Layout"
import Link from "next/link"
import { useState, useEffect } from "react"
import { articles, articlesByID } from "../../data/blog"
import { sortByDate } from "../../util/articles"

const Blog = () => {
    const sortedArticles = sortByDate(articles)
    return (
        <>
            <Layout page = "Blog">
                <div className = "g-center-row">
                    <div className = "g-article">
                        <h1 className = "title">Blog</h1>
                        {sortedArticles.map((article) => (
                            <ArticleCard article = {article} key = {article.id} />
                        ))}
                    </div>
                </div>
            </Layout>
            <style jsx>{`
                .title {
                    margin-bottom: 20px;
                }
            `}</style>
        </>
    )
}

const ArticleCard = ({ article }) => {
    return (
        <>
            <Link href = {`/blog/${article.id}`}>
                <a className = "card">
                    <div>
                        <img src = {article.thumbnail} className = "thumbnail" />
                    </div>
                    <div>
                        <h3 className = "title">{article.title}</h3>
                        <div className = "date">{article.date.month + " " + article.date.year}</div>
                        <div className = "desc">{article.description}</div>
                    </div>
                </a>
            </Link>
            <style jsx>{`
                .card {
                    display: flex;
                    align-items: center;
                    color: var(--text);
                    transition-duration: 0.2s;
                    padding: 15px 15px 10px 15px;
                    transition-duration: 0.2s;
                    text-decoration: none;
                    border: 1px solid transparent;
                    border-radius: 8px;
                }

                .card:hover {
                    transform: translateY(-2px);
                    border: 1px solid var(--border);
                }

                .title {
                    margin: 0;
                    font-size: 1.5rem;
                }

                .date {
                    margin-bottom: 10px;
                }

                .thumbnail {
                    width: 200px;
                    height: 150px;
                    object-fit: cover;
                    margin-right: 20px;
                    border-radius: 4px;
                }

                .desc {
                    font-size: 1.1rem;
                }
            `}</style>
        </>
    )
}

export default Blog