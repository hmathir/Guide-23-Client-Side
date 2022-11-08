import { useEffect } from "react";

const useTilte = title => {
    useEffect(() => {
        document.title = `${title} - Guide 23`;
    }, [title])
}
export default useTilte;