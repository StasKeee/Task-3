import { useState } from "react";

export const useFilter = (items, key) => {

    const [filterProp, setFilterProp] = useState(key);

    const getArray = () => {
        switch (filterProp) {
            case "all": 
                return items
            case "more":
                return items.filter((item)=>{return item.percent > 50})
            case "less":
                return items.filter((item)=> {return item.percent <= 50})
        }
    }

    const filteredCards = getArray();



    return [filterProp, setFilterProp, filteredCards]
}

