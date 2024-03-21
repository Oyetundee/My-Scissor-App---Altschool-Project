import React, { useEffect, useState } from "react";
import Header from "../components/Home/header";
import Headertext from "../components/Home/headertext";
import Container from "../components/Home/container";
import ImageSection from "../components/Home/ImageSection";
import NewContainer from "../components/Home/newContainer";
import Container2 from "../components/Home/container2";
import Container3 from "../components/Home/container3";
import BigContainer from "../components/Home/bigContainer";
import FormSection from "../components/Home/formSection";
import Faqs from "../components/Home/faqs";
import BelowFaq from "../components/Home/belowFaq";
import { useLocation } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doSignOut } from "../firebase/auth";

function Home(): JSX.Element {
    const location = useLocation();
    const [user, setUser] = useState({});

    useEffect(() => {
        // Parse the query parameter to get the section ID
        const params = new URLSearchParams(location.search);
        const scrollTo = params.get("scrollTo");

        // Scroll to the specified section if the scrollTo parameter is present
        if (scrollTo) {
            const section = document.getElementById(scrollTo);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location.search]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                setUser({ uid, email, displayName });
            } else {
                setUser({});
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        await doSignOut();
    };

    return (
        <>
            <Header user={user} onclick={handleLogout} />
            <Headertext />
            <Container />
            <ImageSection />
            <NewContainer />
            <Container2 />
            <Container3 />
            <BigContainer />
            <div id="urlSection">
                <FormSection />
            </div>
            <Faqs />
            <BelowFaq />
        </>
    );
}

export default Home;
