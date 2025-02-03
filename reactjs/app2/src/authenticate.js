import { useCookies } from 'react-cookie'; //hook
import { useNavigate } from "react-router-dom";
import {COOKIE_FILE} from "./common";
import { toast, Bounce } from 'react-toastify';
export default function VerifyLogin() {
    var [cookies, setCookie, removeCookie] = useCookies(COOKIE_FILE);
    var navigator = useNavigate();
    var adminid = cookies['adminid'];
    if (adminid == undefined) {
        //alert('login required...');
        toast.info('🦄 Login required', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });
        navigator('/');
    }
}