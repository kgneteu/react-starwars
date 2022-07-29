import {toast, ToastContainer} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {clearToast} from "../../../store/toasts/toasts.actions";
import {useEffect} from "react";
import 'react-toastify/dist/ReactToastify.css';

export function Toasts() {
    const toasts = useSelector(state => state.toasts)
    const dispatch = useDispatch()


    useEffect(() => {
        function showToast(type, msg) {
            switch(type){
                case 'SUCCESS':
                    toast.success(msg,{
                        position: toast.POSITION.BOTTOM_RIGHT,
                        theme: 'dark',
                    })
                    break;
                case 'ERROR':
                    toast.error(msg,{
                        position: toast.POSITION.BOTTOM_RIGHT,
                        theme: 'dark',
                    })
                    break;
                default:
                    return false
            }
        }

        if (toasts && toasts.error) {
            const msg = toasts.msg ? toasts.msg : 'Error';
            showToast('ERROR', msg);
            dispatch(clearToast())
        }
        if (toasts && toasts.success) {
            const msg = toasts.msg ? toasts.msg : 'OK!';
            showToast('SUCCESS', msg);
            dispatch(clearToast())
        }
    }, [toasts, dispatch])
    return (
        <ToastContainer/>
    )
}

Toasts.propTypes = {};
