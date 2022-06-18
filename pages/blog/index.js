import Layout from "../../components/Layout"
import Link from "next/link"
import { useState, useEffect } from "react"
import { articles, articlesByID } from "../../data/blog"

const Blog = () => {
    return (
        <>
            <Layout page = "Blog">
                <div className = "g-center-row">
                    <div className = "g-article">
                        <h1>Blog</h1>
                        {articles.map((article) => (
                            <ArticleCard article = {article} key = {article.id} />
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    )
}

const ArticleCard = ({ article }) => {
    return (
        <>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <Link href = {`/blog/${article.id}`}>
                <a>
                    Go to article
                </a>
            </Link>
        </>
    )
}

export default Blog