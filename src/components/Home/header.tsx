import React from "react";
import { Link } from "react-router-dom";

interface Props {
    user: any;
    onclick: () => void;
}

const Header: React.FC<Props> = ({ user, onclick }) => {
    return (
        <section className="container">
            <header>
                <img src="/Assets/Logo.jpg" alt="logo" />
                <nav>
                    <ul className="menu">
                        <li>
                            <a href="#">
                                <span style={{ color: "#005AE2" }}>
                                    My URLs
                                </span>
                            </a>
                        </li>
                        <li className="arrow">
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Analytics</a>
                        </li>
                        <li>
                            <a href="#">FAQs</a>
                        </li>
                    </ul>
                </nav>
                {user.displayName ? (
                    <div className="log_button">
                        <span>{user.displayName}</span>
                        <p className="btn2 user-profile" onClick={onclick}>
                            Logout
                        </p>
                    </div>
                ) : (
                    <div className="log_button">
                        <Link to="/Login" className="btn2">
                            Login
                        </Link>
                        <a href="#" className="btn1">
                            Try for free
                        </a>
                    </div>
                )}
            </header>
        </section>
    );
};

export default Header;
