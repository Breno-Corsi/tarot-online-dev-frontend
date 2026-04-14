import logo from "../assets/icons/tarot_online_logo.svg";

export default function Form({ onSubmit, userInput, setUserInput }) {

    return (
        <form     
            className="form__container"
            onSubmit={onSubmit}
        >
            <textarea 
                onChange={(e) => setUserInput(e.target.value)}
                className="form__input"
                type="text"
                name="userInput"
                placeholder="Type your question..."
            />
            <button type="submit" className="form__submit">
                <img className="form__icon" src={logo} />
            </button>
        </form>
    )
}
