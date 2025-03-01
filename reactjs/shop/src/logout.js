import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { COOKIE_FILE } from "./common";

const Logout = () => {
    const navigate = useNavigate();
    const [, , removeCookie] = useCookies(COOKIE_FILE);

    useEffect(() => {
        // Remove the cookie
        removeCookie('userid');
        // Debugging: Log before navigation
        console.log("Redirecting to home page...");
        // Redirect after 1 second
        navigate("/");
    }, [navigate, removeCookie]);
    return <></>;
};

export default Logout;