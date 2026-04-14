import closeIcon from "../assets/icons/close_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.svg";

const importCard = (name) => new URL(`../assets/images/cards/${name}.jpg`, import.meta.url).href;

export default function Response({ appears, question, cardsNameList, cardsList, isReversedList, responseList }) {
    
    const handleReload = () => {
        window.location.reload();
    };
    
    return(
        <div className={appears ? "response__container" : "response__container out"}>
            <div className="response__box">
                <button 
                    tabIndex="1" 
                    className="alert__button"
                    onClick={handleReload}
                >
                    <img className="alert__button-icon" src={closeIcon} />
                </button>
                <h2 className="response__question">{question}</h2>
                <h3 className="response__card_name">{cardsNameList[0]}</h3>
                <CardResponse card={cardsList[0]} isReversed={isReversedList[0]} response={responseList[0]} />
                <h3 className="response__card_name">{cardsNameList[1]}</h3>
                <CardResponse card={cardsList[1]} isReversed={isReversedList[1]} response={responseList[1]} />
                <h3 className="response__card_name">{cardsNameList[2]}</h3>
                <CardResponse card={cardsList[2]} isReversed={isReversedList[2]} response={responseList[2]} />
                <button 
                    tabIndex="1"
                    className="response__continue-button"
                    onClick={handleReload}
                >OK</button>
            </div>
        </div>
    );
}

function CardResponse({ response, card, isReversed }) {
    return(
        <div className="response__cardbox">
            <p className="response__text">{response}</p>
            <img
                className={isReversed ? "response__card reversed" : "response__card"} 
                src={importCard(card)}
            />
        </div>
    );
}
