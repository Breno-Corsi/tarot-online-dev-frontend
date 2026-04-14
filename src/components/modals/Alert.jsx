import { createPortal } from "react-dom";
import closeIcon from "../../assets/icons/close_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.svg";

export default function Alert({ appears, alertText, onClose }) {

    if (!appears) return null;

    return createPortal(
        <div className="alert__background">
            <div className="alert__container">
                <button
                    tabIndex="1"
                    className="alert__button"
                    onClick={onClose}
                >
                    <img
                        className="alert__button-icon"
                        src={closeIcon}
                        alt="Close alert"
                    />
                </button>
                <h2 className="alert__title">Tarot Online Error:</h2>
                <p className="alert__text">{alertText}</p>
                <button
                    tabIndex="1"
                    className="alert__continue-button"
                    onClick={onClose}
                >
                    OK
                </button>
            </div>
        </div>,
        document.body
    );
}