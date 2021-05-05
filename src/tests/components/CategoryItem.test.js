import CategoryItem from '../../components/Category/CategoryItem'
import { shallow } from "enzyme";

describe('tests in componente <CategoryItem/>', () => {

    test('should show correctly the component <CategoryItem/>',() => {
        const renderedComponent = shallow(<CategoryItem/>)

        expect(renderedComponent).toMatchSnapshot()
    })

})