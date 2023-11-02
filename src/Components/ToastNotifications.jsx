import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToast } from '../Actions';

function Toast({ message, type, id }) {
    const dispatch = useDispatch();

    const getToastClasses = () => {
        switch (type) {
            case 'error':
                return 'bg-red-300';
            case 'success':
                return 'bg-green-300';
            default:
                return 'bg-blue-300';  // info
        }
    };

    return (
        <div className={`flex justify-between items-center p-3 max-h-xs w-auto rounded-2xl ${getToastClasses()}` /* Tailwind styles based on `type` */}>
            {type == 'success' ? 
            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9999 36.6667C21.3333 36.6667 22.6666 36.5 23.8333 36.1667C23.1666 35.3333 22.4999 34.3333 22.1666 33.1667C21.4999 33.3333 20.6666 33.3333 19.9999 33.3333C12.6666 33.3333 6.66659 27.3333 6.66659 20C6.66659 12.6667 12.6666 6.66668 19.9999 6.66668C21.3333 6.66668 22.4999 6.83334 23.6666 7.16668L26.3333 4.50001C24.3333 3.83334 22.1666 3.33334 19.9999 3.33334C10.8333 3.33334 3.33325 10.8333 3.33325 20C3.33325 29.1667 10.8333 36.6667 19.9999 36.6667ZM10.8333 19.1667L13.1666 16.8333L18.3333 22L32.6666 7.66668L34.9999 10L18.3333 26.6667L10.8333 19.1667ZM31.6666 23.3333L29.5666 27.9167L24.9999 30L29.5666 32.1L31.6666 36.6667L33.7499 32.1L38.3333 30L33.7499 27.9167L31.6666 23.3333Z" fill="black"/>
            </svg>
            :
            ''
            }
            <div className='m-2 max-w-xs'>
                {message}
            </div>
            <button onClick={() => dispatch(removeToast(id))}>X</button>
        </div>
    );
}

export default function ToastList() {
    const toasts = useSelector(state => state.toasts);

    return (
        <div className="fixed top-36 right-4 space-y-2">
            {toasts.map(toast => <Toast key={toast.id} {...toast} />)}
        </div>
    );
}
