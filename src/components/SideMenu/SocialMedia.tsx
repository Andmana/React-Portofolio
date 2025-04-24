import { motion } from "framer-motion"; // Assuming you're using framer-motion
import iconGh from "../../assets/icons/icon-github.svg";
import iconIg from "../../assets/icons/icon-instagram.svg";
import iconIn from "../../assets/icons/icon-linkedin.svg";
import { MouseEvent } from "react";

const contacts = [
    {
        name: "Instagram",
        href: "https://www.instagram.com/andmana.putra/",
        icon: iconIg,
    },
    { name: "LinkedIn", href: "https://github.com/Andmana", icon: iconIn },
    {
        name: "Github",
        href: "https://www.linkedin.com/in/andreas-permana-4a6b63241/",
        icon: iconGh,
    },
];

const SocialMedia = () => {
    const clickHandle = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const target = event.target as HTMLAnchorElement;
        window.open(target.href, "_blank");
    };

    return (
        <div className="flex gap-2 portrait:justify-end">
            {contacts.map((media) => (
                <motion.a
                    key={media.name}
                    className="w-12 h-12 portrait:w-10 portrait:h-10"
                    href={media.href}
                    onClick={clickHandle}
                    aria-label={`Visit ${media.name}`}
                    whileHover={{ scale: 1.1 }}
                >
                    <img
                        src={media.icon}
                        alt={`${media.name} Icon`}
                        className="dark:filter-(--whitening) pointer-events-none"
                    />
                </motion.a>
            ))}
        </div>
    );
};

export default SocialMedia;
