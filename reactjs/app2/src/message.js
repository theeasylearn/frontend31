import { toast, Bounce } from "react-toastify";
export const ERROR_MESSAGE = 'oops, it seems either your offline or server is not available, please try after sometime';
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