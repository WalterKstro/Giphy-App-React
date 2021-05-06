import CategoryItem from '../../components/Category/CategoryItem'
import { shallow } from "enzyme";

describe('tests in componente <CategoryItem/>', () => {
    
    const title = 'naruto shippuden GIF'
    const url = 'https://lorempixel.com'
    const renderedComponent = shallow(<CategoryItem url={url} title={title}/>)

    test('should show correctly the component <CategoryItem/>',() => {
        expect(renderedComponent).toMatchSnapshot()
    })


    test('should show the tag figcaption with the prop title', () => {
        const findTitle = renderedComponent.find('figcaption').text()
        expect(findTitle).toBe(title)
    })

    test('should have atributes src and alt with the props', () => {
        const {src, alt} = renderedComponent.find('img').props()
        
        expect(src).toBe(url)
        expect(alt).toBe(title)

    })


    test('should have the class animate__fadeInLeft', () => {
        const hasClass = renderedComponent.find('div').hasClass('animate__fadeInLeft')
        expect(hasClass).toBe(true)
    })
    
    
    

})