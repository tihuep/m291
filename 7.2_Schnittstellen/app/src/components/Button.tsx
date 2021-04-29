type ButtonProps = {
    buttonText: String;
    buttonPress: () => void;
}

function Keypad({buttonText, buttonPress}: ButtonProps) {
    return <button onClick={buttonPress}>{buttonText}</button>
}

export default Keypad;