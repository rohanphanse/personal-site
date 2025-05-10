import Layout from "../../components/Layout"
import Link from "next/link"
import { projects } from "../../data/projects"
import LanguageTag from "../../components/LanguageTag"
import { sortByDate } from "../../util/articles"

const Projects = () => {
    const programmingProjects = projects.filter((p) => p.category === "programming")
    const researchProjects = projects.filter((p) => p.category === "research")
    const classProjects = projects.filter((p) => p.category === "class")
    return (
        <> 
            <Layout page = "Projects">
                <div className = "g-center-row">
                    <h1 className = "header">Programming Projects</h1>
                </div>
                <div className = "g-center-row">
                    <div className = "projects">
                        {sortByDate(programmingProjects).map((project) => (
                            <ProjectCard project = {project} key = {project.id} />
                        ))}
                    </div>
                </div>
                <div className = "g-center-row">
                    <h1 className = "header-2">Research Projects</h1>
                </div>
                
                <div className = "g-center-row">
                    <div style = {{ width: "950px" }}>
                        {sortByDate(researchProjects).map((project) => (
                            <ProjectRowCard project = {project} key = {project.id} />
                        ))}
                    </div>
                </div>

                <div className = "g-center-row">
                    <h1 className = "header-2">Class Projects</h1>
                </div>
                
                <div className = "g-center-row">
                    <div style = {{ width: "950px" }}>
                        {sortByDate(classProjects).map((project) => (
                            <ProjectRowCard project = {project} key = {project.id} />
                        ))}
                    </div>
                </div>
            </Layout>
            <style jsx>{`
                .projects {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    max-width: 1000px;
                    margin: 0 50px;
                }

                .header {
                    width: 1000px;
                    margin: 0 50px;
                    padding: 50px 0 20px 0;
                }

                .header-2 {
                    width: 1000px;
                    margin: 0 50px;
                    margin-top: 50px;
                    margin-bottom: 10px;
                }

                @media only screen and (max-width: 950px) {
                    .projects {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
                @media only screen and (max-width: 700px) {
                    .projects {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media only screen and (max-width: 450px) {
                    .projects {
                        grid-template-columns: repeat(1, 1fr);
                    }
                }
            `}</style>
        </>
    )
}

const ProjectCard = ({ project }) => {
    return (
        <>
            <Link href={`/projects/${project.id}`}>
                <a className="card">
                    <div className="title">{project.title}</div>
                    <div className="date">
                        {`${project.date.month} ${project.date.year}`}
                    </div>
                    <img src={project.thumbnail} className="thumbnail" />
                    <div className="languages">
                        {project.languages.map((language) => (
                            <LanguageTag language={language} key={language} />
                        ))}
                    </div>
                    <div className="description">{project.description}</div>
                </a>
            </Link>
            <style jsx>{`
                .card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border-radius: 8px;
                    padding: 20px;
                    transition: 0.2s;
                    text-decoration: none;
                    margin: 10px;
                    color: var(--text);
                    border: 1px solid transparent;
                }

                .card:hover {
                    transform: translateY(-2px);
                    border: 1px solid var(--border);
                }

                .thumbnail {
                    margin-bottom: 10px;
                    height: 150px;
                    width: 100%;
                    object-fit: cover;
                    border-radius: 4px;
                }

                .description {
                    font-size: 1rem;
                }

                .title {
                    font-size: 1.5rem;
                    font-weight: bold;
                    letter-spacing: -0.5px;
                    text-align: center;
                    margin-bottom: 3px;
                }

                .date {
                    font-size: 1rem;
                    margin-bottom: 10px;
                }

                @media only screen and (max-width: 950px) {
                    .thumbnail {
                        height: 150px;
                    }
                }

                @media only screen and (max-width: 700px) {
                    .thumbnail {
                        height: 200px;
                    }
                }

                @media only screen and (max-width: 450px) {
                    .thumbnail {
                        height: 200px;
                    }
                }

                .languages {
                    display: flex;
                    flex-direction: row;
                    align-self: flex-start;
                    margin-bottom: 5px;
                    flex-wrap: wrap;
                }
            `}</style>
        </>
    )
}

const ProjectRowCard = ({ project }) => {
    return (
        <>
            <Link href = {`/projects/${project.id}`}>
                <a className = "card">
                    <div>
                        <img src = {project.thumbnail} className = "thumbnail" />
                    </div>
                    <div>
                        <h3 className = "title">{project.title}</h3>
                        <div className = "date">{project.date.month + " " + project.date.year}</div>
                        <div className="languages">
                            {project.languages.map((language) => (
                                <LanguageTag language={language} key={language} />
                            ))}
                        </div>
                        <div className = "desc">{project.description}</div>
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
                    object-fit: contain;
                    margin-right: 20px;
                    border-radius: 4px;
                }

                .desc {
                    font-size: 1.1rem;
                }

                .languages {
                    display: flex;
                    flex-direction: row;
                    align-self: flex-start;
                    margin-bottom: 5px;
                    flex-wrap: wrap;
                }
            `}</style>
        </>
    )
}

export default Projects