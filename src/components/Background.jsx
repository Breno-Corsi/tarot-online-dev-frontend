import smoke from "../assets/videos/Tarot_smoke.mp4";

export default function Background() {
    return (
        <div className="background__container">
            <video playsinline className="background__container-smoke" autoPlay loop muted playsInline>
                <source src={smoke} type="video/mp4" />
            </video>
        </div>
    )
}
