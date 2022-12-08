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
        demo: "https://flagame.net",
        code: "https://github.com/jordanbkatz/flagame" 
    },
    { 
        name: "Loser Bot", 
        description: "A Discord bot with weird commands", 
        demo: "https://discord.com/api/oauth2/authorize?client_id=948704208180359198&permissions=8&scope=bot", 
        code: "https://github.com/jordanbkatz/loser-bot" 
    },
    {
        name: "Click Brothas",
        description: "A game where you try to click faster than other online players",
        demo: "https://clickbrothas.com",
        code: "https://github.com/jordanbkatz/click-brothas"
    },
    {
        name: "Fortnite Todo List",
        description: "A Fortnite-themed todo list",
        demo: "https://fortnitetodolist.com",
        code: "https://github.com/jordanbkatz/task-manager-evolved"
    }
];

export default projects;