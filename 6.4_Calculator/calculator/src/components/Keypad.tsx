import './Keypad.css';
import Button from '@material-ui/core/Button';

const buttons = ["7", "8", "9", "*", "4", "5", "6", "/", "1", "2", "3", "+", "0", ".", "=", "-"];


type KeypadProps = {
    keypadPress: (newCaracter: string) => void;
}

function Keypad({keypadPress}: KeypadProps) {
    return <div className="grid-container">
        {buttons.map((button) => (
            <div><Button variant="contained" color="primary" onClick={() => keypadPress(button)}>{button}</Button></div>
        ))
    }
    </div>
}

export default Keypad;