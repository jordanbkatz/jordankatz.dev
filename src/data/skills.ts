import { IIcon } from '../models/icon';

interface ISkill {
    type: string;
    icons: IIcon[];
}

const skills: ISkill[] = [
    { 
        type: "Front End", 
        icons: [
            { 
                name: "Html5", 
                url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML", 
                color: "#f06529" 
            },
            { 
                name: "Css3",
                url: "https://developer.mozilla.org/en-US/docs/Glossary/CSS",
                color: "#264de4" 
            },
            { 
                name: "Sass", 
                url: "https://sass-lang.com/", 
                color: "#cc6699" 
            },
            { 
                name: "Javascript",
                url: "https://developer.mozilla.org/en-US/docs/Glossary/JavaScript",
                color: "#f0db4f" 
            },
            {
                name: "Typescript",
                url: "https://www.typescriptlang.org/",
                color: "#007acc"
            },
            { 
                name: "React", 
                url: "https://reactjs.org/", 
                color: "#61dbfb" 
            }
        ] 
    },
    {
        type: "Back End",
        icons: [
            { 
                name: "Nodedotjs",
                url: "https://nodejs.org/en/",
                color: "#68a063" 
            },
            { 
                name: "Express", 
                url: "https://expressjs.com/",
                color: "#303030" 
            },
            { 
                name: "Mongodb", 
                url: "https://www.mongodb.com/",
                color: "#4DB33D" 
            },
            {
                name: "Postgresql",
                url: "https://www.postgresql.org/",
                color: "#0064a5"
            },
            { 
                name: "Graphql",
                url: "https://graphql.org/",
                color: "#e535ab" 
            },
            {
                name: "Socketdotio",
                url: "https://socket.io/",
                color: "#000000"
            }
        ]
    },
    {
        type: "Tools",
        icons: [
            { 
                name: "Visualstudiocode", 
                url: "https://code.visualstudio.com/",
                color: "#0078d7" 
            },
            { 
                name: "Github", 
                url: "https://github.com/",
                color: "#333333" 
            },
            { 
                name: "Git", 
                url: "https://git-scm.com/",
                color: "#f1502f" 
            },
            { 
                name: "Netlify",
                url: "https://www.netlify.com/", 
                color: "#00AD9F" 
            },
            { 
                name: "Heroku", 
                url: "https://www.heroku.com/",
                color: "#6762A6" 
            },
            {
                name: "Npm",
                url: "https://www.npmjs.com/",
                color: "#cc3534"
            }
        ]
    }
];

export default skills;