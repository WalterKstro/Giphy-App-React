import './GiphyApp.css'
import {useState} from 'react'
import AddCategory from '../Add/AddCategory'
import CategoryGrid from '../Category/CategoryGrid'


const GiphyApp = () => {
    const [categories, setCategories] = useState([])
    return (
        <>
            <AddCategory 
                setCategories={ setCategories }
            />
            
            <div className="category">
                {
                    categories.map( category => <CategoryGrid category={category} key={category} />)
                }
            </div>
        </>
    )
}


export default GiphyApp