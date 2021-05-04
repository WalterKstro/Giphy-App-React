import { useState } from 'react'
import PropTypes from 'prop-types'

import './AddCategory.css'

const AddCategory = ({setCategories}) => {
    const [valueInput, setValueInput] = useState('')

    const handleChange = event => {
        setValueInput( event.target.value )
    }

    const handleSubmit = event => {
        event.preventDefault()
        if(valueInput.trim() !== '') {
            setCategories( state => [valueInput,...state] )
            setValueInput('')
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className="form_add">
            <input 
                type="text"
                placeholder="Add new category"
                value={valueInput}
                onChange={ handleChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

export default AddCategory
