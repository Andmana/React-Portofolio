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
    return (
        <span
            style={flexible ? { color: darkMode ? color : "white" } : { color }}
        >
            {label}
        </span>
    );
};

export default ColoredText;
