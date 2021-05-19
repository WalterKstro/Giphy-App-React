import './GiphyApp.css'
import {useState} from 'react'
import AddCategory from '../Add/AddCategory'
import GridCategory from '../Category/CategoryGrid'


const GiphyApp = ({categoriesDefault = []}) => {
    const [categories, setCategories] = useState( categoriesDefault )
    return (
        <>
            <AddCategory 
                setCategories={ setCategories }
            />
            
            <div className="category">
                {
                    categories.map( category => <GridCategory category={category} key={category} />)
                }
            </div>
        </>
    )
}


export default GiphyApp