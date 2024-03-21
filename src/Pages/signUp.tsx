import React, { useState } from "react";
import { doCreateUserWithEmailAndPassword, updateInfo } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { handleAxiosError } from "../utils/errorHandler";
import Button from "../components/buttons";

const SignUp: React.FC = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email.length || !password.length || !username.length) {
            toast.error("Please enter required fields");
            return;
        }

        setLoading(true);
        await doCreateUserWithEmailAndPassword(email, password)
            .then((response) => {
                handleUpdateInfo(response.user);
            })
            .catch((error) => handleAxiosError(error));
    };

    const handleUpdateInfo = async (user: any) => {
        await updateInfo(user, username)
            .then((response) => {
                toast.success("Sign up successful");
                setEmail("");
                setUsername("");
                setPassword("");
                navigate("/Login");
            })
            .catch((error) => handleAxiosError(error));
        setLoading(false);
    };

    return (
        <div className="container0">
            <div className="header1">
                <div className="text1">Sign Up</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={onSubmit}>
                <div className="inputs">
                    <div className="inputt">
                        <input
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
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

                <div className="submit-container">
                    <Button className="submits" type="submit" loading={loading}>
                        Sign Up
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
