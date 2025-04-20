import { useMediaQuery } from "react-responsive";
import { useTheme } from "../../contexts/ThemeContext";

const ColoredText = ({
    label,
    color,
    flexible = false,
}: {
    label: string;
    color: string;
    flexible?: boolean;
}) => {
    const { darkMode } = useTheme();
    const isPortrait = useMediaQuery({ orientation: "portrait" });

    return (
        <span
            style={
                flexible
                    ? { color: darkMode ? color : isPortrait ? color : "white" }
                    : { color }
            }
        >
            {label}
        </span>
    );
};

export default ColoredText;
