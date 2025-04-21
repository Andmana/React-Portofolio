import pokecardSs1 from "../assets/screen-captures/screenshot-Pokecard-1.png";
import pokecardSs2 from "../assets/screen-captures/screenshot-Pokecard-2.png";
import pokecardSs3 from "../assets/screen-captures/screenshot-Pokecard-3.png";
import pokecardSs4 from "../assets/screen-captures/screenshot-Pokecard-4.png";

import todolistSs1 from "../assets/screen-captures/Screenshot-ToDoList-1.png";
import todolistSs2 from "../assets/screen-captures/Screenshot-ToDoList-2.png";
import todolistSs3 from "../assets/screen-captures/Screenshot-ToDoList-3.png";

import gamestationSs1 from "../assets/screen-captures/Screenshot-GameStation-1.png";
import gamestationSs2 from "../assets/screen-captures/Screenshot-GameStation-2.png";
import gamestationSs3 from "../assets/screen-captures/Screenshot-GameStation-3.png";
import gamestationSs4 from "../assets/screen-captures/Screenshot-GameStation-4.png";
import gamestationSs5 from "../assets/screen-captures/Screenshot-GameStation-5.png";
import gamestationSs6 from "../assets/screen-captures/Screenshot-GameStation-6.png";

import netposSs1 from "../assets/screen-captures/Screenshot-Net-1.png";
import netposSs2 from "../assets/screen-captures/Screenshot-Net-2.png";
import netposSs3 from "../assets/screen-captures/Screenshot-Net-3.png";
import netposSs4 from "../assets/screen-captures/Screenshot-Net-4.png";
import netposSs5 from "../assets/screen-captures/Screenshot-Net-5.png";
import netposSs6 from "../assets/screen-captures/Screenshot-Net-6.png";
import netposSs7 from "../assets/screen-captures/Screenshot-Net-7.png";
import netposSs8 from "../assets/screen-captures/Screenshot-Net-8.png";

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
        screenshots: [pokecardSs1, pokecardSs2, pokecardSs3, pokecardSs4],
    },
    {
        name: "Game Station",
        description: "A mock game shopping cart using RAWG Api",
        tags: ["REACT", "TAILWIND", "TYPESCRIPT"],
        repository: "https://github.com/Andmana/Game-Station",
        demo: "https://game-station-xxx.netlify.app/",
        image: gamestationSs2,
        screenshots: [
            gamestationSs1,
            gamestationSs2,
            gamestationSs3,
            gamestationSs4,
            gamestationSs5,
            gamestationSs6,
        ],
    },
    {
        name: "Point Of Sale",
        description:
            "A web app manages sales transactions, inventory, and customer data",
        tags: ["REACT", "TAILWIND", "TYPESCRIPT"],
        repository: "https://github.com/Andmana/.NET-POS",
        image: netposSs6,
        screenshots: [
            netposSs1,
            netposSs2,
            netposSs3,
            netposSs4,
            netposSs5,
            netposSs6,
            netposSs7,
            netposSs8,
        ],
    },
];

export default PROJECT_LISTS;
