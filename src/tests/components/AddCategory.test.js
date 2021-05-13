import { shallow } from "enzyme"
import AddCategory from "../../components/Add/AddCategory"

describe('Test of the component <AddCategory/>', () => {
    const setCategories = jest.fn()
    let component

    beforeEach(() => {
        jest.clearAllMocks()
        component = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('should show a snapshot of component <AddCategory/>', () => {
        expect(component).toMatchSnapshot()
    })

    test('should change the value of input', () => {
        const value = 'Hola Mundo con Enzyme'
        const input = component.find('input').simulate('change', {target: {value}})
        const testValue = component.find('p').text()

        expect(testValue).toBe(value)

    })

    test('no should throw the event submit, if input value is empty', () => {
        const form = component.find('form').simulate('submit', {preventDefault : jest.fn()})

        expect(setCategories).not.toHaveBeenCalled()

    })
    


    test('should call the function setCategories and clear the input', () => {
        const value = 'Hola Mundo'

        const inputChange = component.find('input')
              inputChange.simulate('change', { target: {value}})
        const mockSubmit = component.find('form')
              mockSubmit.simulate('submit',{ preventDefault: jest.fn()})

        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) )

        expect(inputChange.text()).toBe('')
        
    })
    
    
        
})