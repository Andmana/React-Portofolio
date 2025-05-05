import pokecardSs1 from "../assets/screen-captures/Poke-Card-01.png";
import pokecardSs2 from "../assets/screen-captures/Poke-Card-02.png";
import pokecardSs3 from "../assets/screen-captures/Poke-Card-03.png";
import pokecardSs4 from "../assets/screen-captures/Poke-Card-04.png";
import pokecardSs5 from "../assets/screen-captures/Poke-Card-05.png";

import todolistSs1 from "../assets/screen-captures/To-Do-List-01.png";
import todolistSs2 from "../assets/screen-captures/To-Do-List-02.png";
import todolistSs3 from "../assets/screen-captures/To-Do-List-03.png";

import gamestationSs1 from "../assets/screen-captures/Game-Station-01.png";
import gamestationSs2 from "../assets/screen-captures/Game-Station-02.png";
import gamestationSs3 from "../assets/screen-captures/Game-Station-03.png";
import gamestationSs4 from "../assets/screen-captures/Game-Station-04.png";

import netposSs1 from "../assets/screen-captures/POS-01.png";
import netposSs2 from "../assets/screen-captures/POS-02.png";
import netposSs3 from "../assets/screen-captures/POS-03.png";
import netposSs4 from "../assets/screen-captures/POS-04.png";

export interface IProject {
    name: string;
    description: string;
    tags: string[];
    repository: string;
    demo?: string;
    image: string;
    screenshots: string[];
}

const PROJECT_LISTS: IProject[] = [
    {
        name: "To Do List",
        description: "A web app helps users organize and manage their tasks",
        tags: ["WEBPACK"],
        repository: "https://github.com/Andmana/To-Do-List",
        demo: "https://andmana.github.io/To-Do-List/",
        image: todolistSs1,
        screenshots: [todolistSs1, todolistSs2, todolistSs3],
    },
    {
        name: "Pokemon Memory Card",
        description: "A memory card game powered by PokéAPI",
        tags: ["REACT"],
        repository: "https://github.com/Andmana/Memory-App",
        demo: "https://memory-app-andmana.netlify.app/",
        image: pokecardSs4,
        screenshots: [
            pokecardSs1,
            pokecardSs2,
            pokecardSs3,
            pokecardSs4,
            pokecardSs5,
        ],
    },
    {
        name: "Game Station",
        description: "A mock game shopping cart using RAWG Api",
        tags: ["REACT", "TAILWIND", "TYPESCRIPT"],
        repository: "https://github.com/Andmana/Game-Station",
        demo: "https://game-station-xxx.netlify.app/",
        image: gamestationSs3,
        screenshots: [
            gamestationSs1,
            gamestationSs2,
            gamestationSs3,
            gamestationSs4,
        ],
    },
    {
        name: "Point Of Sale",
        description:
            "A web app manages sales transactions, inventory, and customer data",
        tags: ["DOTNET", "BOOTSTRAP", "MSSQL"],
        repository: "https://github.com/Andmana/.NET-POS",
        image: netposSs2,
        screenshots: [netposSs1, netposSs2, netposSs3, netposSs4],
    },
];

export default PROJECT_LISTS;
