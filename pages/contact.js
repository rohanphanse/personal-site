import Layout from "../components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
    return (
        <>
            <Layout page = "Contact">
                <div className = "g-center-row">
                    <div className = "g-article">
                        <h1>Contact Me</h1>
                        <div className = "contacts">
                            <a className = "contact github" href = "https://github.com/rohanphanse" target = "_blank" rel = "noreferrer">
                                <div className = "icon">
                                    <FontAwesomeIcon icon={faGithub} />
                                </div>
                                <div className = "contact-text">Github</div>
                            </a>
                            <a className = "contact linkedin" href = "https://linkedin.com/in/rohan-phanse" target = "_blank" rel = "noreferrer">
                                <div className = "icon">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </div>
                                <div className = "contact-text">Linkedin</div>
                            </a>
                        </div>
                    </div>
                </div>
            </Layout>
            <style jsx>{`
                .contacts {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 2rem;
                    margin: 20px 0;
                }

                .contact {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: black;
                    cursor: pointer;
                    border: 1px solid var(--background);
                    padding: 30px 30px;
                    transition-duration: 0.2s;
                    border-radius: 8px;
                }

                .contact-text {
                    margin-top: 30px;
                    text-align: center;
                    color: var(--text);
                }

                .github {
                    color: var(--text);
                }

                .linkedin {
                    color: rgb(0, 119, 181);
                }
                
                .linkedin .icon {
                    transform: translateY(-10px);
                }

                .icon {
                    height: 120px;
                    width: 120px;
                }

                .contact:hover {
                    transform: translateY(-3px);
                    border: 1px solid var(--border);
                }
            `}</style>
        </>
    )
}

export default Contact