export const songs = [
    {
        id: "yes-indeed-remix",
        title: "Yes Indeed Remix",
        description: "My remix of Lil Baby and Drake's song \"Yes Indeed.\"",
        date: { month: "July", year: 2022 },
        url: "https://www.youtube.com/watch?v=mlK58ch9mwU",
        iframe: "https://www.youtube.com/embed/mlK58ch9mwU",
        thumbnail: "/images/music/yes-indeed-remix.jpg"
    },
    {
        id: "java-rap-tutorial",
        title: "The Ultimate Java Rap Tutorial",
        description: "Learn the basics of Java through rap!",
        date: { month: "July", year: 2022 },
        url: "https://www.youtube.com/watch?v=Lg3PGxBB_Iw",
        iframe: "https://www.youtube.com/embed/Lg3PGxBB_Iw",
        thumbnail: "/images/music/java-rap-tutorial.jpg"
    },
]


export const songsByID = {}

for (const song of songs) {
    songsByID[song.id] = song
}