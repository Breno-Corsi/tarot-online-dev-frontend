import loadingSvg from "../assets/icons/loading_icon.svg";

export default function Loading() {
    return (
        <div className="loading__container">
            <img className="loading__image" src={loadingSvg} alt="Loading" />
        </div>
    );
}