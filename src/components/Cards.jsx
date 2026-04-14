import { useState, useEffect } from 'react';
import cardBack from "../assets/images/card-back.svg";

const importCard = (name) => new URL(`../assets/images/cards/${name}.jpg`, import.meta.url).href;

export default function Cards({ onCardClick, cardsList, isReversedList }) {

    return (
        <div className="flip-card-container">
            <Card specifyClass="c1" delay="1000" onClick={onCardClick} front={cardsList[0]} isReversed={isReversedList[0]} />
            <Card specifyClass="c2" delay="2000" onClick={onCardClick} front={cardsList[1]} isReversed={isReversedList[1]} />
            <Card specifyClass="c3" delay="3000" onClick={onCardClick} front={cardsList[2]} isReversed={isReversedList[2]} />
        </div>
    );
}

function Card({ front, specifyClass, onClick, delay, isReversed }) {
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFlipped(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={isFlipped ? "flip-card flipped" : "flip-card"}
            onClick={onClick}
        >
            <div className={`flip-card-wrapper ${specifyClass}`}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img tabIndex={0} className="card-img" src={cardBack} />
                    </div>
                    <div className="flip-card-back">
                        <img 
                            className={isReversed ? "card-img back-reversed" : "card-img back"}
                            src={importCard(front)} />
                    </div>
                </div>
            </div>
        </div>
    );
}
