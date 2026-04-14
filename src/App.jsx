import { useState } from 'react';
import { Alert, Fingerprint, Background, InitialContainer, Header, Form, Deck, Cards, Response, Loading } from './components';

export default function App() {

    const [isRunning, setIsRunning] = useState(false);
    const [arcaneResponse, setArcaneResponse] = useState([]);
    const [sortedCardsInOrder, setSortedCardsInOrder] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [showDeck, setShowDeck] = useState(true);
    const [showCards, setShowCards] = useState(false);
    const [deckAppears, setDeckAppears] = useState(true);
    const [containerAppears, setContainerAppears] = useState(true);
    const [responseAppears, setResponseAppears] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertText, setAlertText] = useState("");
    const [showLoading, setShowLoading] = useState(false);

    function validateUserInput(value) {
        if (!value || value.trim().split(/\s+/).length < 4 ||
            value.length > 1000
        ) {
            setAlertText("Invalid Question - must be under 1000 characters and have at least 4 words!");
            setShowAlert(true);
            return false;
        }
        return true;
    }

    const handleAlertClose = () => {
        if (
            alertText === "You’ve reached your daily reading limit. Come back tomorrow."
        ) {
            window.location.reload();
            return;
        }
        setShowAlert(false);
    };

    async function sendQuestionToBackend(userQuestion) {
        const url = "/tarot-online?querentsQuestion=";
        const encoded = url + encodeURIComponent(userQuestion);

        const fingerprint = await Fingerprint();
        return fetch(encoded, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Device-Id": fingerprint
            }
        })
            .then(resp => resp.json())
            .then(data => {

                if (!data.arcaneResponse || !data.sortedCardsInOrder) {
                    setAlertText(data.error);
                    setShowAlert(true);
                    return false;
                }

                try {
                    setSortedCardsInOrder(data.sortedCardsInOrder);
                    setArcaneResponse(data.arcaneResponse.split("\\n").map(p => p.trim()));
                }
                catch (err) {
                    setAlertText(err);
                    setShowAlert(true);
                    return false;
                }

                if (data.arcaneResponse == "Sorry, I can only provide Tarot readings.") {
                    setAlertText(data.arcaneResponse);
                    setShowAlert(true);
                    return false;
                }

                return true;
            });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validateUserInput(userInput)) {

            if (isRunning) {
                setAlertText("Already running!");
                setShowAlert(true);
                return;
            }
            
            setIsRunning(true);
            setDeckAppears(false);

            setTimeout(() => {
                setShowDeck(false);
                setShowLoading(true);
            }, 1250);

            const ok = await sendQuestionToBackend(userInput.trim());
            if (!ok) {
                setShowLoading(false);
                setShowDeck(true);
                setDeckAppears(true);
                setIsRunning(false);
                return false;
            }

            setTimeout(() => {
                setShowLoading(false);
                setShowCards(true);
            }, 3000);

            setTimeout(() => {
                setContainerAppears(false);
            }, 6500);

            setTimeout(() => {
                setResponseAppears(true);
            }, 7500);
        }
    }

    const isReversedList = sortedCardsInOrder.map(card => card.includes("(Reversed)"));

    const cleanCardsList = sortedCardsInOrder.map(card =>
        card.replace(" (Reversed)", "")
    );

    return (
        <>
            <Background />
            <InitialContainer appears={containerAppears}>
                <Header />
                <Alert 
                    appears={showAlert}
                    alertText={alertText}
                    onClose={handleAlertClose}
                />
                <Form 
                    onSubmit={handleSubmit}
                    userInput={userInput}
                    setUserInput={setUserInput}
                />
                {showLoading && <Loading />}
                {showDeck && <Deck
                    appears={deckAppears}
                    onDeckClick={handleSubmit}
                />}
                {showCards && <Cards
                    cardsList={cleanCardsList}
                    isReversedList={isReversedList}
                />}
            </InitialContainer>
            <Response 
                appears={responseAppears}
                cardsList={cleanCardsList}
                cardsNameList={sortedCardsInOrder}
                isReversedList={isReversedList}
                responseList={arcaneResponse}
                question={userInput}
            />
        </>
    )

}
