import sixtysix from "./pics/sixtysix.mp4";
import openingexplorer from "./pics/openingexplorer.mp4";
import portfolio from "./pics/portfolio.mp4";
import puredata from "./pics/puredata.mp4";
import docrob from "./pics/docrob.mp4";
import dza from "./pics/dza.mp4";
import lyraverse from "./pics/lyraverse.mp4";

const projectsArr = [
  {
    name: "DOC.ROB",
    content1: "A chatbot that knows the React docs.",
    content2:
      "Utilizing FlowiseAI, this app connects to a custom LLM that is trained on the current documentation of ReactJS.",
    github: "https://github.com/philkoerber/docrob",
    home: "https://docrob.vercel.app/",
    techs: ["nextJS", "FlowiseAI", "tailwind", "zustand"],
    file: docrob,
  },
  {
    name: "Sixty-Six",
    content1: "A web app for playing the german card game 'Sechsundsechzig'.",
    content2:
      "In addition to handling game logic, this project provided me with an opportunity to explore the realm of framer-motion, sparking my passion for its possibilities.",
    github: "https://github.com/philkoerber/sixtysix",
    home: "https://sixty-six.netlify.app/",
    techs: ["react", "framer-motion", "Chakra UI", "zustand"],
    file: sixtysix,
  },
  {
    name: "DZA Website",
    content1: "Website for DJ/Artist DZA.",
    content2:
      "Simple is best, so I let the work of this talented artist speak for itself. 3D-Enviroment to underline his aesthetics.",
    github: "https://github.com/philkoerber/dza",
    home: "https://dza-ten.vercel.app/",
    techs: [, "nextJS", "react", "react-force-graph", "tailwind"],
    file: dza,
  },
  {
    name: "LyraVerseAI",
    content1:
      "A web app that lets you create, store and edit Lyrics and Poems.",
    content2:
      "Utilizing different AI-APIs, this app provides interactive and fun ways to create some lyrics. Let the AI create your next line, or lean back and listen to your peotry. Everything is stored in a database, so access it from anywhere.",
    github: "https://github.com/philkoerber/LyraVerseAI",
    home: "https://lyraverse-ai.vercel.app/",
    techs: ["nextJS", "FlowiseAI", "tailwind", "supabase"],
    file: lyraverse,
  },
  {
    name: "Opening Explorer",
    content1:
      "A chess opening explorer, animating the opening lines in a diagramm.",
    content2:
      "As a fan of the world of chess openings, I found it fascinating to combine various chess-related libraries with an opening database, showcasing the integration through smooth animations. ",
    github: "https://github.com/philkoerber/Opening-Name-Explorer",
    home: "https://openingnameexplorer.netlify.app/",
    techs: [
      "react",
      "chess.js",
      "chessboard.js",
      "framer-motion",
      "tailwind",
      "zustand",
    ],
    file: openingexplorer,
  },
  {
    name: "Portfolio",
    content1: "The beautiful portfolio you are checking out now!",
    content2:
      "This portfolio is created to present myself and showcase my skills to others.",
    github: "https://github.com/philkoerber/pkportfolio",
    home: "/",
    techs: ["react", "framer-motion", "tailwind"],
    file: portfolio,
  },
  {
    name: "Music",
    content1:
      "Most of my music is made by utilizing Pure Data, a visual programming language.",
    content2:
      "With 15 years of experience, Pure Data has been my programming foundation, enabling me to exercise complete authority over sound and one-of-a-kind audio designs.",
    github: "https://github.com/philkoerber/puredata-objects",
    home: "https://www.youtube.com/@swim8008",
    techs: ["pure-data", "reaper"],
    file: puredata,
  },
];

export default projectsArr;
