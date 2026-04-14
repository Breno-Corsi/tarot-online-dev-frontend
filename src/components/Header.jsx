import logo from "../assets/icons/tarot_online_logo.svg";

export default function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">Tarot</h1>
                <img className="header__logo" src={logo} />
                <h1 className="header__title">Online</h1>
            </div>
        </header>
    )
}
