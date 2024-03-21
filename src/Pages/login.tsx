import React, { useState } from "react";
import { toast } from "react-toastify";
import { doSignInWithEmailAndPassword } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import { handleAxiosError } from "../utils/errorHandler";
import Button from "../components/buttons";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email.length || !password.length) {
            toast.error("Please enter required fields");
            return;
        }

        setLoading(true);
        await doSignInWithEmailAndPassword(email, password)
            .then((response) => {
                toast.success("Login successful");
                setEmail("");
                setPassword("");
                navigate("/?scrollTo=urlSection");
            })
            .catch((error) => handleAxiosError(error));
        setLoading(false);
    };

    return (
        <div className="container0">
            <div className="header1">
                <div className="text1">Login</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={onSubmit}>
                <div className="inputs">
                    <div className="inputt">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="inputt">
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="forgot-password">
                    Lost Password? <span>Click here!</span>
                </div>

                <div className="submit-container">
                    <Button className="submits" type="submit" loading={loading}>
                        Login
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Login;
