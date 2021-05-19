import { shallow } from "enzyme"
import GiphyApp from "../../components/Giphy/GiphyApp"

describe( 'Testing component root GiphyApp', () => {

    test('should show a snaptshot', () => {
        const component = shallow(<GiphyApp/>)

        expect( component).toMatchSnapshot()
    })
    
    test('should show the same number of components <CategoryGrid/> as the length of the elements of prop array', () => {
        const categories = ['One Punch Man','Naruto','Futurama']
        const component = shallow(<GiphyApp categoriesDefault={categories} />)
        expect(component).toMatchSnapshot()
        expect(component.find('GridCategory').length).toBe(categories.length)
    })
    

} )