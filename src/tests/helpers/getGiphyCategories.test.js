import getGiphyCategories from "../../helpers/getGiphyCategories"

describe('Tests of function helper getGiphyCategories', () => {
    test('should return eight elements', async () => {
        const data = await getGiphyCategories('Futurama')

        expect(data.length).toBe(8)
    })

    test('should return a array empty if not send the param category', async () => {
        const data = await getGiphyCategories()
        expect(data.length).toBe(0)
    })
    
    
})