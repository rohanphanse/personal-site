export const projects = [
    {
        id: "art-gallery",
        title: "Decentralized Art Gallery",
        description: "Decentralized art gallery built on NEAR blockchain, with smart contracts!",
        date: { month: "May", year: 2022 },
        url: "https://rohanphanse.github.io/art-gallery",
        languages: ["React", "JavaScript", "NEAR", "AssemblyScript", ],
        categories: ["featured", "dapps"],
        thumbnail: "/images/projects/art-gallery.png"
    },
    {
        id: "grapher",
        title: "Grapher",
        description: "Breaking news: Desmos has been dethroned by upstart Grapher, which supports slope and vector fields!",
        date: { month: "March", year: 2022 },
        url: "https://grapher.roar123.repl.co",
        languages: ["HTML", "CSS", "JavaScript"],
        categories: ["featured"],
        thumbnail: "/images/projects/grapher-thumbnail.png"
    },
    {
        id: "steganography",
        title: "Steganography",
        description: "Fly images under the radar by encrypting them into the bits of another image!",
        date: { month: "June", year: 2022 },
        url: "https://replit.com/@Roar123/steganography?embed=true",
        languages: ["Rust"],
        categories: ["featured"],
        thumbnail: "/images/projects/steganography-thumbnail.png"
    },
    {
        id: "serve-static-directory",
        title: "Serve Static Directory",
        description: "Recursively generate routes and serve all files in static directory.",
        date: { month: "January", year: 2022 },
        url: "https://serve-static-directory.roar123.repl.co",
        languages: ["Node.js"],
        categories: ["featured"],
        thumbnail: "/images/projects/serve-static-directory-thumbnail.png"
    },
    {
        id: "shape-wars",
        title: "Shape Wars",
        description: "A war has risen among the shapes. Fight against the waves of relentless triangles and defend the circle at all costs.",
        date: { month: "April", year: 2021 },
        url: "https://shape-wars.roar123.repl.co",
        languages: ["HTML", "CSS", "JavaScript"],
        categories: ["featured"],
        thumbnail: "/images/projects/shape-wars.png"
    },
]

export const projectsByID = {}

for (const project of projects) {
    projectsByID[project.id] = project
}