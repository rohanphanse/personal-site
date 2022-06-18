export const articles = [
    {
        id: "haskell-adventures",
        title: "My Haskell Adventures",
        description: "haskell haskell haskell",
        date: { month: "June", year: 2022 },
        thumbnail: "https://www.pngitem.com/pimgs/m/165-1656758_haskell-programming-language-logo-hd-png-download.png",
    },
]

export const articlesByID = {}

for (const article of articles) {
    articlesByID[article.id] = article
}