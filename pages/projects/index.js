import Layout from "../../components/Layout"
import Link from "next/link"
import { useState, useEffect } from "react"
import { projects, projectsByID } from "../../data/projects"

const Projects = () => {
    return (
        <>
            <Layout page = "Projects">
                <div className = "g-center-row">
                    <div className = "g-article">
                        <h1>Featured Projects</h1>
                        {projects.map((project) => (
                            <ProjectCard project = {project} key = {project.id} />
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    )
}

const ProjectCard = ({ project }) => {
    return (
        <>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link href = {`/projects/${project.id}`}>
                <a>
                    Go to project
                </a>
            </Link>
        </>
    )
}

export default Projects