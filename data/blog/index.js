export const articles = [
    {
        id: "haskell-adventures",
        title: "My Haskell Adventures",
        description: "haskell haskell haskell",
        date: { month: "June", year: 2022 },
        thumbnail: "https://www.pngitem.com/pimgs/m/165-1656758_haskell-programming-language-logo-hd-png-download.png",
    },
    {
        id: "paly-python-summer-camps",
        title: "Paly Python Summer Camps", 
        description: "Learn about how Paly Python hosted 2 successful CS camps!",
        date: { month: "June", year: 2022 },
        thumbnail: "/images/blog/paly-python-website.png",
    },
]

export const articlesByID = {}

for (const article of articles) {
    articlesByID[article.id] = article
}