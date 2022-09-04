import Layout from "../../components/Layout"
import Link from "next/link"
import { projects } from "../../data/projects"
import { songs } from "../../data/music"
import LanguageTag from "../../components/LanguageTag"
import { sortByDate } from "../../util/articles"

const Projects = () => {
    const sortedProjects = sortByDate(projects)
    const sortedSongs = sortByDate(songs)
    return (
        <> 
            <Layout page = "Projects">
                <div className = "g-center-row">
                    <h1 className = "header">Programming Projects</h1>
                </div>
                <div className = "g-center-row">
                    <div className = "projects">
                        {sortedProjects.map((project) => (
                            <ProjectCard project = {project} key = {project.id} />
                        ))}
                    </div>
                </div>
                <div className = "g-center-row">
                    <h1 className = "header">Released Songs + Music</h1>
                </div>
                <div className = "g-center-row">
                    <div className = "projects">
                        {sortedSongs.map((song) => (
                            <SongCard song = {song} key = {song.id} />
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

                @media only screen and (min-width: 1700px) {
                    .projects {
                        grid-template-columns: repeat(6, 1fr);
                        max-width: 80vw;
                    }
                }
                @media only screen and (max-width: 950px) {
                    .projects {
                        grid-template-columns: repeat(3, 1fr);
                    }
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
                    height: 120px;
                    width: 100%;
                    object-fit: cover;
                    border-radius: 4px;
                }

                .description {
                    font-size: 0.9rem;
                }

                .title {
                    font-size: 1.3rem;
                    font-weight: bold;
                    letter-spacing: -0.5px;
                    text-align: center;
                    margin-bottom: 3px;
                }

                .date {
                    font-size: 0.9rem;
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

const SongCard = ({ song }) => {
    return (
        <>
            <Link href={`/music/${song.id}`}>
                <a className="card">
                    <div className="title">{song.title}</div>
                    <div className="date">
                        {`${song.date.month} ${song.date.year}`}
                    </div>
                    <img src={song.thumbnail} className="thumbnail" />
                    <div className="description">{song.description}</div>
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
                    height: 120px;
                    width: 100%;
                    object-fit: cover;
                    border-radius: 4px;
                }

                .description {
                    font-size: 0.9rem;
                }

                .title {
                    font-size: 1.3rem;
                    font-weight: bold;
                    letter-spacing: -0.5px;
                    text-align: center;
                    margin-bottom: 3px;
                }

                .date {
                    font-size: 0.9rem;
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
            `}</style>
        </>
    )
}

export default Projects