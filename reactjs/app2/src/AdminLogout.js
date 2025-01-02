import { useEffect } from "react";
import { useCookies } from 'react-cookie'; //hook
import { useNavigate } from "react-router-dom";
import {COOKIE_FILE} from "./common";

export default function AdminLogout() {
    var navigator = useNavigate();
    var [cookies, setCookie, removeCookie] = useCookies(COOKIE_FILE);

    useEffect(() => {
        removeCookie('adminid');
        navigator("/");
    });
    return(
    <></>);
}