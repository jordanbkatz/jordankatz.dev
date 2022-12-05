interface IProject {
    name: string;
    description: string;
    demo: string;
    code: string;
}

const projects: IProject[] = [
    {
        name: "Flagame", 
        description: "A game where you match the correct country name to the flag", 
        demo: "https://www.flagame.net",
        code: "https://github.com/jordanbkatz/flagame" 
    },
    { 
        name: "Loser Bot", 
        description: "A Discord bot with weird commands", 
        demo: "https://www.loserbot.com", 
        code: "https://github.com/jordanbkatz/loser-bot" 
    },
    {
        name: "Fortnite Todo List",
        description: "A Fortnite-themed todo list",
        demo: "https://fortnitetodolist.com",
        code: "https://github.com/jordanbkatz/task-manager-evolved"
    },
    {
        name: "Click Brothas",
        description: "A game where you try to click faster than other online players",
        demo: "https://clickbrothas.com",
        code: "https://github.com/jordanbkatz/click-brothas"
    },
    {
        name: "Karma API",
        description: "A REST API to get the Reddit karma of a specific user",
        demo: "https://karma-api.herokuapp.com",
        code: "https://github.com/jordanbkatz/karma-api"
    }

];

export default projects;