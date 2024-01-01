export const articles = [
    {
        id: "haskell-adventures",
        title: "My Haskell Adventures",
        description: "haskell haskell haskell",
        date: { month: "June", year: 2022 },
        thumbnail: "/images/blog/haskell-logo.png",
    },
    {
        id: "paly-python-summer-camps",
        title: "Paly Python Summer Camps", 
        description: "Learn about how Paly Python hosted 2 successful CS camps!",
        date: { month: "July", year: 2020 },
        thumbnail: "/images/blog/paly-python-website.png",
    },
    {
        id: "paly-python-parikrma-mission",
        title: "Paly Python's Parikrma Mission", 
        description: "What I taught the 60 Parikrma students in Bangalore—the fundamentals of computer science—and what they taught me—the power of boundless optimism and perseverance.",
        date: { month: "August", year: 2022 },
        thumbnail: "/images/blog/koramangala-group.jpeg",
    },
]

export const articlesByID = {}

for (const article of articles) {
    articlesByID[article.id] = article
}