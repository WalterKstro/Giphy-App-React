import { useEffect, useState } from "react"
import getGiphyCategories from '../helpers/getGiphyCategories'

const useFetch = (category) => {
    const [state, setState] = useState({
        data : [],
        loading : true
    })

    useEffect(() => {
        getGiphyCategories(category)
        .then( response => {
            setState({
                data : response,
                loading : false
            })
        } )
    },[category])

    return state
}


export default useFetch