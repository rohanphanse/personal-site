export const projects = [
    {
        id: "par-d",
        title: "Predicting Human Intent to Interact with a Public Robot: The People Approaching Robots Database (PAR-D)",
        description: "Wrote Python scripts for the development and analysis of models (MLP, Trajectory, Random Forest Classifier) used to predict a passerby's intent to interact with a robot.",
        date: { month: "November", year: 2024 },
        url: "/pdfs/par-d.pdf",
        languages: ["Python", "PyTorch"],
        category: "research",
        thumbnail: "/images/projects/acm-logo.png",
    },
    {
        id: "trec-tot",
        title: "Yale NLP at TREC 2024: Tip-of-the-Tongue Track",
        description: "Generated synthetic queries for scarce domains with GPT-4o mini to train dense retrievers for the Tip-of-the-Tongue task.",
        date: { month: "February", year: 2025 },
        url: "/pdfs/yalenlp.tot.pdf",
        languages: ["Python", "PyTorch", "RAG"],
        category: "research",
        thumbnail: "/images/projects/nist-logo.png",
    },
    {
        id: "vectory",
        title: "Vectory (HackMIT)",
        description: "A personalized math tutor with problem recommendations, hints, and progress tracking.",
        date: { month: "September", year: 2024 },
        url: "https://www.loom.com/embed/a3dc40d63cb644b3a92076cbc311e5d4?sid=67f91339-95d9-4052-bfcf-e90ba3c7ee4d",
        languages: ["Python", "React.js", "RAG"],
        category: "programming",
        thumbnail: "/images/projects/vectory-thumbnail.png"
    },
    {
        id: "dripped",
        title: "Dripped (YHack)",
        description: "A Chrome extension estimating the environmental impact of any apparel item with one click!",
        date: { month: "April", year: 2024 },
        url: "/images/projects/dripped-thumbnail.jpg",
        languages: ["Python"],
        category: "programming",
        thumbnail: "/images/projects/dripped-thumbnail.jpg",
        image: true
    },
    {
        id: "quantum-hash",
        title: "Quantum Hash (YQuantum)",
        description: "Researched and implemented a fully quantum hash function for YQuantum.",
        date: { month: "April", year: 2025 },
        url: "/pdfs/yquantum.pdf",
        languages: ["Python", "QuTip"],
        category: "programming",
        thumbnail: "/images/projects/quantum-thumbnail.png"
    },
    {
        id: "functional-calculator",
        title: "Functional Calculator",
        description: "An intuitive and easy-to-use web calculator with the power of functional programming languages and the terminal!",
        date: { month: "May", year: 2025 },
        url: "https://rohanphanse.github.io/calculator",
        languages: ["HTML", "CSS", "JavaScript"],
        category: "programming",
        thumbnail: "/images/projects/func-calc-thumbnail.png"
    },
    {
        id: "word-ending-game",
        title: "Word Ending Game",
        description: "An original multiplayer word game powered by web sockets with a lobby, integrated chat, and more!",
        date: { month: "May", year: 2025 },
        url: "https://word-ending-game.onrender.com",
        languages: ["Node.js", "HTML", "CSS", "JS"],
        category: "programming",
        thumbnail: "/images/projects/word-game-thumbnail.png"
    },
    {
        id: "grapher",
        title: "Grapher",
        description: "Breaking news: Desmos has been dethroned by upstart Grapher, which supports slope and vector fields!",
        date: { month: "March", year: 2022 },
        url: "https://rohanphanse.github.io/grapher",
        languages: ["HTML", "CSS", "JS"],
        category: "programming",
        thumbnail: "/images/projects/grapher-thumbnail.png"
    },
    {
        id: "shape-wars",
        title: "Shape Wars",
        description: "A war has risen among the shapes. Fight against the waves of relentless triangles and defend the circle at all costs.",
        date: { month: "April", year: 2021 },
        url: "https://rohanphanse.github.io/shape-wars",
        languages: ["HTML", "CSS", "JS"],
        category: "programming",
        thumbnail: "/images/projects/shape-wars.png"
    },
    {
        id: "cpsc-477-final",
        title: "CPSC 477 Final: Knowledge Distillation From Gemini to Mistral for Earnings Call Transcript Summarization",
        description: "Finetuned Mistral 7B-Instruct on an augmented ECTSum dataset created with Gemini Pro to improve financial document summarization peformance.",
        date: { month: "May", year: 2024 },
        url: "/pdfs/cpsc-477.pdf",
        languages: ["Python", "PyTorch"],
        category: "class",
        thumbnail: "/images/mistral-logo.png"
    },
    {
        id: "cpsc-474-final",
        title: "CPSC 474 Final: Monte Carlo Tree Search Techniques and Deep Q-Learning for Blokus Duo",
        description: "Developed agents powered by tree search and neural network-learned values to play the board game of Blokus Duo.",
        date: { month: "May", year: 2025 },
        url: "/images/projects/blokus.png",
        languages: ["Python", "PyTorch"],
        category: "class",
        thumbnail: "/images/projects/blokus.png",
        image: true
    },
    {
        id: "cpsc-424-final",
        title: "CPSC 424 Final: Parallel N-Body Simulations",
        description: "Implemented, parallelized, and benchmarked various algorithms (Barnes-Hut, Fast Multipole, etc.) for N-Body simulations.",
        date: { month: "May", year: 2025 },
        url: "/pdfs/cpsc-424.pdf",
        languages: ["C++", "OpenMP", "ParlayLib", "CUDA"],
        category: "class",
        thumbnail: "/images/projects/3-body.png"
    },
]

export const projectsByID = {}

for (const project of projects) {
    projectsByID[project.id] = project
}