import { toast, Bounce } from "react-toastify";
const NETWORK_ERROR_MESSAGE = 'oops, it seems either your offline or server is not available, please try after sometime';
const COMMON_ERROR_MESSAGE = 'oops, something went wrong, please try after sometime';
export function showError(msg) {
    toast.error(msg, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}
export function showMessage(msg) {
    toast.success(msg, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}
export function showNetworkError(error)
{
    if(error.code === 'ERR_NETWORK')
        showError(NETWORK_ERROR_MESSAGE)
    else 
        showError(COMMON_ERROR_MESSAGE)
}