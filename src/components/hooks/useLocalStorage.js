import {useState, useEffect} from 'react';

export const useLocalStorage = (init, key) => {

    const defaultValue = () => {
        const result = JSON.parse(localStorage.getItem(key));
        if (result) return result
        return init
    };


    const [value, setValue] = useState(defaultValue);
    
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
    }
