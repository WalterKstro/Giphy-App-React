import { renderHook } from '@testing-library/react-hooks'
import useFetch from '../../hooks/useFetch'


describe('Testing the custom hook', () => {

    test('should return the initial state of the custom hook', async () => {
        const {result, waitForNextUpdate} = renderHook( () => useFetch('Naruto') )
        const {data, loading} = result.current
        await waitForNextUpdate()
        
        expect(data).toEqual([])
        expect(loading).toBe(true)
    })
    
    test('should return a a object with a array with gifs and the property loading in false', async () => {
        const {result, waitForNextUpdate} = renderHook( () => useFetch('Naruto') )
        await waitForNextUpdate()
        const {data, loading} = result.current

        
        expect(data.length).toBe(8)
        expect(loading).toBe(false)
    })
    

})