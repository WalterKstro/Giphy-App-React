import CategoryItem from '../../components/Category/CategoryItem'
import { shallow } from "enzyme";

describe('tests in componente <CategoryItem/>', () => {

    test('should show correctly the component <CategoryItem/>',() => {
        const title = 'naruto shippuden GIF'
        const url = 'https://media2.giphy.com/media/4gsjHZMPXdlGo/giphy.gif?cid=78531bbftw97gr2ypzgv1ae9i7nds2onndui22hxil9rj5wt&rid=giphy.gif&ct=g'

        const renderedComponent = shallow(<CategoryItem url={url} title={title}/>)

        expect(renderedComponent).toMatchSnapshot()
    })

})