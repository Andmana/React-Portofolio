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
        name: "JAVASCRIPT",
        icon: iconJavascript,
        color: "#171717",
    },
    TYPESCRIPT: {
        name: "TYPESCRIPT",
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
        color: "#512BD4",
    },
    JAVA: {
        name: "JAVA",
        icon: iconJava,
        color: "#ccc",
    },
    TAILWIND: {
        name: "TAILWIND CSS",
        icon: iconTailwind,
        color: "black",
    },
    BOOTSTRAP: {
        name: "BOOTSTRAP",
        icon: iconBootstrap,
        color: "#7952B3",
    },
    WEBPACK: {
        name: "WEBPACK",
        icon: iconWebpack,
        color: "#1A74B9",
    },
    REACT: {
        name: "REACT",
        icon: iconReact,
        color: "#242424",
    },
    CODEIGNITER: {
        name: "CODEIGNITER",
        icon: iconCodeigniter,
        color: "#F2B55B",
    },
    DOTNET: {
        name: ".NET",
        icon: iconDotnet,
        color: "#71489F",
    },
    SPRINGBOOT: {
        name: "SPRING BOOT",
        icon: iconSpringboot,
        color: "#CFE438",
    },
    MYSQL: {
        name: "MYSQL",
        icon: iconMysql,
        color: "aqua",
    },
    MSSQL: {
        name: "SQL SERVER",
        icon: iconMssql,
        color: "#6FC664",
    },
    POSTGRESQL: {
        name: "POSTGRESQL",
        icon: iconPostgresql,
        color: "#336791",
    },
    JEST: {
        name: "JEST",
        icon: iconJest,
        color: "#FACC15",
    },
};
