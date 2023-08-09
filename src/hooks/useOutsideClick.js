import { useEffect, useRef } from 'react';

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  // here we are trying to detect a click that occurred outside the modal window
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        // console.log("click outside");
        handler();
      }
    }
    document.addEventListener('click', handleClick, listenCapturing);

    //cleaning up the useEffect
    //in order to prevent the bubbling effect whereby the modal opens and closed within milliseconds after using the useEffect for the first time
    //we are going to change the default behavior by passing a third argument to the cleanup function and the addEventListener, setting it to true
    return () =>
      document.removeEventListener('click', handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}
