export const projects = [
    {
        id: "art-gallery",
        title: "Decentralized Art Gallery",
        description: "Decentralized art gallery built on NEAR blockchain",
        date: { month: "May", year: 2022 },
        url: "https://rohanphanse.github.io/art-gallery",
        languages: ["React", "JavaScript", "NEAR", "AssemblyScript", ],
        categories: ["featured", "dapps"]
    },
    {
        id: "grapher",
        title: "Grapher",
        description: "Breaking news: Desmos has been dethroned by upstart Grapher, which supports slope and vector fields!",
        date: { month: "March", year: 2022 },
        url: "https://grapher.roar123.repl.co",
        languages: ["HTML", "CSS", "JavaScript"],
        categories: ["featured"]
    },
]

export const categories = [
    {
        id: "featured",
        title: "Featured Projects"
    },
    {
        id: "dapps",
        title: "Decentralized Apps (dApps)"
    },
]

export const projectsByID = {}

for (const project of projects) {
    projectsByID[project.id] = project
}