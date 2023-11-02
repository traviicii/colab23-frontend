import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToast } from '../Actions';

function Toast({ message, type, id }) {
    const dispatch = useDispatch();

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // This will run after the component is rendered to fade in a new toast
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10); // You can adjust the delay if needed

        // Cleanup function to clear the timeout if component unmounts
        return () => clearTimeout(timer);
    }, []);

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
        <div className={`flex justify-between items-center p-3 max-h-xs w-auto rounded-2xl
                    transition-opacity duration-300 ease-out
                    ${isVisible ? 'opacity-100' : 'opacity-0'} 
                    ${getToastClasses()}` /* Tailwind styles based on `type` */}>
            {type === 'success' ?
                <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9999 36.6667C21.3333 36.6667 22.6666 36.5 23.8333 36.1667C23.1666 35.3333 22.4999 34.3333 22.1666 33.1667C21.4999 33.3333 20.6666 33.3333 19.9999 33.3333C12.6666 33.3333 6.66659 27.3333 6.66659 20C6.66659 12.6667 12.6666 6.66668 19.9999 6.66668C21.3333 6.66668 22.4999 6.83334 23.6666 7.16668L26.3333 4.50001C24.3333 3.83334 22.1666 3.33334 19.9999 3.33334C10.8333 3.33334 3.33325 10.8333 3.33325 20C3.33325 29.1667 10.8333 36.6667 19.9999 36.6667ZM10.8333 19.1667L13.1666 16.8333L18.3333 22L32.6666 7.66668L34.9999 10L18.3333 26.6667L10.8333 19.1667ZM31.6666 23.3333L29.5666 27.9167L24.9999 30L29.5666 32.1L31.6666 36.6667L33.7499 32.1L38.3333 30L33.7499 27.9167L31.6666 23.3333Z" fill="black" />
                </svg>
                :
                type === "error" ?
                    <svg width="45" height="45" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M139.832 33.0021C136.283 26.8877 126.894 21.1558 102.617 27.5402C94.514 21.9487 85.0359 18.6803 75.2088 18.0887C65.3817 17.4972 55.58 19.6051 46.8649 24.1843C38.1498 28.7634 30.8533 35.6393 25.7655 44.0676C20.6776 52.4959 17.9922 62.1553 18 72.0002C18 73.3502 18.0487 74.6889 18.1462 76.0164C0.314996 93.8589 0.618749 104.85 4.185 110.998C7.5375 116.781 14.2313 119.25 22.8825 119.25C28.3894 119.25 34.695 118.249 41.4169 116.488C49.5215 122.072 58.9987 125.333 68.8231 125.918C78.6475 126.504 88.445 124.392 97.1554 119.81C105.866 115.229 113.158 108.353 118.242 99.9258C123.326 91.4988 126.009 81.842 126 72.0002C126 70.6446 125.949 69.3058 125.848 67.9727C133.898 59.8839 139.269 52.1046 141.036 45.4727C142.622 39.6114 141.255 35.4377 139.832 33.0021ZM72 31.5002C81.1733 31.5126 90.0714 34.6341 97.2421 40.3551C104.413 46.0761 109.433 54.0588 111.482 63.0002C103.5 70.1608 92.8125 77.9571 79.83 85.4214C67.6012 92.4471 55.3331 97.9989 44.3419 101.537C38.4229 95.9843 34.3088 88.7813 32.5329 80.8622C30.7571 72.943 31.4014 64.6729 34.3824 57.1243C37.3634 49.5758 42.5435 43.0969 49.251 38.5279C55.9586 33.9589 63.8842 31.5105 72 31.5002ZM15.8569 104.226C15.5137 103.624 15.7613 99.6021 21.8588 92.014C23.7527 96.7418 26.3075 101.177 29.4469 105.188C19.755 106.656 16.2281 104.856 15.8569 104.226ZM72 112.5C67.6877 112.501 63.4033 111.81 59.31 110.453C68.6823 106.638 77.7823 102.185 86.5462 97.1271C95.2774 92.1477 103.654 86.5713 111.617 80.4377C109.673 89.5052 104.681 97.6329 97.4719 103.467C90.2634 109.301 81.2736 112.489 72 112.5ZM128.008 41.9908C127.288 44.6796 125.302 48.1052 122.164 52.0033C120.27 47.2691 117.713 42.8279 114.57 38.8127C123.474 37.4796 127.603 38.8127 128.154 39.7746C128.25 39.9377 128.368 40.6577 128.008 41.9908Z" fill="#BCBBC2" />
                        <circle cx="63.5172" cy="60.2071" r="4.34483" fill="#BCBBC2" />
                        <circle cx="92.0689" cy="50.69" r="4.34483" fill="#BCBBC2" />
                        <path d="M65.3793 79.6552C65.3793 79.6552 70.1379 70.7047 81.7241 66.2069C93.3103 61.7091 103.448 64.9655 103.448 64.9655" stroke="#BCBBC2" stroke-width="8" stroke-linecap="round" />
                    </svg>
                    :
                    ''
            }
            <div className='m-2 max-w-xs'>
                {message}
            </div>
            <button onClick={() => {
                setIsVisible(false);
                setTimeout(() => dispatch(removeToast(id)), 300);  // Remove toast after fade-out animation
            }}>
                <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.75 28.75L11.25 11.25M28.75 11.25L11.25 28.75" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
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
