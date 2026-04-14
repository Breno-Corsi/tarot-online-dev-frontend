import deckImg from "../assets/images/card-deck.svg";

export default function Deck({ onDeckClick, appears }) {

    return (
        <div className={appears ? "deck__container" : "deck__container-out"}
        tabIndex={0} 
        onClick={(e) => {
            onDeckClick(e)
        }}>
            <img className="deck__image" src={deckImg} />
        </div>
    );
}
