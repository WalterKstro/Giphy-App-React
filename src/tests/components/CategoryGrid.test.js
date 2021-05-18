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


    test('should show item with the data', () => {
        const gifts = [{id:'_se56qs23',url: 'www.facebook.com',title:'Naruto'}]

        useFetch.mockReturnValue({
            data : gifts,
            loading : false
        })
        const component = shallow( <CategoryGrid category={category}/> )
        expect( component).toMatchSnapshot()
    })
    

})
