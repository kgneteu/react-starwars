import React, {useEffect, useState} from "react";

//updateOnlyIfIntersecting - better performance - update parent component only after ref appears on screen


const useVisible = (ref:React.RefObject<HTMLElement>, defIntersecting = false, rootMargin = "0px") => {
    const [isIntersecting, setIntersecting] = useState(defIntersecting);
    console.log('ref',ref)

    useEffect(() => {
        const refCopy = ref;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);

            },
            {
                rootMargin,
            }
        );

        if (refCopy.current) {
            console.log('subscribe')
            observer.observe(refCopy.current);
        }
        return () => {
            console.log('unsubscribe')
            if (refCopy.current)
                observer.unobserve(refCopy.current);
        };
    }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting;
};

export default useVisible;
