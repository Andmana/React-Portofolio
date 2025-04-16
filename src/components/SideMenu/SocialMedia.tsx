import { motion } from "motion/react";
import iconGh from "../../assets/icons/icon-github.svg";
import iconIg from "../../assets/icons/icon-instagram.svg";
import iconIn from "../../assets/icons/icon-linkedin.svg";

const contacts = [
    { name: "Instagrem", href: "/", icon: iconIg },
    { name: "LinkedIn", href: "/", icon: iconIn },
    { name: "Github", href: "/", icon: iconGh },
];
const SocialMedia = () => {
    return (
        <div className="flex gap-2 portrait:justify-end">
            {contacts.map((media) => (
                <a
                    className="w-14 h-14 portrait:w-10 portrait:h-10 "
                    href={media.href}
                >
                    <motion.img
                        src={media.icon}
                        alt=""
                        whileHover={{ scale: 1.1 }}
                        className="dark:filter-(--whitening)"
                    />
                </a>
            ))}
        </div>
    );
};
export default SocialMedia;
