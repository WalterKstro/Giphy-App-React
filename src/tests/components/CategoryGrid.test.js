import { shallow } from "enzyme"
import CategoryGrid from '../../components/Category/CategoryGrid'
import useFetch from "../../hooks/useFetch"
jest.mock('../../hooks/useFetch')

describe('Testing in the component <CategoryGrid/>', () => {
    const category = 'Naruto'


    test('should show a snaptshot of component <CategoryGrid/>', () => {
        useFetch.mockReturnValue({
            data : [],
            loading : true
        })

        const component = shallow( <CategoryGrid category={category}/> )
        expect( component).toMatchSnapshot()
    })


    test('should show the component <CategoryItem/> if exist data and no should show the tag <p> if data exist', () => {
        const gifts = [
            {id:'_se56qs23',url: 'www.facebook.com',title:'Naruto'},
            {id:'_se5qqs03',url: 'www.facebook.com',title:'One Punch Man'}
        ]

        useFetch.mockReturnValue({
            data : gifts,
            loading : false
        })
        const component = shallow( <CategoryGrid category={category}/> )
        const paraghrap = component.find('.loadding')
        
        expect(component).toMatchSnapshot()
        expect(paraghrap.exists()).not.toBe(true)
        expect(component.find('CategoryItem').length).toBe(gifts.length)
    })
    

})
