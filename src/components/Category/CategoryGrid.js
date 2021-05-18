import useFetch from '../../hooks/useFetch'
import './CategoryGrid.css'
import CategoryItem from './CategoryItem'
import PropTypes from 'prop-types'



const GridCategory = ({ category }) => {

    
    const {data, loading} = useFetch(category)
    
    return (
        <div className="category_item">
            <p className="category_title">Category: <strong>{ category }</strong></p>
            {loading && <p className="loadding">Loadding data ...</p>}
            {
                data.map( item => (
                    <CategoryItem 
                        key={item.id} 
                        {...item}
                    />
                ))
            }
        </div>
    )
}

GridCategory.propTypes = {
    category : PropTypes.string.isRequired
}

export default GridCategory
