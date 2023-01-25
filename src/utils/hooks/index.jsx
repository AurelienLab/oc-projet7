import { useRef, useEffect } from 'react'

export function useDocumentTitle(title, prevailOnUnmount = true) {
    const defaultTitle = useRef(document.title);
    const titleSuffix = " - Kasa";

    useEffect(() => {
        document.title = title + titleSuffix;
    }, [title]);

    useEffect(() => () => {
        if (!prevailOnUnmount) {
            document.title = defaultTitle.current;
        }
    }, [prevailOnUnmount])
}