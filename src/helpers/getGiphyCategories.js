const getGiphyCategories = async (category = '') => {
    const limit = 8
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=EjXWAPk9oq27iEEau4MvObuxzG7ezM93`)
        const dataJson = await response.json()
        const {data} = dataJson
        const gifs = data.map( ({id, images: {original: {url}} , title}) => {
            return {
                id,
                url,
                title: title !== '' ? title : 'No availability'
            }
        })

        return gifs

    } catch (error) {
        return error.message
    }
}


export default getGiphyCategories