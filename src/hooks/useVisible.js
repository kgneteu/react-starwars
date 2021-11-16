import {useEffect, useState} from "react";

//updateOnlyIfIntersecting - better performance - update parent component only after ref appears on screen

const useVisible = (ref, defIntersecting = false, updateOnlyIfIntersecting = false, rootMargin = "0px") => {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(defIntersecting);
    useEffect(() => {
        const refCopy = ref;
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                if (updateOnlyIfIntersecting) {
                    if (entry.isIntersecting)
                        setIntersecting((value) => Number(value) + 1);
                } else {
                    setIntersecting(entry.isIntersecting);
                }
            },
            {
                rootMargin,
            }
        );

        if (refCopy.current) {
            observer.observe(refCopy.current);
        }
        return () => {
            console.log('--- Unmount', refCopy.current)
            if (refCopy.current)
                observer.unobserve(refCopy.current);
        };
    }, [ref, updateOnlyIfIntersecting, rootMargin]); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
};

export default useVisible;
