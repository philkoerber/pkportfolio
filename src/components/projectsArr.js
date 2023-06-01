import sixtysix from "./pics/sixtysix.mp4";
import openingexplorer from "./pics/openingexplorer.mp4"
import portfolio from "./pics/portfolio.mp4"



const projectsArr = [
    {
        name: "Sixty-Six",
        content1: "A web app for playing the german card game 'Sechsundsechzig'",
        content2: "In addition to handling game logic, this project provided me with an opportunity to explore the realm of framer-motion, sparking my passion for its possibilities.",
        github: "https://github.com/philkoerber/sixtysix",
        home: "https://www.youtube.com/@swim8008",
        techs: ["react", "framer-motion", "Chakra UI", "zustand"],
        file: sixtysix
    },
    {
        name: "Opening Explorer",
        content1: "A chess opening explorer, animating the opening lines in a diagramm.",
        content2: "As a fan of the world of chess openings, I found it fascinating to combine various chess-related libraries with an opening database, showcasing the integration through smooth animations. ",
        github: "https://github.com/philkoerber/Opening-Name-Explorer",
        home: "https://openingnameexplorer.netlify.app/",
        techs: ["react", "chess.js", "chessboard.js", "framer-motion", "tailwind", "zustand"],
        file: openingexplorer
    },
    {
        name: "Portfolio",
        content1: "The beautiful portfolio you are checking out now!",
        content2: "This portfolio is created to present myself and showcase my skills to others.",
        github: "https://github.com/philkoerber/portfolio",
        home: "/",
        techs: ["react", "framer-motion", "tailwind"],
        file: portfolio
    },
    {
        name: "Music",
        content1: "Most of my music is made by utilizing Pure Data, a visual programming language.",
        content2: "Pure Data became my introduction to programming, revealing a realm that required effort to unlock its full potential. However, the payoff was extraordinary: the ability to have complete control over sound and create unique designs.",
        github: "",
        home: "https://www.youtube.com/@swim8008",
        techs: ["pure-data", "reaper"],
        file: sixtysix

    },
    
]

export default projectsArr;