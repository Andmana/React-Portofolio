const ColoredText = ({ label, color }: { label: string; color: string }) => {
    return <span style={{ color: color }}>{label}</span>;
};

export default ColoredText;
