import { useCallback, useState } from "react"

export const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    
    const toggle = useCallback(() => setState((current) => !current), []);

    const setToFalse = useCallback(() => setState(false), [])
     
     return { state, toggle, setToFalse }
}