import {useEffect, useState} from "react";

const useVisible = (ref, rootMargin = "0px") => {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const refCopy = ref;
        console.log('+++',refCopy.current)
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );
        if (refCopy.current) {
            observer.observe(refCopy.current);
        }
        return () => {
            console.log('---',refCopy.current)
            if (refCopy.current)
                observer.unobserve(refCopy.current);
        };
    }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
};

export default useVisible;
