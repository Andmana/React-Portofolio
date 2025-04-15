import iconHtml from "../assets/icon-html.svg";
import iconBootstrap from "../assets/icon-bootstrap.svg";
import iconCodeigniter from "../assets/icon-codeigniter.svg";
import iconCSharp from "../assets/icon-csharp.svg";
import iconCss from "../assets/icon-css.svg";
import iconDotnet from "../assets/icon-dotnet.svg";
import iconJava from "../assets/icon-java.svg";
import iconJavascript from "../assets/icon-javascript.svg";
import iconJest from "../assets/icon-jest.svg";
import iconMssql from "../assets/icon-mssql.svg";
import iconMysql from "../assets/icon-mysql.svg";
import iconPhp from "../assets/icon-php.svg";
import iconPostgresql from "../assets/icon-postgresql.svg";
import iconReact from "../assets/icon-react.svg";
import iconSpringboot from "../assets/icon-springboot.svg";
import iconTailwind from "../assets/icon-tailwind.svg";
import iconTypescript from "../assets/icon-typescript.svg";
import iconWebpack from "../assets/icon-webpack.svg";

interface ITag {
    name: string;
    icon: string;
    color: string;
}

export const TAG: Record<string, ITag> = {
    HTML: {
        name: "HTML 5",
        icon: iconHtml,
        color: "#F16529",
    },
    CSS: {
        name: "CSS 3",
        icon: iconCss,
        color: "#2965F1",
    },
    JAVASCRIPT: {
        name: "JavaScript",
        icon: iconJavascript,
        color: "#F7DF1E",
    },
    TYPESCRIPT: {
        name: "TypeScript",
        icon: iconTypescript,
        color: "#3178C6",
    },
    PHP: {
        name: "PHP",
        icon: iconPhp,
        color: "#777BB4",
    },
    CSHARP: {
        name: "C#",
        icon: iconCSharp,
        color: "#239120",
    },
    JAVA: {
        name: "Java",
        icon: iconJava,
        color: "#007396",
    },
    TAILWIND: {
        name: "Tailwind CSS",
        icon: iconTailwind,
        color: "#06B6D4",
    },
    BOOTSTRAP: {
        name: "Bootstrap",
        icon: iconBootstrap,
        color: "#7952B3",
    },
    WEBPACK: {
        name: "Webpack",
        icon: iconWebpack,
        color: "#1A74B9",
    },
    REACT: {
        name: "React",
        icon: iconReact,
        color: "#61DAFB",
    },
    CODEIGNITER: {
        name: "CodeIgniter",
        icon: iconCodeigniter,
        color: "#EF4223",
    },
    SPRINGBOOT: {
        name: "Spring Boot",
        icon: iconSpringboot,
        color: "#6DB33F",
    },
    DOTNET: {
        name: ".NET",
        icon: iconDotnet,
        color: "#512BD4",
    },
    MYSQL: {
        name: "MySQL",
        icon: iconMysql,
        color: "#4479A1",
    },
    MSSQL: {
        name: "Microsoft SQL Server",
        icon: iconMssql,
        color: "#CC2927",
    },
    POSTGRESQL: {
        name: "PostgreSQL",
        icon: iconPostgresql,
        color: "#336791",
    },
    JEST: {
        name: "Jest",
        icon: iconJest,
        color: "#c63d14",
    },
};
